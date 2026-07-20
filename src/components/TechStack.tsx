import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";
import "./styles/TechStack.css";

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/images/AWS.webp","/images/Excel.webp","/images/Keras.png",
  "/images/Matplotlib.svg","/images/NumPy.webp","/images/Pandas.avif",
  "/images/PowerBI.webp","/images/Python.webp","/images/Scikit-Learn.png",
  "/images/Seaborn.png","/images/Tableau.png","/images/TensorFlow.webp",
  "/images/mysql.webp",
];
const textures = imageUrls.map((url) => textureLoader.load(url));
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);
const BALLS_PER_LOGO = 3;
const spheres = Array.from({ length: textures.length * BALLS_PER_LOGO }, () => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({ vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread, material, isActive }: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);
  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec.copy(api.current!.translation()).normalize().multiply(
      new THREE.Vector3(-50 * delta * scale, -150 * delta * scale, -50 * delta * scale)
    );
    api.current?.applyImpulse(impulse, true);
  });
  return (
    <RigidBody linearDamping={0.75} angularDamping={0.15} friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]} ref={api} colliders={false}>
      <BallCollider args={[scale]} />
      <CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2 * scale]} args={[0.15 * scale, 0.275 * scale]} />
      <mesh castShadow receiveShadow scale={scale} geometry={sphereGeometry} material={material} rotation={[0.3, 1, 1]} />
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3(), isActive }: { vec?: THREE.Vector3; isActive: boolean }) {
  const ref = useRef<RapierRigidBody>(null);
  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    ref.current?.setNextKinematicTranslation(
      vec.lerp(new THREE.Vector3((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0), 0.2)
    );
  });
  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("techstack");
      if (!el) return;
      setIsActive(window.scrollY > el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const materials = useMemo(() =>
    textures.map((texture) =>
      new THREE.MeshPhysicalMaterial({
        map: texture, emissive: "#ffffff", emissiveMap: texture,
        emissiveIntensity: 0.3, metalness: 0.5, roughness: 1, clearcoat: 0.1,
      })
    ), []);

  return (
    <section className="techstack-section" id="techstack">
      <div className="techstack-inner section-container">
        <div className="techstack-header">
          <span className="section-label">Skills</span>
          <h2 className="techstack-title title">
            Tech Stack &<br />
            <span className="display-font techstack-title-italic">Toolbox</span>
          </h2>
          <div className="section-divider"></div>
          <p className="techstack-subtitle">
            Interact with my tech stack — drag and throw the balls around.
          </p>
        </div>
      </div>

      {/* Physics canvas */}
      <div className="techstack-canvas-wrap">
        <Canvas shadows
          gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
          camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
          onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        >
          <ambientLight intensity={1} />
          <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" castShadow shadow-mapSize={[512, 512]} />
          <directionalLight position={[0, 5, -4]} intensity={2} />
          <Physics gravity={[0, 0, 0]}>
            <Pointer isActive={isActive} />
            {spheres.map((props, i) => (
              <SphereGeo key={i} {...props} material={materials[i % materials.length]} isActive={isActive} />
            ))}
          </Physics>
          <Environment files="/models/char_enviorment.hdr" environmentIntensity={0.5} environmentRotation={[0, 4, 2]} />
          <EffectComposer enableNormalPass={false}>
            <N8AO color="blue" aoRadius={2} intensity={1} />
          </EffectComposer>
        </Canvas>
      </div>
    </section>
  );
};

export default TechStack;
