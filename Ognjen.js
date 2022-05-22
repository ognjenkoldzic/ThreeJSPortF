import * as THREE from "three";

const ognjenTexture = new THREE.TextureLoader().load(
  "./images/ognjen_alt.jpeg"
);
const ognjen = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: ognjenTexture })
);

export { ognjen };
