/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(900 , 900);
	world.gravity.y = 3;
	wallLH  = new Sprite(0, 900/2, 8, 900, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(900, 450, 8, 900, 'k');
	wallTop = new Sprite(450, 0, 900, 8, 'k');
	wallBot = new Sprite(450, 900, 900, 8, 'k');
	stupid = new Sprite(900/2, 900/2, 50, 'd');
	stupid.color = 'pink';
	stupid.vel.x = 3;
	stupid.vel.y = 1;
	stupid.bounciness = 1.5;
	stupid.friction = 0;
	stupid.drag = 0;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#a2eafa'); 
}

/*******************************************************/
//  END OF APP
/*******************************************************/