/*******************************************************/
// P5.play: t06_createAliens
// Create aliens on mouse click
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
	for (i = 0; i < 10; i++) {
		evil = new Sprite(random(50, 850), random(50, 850), 80, 80);
		evil.vel.x = 3;
 		evil.vel.y = 4;
		evil.bounciness = 1;
		evil.friction = 0;
}
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