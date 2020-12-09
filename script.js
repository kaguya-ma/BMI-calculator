function calculateBmi() {
  let weight = document.querySelector("#weight").value
  console.log(weight)
  let height = document.querySelector("#height").value
  console.log(height)
  let meters = height / 100
  let squared = meters * meters
  let bmi = weight / squared
  bmi = Number((bmi).toFixed(2))
  document.querySelector("#result").innerHTML=bmi
}