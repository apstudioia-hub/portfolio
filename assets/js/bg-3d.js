// =====================================
// SNOWFALL BACKGROUND — flocons / particules en chute douce
// Réagit au thème jour/nuit + parallax souris
// Requires Three.js loaded before this script
// =====================================

(function() {
  if (typeof THREE === 'undefined') { console.warn('Three.js missing'); return; }
  const canvas = document.getElementById('bg-3d');
  if (!canvas) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // === Scene ===
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 200);
  camera.position.set(0, 0, 14);

  const renderer = new THREE.WebGLRenderer({
    canvas, antialias: true, alpha: true, powerPreference: 'high-performance'
  });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x000000, 0);

  // === Texture flocon (dessinée sur canvas pour avoir un sprite doux) ===
  function makeSnowTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0,    'rgba(255,255,255,1)');
    g.addColorStop(0.3,  'rgba(255,255,255,0.6)');
    g.addColorStop(0.7,  'rgba(255,255,255,0.15)');
    g.addColorStop(1,    'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);
    tex.minFilter = THREE.LinearFilter;
    return tex;
  }

  const snowTex = makeSnowTexture();

  // === Trois couches de flocons (parallax naturel) ===
  function makeLayer(count, sizeRange, depthRange, opacity) {
    const positions = new Float32Array(count * 3);
    const speeds    = new Float32Array(count);
    const drifts    = new Float32Array(count);
    const phases    = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i*3]     = (Math.random() - 0.5) * 60;
      positions[i*3 + 1] = (Math.random() - 0.5) * 40;
      positions[i*3 + 2] = depthRange[0] + Math.random() * (depthRange[1] - depthRange[0]);
      speeds[i]  = 0.008 + Math.random() * 0.025;
      drifts[i]  = 0.4 + Math.random() * 0.8;
      phases[i]  = Math.random() * Math.PI * 2;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const size = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
    const mat = new THREE.PointsMaterial({
      map: snowTex,
      color: 0xffffff,
      size,
      transparent: true,
      opacity,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const points = new THREE.Points(geo, mat);
    return { points, positions, speeds, drifts, phases, count };
  }

  const layers = [
    makeLayer(reduceMotion ? 100 : 250, [0.10, 0.14], [-2,  4], 0.85),  // proche, gros
    makeLayer(reduceMotion ? 150 : 400, [0.05, 0.08], [-12, -2], 0.65), // milieu
    makeLayer(reduceMotion ? 200 : 600, [0.025,0.04], [-25, -12], 0.4), // lointain, fin
  ];
  layers.forEach(l => scene.add(l.points));

  // === Parallax souris ===
  let mx = 0, my = 0, tx = 0, ty = 0;
  window.addEventListener('mousemove', (e) => {
    mx = (e.clientX / innerWidth - 0.5);
    my = (e.clientY / innerHeight - 0.5);
  }, { passive: true });

  // === Adapt au thème ===
  function syncThemeColors() {
    const isLight = document.documentElement.dataset.theme === 'light';
    const color = isLight ? 0x404040 : 0xffffff;
    layers.forEach((l, i) => {
      l.points.material.color.setHex(color);
      // En light mode, on baisse l'opacity pour éviter l'effet "trop chargé" sur fond clair
      const baseOpacity = [0.85, 0.65, 0.4][i];
      l.points.material.opacity = isLight ? baseOpacity * 0.55 : baseOpacity;
    });
  }
  syncThemeColors();
  // Observer les changements de thème via un MutationObserver sur <html data-theme>
  new MutationObserver(syncThemeColors).observe(document.documentElement, {
    attributes: true, attributeFilter: ['data-theme']
  });

  // === Animation : chute douce + drift latéral + recyclage en haut ===
  let raf;
  function animate() {
    layers.forEach(layer => {
      const pos = layer.points.geometry.attributes.position.array;
      for (let i = 0; i < layer.count; i++) {
        // Chute
        pos[i*3 + 1] -= layer.speeds[i] * (reduceMotion ? 0.3 : 1);
        // Drift latéral sinusoïdal
        layer.phases[i] += 0.005;
        pos[i*3] += Math.sin(layer.phases[i]) * 0.008 * layer.drifts[i];

        // Recyclage en haut quand sort du bas
        if (pos[i*3 + 1] < -22) {
          pos[i*3 + 1] = 22;
          pos[i*3]     = (Math.random() - 0.5) * 60;
        }
      }
      layer.points.geometry.attributes.position.needsUpdate = true;
    });

    // Parallax fluide caméra
    tx += (mx * 1.2 - tx) * 0.04;
    ty += (-my * 0.8 - ty) * 0.04;
    camera.position.x = tx;
    camera.position.y = ty;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  }
  animate();

  // === Resize debounced ===
  let resizeTO;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTO);
    resizeTO = setTimeout(() => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    }, 150);
  });

  // === Pause auto ===
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else animate();
  });
})();
