/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
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
	stupid = new Sprite(450, 450, 200, 400, 'd');
	stupid.image = imgFace;
	stupid.rotationSpeed = 1;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#a2eafa'); 

	if (kb.pressing('left')) {
		stupid.vel.x = -3
	};
	if (kb.pressing ('right')) {
		stupid.vel.x = 3
	};
	if (kb.pressing ('up')) {
		stupid.vel.y = -3
	};
	if (kb.pressing ('down')) {
		stupid.vel.y = 3
	};

	if (kb.released('left')) {
		stupid.vel.x = 0
	};
	if (kb.released ('right')) {
		stupid.vel.x = 0
	};
	if (kb.released ('up')) {
		stupid.vel.y = 0
	};
	if (kb.released ('down')) {
		stupid.vel.y = 0
	};
}

/*******************************************************/
//  END OF APP
/*******************************************************/