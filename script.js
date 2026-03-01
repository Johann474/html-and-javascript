function findGreatest() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let c = Number(document.getElementById("num3").value);

  let greatest = Math.max(a, b, c);
  document.getElementById("result").innerText = "Greatest number is: " + greatest;
}
