/**
 * Created by Matt on 6/19/2017.
 */

function Game() {

    var board;
    var whiteScore = 0;
    var blackScore = 0;
    var turn = "black";

    var initialize = function() {
        board = new Board(9,9);
        board.setup();

        x = board.getOATs();
        for(var i = 0; i < x.length; i++) {
            console.log(x[i].getId());
        }

    };

    this.getTurn= function() {
        return turn;
    };
    
    initialize();
}