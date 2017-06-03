//global vars
var needOne, needTwo, needThree, totalOne, totalTwo, totalThree;

function new_game() {
	/* //set vars for total amount of all 3 fruits
	totalOne = get_total_item_count(1);
	totalTwo = get_total_item_count(2);
	totalThree = get_total_item_count(3);
	
	//start the game seeking all 3 fruits
	needOne = true;
	needTwo = true;
	needThree = true; */
}

function insideBoard(x, y) {
   //coords must be given in [x,y] format
   if ( (x >= 0) && (x < WIDTH) ) {
      if ( (y >= 0) && (y < HEIGHT) ) {
         return true;
      }
   }

   return false;
}

function needFruit(spot){
	if(spot > 0){
		return true;
	}//end if
}//end needFruit

function make_move() {
	var board = get_board(); //get var for current board state
	var mySpot = board[get_my_x()][get_my_y()]; //set mySpot variable
	
	if(needFruit(mySpot)){
		return TAKE;
	}
	
	for(i = 0; i<HEIGHT+WIDTH; i++){
		if( insideBoard(get_my_x()+i,get_my_y())){
			console.log("Yeah that shit exists to the right "+i);
			if( needFruit(board[get_my_x()+i][get_my_y()] ) ){
				return EAST;
			}//end if
		}
		else if( insideBoard(get_my_x()-i,get_my_y())){
			if( needFruit(board[get_my_x()-i][get_my_y()] ) ){
				return WEST;
			}//end if
		}
		if( insideBoard(get_my_x(),get_my_y()-i)){
			if( needFruit(board[get_my_x()][get_my_y()-i] ) ){
				return NORTH;
			}//end if
		}
		if( insideBoard(get_my_x(),get_my_y()+i)){
			if( needFruit(board[get_my_x()][get_my_y()+i] ) ){
				return SOUTH;
			}//end if
		}
	}//end for
	return PASS;
}
/*
function updateNeeds(){
	//If the majority of an item has already been obtained, there is no need to search for it or pick it up anymore
	if( get_my_item_count(1) >= totalOne/2 || get_opponent_item_count(1) >= totalOne/2){
			needOne = false;
	}//end if
		if( get_my_item_count(2) >= totalTwo/2 || get_opponent_item_count(2) >= totalTwo/2){
			needTwo = false;
	}//end if
		if( get_my_item_count(3) >= totalThree/2 || get_opponent_item_count(3) >= totalThree/2){ 
			needThree = false; 
	}//end if 
}//end updateNeeds
*/


// Optionally include this function if you'd like to always reset to a 
// certain board number/layout. This is useful for repeatedly testing your
// bot(s) against known positions.
//
//function default_board_number() {
//    return 123;
//}
