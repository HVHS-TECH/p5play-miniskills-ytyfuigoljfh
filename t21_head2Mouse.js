/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
preload()
	function preload() {
	imgFace = loadImage('../assets/images/Merp.svg');
}


function setup() {
	console.log("setup: ");
	cnv = new Canvas(900 , 900);
	world.gravity.y = -3;
	stupid = new Sprite(450, 450, 200, 400, 'd');
	stupid.image = imgFace;
	stupid.rotationSpeed = 12;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#a2eafa'); 

	stupid.moveTowards(mouseX, mouseY, 0.05);
	if (mouse.presses()) {
		stupid.moveTo(450, 450, 3);
	};
}

/*******************************************************/
//  END OF APP
/*******************************************************/