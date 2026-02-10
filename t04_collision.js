/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(900 , 900);
	world.gravity.y = 3;
	stupid = new Sprite(300, 0, 50, 50, 'd');
	stupid.color = 'pink';
	stupid.rotationSpeed = 6;
	platform_1 = new Sprite(300, 600, 350, 80, 'k');
	platform_1.color = '#87265b';
	platform_1.rotation = 30
	platform_2 = new Sprite(750, 750, 350, 80, 'k');
	platform_2.color = '#5d8726';
	platform_2.rotation = -30
	platform_2.bounciness = 4
	platform_3 = new Sprite(750, 350, 350, 80, 'k');
	platform_3.color = '#5d8726';
	platform_3.rotation = 30
	platform_3.bounciness = 4
	platform_4 = new Sprite(300, 850, 350, 80, 'k');
	platform_4.color = '#5d8726';
	platform_4.rotation = 45
	platform_4.bounciness = 4
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