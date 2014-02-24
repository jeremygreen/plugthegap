var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
 
canvas.width = 800;
canvas.height = 400;

var img = new Image();
img.src = 'background.png';
var vx = 0;

var debug = false;
var ostotal = 0;

var blanks = [30,40,50,60,70,80,90,100,112,124,126,143,157,164,173,177,182,188,199,203,214,219,221,234,242,257,265,284,285,296,302,313,335,353,367,375,381,394,403,429,437,446,452,462,484,485,495,509,513,517,524,529,535,547,553,557,565,584,591,601,609,614,615,620,628,631,653,655,661,667,690,696,708,718,722,726,731,739,742,746,750,757,782,799,809,812,815,821,834,838,849,856,860,866,873,878,880,892,904,910,917,925,931,953,955,977,988,1000,1007,1011,1018,1049,1054,1057,1060,1072,1090,1100,1112,1119,1124,1130,1140,1146,1178,1182,1192,1208,1229,1230,1246,1254,1257,1266,1301,1306,1312,1325,1332,1335,1340,1351,1364,1367,1391,1395,1414,1423,1431,1444,1451,1455,1462,1466,1480,1503,1505,1512,1531,1537,1541,1563,1574,1578,1580,1602,1607,1626,1635,1645,1662,1668,1674,1677,1684,1685,1697,1703,1711,1723,1729,1744,1746,1751,1760,1774,1775,1782,1797,1819,1820,1838,1859,1865,1875,1882,1888,1901,1922,1926,1933,1935,1943,1947,1954,1974,1994,1998,2002,2012,2020,2036,2072,2082,2085,2094,2098,2108,2117,2132,2137,2144,2150,2156,2163,2173,2187,2190,2228,2246,2250,2289,2305,2319,2322,2327,2339,2351,2357,2361,2380,2392,2416,2422,2444,2459,2462,2465,2481,2487,2494,2500,2513,2529,2544,2554,2587,2596,2603,2615,2629,2640,2646,2683,2688,2694,2702,2712,2721,2750,2780,2785,2792,2799,2803,2808,2814,2820,2825,2830,2846,2853,2861,2865,2879,2892,2895,2903,2909,2919,2928,2938,2942,2947,2953,2973,2986,3004,3008,3016,3041,3074,3077,3082,3089,3092,3121,3139,3165,3171,3176,3208,3213,3217,3222,3273,3277,3304,3313,3315,3324,3327,3330,3346,3361,3365,3372,3382,3396,3403,3406,3418,3433,3444,3454,3456,3463,3476,3515,3536,3544,3547,3562,3572,3581,3595,3601,3610,3619,3623,3625,3638,3645,3660,3674,3675,3708,3717,3727,3733,3736,3740,3746,3753,3756,3764,3779,3787,3791,3797,3801,3808,3812,3816,3820,3835,3855,3865,3883,3895,3914,3933,3936,3942,3946,3959,3974,3984,3989,3992,4001,4005,4021,4031,4046,4063,4074,4077,4080,4091,4097,4101,4115,4123,4134,4141,4148,4159,4160,4172,4187,4194,4198,4201,4209,4213,4231,4239,4247,4250,4267,4274,4282,4301,4318,4325,4340,4356,4361,4373,4384,4397,4405,4412,4425,4446,4453,4461,4467,4476,4494,4502,4518,4520,4528,4531,4536,4540,4548,4552,4559,4561,4567,4573,4590,4606,4614,4618,4624,4629,4639,4641,4649,4657,4683,4688,4707,4717,4722,4730,4747,4752,4758,4764,4775,4798,4804,4811,4825,4872,4883,4893,4897,4919,4948,4962,4973,4984,5007,5018,5023,5038,5041,5052,5068,5070,5078,5082,5110,5125,5134,5155,5172,5183,5198,5221,5243,5248,5259,5267,5278,5287,5297,5313,5322,5330,5358,5369,5372,5379,5385,5396,5402,5412,5415,5446,5463,5465,5486,5508,5514,5516,5520,5537,5556,5562,5565,5576,5583,5587,5597,5615,5634,5647,5652,5657,5675,5682,5689,5692,5695,5711,5716,5724,5725,5735,5746,5764,5774,5780,5801,5811,5816,5857,5862,5870,5877,5892,5903,5924,5937,5941,5947,5974,5987,5997,6015,6024,6025,6032,6040,6047,6054,6055,6064,6066,6087,6096,6101,6149,6160,6173,6175,6185,6191,6213,6216,6234,6244,6254,6262,6269,6273,6276,6285,6290,6295,6302,6312,6317,6320,6365,6377,6387,6394,6408,6418,6421,6435,6444,6451,6458,6463,6476,6499,6517,6523,6549,6552,6566,6572,6576,6584,6587,6598,6603,6619,6624,6642,6649,6662,6668,6687,6697,6706,6721,6725,6744,6747,6757,6764,6770,6779,6797,6805,6829,6830,6841,6850,6857,6864,6871,6879,6904,6912,6924,6930,6948,6951,6959,6966,6996,7008,7028,7030,7041,7050,7061,7067,7074,7079,7080,7085,7096,7100,7109,7128,7160,7168,7178,7201,7208,7215,7229,7245,7252,7256,7269,7287,7313,7315,7321,7338,7341,7348,7362,7368,7372,7396,7410,7422,7430,7437,7453,7455,7472,7476,7508,7520,7527,7531,7538,7551,7562,7604,7609,7610,7621,7639,7643,7646,7668,7672,7677,7685,7707,7710,7723,7725,7739,7761,7771,7777,7785,7792,7804,7824,7828,7834,7839,7840,7861,7872,7886,7900,7908,7917,7925,7931,7935,7944,7953,7957,7982,7988];


var myGame = {
	score: 0,
	hiscore:0,
	gameover: false,
	reset: function() {
		this.score = 0;
		this.gameover = false;
	},
};

var myPlatform = {
	platform: [],
	offset: 0,
	color: '#c00',
	outline: '#00e',
	y: 330,
	length: 8192,
	reset: function() {
		var blankindex = 0;
		for(var i=0; i < this.length; i++){
			if(i == blanks[blankindex]){
				this.platform[i] = 0;
				blankindex++;
			}else{
				this.platform[i] = 1;
			}
		}
		this.offset = 0;
	},
};

var myPlayer = {
    x: 60,
    y: 309,
    width: 20,
    height: 20,
    speed: 20,
    color: '#0c0',
	falling: false,
	frames: [],
	framecount: 0,
	reset: function() {
		this.x = 60;
		this.y = 309;
		this.falling = false;
	},
	loadFrames: function() {
		var ball0 = new Image();
		ball0.src = 'ball1.png';
		this.frames[0] = ball0;
		var ball1 = new Image();
		ball1.src = 'ball2.png';
		this.frames[1] = ball1;
		var ball2 = new Image();
		ball2.src = 'ball3.png';
		this.frames[2] = ball2;
		var ball3 = new Image();
		ball3.src = 'ball4.png';
		this.frames[3] = ball3;
	},
};

var myPiece = {
    x: canvas.width / 2,
    y: 40,
	xvel: 0,
	yvel: 0,
	spawnrad: 60,
    width: 20,
    height: 20,
    speed: 200,
    color: '#66d',
	outline: '#009',
	speed: 2,
	friction: 0.98,
	hidden: 0,
	reset: function() {
		this.x = canvas.width / 2;
		this.y = 60;
		this.xvel = 0;
		this.yvel = 0;
	},
};

var myHUD = {
    x: 600,
    y: 30,
    width: canvas.width / 20,
    height: 10,
};

/*---------------------- INIT ----------------------*/ 
function init(){
	var i = 0;
	myPlatform.platform = new Array(myPlatform.length);
	myPlatform.reset();
	
	myPlayer.reset();
	myPlayer.frames = new Array(4);
	myPlayer.loadFrames();
	
	myPiece.reset();
	myGame.reset();
}
/*---------------------- UPDATE ----------------------*/ 
function update(mod) {
	
	if(myGame.gameover == true){
		myGame.reset();
		myPlatform.reset();
		myPiece.reset();
		myPlayer.reset();
		return;
	}
	
	// Scroll Platform
	if(Math.floor(myPlatform.offset / 20) < myPlatform.length){
		if(myPlayer.falling == false) {
			myPlatform.offset++;
			ostotal++;
		}
	}
	
	// Move piece
    if (39 in keysDown) { // Left
		if(myPiece.x < canvas.width - myPlayer.width){
			myPiece.xvel++;
		}
    }

    if (37 in keysDown) { // Right
		if(myPiece.x > 0){
			myPiece.xvel--;
		}
    }
	if (40 in keysDown){
		myPiece.y++;
	}
	
	myPiece.xvel *= myPiece.friction;
	if(myPiece.xvel > myPiece.speed) {
		myPiece.xvel = myPiece.speed;
	}
	if(myPiece.xvel < (myPiece.speed * -1)){
		myPiece.xvel = myPiece.speed * -1;
	}
	myPiece.x += myPiece.xvel;
	
	// Get Block Index under player piece current position
	var blockunderpiece = Math.floor(myPiece.x / 20) + Math.floor(myPlatform.offset / 20);
	
	// Get Block Index under players current position
	var blockunderplayer = Math.floor(myPlayer.x / 20) + Math.floor(myPlatform.offset / 20);
	
	// Allow to drop piece into place if low enough
	if((myPiece.y > myPlatform.y - ( myPiece.height / 2)) && (myPiece.y < myPlatform.y)) { 
		// Now check for left right
		if(myPlatform.platform[blockunderpiece-1] == 0 || myPlatform.platform[blockunderpiece] == 0 || myPlatform.platform[blockunderpiece+1] == 0) {
			if(myPlatform.platform[blockunderpiece-1] == 0){
				myPlatform.platform[blockunderpiece-1] = 2;
			}else if(myPlatform.platform[blockunderpiece] == 0){
				myPlatform.platform[blockunderpiece] = 2;
			}else{	
				myPlatform.platform[blockunderpiece+1] = 2;
			}
			myPiece.reset();
			myGame.score++;
			if(myGame.score > myGame.hiscore){
				myGame.hiscore = myGame.score;
			}
		}
	}	
	if((myPiece.y > myPlatform.y - 1)) { 
		myPlatform.platform[blockunderpiece] = 3;
		myGame.gameover = true;
		return;
	}else{
		myPiece.y++;
	}
	
	// Force reset of piece if x is hit
	if(88 in keysDown){
		myPiece.y = 60;
		myPiece.x = canvas.width / 2;
		if(myGame.score > 0){
			myGame.score--;
		}
	}
	
	if(myPlayer.falling == true){
		myPlayer.y += 3;
		if(myPlayer.y > (canvas.height - myPlayer.height)){
			myGame.gameover = true;
			return;
		}	
	}else{
		var bu = myPlatform.platform[blockunderplayer];
		if(bu == 0) {
			myPlayer.falling = true;
		}else{	
			if(myPlayer.x < 200) {
				myPlayer.x++;
			}
		}	
	}
}
/*---------------------- DRAW ----------------------*/ 
function draw() {	
	// Backgroumd
    context.fillStyle = '#333';
    context.fillRect(0, 0, 800, 400);
    context.drawImage(img, vx, 0);
	context.drawImage(img, (img.width / 2) - Math.abs(vx), 0);
	if (Math.abs(vx) > img.width / 2) {
	    vx = 0;
	}
    vx -= 0.5;
    
	// Player
	//context.fillStyle = myPlayer.color;
	//roundRect(context, myPlayer.x, myPlayer.y, 20, 20, 3, 1, 1);
	context.drawImage(myPlayer.frames[Math.floor(myPlayer.framecount)], myPlayer.x, myPlayer.y);
	myPlayer.framecount += 0.2;
	if(myPlayer.framecount > 3){
		myPlayer.framecount = 0;
	}
    
	// Piece	
	context.beginPath();
    context.arc(myPiece.x + 9, myPiece.y - 10, 20, Math.PI, 0, false);
    context.closePath();
    context.lineWidth = 1;
    context.fillStyle = "brown";
    context.fill();
	context.beginPath();
  	context.rect(myPiece.x, myPiece.y,20,20);
	context.fillStyle = myPiece.color;	
	context.fillRect(myPiece.x, myPiece.y,20,20);	
	context.beginPath();
    context.moveTo(myPiece.x - 8, myPiece.y - 10);
    context.lineTo(myPiece.x, myPiece.y);
 	context.strokeStyle = "black";
    context.stroke();
    context.beginPath();
    context.moveTo(myPiece.x + 27, myPiece.y - 10);
    context.lineTo(myPiece.x + 20, myPiece.y);
 	context.strokeStyle = "black";
    context.stroke();
	
	// Platform
	var n = 0;
	for(var i= 0; i <= canvas.width; i += 20){
		var t = myPlatform.platform[n + Math.floor(myPlatform.offset / 20)];	
		if(t > 0){
			context.beginPath();
	      	context.rect(i - (myPlatform.offset % 20),myPlatform.y,20,20);
	      	context.lineWidth = 1;
			if(t == 1) {
	      		context.fillStyle = myPlatform.color;
			}
			if(t == 2) {
				context.fillStyle = myPiece.color;
			}
			if(t == 3) {
				context.fillStyle = "orange";
      		}
	      	context.stroke();
			context.fillRect(i - (myPlatform.offset % 20),myPlatform.y,20,20);
		}
		n++;
	}
	
	// HUD
	context.fillStyle = "darkblue";
	context.font = "normal 24px Airal";
	context.fillText("Score:", 10, 30);
	context.fillText(myGame.score, 125, 30);
	
	context.fillText("Hi-Score:", 10, 60);
	context.fillText(myGame.hiscore, 125, 60);
	
	// DEBUG 
	if(debug == true){
		context.fillStyle = "black";
		context.font = "normal 10px Airal";
		context.fillText("Platform Offset:", 10, 50);
		context.fillText(Math.floor(ostotal / 20), 80, 50);
	}
}
/*---------------------- RUN ----------------------*/  
function run() {
    update((Date.now() - time) / 1000);
    draw();
    time = Date.now();
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitary (min, max) {
    return Math.random() * (max - min) + min;
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }        
}

var time = Date.now();
setInterval(run, 10);
init();

var keysDown = {};
window.addEventListener('keydown', function(e) {
	console.log(e.keyCode);
    keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});