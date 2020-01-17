var i = 0;
var autowidth = 0;
var automax = 100;
var homewidth = 0;
var homemax = 200;
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
      if (autowidth == value) {
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
      else if (autowidth < value) {
        if((autowidth+1) < value){
          autowidth = autowidth + 1;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
        }
        else{
          autowidth = autowidth + 0.01;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
        }
      }else if (autowidth > value) {
        if((autowidth-1) > value){
          autowidth = autowidth - 1;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
        }
        else{
          autowidth = autowidth - 0.01;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
        }
      }
      if (autowidth == "100") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Auto Insurance!!!";
      }
    }

  }
}

function addauto() {
  var value = parseFloat(document.getElementById("autotext").value);
  var autopercent = parseInt(document.getElementById("autopercent").value);
    value = Math.floor((value) * 100) / 100;
    value = value + autowidth;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("autoinsurancebar");
    elem.style.backgroundColor = "#42f554";
    var status = document.getElementById("status");
    status.innerHTML = "";
    console.log("The Set Value: " + value)
    console.log("The Percent Value: " + autopercent)
    var id = setInterval(frame, 1);
    function frame() {
      if (autowidth == value) {
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
      else if (autowidth < value) {
        if((autowidth+1) < value){
          autowidth = autowidth + 1;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
          autopercent.innerHTML = autowidth / 200;
        }
        else{
          autowidth = autowidth + 0.01;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
        }
      }else if (autowidth > value) {
        if((autowidth-1) > value){
          autowidth = autowidth - 1;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
        }
        else{
          autowidth = autowidth - 0.01;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
        }
      }
      if (autowidth == "100") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Auto Insurance!!!";
      }
    }

  }
}

function subtractauto() {
  var value = parseFloat(document.getElementById("autotext").value);
    value = Math.floor((value) * 100) / 100;
    value = value - autowidth;
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
      if (autowidth == value) {
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
      else if (autowidth < value) {
        if(autowidth == 0){
         status.innerHTML = " The Value must be bigger than $0!";
         clearInterval(id);
         i = 0;
        }
        else if((autowidth+1) < value){
          autowidth = autowidth + 1;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
        }
        else{
          autowidth = autowidth + 0.01;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
        }
      }else if (autowidth > value) {
        if((autowidth-1) > value){
          autowidth = autowidth - 1;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
        }
        else{
          autowidth = autowidth - 0.01;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
        }
      }
      if (autowidth == "100") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Auto Insurance!!!";
      }
    }

  }
}


function sethome() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("homebar");
    elem.style.backgroundColor = "#42f554";
    var status = document.getElementById("status");
    status.innerHTML = "";
    var value = parseFloat(document.getElementById("hometext").value);
    value = Math.floor((value) * 100) / 100;
    console.log("The Set Value: " + value)
    var id = setInterval(frame, 1);
    function frame() {
      if (homewidth == value) {
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
      else if (homewidth < value) {
        if((homewidth+1) < value){
          homewidth = homewidth + 1;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = homewidth + "%";
          elem.innerHTML = "$" + homewidth;
        }
        else{
          homewidth = homewidth + 0.01;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = homewidth + "%";
          elem.innerHTML = "$" + homewidth;
        }
      }else if (homewidth > value) {
        if((homewidth-1) > value){
          homewidth = homewidth - 1;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = homewidth + "%";
          elem.innerHTML = "$" + homewidth;
        }
        else{
          homewidth = homewidth - 0.01;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = homewidth + "%";
          elem.innerHTML = "$" + homewidth;
        }
      }
      if (homewidth == "100") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Home!!!";
      }
    }

  }
}

function addhome() {
  var value = parseFloat(document.getElementById("hometext").value);
    value = Math.floor((value) * 100) / 100;
    value = value + homewidth;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("homebar");
    elem.style.backgroundColor = "#42f554";
    var status = document.getElementById("status");
    status.innerHTML = "";
    console.log("The Set Value: " + value)
    var id = setInterval(frame, 1);
    function frame() {
      if (homewidth == value) {
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
      else if (homewidth < value) {
        if((homewidth+1) < value){
          homewidth = homewidth + 1;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = homewidth + "%";
          elem.innerHTML = "$" + homewidth;
        }
        else{
          homewidth = homewidth + 0.01;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = homewidth + "%";
          elem.innerHTML = "$" + homewidth;
        }
      }else if (homewidth > value) {
        if((homewidth-1) > value){
          homewidth = homewidth - 1;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = homewidth + "%";
          elem.innerHTML = "$" + homewidth;
        }
        else{
          homewidth = homewidth - 0.01;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = homewidth + "%";
          elem.innerHTML = "$" + homewidth;
        }
      }
      if (homewidth == "100") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Home!!!";
      }
    }

  }
}

function subtracthome() {
  var value = parseFloat(document.getElementById("hometext").value);
    value = Math.floor((value) * 100) / 100;
    value = value - homewidth;
    value = value * -1;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("homebar");
    elem.style.backgroundColor = "#42f554";
    var status = document.getElementById("status");
    status.innerHTML = "";
    console.log("The Set Value: " + value)
    var id = setInterval(frame, 1);
    function frame() {
      if (homewidth == value) {
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
      else if (homewidth < value) {
        if(homewidth == 0){
         status.innerHTML = " The Value must be bigger than $0!";
         clearInterval(id);
         i = 0;
        }
        else if((homewidth+1) < value){
          homewidth = homewidth + 1;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = homewidth + "%";
          elem.innerHTML = "$" + homewidth;
        }
        else{
          homewidth = homewidth + 0.01;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = homewidth + "%";
          elem.innerHTML = "$" + homewidth;
        }
      }else if (homewidth > value) {
        if((homewidth-1) > value){
          homewidth = homewidth - 1;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = homewidth + "%";
          elem.innerHTML = "$" + homewidth;
        }
        else{
          homewidth = homewidth - 0.01;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = homewidth + "%";
          elem.innerHTML = "$" + homewidth;
        }
      }
      if (homewidth == "100") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Home!!!";
      }
    }

  }
}