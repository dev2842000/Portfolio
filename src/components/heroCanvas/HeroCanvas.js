import React, {useRef, useEffect} from "react";

export default function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let mouseX = 0, mouseY = 0;
    const onMouseMove = e => {
      const r = mount.getBoundingClientRect();
      mouseX = ((e.clientX - r.left) / r.width  - 0.5) * 2;
      mouseY = -((e.clientY - r.top)  / r.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, {passive: true});

    import("three").then(THREE => {
      const W = mount.clientWidth  || window.innerWidth;
      const H = mount.clientHeight || window.innerHeight;

      const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(W, H);
      mount.appendChild(renderer.domElement);

      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(72, W / H, 0.1, 100);
      camera.position.z = 1.8;
      camera.lookAt(0, 0, 0);

      // Fibonacci particle sphere — radius ~1 with slight jitter
      const N = 2800;
      const pos = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        const phi   = Math.acos(1 - 2 * ((i + 0.5) / N));
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        const r     = 1 + (Math.random() - 0.5) * 0.07;
        pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
        pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i * 3 + 2] = r * Math.cos(phi);
      }
      const sGeo = new THREE.BufferGeometry();
      sGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const sphere = new THREE.Points(sGeo, new THREE.PointsMaterial({color: 0x3b82f6, size: 0.011, transparent: true, opacity: 0.9}));
      scene.add(sphere);

      // Inner icosahedron wireframe
      const ico = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.8, 3),
        new THREE.MeshBasicMaterial({color: 0x1d4ed8, wireframe: true, transparent: true, opacity: 0.1})
      );
      scene.add(ico);

      // Orbiting rings
      const ring1 = new THREE.Mesh(
        new THREE.TorusGeometry(1.28, 0.004, 8, 120),
        new THREE.MeshBasicMaterial({color: 0x60a5fa, transparent: true, opacity: 0.45})
      );
      ring1.rotation.x = Math.PI * 0.28;
      scene.add(ring1);

      const ring2 = new THREE.Mesh(
        new THREE.TorusGeometry(1.22, 0.003, 8, 120),
        new THREE.MeshBasicMaterial({color: 0x93c5fd, transparent: true, opacity: 0.25})
      );
      ring2.rotation.x = Math.PI * 0.6;
      ring2.rotation.y = Math.PI * 0.2;
      scene.add(ring2);

      // Ambient particles — spread in a wider field
      const aN = 180;
      const aPos = new Float32Array(aN * 3);
      for (let i = 0; i < aN; i++) {
        aPos[i * 3]     = (Math.random() - 0.5) * 7;
        aPos[i * 3 + 1] = (Math.random() - 0.5) * 7;
        aPos[i * 3 + 2] = (Math.random() - 0.5) * 4 - 0.5;
      }
      const aGeo = new THREE.BufferGeometry();
      aGeo.setAttribute("position", new THREE.BufferAttribute(aPos, 3));
      const aParticles = new THREE.Points(aGeo, new THREE.PointsMaterial({color: 0x93c5fd, size: 0.016, transparent: true, opacity: 0.45}));
      scene.add(aParticles);

      const onResize = () => {
        const w = mount.clientWidth  || window.innerWidth;
        const h = mount.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      // Camera-move parallax (not object rotation) — matches design exactly
      let camTx = 0, camTy = 0;
      let t = 0, raf;
      const animate = () => {
        raf = requestAnimationFrame(animate);
        t++;
        camTx += (mouseX * 0.55 - camTx) * 0.04;
        camTy += (mouseY * 0.40 - camTy) * 0.04;
        camera.position.x = camTx;
        camera.position.y = camTy;
        camera.lookAt(0, 0, 0);

        sphere.rotation.y    = t * 0.003 + camTx;
        sphere.rotation.x    = camTy * 0.45;
        ico.rotation.y       = -t * 0.0038;
        ico.rotation.z       =  t * 0.0018;
        ring1.rotation.z     =  t * 0.004;
        ring2.rotation.z     = -t * 0.005;
        aParticles.rotation.y = t * 0.001;

        renderer.render(scene, camera);
      };
      animate();

      mount._threeCleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      };
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (mount._threeCleanup) mount._threeCleanup();
    };
  }, []);

  return <div ref={mountRef} style={{width: "100%", height: "100%"}} />;
}
