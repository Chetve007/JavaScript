var firstNumber = prompt("Введите первое число");
var secondNumber = prompt("Введите второе число");
var operator = prompt("Введите оператор");

if (isNaN(parseInt(firstNumber)) || isNaN(parseInt(secondNumber))) {
	alert("Вы ввели не число");
}

switch(operator) {
	case "+":
		console.log(Number(firstNumber) + Number(secondNumber));
		break;
	case "-":
		console.log (Number(firstNumber) - Number(secondNumber));
		break;
	case "/":
		console.log (Number(firstNumber) / Number(secondNumber));
		break;	
	case "*":
		console.log (Number(firstNumber) * Number(secondNumber));
		break;	
	default:
		alert("Данный оператор не существует");
}