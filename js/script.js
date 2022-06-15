// Set Up Global Constant
const FACTORIALS = Array(9).fill(0).reduce((factorials,_,idx) => {
    factorials.push(factorials[idx] * (idx+1));
    return factorials;
},[1]).reverse();