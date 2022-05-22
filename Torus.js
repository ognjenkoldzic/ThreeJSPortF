import * as THREE from "three";

const geometry = new THREE.TorusGeometry(10, 3, 16, 100); //big 3d ring - Torus
const material = new THREE.MeshStandardMaterial({
  color: 0x23dbb6,
});

const torus = new THREE.Mesh(geometry, material);

export { torus };
