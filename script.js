const history = []; 
do{
  let operation;
  do{
      operation = +prompt(`please enter your operation: 
      1. sum
      2. diff
      3. mult
      4. div
      5. cos
      6. sin
      7. pow
      8. history`);
  }while (operation!==operation || operation<= 0 || operation > 8);
    let result;
        if(operation <5){
            const numberValueFirst = +prompt('please enter first number');
            const numberValueSecond = +prompt('please enter second number');
            switch(operation){
                case 1:
                    result = +numberValueFirst + numberValueSecond;
                    alert(result);
                    break;
                case 2:
                    result = numberValueFirst - numberValueSecond;
                    alert(result);
                    break;
                case 3:
                    result = numberValueFirst * numberValueSecond;
                    alert(result);
                    break;
                case 4:
                    result = numberValueFirst / numberValueSecond;
                    alert(result);
                    break;
            }
    }else if(operatoin =>5){
        const operand = + prompt('please enter your number');
        if(operation == 5){
            result = `cos(${operand}) is ${Math.cos(operand)}`;
        }else if(operation == 6){
            result = `sin(${operand}) is ${Math.sin(operand)}`;
        }else if(operation == 7){
            result = `pow(${operand}) is ${Math.pow(operand)}`;
        }
    else if(operation == 8){
        history[history.length]=result;
    }
        alert(`Result of your operation is ${result}`);
    }
}while (confirm (`Do you whant to repaet calculation?`));


 

