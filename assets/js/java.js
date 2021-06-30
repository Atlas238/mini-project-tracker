

function update() {
    var clock = moment().format(`MMMM Do, YYYY hh:mm:ss`)
    $("#clock").text(clock);
  
  setInterval(update, 1000);
}

update();


