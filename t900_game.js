/*******************************************************/
// P5.play: t900_game
// game
// Written by ??
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/

var inBattle = 0
var battleTurn = "player1"
var battleButtonHover = 1

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
		battleButtonHover = 1

		battlePlayer1 = new Sprite(100, 100, 50, 100, 'k');
		battlePlayer1.image = imgPlayerBattle;

		battlePlayer2 = new Sprite(100, 300, 50, 100, 'k');
		battlePlayer2.image = imgUnkownBattle;

		battleEnemie1 = new Sprite(700, 200, 50, 100, 'k')

		battleEnemie2 = new Sprite(700, 400, 50, 100, 'k')

		battleEnemie3 = new Sprite(700, 600, 50, 100, 'k')

		battleEnemie4 = new Sprite(700, 800, 50, 100, 'k')

		battleTurnMarker1 = new Sprite(825, 45, 100, 50)

		battleTurnMarker2 = new Sprite(825, 100, 75, 37.5)
		
		battleTurnMarker3 = new Sprite(825, 140, 50, 25)

		attackButton = new Sprite(70, 170, 15, 15)

		defendButton = new Sprite(90, 170, 15, 15)

		talkButton = new Sprite(110, 170, 15, 15)
		
		spellButton = new Sprite(130, 170, 15, 15)
	}
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {

	if (inBattle === 0) {
		background('#1a1a1a'); 

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
	} else {
		background('#ffffff'); 

		textSize(25);
		fill('#000000');
		text("Turn:", 700, 50);
		text(battleButtonHover, 450, 50);

		if (kb.pressing('left')) {
			battleButtonHover = battleButtonHover - 1
		};
		if (kb.pressing ('right')) {
			battleButtonHover = battleButtonHover + 1
		};

		if (battleButtonHover === 1){
			attackButton.color = '#afafaf'
			defendButton.color = '#000000'
			talkButton.color = '#000000'
			spellButton.color = '#000000'
		} else if(battleButtonHover === 2) {
			attackButton.color = '#000000'
			defendButton.color = '#afafaf'
			talkButton.color = '#000000'
			spellButton.color = '#000000'
		} else if (battleButtonHover === 3) {
			attackButton.color = '#000000'
			defendButton.color = '#000000'
			talkButton.color = '#afafaf'
			spellButton.color = '#000000'
		} else if (battleButtonHover === 4) {
			attackButton.color = '#000000'
			defendButton.color = '#000000'
			talkButton.color = '#000000'
			spellButton.color = '#afafaf'
		};

		if (battleButtonHover > 4){
			battleButtonHover = 4
		}
		if (battleButtonHover < 1){
			battleButtonHover = 1
		}

		if (kb.pressing ('x') && battleButtonHover === 1) {
			battleSelectAttack()
		};


	}

	
}

/*******************************************************/
//  END OF APP
/*******************************************************/