console.log("Puzzle Selection Screen");

let solvedPuzzles = { Mandarin: false, SebFaulks: false, Library: false, VandA: false};

console.log(solvedPuzzles);

function showPuzzle(puzzleId) {
    document.getElementById('selection-screen').classList.add('hidden');
    document.getElementById(puzzleId).classList.remove('hidden');
    console.log("Puzzle " + puzzleId + " Shown");
}

function checkAnswer(inputId, correctAnswer, puzzleId) {
    const input = document.getElementById(inputId);
    if (input.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        solvedPuzzles[puzzleId] = true;
        document.getElementById(puzzleId).classList.add('hidden');
        document.getElementById(puzzleId + '-complete').classList.remove('hidden');
    } else {
        alert("Incorrect! Try again.");
    }
    console.log(solvedPuzzles);
}

function returnToSelection(puzzleId) {
    document.getElementById(puzzleId + '-complete').classList.add('hidden');
    document.getElementById('selection-screen').classList.remove('hidden');
    console.log("Puzzle Selection Screen");

    // Hide the button for completed puzzle
    const puzzleButton = document.getElementById(puzzleId + '-button');
    if (puzzleButton) {
        puzzleButton.classList.add('hidden');
    }

    checkGameCompletion(); // ✅ Now we check for completion when they return to selection
}

function checkGameCompletion() {
    if (solvedPuzzles.Mandarin && solvedPuzzles.SebFaulks && solvedPuzzles.Library && solvedPuzzles.VandA) {
        document.getElementById('intro-p').classList.add('hidden');
        document.getElementById('final').classList.remove('hidden');
        console.log("Final puzzle unlocked!");
    }
}

function checkFinalAnswer(inputId, correctAnswer, puzzleId) {
    const input = document.getElementById(inputId);
    if (input.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('selection-screen').classList.add('hidden');
        document.getElementById(puzzleId).classList.add('hidden');
        document.getElementById(puzzleId + '-complete').classList.remove('hidden');
    } else {
        alert("Incorrect! Try again.");
    }
    console.log("Completed game");
}