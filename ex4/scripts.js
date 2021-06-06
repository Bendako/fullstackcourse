// Exercise 1
document.write("<h1>Exercise 1</h1>");
let x = 3;
let y = 10;

if (x > y) {
  document.write(x);
} else {
  document.write(y);
}

// Exercise 2
document.write("<h1>Exercise 2</h1>");
let num1 = 4;
let num2 = -7;
let num3 = -11;
let sum = num1 + num2 + num3;
if (sum > 0) {
  document.write("+ הסימן הוא:");
} else {
  document.write("- הסימן הוא:");
}

// Exercise 3
document.write("<h1>Exercise 3</h1>");
let unOrderList = [1, 9, 3];
let newList = [];
if (unOrderList[0] > unOrderList[1]) {
  [newList[1], newList[0]] = [unOrderList[0], unOrderList[1]];
} else {
  [newList[1], newList[0]] = [unOrderList[1], unOrderList[0]];
}
if (unOrderList[0] > unOrderList[2]) {
  [newList[0], newList[2]] = [unOrderList[2], unOrderList[0]];
} else {
  [newList[2], newList[0]] = [unOrderList[2], unOrderList[0]];
}
if (unOrderList[1] > unOrderList[2]) {
  [newList[1], newList[2]] = [unOrderList[2], unOrderList[1]];
} else {
  [newList[2], newList[1]] = [unOrderList[2], unOrderList[1]];
}
document.write(newList);

// Exercise 4
document.write("<h1>Exercise 4</h1>");
let maxOfArray = [1, 2, 3, 4, 5];
if (
  maxOfArray[0] >
  (maxOfArray[1] && maxOfArray[2] && maxOfArray[3] && maxOfArray[4])
) {
  document.write(maxOfArray[0]);
}
if (
  maxOfArray[1] >
  (maxOfArray[0] && maxOfArray[2] && maxOfArray[3] && maxOfArray[4])
) {
  document.write(maxOfArray[1]);
}
if (
  maxOfArray[2] >
  (maxOfArray[0] && maxOfArray[2] && maxOfArray[3] && maxOfArray[4])
) {
  document.write(maxOfArray[2]);
}
if (
  maxOfArray[3] >
  (maxOfArray[0] && maxOfArray[1] && maxOfArray[2] && maxOfArray[4])
) {
  document.write(maxOfArray[3]);
}
if (
  maxOfArray[4] >
  (maxOfArray[0] && maxOfArray[1] && maxOfArray[2] && maxOfArray[3])
) {
  document.write(maxOfArray[4]);
}

// Exercise 5
document.write("<h1>Exercise 5</h1>");
let evenOddArr = [3, 7, 14, 41, 20];
if (evenOddArr[0] % 2 == 0) {
  document.write("Number " + evenOddArr[0] + " is even <br>");
} else {
  document.write("Number " + evenOddArr[0] + " is odd <br>");
}
if (evenOddArr[1] % 2 == 0) {
  document.write("Number " + evenOddArr[1] + " is even <br>");
} else {
  document.write("Number " + evenOddArr[1] + " is odd <br>");
}
if (evenOddArr[2] % 2 == 0) {
  document.write("Number " + evenOddArr[2] + " is even <br>");
} else {
  document.write("Number " + evenOddArr[2] + " is odd <br>");
}
if (evenOddArr[3] % 2 == 0) {
  document.write("Number " + evenOddArr[3] + " is even <br>");
} else {
  document.write("Number " + evenOddArr[3] + " is odd <br>");
}
if (evenOddArr[4] % 2 == 0) {
  document.write("Number " + evenOddArr[4] + " is even <br>");
} else {
  document.write("Number " + evenOddArr[4] + " is odd");
}
