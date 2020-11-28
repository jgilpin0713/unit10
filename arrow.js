function double(arr) {
    return arr.map((val) => val *2);
  }
  
  
  function squareAndFindEvens(numbers){
    let squares = numbers.map(num => num **2);
     
    let evens = squares.filter(square => square % 2 === 0);
    }