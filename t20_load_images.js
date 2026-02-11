/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
preload()
	function preload() {
	imgBG   = loadImage('../assets/images/backgroundSnow.jpg');
	imgFace = loadImage('../assets/images/Merp.svg');
}

function setup() {
	console.log("setup: ");
	cnv = new Canvas(900 , 900);

	merp = new Sprite(900/2, 900/2, 400, 'd');
	merp.bounciness = 1;
	merp.friction   = 0;
	merp.image = (imgFace);
	imgFace.resize(400, 400);

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG); 
}

/*******************************************************/
//  END OF APP
/*******************************************************/