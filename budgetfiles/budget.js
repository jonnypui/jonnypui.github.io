var i = 0;
var autowidth = 0;
var automax = 100;
var homewidth = 0;
var homemax = 200;

function setauto() {
  if (i == 0) {
    i = 1;
    var autopercent = document.getElementById("autopercent");
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
          autopercent.innerHTML = ((autowidth / automax) * 100).toFixed(2);
        }
        else{
          autowidth = autowidth + 0.01;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
          autopercent.innerHTML = ((autowidth / automax) * 100).toFixed(2);
        }
      }else if (autowidth > value) {
        if((autowidth-1) > value){
          autowidth = autowidth - 1;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
          autopercent.innerHTML = ((autowidth / automax) * 100).toFixed(2);
        }
        else{
          autowidth = autowidth - 0.01;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
          autopercent.innerHTML = ((autowidth / automax) * 100).toFixed(2);
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

    value = Math.floor((value) * 100) / 100;
    value = value + autowidth;
  if (i == 0) {
    i = 1;
    var autopercent = document.getElementById("autopercent");
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
        if((autowidth+1) < value){
          autowidth = autowidth + 1;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
          autopercent.innerHTML = ((autowidth / automax) * 100).toFixed(2);
        }
        else{
          autowidth = autowidth + 0.01;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
          autopercent.innerHTML = ((autowidth / automax) * 100).toFixed(2);
        }
      }else if (autowidth > value) {
        if((autowidth-1) > value){
          autowidth = autowidth - 1;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
          autopercent.innerHTML = ((autowidth / automax) * 100).toFixed(2);
        }
        else{
          autowidth = autowidth - 0.01;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
          autopercent.innerHTML = ((autowidth / automax) * 100).toFixed(2);
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
  var autopercent = document.getElementById("autopercent");
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
          autopercent.innerHTML = ((autowidth / automax) * 100).toFixed(2);
        }
        else{
          autowidth = autowidth + 0.01;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
          autopercent.innerHTML = ((autowidth / automax) * 100).toFixed(2);
        }
      }else if (autowidth > value) {
        if((autowidth-1) > value){
          autowidth = autowidth - 1;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
          autopercent.innerHTML = ((autowidth / automax) * 100).toFixed(2);
        }
        else{
          autowidth = autowidth - 0.01;
          autowidth = Math.round((autowidth) * 100) / 100;
          elem.style.width = autowidth + "%";
          elem.innerHTML = "$" + autowidth;
          autopercent.innerHTML = ((autowidth / automax) * 100).toFixed(2);
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
    var homepercent = document.getElementById("homepercent");
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
      } else if (value > 200) {
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
          elem.style.width = ((homewidth/homemax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + homewidth;
          homepercent.innerHTML = ((homewidth / homemax) * 100).toFixed(2);
        }
        else{
          homewidth = homewidth + 0.01;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = ((homewidth/homemax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + homewidth;
          homepercent.innerHTML = ((homewidth / homemax) * 100).toFixed(2);
        }
      }else if (homewidth > value) {
        if((homewidth-1) > value){
          homewidth = homewidth - 1;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = ((homewidth/homemax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + homewidth;
          homepercent.innerHTML = ((homewidth / homemax) * 100).toFixed(2);
        }
        else{
          homewidth = homewidth - 0.01;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = ((homewidth/homemax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + homewidth;
          homepercent.innerHTML = ((homewidth / homemax) * 100).toFixed(2);
        }
      }
      if (homewidth == "200") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Home Utilities!!!";
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
  var homepercent = document.getElementById("homepercent");
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
    } else if (value > 200) {
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
        elem.style.width = ((homewidth/homemax)* 100).toFixed(2) + "%";
        elem.innerHTML = "$" + homewidth;
        homepercent.innerHTML = ((homewidth / homemax) * 100).toFixed(2);
      }
      else{
        homewidth = homewidth + 0.01;
        homewidth = Math.round((homewidth) * 100) / 100;
        elem.style.width = ((homewidth/homemax)* 100).toFixed(2) + "%";
        elem.innerHTML = "$" + homewidth;
        homepercent.innerHTML = ((homewidth / homemax) * 100).toFixed(2);
      }
    }else if (homewidth > value) {
      if((homewidth-1) > value){
        homewidth = homewidth - 1;
        homewidth = Math.round((homewidth) * 100) / 100;
        elem.style.width = ((homewidth/homemax)* 100).toFixed(2) + "%";
        elem.innerHTML = "$" + homewidth;
        homepercent.innerHTML = ((homewidth / homemax) * 100).toFixed(2);
      }
      else{
        homewidth = homewidth - 0.01;
        homewidth = Math.round((homewidth) * 100) / 100;
        elem.style.width = ((homewidth/homemax)* 100).toFixed(2) + "%";
        elem.innerHTML = "$" + homewidth;
        homepercent.innerHTML = ((homewidth / homemax) * 100).toFixed(2);
      }
    }
    if (homewidth == "200") {
      elem.style.backgroundColor = "red";
      status.innerHTML = " Maxed spending on Home Utilities!!!";
    }
  }

}
}

function subtracthome() {
  var homepercent = document.getElementById("homepercent");
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
      } else if (value > 200) {
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
          elem.style.width = ((homewidth/homemax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + homewidth;
          homepercent.innerHTML = ((homewidth / homemax) * 100).toFixed(2);
        }
        else{
          homewidth = homewidth + 0.01;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = ((homewidth/homemax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + homewidth;
          homepercent.innerHTML = ((homewidth / homemax) * 100).toFixed(2);
        }
      }else if (homewidth > value) {
        if((homewidth-1) > value){
          homewidth = homewidth - 1;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = ((homewidth/homemax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + homewidth;
          homepercent.innerHTML = ((homewidth / homemax) * 100).toFixed(2);
        }
        else{
          homewidth = homewidth - 0.01;
          homewidth = Math.round((homewidth) * 100) / 100;
          elem.style.width = ((homewidth/homemax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + homewidth;
          homepercent.innerHTML = ((homewidth / homemax) * 100).toFixed(2);
        }
      }
      if (homewidth == "200") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on home Insurance!!!";
      }
    }

  }
}