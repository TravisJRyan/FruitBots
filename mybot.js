function new_game() {
}

function insideBoard(x, y) {
   //returns whether or not the spot is inside the board
   if ( (x >= 0) && (x < WIDTH) ) {
      if ( (y >= 0) && (y < HEIGHT) ) {
         return true; //x and y meets requirements, return true
      }
   }
   return false; //return false otherwise
}

function needFruit(spot){
	if(spot > 0){ // TODO: MAKE "needFruit" ONLY GO FOR FRUIT STILL WORTH GETTING
		return true;
	}//end if
}//end needFruit

function spacesAway(spotX, spotY){
	//returns how many spaces away a spot is from the player
	var myX = get_my_x();
	var myY = get_my_y();
	return Math.abs(myX-spotX)+Math.abs(myY-spotY);
}

function findClosest(){
	var closest = 999;
	var closestSpot = [-1][-1];
	var board = get_board(); //get current board state
	for(x = 0; x < WIDTH; x++){
		for(y = 0; y<HEIGHT; y++){ //nested loop to check every square
			if(insideBoard(x,y)){ //ensure point is inside board
				if( needFruit(board[x][y]) && (spacesAway(x,y) < closest) ){
					closest = spacesAway(x,y); //keep track of closest distance
					closestSpot = [x,y]; //keep track of closest coords
				}
			}
		}//end for
	}//end for
	return closestSpot; //return x and y of closest spot after all checks are finished
}

function make_move() {
	var board = get_board(); //get var for current board state
	var mySpot = board[get_my_x()][get_my_y()]; //set mySpot variable
	
	console.log(mySpot);
	
	if(needFruit(mySpot)){ //if found a needed fruit, take it
		return TAKE;
	}
	
	//get coords of closest needed fruit
	var closest = findClosest();
	var closestX = closest[0];
	var closestY = closest[1];
	
	//make move accordingly (prioritize x-movement over y-movement)
	if(get_my_x() < closestX ){
		return EAST;
	}
	if(get_my_x() > closestX){
		return WEST;
	}
	if(get_my_y() < closestY){
		return SOUTH;
	}
	if(get_my_y() > closestY){
		return NORTH;
	}
	
	//If something went wrong, pass. This shouldn't ever happen.
	console.log("Yeah I gotta pass. Something went wrong.");
	return PASS;
}


// Optionally include this function if you'd like to always reset to a 
// certain board number/layout. This is useful for repeatedly testing your
// bot(s) against known positions.
//
//function default_board_number() {
//    return 123;
//}
