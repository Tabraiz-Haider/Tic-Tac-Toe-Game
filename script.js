// Game state variables
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

// Function to handle cell clicks
const handleCellClick = (index) => {
    if (gameBoard[index] === '' && !gameOver) {
        gameBoard[index] = currentPlayer;
        document.getElementById(`cell-${index}`).textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
};

// Function to check for a winner
const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
        [0, 4, 8], [2, 4, 6]             // Diagonal
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameOver = true;
            alert(`${gameBoard[a]} wins!`);
            return;
        }
    }

    // Check for draw
    if (!gameBoard.includes('')) {
        gameOver = true;
        alert("It's a draw!");
    }
};

// Reset the game
const resetGame = () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    currentPlayer = 'X';
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell-${i}`).textContent = '';
    }
};

// Set up event listeners
document.getElementById('resetBtn').addEventListener('click', resetGame);
for (let i = 0; i < 9; i++) {
    document.getElementById(`cell-${i}`).addEventListener('click', () => handleCellClick(i));
}
