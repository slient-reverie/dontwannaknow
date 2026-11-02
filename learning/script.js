function calc() {
  let food = document.getElementById("foodName").value;
  let grams = Number(document.getElementById("grams").value);
    let calories = Math.round(grams / 100 * 116);
  document.getElementById("result").innerText =
    food + " " + grams + "克 ≈ " + calories + "千卡";
}