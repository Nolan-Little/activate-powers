
activatePower = (id) => {
  let power = document.getElementById(id)
  power.classList.remove("disabled")
}
deactivatePower = (id) => {
  let power = document.getElementById(id)
  power.classList.add("disabled")
}

let flightButton = document.querySelector("#activate-flight").addEventListener("click", (target) => {
  activatePower("flight")
})
let mindButton = document.querySelector("#activate-mindreading").addEventListener("click", (target) => {
  activatePower("mindreading")
})
let xrayButton = document.querySelector("#activate-xray").addEventListener("click", (target) => {
  activatePower("xray")
})

let allActiveButton = document.querySelector("#activate-all").addEventListener("click", () => {
  activatePower("flight")
  activatePower("mindreading")
  activatePower("xray")
})
let disableButton = document.querySelector("#deactivate-all").addEventListener("click", () => {
  deactivatePower("flight")
  deactivatePower("mindreading")
  deactivatePower("xray")
})