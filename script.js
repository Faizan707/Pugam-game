const MOVES = {
    FRONT: "front",
    BACK: "back",
  };
  
  const Moves_Sources = {
    FRONT: "./front hand.jpg",
    BACK: "./back hand.jpg",
  };
  
  const comp1 = {
    move: MOVES.FRONT,
  };
  
  const comp2 = {
    move: MOVES.FRONT,
  };
  
  const player1 = {
    move: MOVES.FRONT,
  };
  
  const calculateMoves = () => {
    const moves = [MOVES.FRONT, MOVES.BACK];
    comp1.move = moves[getRandomIndex()];
    comp2.move = moves[getRandomIndex()];
    const userMove = prompt("Enter your move front/back");
    if (userMove === null) {
      alert("Invalid move");
      throw new Error("Invalid move");
    }
    if (
      userMove.toLowerCase() != MOVES.FRONT &&
      userMove.toLowerCase() != MOVES.BACK
    ) {
      alert("Invalid move");
      throw new Error("Invalid moves");
    }
    player1.move = userMove.toLowerCase();
  };
  
  const getRandomIndex = () => {
    return Math.random() > 0.5 ? 1 : 0;
  };
  
  const render = () => {
    const Comp1Img = document.getElementById("comp1");
    const Comp2Img = document.getElementById("comp2");
    const player1Img = document.getElementById("player1");
    if (comp1.move === MOVES.FRONT) {
      Comp1Img.src = Moves_Sources.FRONT;
    } else {
      Comp1Img.src = Moves_Sources.BACK;
    }
    if (comp2.move === MOVES.FRONT) {
      Comp2Img.src = Moves_Sources.FRONT;
    } else {
      Comp2Img.src = Moves_Sources.BACK;
    }
    if (player1.move === MOVES.FRONT) {
      player1Img.src = Moves_Sources.FRONT;
    } else {
      player1Img.src = Moves_Sources.BACK;
    }
  };
  
  const calculateWinner = () => {
    const allMoves = [comp1.move, comp2.move, player1.move];
    const allMoveFront = allMoves.every((move) => {
      return move === MOVES.FRONT;
    });
    const allMoveBack = allMoves.every((move) => {
      return move === MOVES.BACK;
    });
    if (allMoveFront || allMoveBack) {
      alert("Nobody wins");
      return;
    }
    const result = {
      FRONT: [],
      BACK: [],
    };
    allMoves.forEach((move, index) => {
      if (move === MOVES.FRONT) {
        result.FRONT.push(index);
      } else {
        result.BACK.push(index);
      }
    });
    if (result.BACK.length === 1) {
      announceWinner(
        MOVES.BACK,
        ["Computer 1", "Computer 2", "Player 1"],
        result.BACK[0]
      );
    } else {
      announceWinner(
        MOVES.FRONT,
        ["Computer 1", "Computer 2", "Player 1"],
        result.FRONT[0]
      );
    }
  };
  
  const announceWinner = (move, players, index) => {
    const message = `${players[index]} is the winner`;
    alert(message);
  };
  
  const main = () => {
    calculateMoves();
    render();
    calculateWinner();
  };
  
  main();
  