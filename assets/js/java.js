function update() {
    var clock = document.getElementById(`#clock`)

    clock.textContent = moment().format(`MMMM Do, YYYY hh:mm:ss`)
  
  setInterval(update, 1000);
}

update();