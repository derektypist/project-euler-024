# Project Euler 024 - Lexicographic Permutations

A permutation is an ordered arrangement of objects.  For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.  If all the permutations are listed numerically or alphabetically, we call it lexicographic order.  The lexicographic permutations of 0, 1 and 2 are:

    012 021 102 120 201 210

The aim is to find the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 using HTML Forms and JavaScript.

Information at [Project Euler 024](https://projecteuler.net/problem=24)

## UX

**User Stories**

As a user, I expect the function `lexicographicPermutations(699999)` to return a number.

As a user, I expect the function `lexicographicPermutations(699999)` to return 1938246570.

As a user, I expect the function `lexicographicPermutations(899999)` to return 2536987410.

As a user, I expect the function `lexicographicPermutations(900000)` to return 2537014689.

As a user, I expect the function `lexicographicPermutations(999999)` to return 2783915460.

**Information Architecture**

The function `lexicographicPermutations(n)` returns a number, where `n` is a number index between 0 and 3628799.