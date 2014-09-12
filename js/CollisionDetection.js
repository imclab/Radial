function isPlayerTouchingBlock(player, block){	
	if (block != null){
	/*
	console.log("collision detection begin");
	console.log("Blocks.length" + blocks.length);
	console.log("Base Radius:" + window.settings.baseRadius);
	console.log("Player yOffset:" + player.yOffset);
	console.log("SideLength:" + player.sideLength);
	*/
	var playerHeightBottom = player.yOffset + window.settings.baseRadius;
	var playerHeightTop = playerHeightBottom + player.sideLength;

	var playerTop = player.angle+player.angularWidth/2;
	var playerBottom = player.angle-player.angularWidth/2;

	playerTop += playerTop < 0 ? 6.28 : 0;
	playerBottom += playerBottom < 0 ? 6.28 : 0;
	playerTop += playerBottom > playerTop ? 6.28 : 0;

	var blockTop = (block.angle + block.angularWidth/2)%6.28;
	var blockBottom = (block.angle - block.angularWidth/2)%6.28; 
	//Incoming literally awful code.
	blockTop += blockTop < 0 ? 6.28 : 0;
	blockBottom += blockBottom < 0 ? 6.28 : 0;
	if (blockBottom > blockTop){
		blockTop += 6.28;
		playerTop += 6.28;
		playerBottom += 6.28;
		if(playerBottom > 6.28){
			playerTop -= 6.28;
			playerBottom -=6.28;
		}
	}

	/*
	console.log("playerHeightBottom:" + playerHeightBottom);
	console.log("playerHeightTop:" + playerHeightTop);
	console.log("block.distFromCenter:" + block.distFromCenter);
	*/

	//*@Meadow
	//console.log("blockTopAngle: " + blockTop%6.28);
	//console.log("blockBottomAngle: " + blockBottom%6.28);
	//console.log("player.angle: " + player.angle%6.28); 
	//*/
	if (block.distFromCenter >= playerHeightBottom && block.distFromCenter <= playerHeightTop){ //Vertical Match
		if((playerBottom < blockTop && playerTop > blockTop)
		||(playerBottom < blockBottom && playerTop > blockBottom)
		||(playerBottom > blockBottom && playerTop < blockTop)){//Horizontal Match
			(player.color == "#FFFFFF") ? player.color = "#000000" : player.color = "#FFFFFF";
			 console.log("HIT!");
			 	//debugger;
			return true;	
		}  
		return false;
	}
}

function isPLayerTouchingPlayer(player1, player2) {
	var player1HeightBottom = player1.yOffset + window.settings.baseRadius;
	var player1HeightTop = player1HeightBottom + player1.sideLength;

	var player1Top = player1.angle + player1.angularWidth/2;
	var player1Bottom = player1.angle - player1.angularWidth/2;

	var player2HeightBottom = player2.yOffset + window.settings.baseRadius;
	var player2HeightTop = player2HeightBottom + player2.sideLength;

	var player2Top = player2.angle + player2.angularWidth/2;
	var player2Bottom = player2.angle - player2.angularWidth/2;

	// console.log("player1Top: " + player1Top);
	// console.log("player1Bottom: " + player1Bottom);

	// console.log("player2Top: " + player2Top);
	// console.log("player2Bottom: " + player2Bottom);

	if ((player1HeightBottom >= player2HeightBottom && player1HeightBottom <= player2HeightTop)
		|| (player2HeightBottom >= player1HeightBottom && player2HeightBottom <= player1HeightTop)){//Heights overlap one way or another
		if((player1Top >= player2Bottom && player1Top <= player2Top) 
			||(player2Top >= player1Bottom && player2Top <= player1Top)) //Angles overlap one way or another
		{
			player1.color = "#AFAFAF";
			//player2.color = "#FFAAFF";
			return true;
		} 		
	}
}

function isPLayerTouchingPlayer(player1, player2) {
	var player1HeightBottom = player1.yOffset + window.settings.baseRadius;
	var player1HeightTop = player1HeightBottom + player1.sideLength;

	var player1Top = player1.angle + player1.angularWidth/2;
	var player1Bottom = player1.angle - player1.angularWidth/2;

	var player2HeightBottom = player2.yOffset + window.settings.baseRadius;
	var player2HeightTop = player2HeightBottom + player2.sideLength;

	var player2Top = player2.angle + player2.angularWidth/2;
	var player2Bottom = player2.angle - player2.angularWidth/2;
	/*
	console.log("player1Top: " + player1Top);
	console.log("player1Bottom: " + player1Bottom);

	console.log("player2Top: " + player2Top);
	console.log("player2Bottom: " + player2Bottom);
	*/
	//Touching bottom
	/*
	if((player1HeightTop >= player2HeightBottom) && player1HeightTop < (player2HeightBottom + Math.abs(player1.yVelocity))){
		//Coming from bottom
		if((player1Top >= player2Bottom && player1Top <= player2Top) 
			||(player2Top >= player1Bottom && player2Top <= player1Top)){
				// console.log("bottom connect");
					//debugger;
			} //Angles overlap one way or another
	}
	
	if((player1HeightBottom <= player2HeightTop) && player1HeightBottom > (player2HeightTop - Math.abs(player1.yVelocity))){
		//Coming from top
		if((player1Top >= player2Bottom && player1Top <= player2Top) 
			||(player2Top >= player1Bottom && player2Top <= player1Top)){
				// console.log("top connect");
						//debugger;
			} //Angles overlap one way or another
		
	}
	*/

	if ((player1HeightBottom >= player2HeightBottom && player1HeightBottom <= player2HeightTop)
		|| (player2HeightBottom >= player1HeightBottom && player2HeightBottom <= player1HeightTop)){//Heights overlap one way or another
		if((player1Top >= player2Bottom && player1Top <= player2Top) 
			||(player2Top >= player1Bottom && player2Top <= player1Top)) //Angles overlap one way or another
		{
			//player1.color = "#AFAFAF";
			//player2.color = "#FFAAFF";
			return true;
		}
		return false;
	}
	//Touching left


	//Touching Right


	//Touching Top
	/*
	if ((player1HeightBottom >= player2HeightBottom && player1HeightBottom <= player2HeightTop)
		|| (player2HeightBottom >= player1HeightBottom && player2HeightBottom <= player1HeightTop)){//Heights overlap one way or another
		if((player1Top >= player2Bottom && player1Top <= player2Top) 
			||(player2Top >= player1Bottom && player2Top <= player1Top)) //Angles overlap one way or another
		{
			player1.color = "#AFAFAF";
			//player2.color = "#FFAAFF";
			return true;
		}
		*/
}


function currentlyTouching() {
	this.TouchingOtherPlayer = false;
	this.TouchingBLock = false;
}