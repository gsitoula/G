//se declara la escena
var scene = new THREE.Scene();
//tipo de cámara que se utiliza
                                                  /*aspect ratio (Ancho / Alto) */   /*far clipping 1000*/
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//renderizado que usa               /*field of view 75*/                       /*near clipping 0.1*/
//threejs posee mas que WebGL por si no es soportado, para tener en cuenta
var renderer = new THREE.WebGLRenderer();
//tamaño del renderizad
renderer.setSize( window.innerWidth, window.innerHeight );
//append al domElement como Child(niño)
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x123456 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;



function render() {
	requestAnimationFrame( render );
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
	renderer.render( scene, camera );

}
render();




// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
