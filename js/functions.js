function callAlert() {
  alert("hello");
}
callAlert();

function calculate() {

  // Askes the user how much their meal was.
  x = prompt("How much $ was your meal?");
  mealTotal = Number(x);

  // Prints out the total as entered at the prompt.
  document.getElementById("total").innerHTML = "$" + mealTotal.toFixed(2);

  try {
    // Makes sure user imputs more than $0.
    if(mealTotal <= 0) throw "Make sure you enter a value greater than $0 :)";

    // Gets total for 0%
    var total0Tip =
    document.getElementById("0totalTip").innerHTML = "$" + mealTotal.toFixed(2);

    // Calculates 5% Tip
    var tipFive = mealTotal * 0.05;
    document.getElementById("5tip").innerHTML = "$" + tipFive.toFixed(2);
    // Adds 5% to Total
    var total5Tip = mealTotal + tipFive;
    document.getElementById("5totalTip").innerHTML = "$" + total5Tip.toFixed(2);

    // Calculates 10% Tip
    var tipTen = mealTotal * 0.10;
    document.getElementById("10tip").innerHTML = "$" + tipTen.toFixed(2);
    // Adds 10% to Total
    var total10Tip = mealTotal + tipTen;
    document.getElementById("10totalTip").innerHTML = "$" + total10Tip.toFixed(2);

    // Calculates 15% Tip
    var tipFifteen = mealTotal * 0.15;
    document.getElementById("15tip").innerHTML = "$" + tipFifteen.toFixed(2);
    // Adds 15% to Total
    var total15Tip = mealTotal + tipFifteen;
    document.getElementById("15totalTip").innerHTML = "$" + total15Tip.toFixed(2);

    // Calculates 20% Tip
    var tipTwenty = mealTotal * 0.20;
    document.getElementById("20tip").innerHTML = "$" + tipTwenty.toFixed(2);
    // Adds 20% to Total
    var total20Tip = mealTotal + tipTwenty;
    document.getElementById("20totalTip").innerHTML = "$" + total20Tip.toFixed(2);

  }
  catch(err) {
    document.getElementById("total").innerHTML = err;
  }
}
