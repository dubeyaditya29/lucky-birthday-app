// function findLucky() {
//   var date = document.querySelector("#date").value;
//   //console.log(date);
//   var sum = 0;
//   for (var i = 0; i < date.length; i++) {
//     var num = parseInt(date.charAt(i), 10);
//     if (!isNaN(num)) {
//       sum += num;
//     }
//   }
//   //console.log(sum);
//   var luckyInputNumber = document.querySelector("#luckyInputNumber").value;
//   var ans = sum / luckyInputNumber;
//   console.log(ans);
//   //   var displayInput = document.querySelector("#displayInput");
//   //
//   //   console.log("Clicked");

//   if (sum % luckyInputNumber === 0) {
//     displayInput.value = "Your selected number is lucky for you!";
//   } else {
//     displayInput.value = "Your selected number is not lucky for you!";
//   }
// }
var date = document.querySelector("#date");
var luckyInputNumber = document.querySelector("#luckyInputNumber");
var button = document.querySelector("#btn");
var displayValue = document.querySelector("#displayInput");
// if (date.value === null || luckyInputNumber.value === null) {
//   displayValue.value = "Please Enter both the values 🤦‍♂️";
// }
function calculateSum(date) {
  var sum = 0;
  for (var i = 0; i < date.length; i++) {
    var num = date.charAt(i) * 1;
    if (!isNaN(date.charAt(i))) {
      sum += num;
    }
  }
  return sum;
}
function yourLucky(date, luckyInputNumber) {
  var bdate = calculateSum(date);
  var luckynumber = luckyInputNumber.value;
  return bdate % luckynumber;
}
function areYourLucky(yourLuckyNumber) {
  if (yourLuckyNumber === 0) {
    return true;
  } else {
    return false;
  }
}
button.addEventListener("click", function getDate() {
  if (areYourLucky(yourLucky(date.value, luckyInputNumber.value))) {
    displayInput.value = "You'r Lucky!😲";
  } else {
    if (date.value && luckyInputNumber.value) {
      displayInput.value = "Oops You'r not lucky!😑";
    } else {
      displayValue.value = "Enter both values🤦‍♂️";
    }
  }
  //calculateSum(date.value);
});
