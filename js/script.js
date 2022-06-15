// Set Up Global Constant
const FACTORIALS = Array(9).fill(0).reduce((factorials,_,idx) => {
    factorials.push(factorials[idx] * (idx+1));
    return factorials;
},[1]).reverse();

// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.toString().length == 0 || num<1 || num>3628800 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 3628800.`;
    } else {
        let numIndex = num - 1;
        txt += `You have entered the number ${num}. <p>`;
        txt += `Lexicographic Permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 at Position ${num} is `;
        /*
            Display Leading Zero if the Lexicographic Permutation is less than
            1000000000
        */
        if (lexicographicPermutations(numIndex) < 1000000000) {
            txt += `0${lexicographicPermutations(numIndex)}.`;
        } else {
            txt += `${lexicographicPermutations(numIndex)}.`;
        }
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to Return the Lexicographic Permutation of the digits
    0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 at index n
    (Position is n+1)
    lexicographicPermutations(699999) returns 1938246570
    lexicographicPermutations(899999) returns 2536987410
    lexicographicPermutations(900000) returns 2537014689
    lexicographicPermutations(999999) returns 2783915460

*/
function lexicographicPermutations(n) {
    const digits = [0,1,2,3,4,5,6,7,8,9];
    let permutation = "";
    for (let i=0;i<10;i++) {
        permutation += digits.splice(Math.floor(n/FACTORIALS[i]),1);
        n = n % FACTORIALS[i];
    }
    return Number(permutation);
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}