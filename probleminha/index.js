function probleminha(num){
    if(typeof (num) !== 'number') {
      return `${num} não é um número`; 
    }
    else if (num % 3 === 0 && num % 5 === 0){
        return 'FIZZBUZZ'; 
    }
    else if (num % 3 === 0) {
        return 'FIZZ';
    }
    else if (num % 5 === 0){
        return 'BUZZ';
    }
    else if (num % 3 !== 0 && num % 5 !== 0){
        return `${num} não é divisível por 3 nem por 5`;
    } 
    
}
  
  probleminha(8);
  probleminha('oi');
