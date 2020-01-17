

var i = 0;
var width = 0;
var count = 0;
function setauto() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("autoinsurancebar");
    elem.style.backgroundColor = "#42f554";
    var status = document.getElementById("status");
    status.innerHTML = "";
    var value = parseFloat(document.getElementById("autotext").value);
    value = Math.floor((value) * 100) / 100;
    console.log("The Set Value: " + value)
    var id = setInterval(frame, 1);
    function frame() {
      if (width == value) {
        clearInterval(id);
        i = 0;
      } else if (value > 100) {
        status.innerHTML = " The Value is too large!";
        clearInterval(id);
        i = 0;
      } else if (value < 0) {
        status.innerHTML = " The Value must be bigger than $0!";
        clearInterval(id);
        i = 0;
      }
      else if (width < value) {
        if((width+1) < value){
          width = width + 1;
          width = Math.round((width) * 100) / 100;
          elem.style.width = width + "%";
          elem.innerHTML = "$" + width;
        }
        else{
          width = width + 0.01;
          width = Math.round((width) * 100) / 100;
          elem.style.width = width + "%";
          elem.innerHTML = "$" + width;
        }
      }else if (width > value) {
        if((width-1) > value){
          width = width - 1;
          width = Math.round((width) * 100) / 100;
          elem.style.width = width + "%";
          elem.innerHTML = "$" + width;
        }
        else{
          width = width - 0.01;
          width = Math.round((width) * 100) / 100;
          elem.style.width = width + "%";
          elem.innerHTML = "$" + width;
        }
      }
      if (width == "100") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Auto Insurance!!!";
      }
    }

  }
}

function addauto() {
  var value = parseFloat(document.getElementById("autotext").value);
    value = Math.floor((value) * 100) / 100;
    value = value + width;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("autoinsurancebar");
    elem.style.backgroundColor = "#42f554";
    var status = document.getElementById("status");
    status.innerHTML = "";
    console.log("The Set Value: " + value)
    var id = setInterval(frame, 1);
    function frame() {
      if (width == value) {
        clearInterval(id);
        i = 0;
      } else if (value > 100) {
        status.innerHTML = " The Value is too large!";
        clearInterval(id);
        i = 0;
      } else if (value < 0) {
        status.innerHTML = " The Value must be bigger than $0!";
        clearInterval(id);
        i = 0;
      }
      else if (width < value) {
        if((width+1) < value){
          width = width + 1;
          width = Math.round((width) * 100) / 100;
          elem.style.width = width + "%";
          elem.innerHTML = "$" + width;
        }
        else{
          width = width + 0.01;
          width = Math.round((width) * 100) / 100;
          elem.style.width = width + "%";
          elem.innerHTML = "$" + width;
        }
      }else if (width > value) {
        if((width-1) > value){
          width = width - 1;
          width = Math.round((width) * 100) / 100;
          elem.style.width = width + "%";
          elem.innerHTML = "$" + width;
        }
        else{
          width = width - 0.01;
          width = Math.round((width) * 100) / 100;
          elem.style.width = width + "%";
          elem.innerHTML = "$" + width;
        }
      }
      if (width == "100") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Auto Insurance!!!";
      }
    }

  }
}

function subtractauto() {
  var value = parseFloat(document.getElementById("autotext").value);
    value = Math.floor((value) * 100) / 100;
    value = value - width;
    value = value * -1;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("autoinsurancebar");
    elem.style.backgroundColor = "#42f554";
    var status = document.getElementById("status");
    status.innerHTML = "";
    console.log("The Set Value: " + value)
    var id = setInterval(frame, 1);
    function frame() {
      if (width == value) {
        clearInterval(id);
        i = 0;
      } else if (value > 100) {
        status.innerHTML = " The Value is too large!";
        clearInterval(id);
        i = 0;
      } else if (value < 0) {
        status.innerHTML = " The Value must be bigger than $0!";
        clearInterval(id);
        i = 0;
      }
      else if (width < value) {
        if(width == 0){
         status.innerHTML = " The Value must be bigger than $0!";
         clearInterval(id);
         i = 0;
        }
        else if((width+1) < value){
          width = width + 1;
          width = Math.round((width) * 100) / 100;
          elem.style.width = width + "%";
          elem.innerHTML = "$" + width;
        }
        else{
          width = width + 0.01;
          width = Math.round((width) * 100) / 100;
          elem.style.width = width + "%";
          elem.innerHTML = "$" + width;
        }
      }else if (width > value) {
        if((width-1) > value){
          width = width - 1;
          width = Math.round((width) * 100) / 100;
          elem.style.width = width + "%";
          elem.innerHTML = "$" + width;
        }
        else{
          width = width - 0.01;
          width = Math.round((width) * 100) / 100;
          elem.style.width = width + "%";
          elem.innerHTML = "$" + width;
        }
      }
      if (width == "100") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Auto Insurance!!!";
      }
    }

  }
}


