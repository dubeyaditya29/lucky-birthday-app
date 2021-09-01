function findLucky() {
  var date = document.querySelector("#date").value;
  //console.log(date);
  var sum = 0;
  for (var i = 0; i < date.length; i++) {
    var num = parseInt(date.charAt(i), 10);
    if (!isNaN(num)) {
      sum += num;
    }
  }
  //console.log(sum);
  var luckyInputNumber = document.querySelector("#luckyInputNumber").value;
  var ans = sum / luckyInputNumber;
  console.log(ans);
  //   var displayInput = document.querySelector("#displayInput");
  //
  //   console.log("Clicked");

  if (sum % luckyInputNumber === 0) {
    displayInput.value = "Your selected number is lucky for you!";
  } else {
    displayInput.value = "Your selected number is not lucky for you!";
  }
}
