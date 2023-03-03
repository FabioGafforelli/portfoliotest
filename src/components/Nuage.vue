<template>
	<Renderer class="planet" ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize>
	  <Camera :position="{ x: 10, y: 10, z: 10 }" />
	  <Scene background="#fff">
		<AmbientLight></AmbientLight>
		<GltfModel src="models/coffre-minecraft.glb" />
	  </Scene>
	</Renderer>
  </template>
  
  <script>
  import {
	AmbientLight,
	Camera,
	GltfModel,
	Renderer,
	Scene,
  } from 'troisjs';
  
  export default {
	components: {
	  AmbientLight,
	  Camera,
	  GltfModel,
	  Renderer,
	  Scene,
	},
  };
  </script>
  
  <style>
  
  </style>