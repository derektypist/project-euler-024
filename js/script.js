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
        txt += `Lexicographic Permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 at Position ${num} is ${lexicographicPermutations(numIndex)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}