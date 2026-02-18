/*******************************************************/
// P5.play: t900_game
// game
// Written by ??
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/

	var inBattle = 0

preload()
	function preload() {
	imgFace = loadImage('../assets/images/Merp.svg');
	imgPlayerBattle = loadImage('../assets/images/MerpBattle.svg');
	imgUnkownBattle = loadImage('../assets/images/UnkownBattle.svg');
}


function setup() {
	console.log("setup: ");

	cnv = new Canvas(900 , 900);

	mapGroup = new Group();
    upperWall = new Sprite(450, 0, 900, 450, 's')
    upperWall.color = '#000000'
	mapGroup.add(upperWall);

    lowerWall = new Sprite(450, 900, 900, 450, 's')
    lowerWall.color = '#000000'
	mapGroup.add(lowerWall);

	player = new Sprite(225, 450, 50, 100, 'k');
	player.image = imgFace;

    enemiesGroup = new Group();
    badGuy = new Sprite(775, 450, 50, 100, 'd');
    badGuy.color = '#ff4141'
    enemiesGroup.add(badGuy);
    enemiesGroup.collides(player, battleStart);

    function battleStart(_badGuy, _player) {
		_badGuy.remove();
		_player.remove();
		mapGroup.remove();
		inBattle = 1

		battlePlayer1 = new Sprite(100, 100, 50, 100, 'k');
		battlePlayer1.image = imgPlayerBattle;

		battlePlayer2 = new Sprite(100, 300, 50, 100, 'k');
		battlePlayer2.image = imgUnkownBattle;
	}
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {

	if (inBattle === 0) {
		background('#1a1a1a'); 
	} else {
		background('#ffffff'); 
	}

	if (kb.pressing('left')) {
		player.vel.x = -3
	};
	if (kb.pressing ('right')) {
		player.vel.x = 3
	};
	if (kb.pressing ('up')) {
		player.vel.y = -3
	};
	if (kb.pressing ('down')) {
		player.vel.y = 3
	};

	if (kb.released('left')) {
		player.vel.x = 0
	};
	if (kb.released ('right')) {
		player.vel.x = 0
	};
	if (kb.released ('up')) {
		player.vel.y = 0
	};
	if (kb.released ('down')) {
		player.vel.y = 0
	};
}

/*******************************************************/
//  END OF APP
/*******************************************************/