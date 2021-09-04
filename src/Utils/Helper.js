// Making the postfix Expression from the array 
export function postfixExpression(exp) {
    // create variable for storing operator and numbers
    let stack = [];
    let i = 0;
    let res = [];
   
    // Loop through each number of the equation
    for (const c of exp) {
        // put only the numbers in res array
      if (!isNaN(c)) res[i++] = c;
      else {
        //   checking the bracker opening and push the bracket to the stack array
        switch (c) {
          case "(":
            stack.push(c);
            break;
          case "/":
            // check if the last element of stack array is / or * then insert into the res array  
            // and push the * or / operator on the stack array
          case "*":  
            while (
              stack[stack.length - 1] === "/" ||
              stack[stack.length - 1] === "*"
            ) {
              res[i++] = stack.pop();
            }
            stack.push(c);
            break;
          case "+":
            // check if the last element of stack array is /, *, +, - then insert into the res array  
            // and push the /, *, +, - operator on the stack array
          case "-":
            while (
              stack[stack.length - 1] === "/" ||
              stack[stack.length - 1] === "*" ||
              stack[stack.length - 1] === "+" ||
              stack[stack.length - 1] === "-"
            ) {
              res[i++] = stack.pop();
            }
            stack.push(c);
            break;
          case ")":
            while (stack[stack.length - 1] !== "(") res[i++] = stack.pop();
            stack.pop();
            break;
          default:
            break;
        }
      }
    }
    
    while (stack.length !== 0) {
      res[i++] = stack.pop();
    }
   
    return res.join(" ");
}

// Calculate the answer of the equation
export function calculateEquation(exp){
    let string = exp.join('')
    return string = eval(string)
}

// calculator 2D array layout
export const CalculatorLayout = [
    ['(','CE',')','C'],
    [1,2,3,'+'],
    [4,5,6,'-'],
    [7,8,9,'*'],
    ['.',0,'=','/']
];

