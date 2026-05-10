// This tells TypeScript that any file ending in .css is a valid module
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Since you're likely using R3F, you might need these later too
declare module "*.glb";
declare module "*.gltf";
declare module "*.jpg";
declare module "*.png";