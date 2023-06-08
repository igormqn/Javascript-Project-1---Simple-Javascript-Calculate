
// Add Function
 function addFunction(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
 }

 // Substract function
 function subtractFunction(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
 }

 // Multiply function
 function multiplyFunction(firstNumber, secondNumber) {
    return firstNumber * secondNumber
 }
// Divide function
function divideFunction(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}


 // First Step is to ask whick mode you want to calculate

 let choice // variable to ask the choice of the user it have to be declared outside of the loop to re use the variable inside the loop
 do {
 do {
  choice = Number(prompt("What do you wan to do?\n\n 1- Addition\n 2- Subtraction\n 3 - Multiplication\n 4 - Division\n")) /*Number the converts the string to a number*/ //
 } while (choice != 1 && choice != 2 && choice != 3 && choice != 4); // This limited the choice to four if someone put another numer than 4 then the choice is false and the loop restart
 
 let firstNumber
 let secondNumber
 do {
  firstNumber = Number(prompt('Enter your first number')); // Number is used to convert the string to number
  secondNumber = Number(prompt('Enter your second number'));

 } while(isNaN(firstNumber) || isNaN(secondNumber)) // We have to tell this is not a string if the user use a string instead of a number

 let result;
 try{
   switch(choice) {
    case 1 : 
      result = addFunction(firstNumber, secondNumber);
      break;
    case 2 : 
      result = subtractFunction(firstNumber, secondNumber);
      break;
    case 3 :
      result = multiplyFunction(firstNumber, secondNumber);
      break;
    case 4 : 
      result = divideFunction(firstNumber, secondNumber);     
      break;
    default:
      throw new Error("An error occurred")
  }
  alert ("The result is : " + result);
} catch(error) {
  alert(error);
}
restart = confirm("Would you like to start the calculation again");

}while(restart);










