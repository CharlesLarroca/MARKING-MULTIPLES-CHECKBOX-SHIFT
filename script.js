const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked //recebe o ultimo checkbox clicado

function handleCheck(e){
  let inBetween = false
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween //altera para true caso o checkbox esteja entre o 1ºthis e o ultimo lastchecked
      }
      if (inBetween) {
        checkbox.checked = true //se o inbetween for true, marca o checkbox
      }
    })
  }
  lastChecked = this //this é o checkbox clicado no momento
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck)
})