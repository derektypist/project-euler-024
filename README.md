# Project Euler 024 - Lexicographic Permutations

A permutation is an ordered arrangement of objects.  For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.  If all the permutations are listed numerically or alphabetically, we call it lexicographic order.  The lexicographic permutations of 0, 1 and 2 are:

    012 021 102 120 201 210

The aim is to find the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 using HTML Forms and JavaScript.  For example, 1000000th, which is at index 999999.

Information at [Project Euler 024](https://projecteuler.net/problem=24)

## UX

**Getting Started**

Enter a whole number between 1 and 3628800 in the input field and click on the Submit Button.  As long as your input is valid, you will see the number entered (position) as well as the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9.  For example, if you entered 700000 (which is index 699999), you would expect to get 1938246570.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message if I do any of:

- Not enter anything in the input field
- Enter text other than a number
- Entering a number less than 1 or greater than 3628800 (10!)
- Entering a number, but it is not an integer

As a user, I expect the function `lexicographicPermutations(699999)` (position 700000th) to return a number.

As a user, I expect the function `lexicographicPermutations(699999)` (position 700000th) to return 1938246570.

As a user, I expect the function `lexicographicPermutations(899999)` (position 900000th) to return 2536987410.

As a user, I expect the function `lexicographicPermutations(900000)` (position 900001st) to return 2537014689.

As a user, I expect the function `lexicographicPermutations(999999)` (position 1000000th) to return 2783915460.

**Information Architecture**

The function `lexicographicPermutations(n)` returns a number, where `n` is a number index between 0 and 3628799.  The number index is the position minus 1.  For example, the 3rd number is the number at index 2.

## Features

Allows the user to enter the number position as well as getting the lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 in that position.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.0-Beta1 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-024) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)