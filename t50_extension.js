/*******************************************************/
// P5.play: t50_extension
// Extension tasks
// Written by ??
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
preload()
	function preload() {
	imgFace = loadImage('../assets/images/Merp.svg');
	imgFridge = loadImage('../assets/images/fridge.jpg');
}


function setup() {
	console.log("setup: ");
	cnv = new Canvas(900 , 900);
	stupid = new Sprite(450, 450, 50, 100, 'k');
	stupid.image = imgFace;
	stupid.rotationSpeed = 1;

	fridge = new Sprite(750, 450, 150, 150, 'k')
	fridge.image = imgFridge

	stupid.collides(fridge, unStink);
	function unStink(_fridge, _stupid) {
		var stinky = "Not Stinky"
	};
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

	var stinky = "Stinky";
	var textColor = "lime"
	textSize(100);
	fill(textColor);
	text("Your "+stinky, random(223,227), 100);
}

/*******************************************************/
//  END OF APP
/*******************************************************/