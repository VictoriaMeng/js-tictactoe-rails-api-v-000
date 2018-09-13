// Code your JavaScript / jQuery solution here
$(document).ready(function() {
  turn = 0;
  attachListeners();
})

function attachListeners() {
  document.getElementById("save").addEventListener("click", function() {
    alert("Hello");
  });
  document.getElementById("previous").addEventListener("click", function() {
    alert("Hello");
  });
  document.getElementById("clear").addEventListener("click", function() {
    alert("Hello");
  });
  Array.from(document.getElementsByTagName("td")).forEach(function(square) {
    square.addEventListener("click", function() {
      doTurn(square);
    });
  });
}

function player() {
  return (turn % 2 == 1) ? "O" : "X"
};

function updateState(square) {
  square.innerHTML = player();
};

function setMessage(message) {
  messageDiv.innerHTML = message;
};

function checkWinner() {
  if (!!checkRows()) {
    const winner = squares[checkRows()[0]].innerHTML;
    setMessage("Player " + winner + " Won!")
    return true;
  } else {
    return false;
  }
}

function checkRows() {
  const rows = [[0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
  return rows.find(function(row) {
    const symbols = row.map(s => squares[s].innerHTML);
    return threeInRow(symbols) && noneEmpty(symbols);
  });
  // return [0, 1, 2].some(function(row_index) {
  //   const row = $("td[data-" + axis + "=" + row_index + "]");
  //   const symbols = $.makeArray(row).map(square => square.innerHTML);
  //   return threeInRow(symbols) && noneEmpty(symbols)
  // });
}

function threeInRow(symbols) {
  return [...new Set(symbols)].length == 1
}

function noneEmpty(symbols) {
  return !symbols.includes("");
}

function doTurn(square) {
  updateState(square);
  ++turn;
  if (checkWinner()) {
    reset();
  } else if (tieCheck()) {
    setMessage("Tie game.");
    reset();
  };
};

function tieCheck() {
  return Array.from(squares).map(i => i.innerHTML).filter(s => s === "").length === 0;
}

function reset() {
  turn = 0;
  Array.from(squares).map(i => i.innerHTML = "");
}
