import * as THREE from "three";

const moonTexture = new THREE.TextureLoader().load("./images/moon.jpg");
const normalTexture = new THREE.TextureLoader().load("./images/normal.jpg");

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

export default moon;
