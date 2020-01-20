var i = 0;
var autowidth = 0;
var automax = 100;
var homewidth = 0;
var homemax = 200;
var foodwidth = 0;
var foodmax = 300;
var hobbieswidth = 0;
var hobbiesmax = 150;

//Code for Auto Insurance
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

//code for home insurance

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

//code for Resturants & Groceries

function setfood() {
  if (i == 0) {
    i = 1;
    var foodpercent = document.getElementById("foodpercent");
    var elem = document.getElementById("foodbar");
    elem.style.backgroundColor = "#42f554";
    var status = document.getElementById("status");
    status.innerHTML = "";
    var value = parseFloat(document.getElementById("foodtext").value);
    value = Math.floor((value) * 100) / 100;
    console.log("The Set Value: " + value)
    var id = setInterval(frame, 1);
    function frame() {
      if (foodwidth == value) {
        clearInterval(id);
        i = 0;
      } else if (value > 300) {
        status.innerHTML = " The Value is too large!";
        clearInterval(id);
        i = 0;
      } else if (value < 0) {
        status.innerHTML = " The Value must be bigger than $0!";
        clearInterval(id);
        i = 0;
      }
      else if (foodwidth < value) {
        if((foodwidth+1) < value){
          foodwidth = foodwidth + 1;
          foodwidth = Math.round((foodwidth) * 100) / 100;
          elem.style.width = ((foodwidth/foodmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + foodwidth;
          foodpercent.innerHTML = ((foodwidth / foodmax) * 100).toFixed(2);
        }
        else{
          foodwidth = foodwidth + 0.01;
          foodwidth = Math.round((foodwidth) * 100) / 100;
          elem.style.width = ((foodwidth/foodmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + foodwidth;
          foodpercent.innerHTML = ((foodwidth / foodmax) * 100).toFixed(2);
        }
      }else if (foodwidth > value) {
        if((foodwidth-1) > value){
          foodwidth = foodwidth - 1;
          foodwidth = Math.round((foodwidth) * 100) / 100;
          elem.style.width = ((foodwidth/foodmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + foodwidth;
          foodpercent.innerHTML = ((foodwidth / foodmax) * 100).toFixed(2);
        }
        else{
          foodwidth = foodwidth - 0.01;
          foodwidth = Math.round((foodwidth) * 100) / 100;
          elem.style.width = ((foodwidth/foodmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + foodwidth;
          foodpercent.innerHTML = ((foodwidth / foodmax) * 100).toFixed(2);
        }
      }
      if (foodwidth == "300") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Food!!!";
      }
    }

  }
}

function addfood() {
  var value = parseFloat(document.getElementById("foodtext").value);
  value = Math.floor((value) * 100) / 100;
  value = value + foodwidth;
  if (i == 0) {
  i = 1;
  var foodpercent = document.getElementById("foodpercent");
  var elem = document.getElementById("foodbar");
  elem.style.backgroundColor = "#42f554";
  var status = document.getElementById("status");
  status.innerHTML = "";
  console.log("The Set Value: " + value)
  var id = setInterval(frame, 1);
  function frame() {
    if (foodwidth == value) {
      clearInterval(id);
      i = 0;
    } else if (value > 300) {
      status.innerHTML = " The Value is too large!";
      clearInterval(id);
      i = 0;
    } else if (value < 0) {
      status.innerHTML = " The Value must be bigger than $0!";
      clearInterval(id);
      i = 0;
    }
    else if (foodwidth < value) {
      if((foodwidth+1) < value){
        foodwidth = foodwidth + 1;
        foodwidth = Math.round((foodwidth) * 100) / 100;
        elem.style.width = ((foodwidth/foodmax)* 100).toFixed(2) + "%";
        elem.innerHTML = "$" + foodwidth;
        foodpercent.innerHTML = ((foodwidth / foodmax) * 100).toFixed(2);
      }
      else{
        foodwidth = foodwidth + 0.01;
        foodwidth = Math.round((foodwidth) * 100) / 100;
        elem.style.width = ((foodwidth/foodmax)* 100).toFixed(2) + "%";
        elem.innerHTML = "$" + foodwidth;
        foodpercent.innerHTML = ((foodwidth / foodmax) * 100).toFixed(2);
      }
    }else if (foodwidth > value) {
      if((foodwidth-1) > value){
        foodwidth = foodwidth - 1;
        foodwidth = Math.round((foodwidth) * 100) / 100;
        elem.style.width = ((foodwidth/foodmax)* 100).toFixed(2) + "%";
        elem.innerHTML = "$" + foodwidth;
        foodpercent.innerHTML = ((foodwidth / foodmax) * 100).toFixed(2);
      }
      else{
        foodwidth = foodwidth - 0.01;
        foodwidth = Math.round((foodwidth) * 100) / 100;
        elem.style.width = ((foodwidth/foodmax)* 100).toFixed(2) + "%";
        elem.innerHTML = "$" + foodwidth;
        foodpercent.innerHTML = ((foodwidth / foodmax) * 100).toFixed(2);
      }
    }
    if (foodwidth == "300") {
      elem.style.backgroundColor = "red";
      status.innerHTML = " Maxed spending on Food!!!";
    }
  }

}
}

function subtractfood() {
  var foodpercent = document.getElementById("foodpercent");
  var value = parseFloat(document.getElementById("foodtext").value);
    value = Math.floor((value) * 100) / 100;
    value = value - foodwidth;
    value = value * -1;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("foodbar");
    elem.style.backgroundColor = "#42f554";
    var status = document.getElementById("status");
    status.innerHTML = "";
    console.log("The Set Value: " + value)
    var id = setInterval(frame, 1);
    function frame() {
      if (foodwidth == value) {
        clearInterval(id);
        i = 0;
      } else if (value > 300) {
        status.innerHTML = " The Value is too large!";
        clearInterval(id);
        i = 0;
      } else if (value < 0) {
        status.innerHTML = " The Value must be bigger than $0!";
        clearInterval(id);
        i = 0;
      }
      else if (foodwidth < value) {
        if(foodwidth == 0){
         status.innerHTML = " The Value must be bigger than $0!";
         clearInterval(id);
         i = 0;
        }
        else if((foodwidth+1) < value){
          foodwidth = foodwidth + 1;
          foodwidth = Math.round((foodwidth) * 100) / 100;
          elem.style.width = ((foodwidth/foodmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + foodwidth;
          foodpercent.innerHTML = ((foodwidth / foodmax) * 100).toFixed(2);
        }
        else{
          foodwidth = foodwidth + 0.01;
          foodwidth = Math.round((foodwidth) * 100) / 100;
          elem.style.width = ((foodwidth/foodmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + foodwidth;
          foodpercent.innerHTML = ((foodwidth / foodmax) * 100).toFixed(2);
        }
      }else if (foodwidth > value) {
        if((foodwidth-1) > value){
          foodwidth = foodwidth - 1;
          foodwidth = Math.round((foodwidth) * 100) / 100;
          elem.style.width = ((foodwidth/foodmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + foodwidth;
          foodpercent.innerHTML = ((foodwidth / foodmax) * 100).toFixed(2);
        }
        else{
          foodwidth = foodwidth - 0.01;
          foodwidth = Math.round((foodwidth) * 100) / 100;
          elem.style.width = ((foodwidth/foodmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + foodwidth;
          foodpercent.innerHTML = ((foodwidth / foodmax) * 100).toFixed(2);
        }
      }
      if (foodwidth == "300") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Food!!!";
      }
    }

  }
}

//code for hobbies

function sethobbies() {
  if (i == 0) {
    i = 1;
    var hobbiespercent = document.getElementById("hobbiespercent");
    var elem = document.getElementById("hobbiesbar");
    elem.style.backgroundColor = "#42f554";
    var status = document.getElementById("status");
    status.innerHTML = "";
    var value = parseFloat(document.getElementById("hobbiestext").value);
    value = Math.floor((value) * 100) / 100;
    console.log("The Set Value: " + value)
    var id = setInterval(frame, 1);
    function frame() {
      if (hobbieswidth == value) {
        clearInterval(id);
        i = 0;
      } else if (value > 150) {
        status.innerHTML = " The Value is too large!";
        clearInterval(id);
        i = 0;
      } else if (value < 0) {
        status.innerHTML = " The Value must be bigger than $0!";
        clearInterval(id);
        i = 0;
      }
      else if (hobbieswidth < value) {
        if((hobbieswidth+1) < value){
          hobbieswidth = hobbieswidth + 1;
          hobbieswidth = Math.round((hobbieswidth) * 100) / 100;
          elem.style.width = ((hobbieswidth/hobbiesmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + hobbieswidth;
          hobbiespercent.innerHTML = ((hobbieswidth / hobbiesmax) * 100).toFixed(2);
        }
        else{
          hobbieswidth = hobbieswidth + 0.01;
          hobbieswidth = Math.round((hobbieswidth) * 100) / 100;
          elem.style.width = ((hobbieswidth/hobbiesmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + hobbieswidth;
          hobbiespercent.innerHTML = ((hobbieswidth / hobbiesmax) * 100).toFixed(2);
        }
      }else if (hobbieswidth > value) {
        if((hobbieswidth-1) > value){
          hobbieswidth = hobbieswidth - 1;
          hobbieswidth = Math.round((hobbieswidth) * 100) / 100;
          elem.style.width = ((hobbieswidth/hobbiesmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + hobbieswidth;
          hobbiespercent.innerHTML = ((hobbieswidth / hobbiesmax) * 100).toFixed(2);
        }
        else{
          hobbieswidth = hobbieswidth - 0.01;
          hobbieswidth = Math.round((hobbieswidth) * 100) / 100;
          elem.style.width = ((hobbieswidth/hobbiesmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + hobbieswidth;
          hobbiespercent.innerHTML = ((hobbieswidth / hobbiesmax) * 100).toFixed(2);
        }
      }
      if (hobbieswidth == "150") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Hobbies!!!";
      }
    }

  }
}

function addhobbies() {
  var value = parseFloat(document.getElementById("hobbiestext").value);
  value = Math.floor((value) * 100) / 100;
  value = value + hobbieswidth;
  if (i == 0) {
  i = 1;
  var hobbiespercent = document.getElementById("hobbiespercent");
  var elem = document.getElementById("hobbiesbar");
  elem.style.backgroundColor = "#42f554";
  var status = document.getElementById("status");
  status.innerHTML = "";
  console.log("The Set Value: " + value)
  var id = setInterval(frame, 1);
  function frame() {
    if (hobbieswidth == value) {
      clearInterval(id);
      i = 0;
    } else if (value > 150) {
      status.innerHTML = " The Value is too large!";
      clearInterval(id);
      i = 0;
    } else if (value < 0) {
      status.innerHTML = " The Value must be bigger than $0!";
      clearInterval(id);
      i = 0;
    }
    else if (hobbieswidth < value) {
      if((hobbieswidth+1) < value){
        hobbieswidth = hobbieswidth + 1;
        hobbieswidth = Math.round((hobbieswidth) * 100) / 100;
        elem.style.width = ((hobbieswidth/hobbiesmax)* 100).toFixed(2) + "%";
        elem.innerHTML = "$" + hobbieswidth;
        hobbiespercent.innerHTML = ((hobbieswidth / hobbiesmax) * 100).toFixed(2);
      }
      else{
        hobbieswidth = hobbieswidth + 0.01;
        hobbieswidth = Math.round((hobbieswidth) * 100) / 100;
        elem.style.width = ((hobbieswidth/hobbiesmax)* 100).toFixed(2) + "%";
        elem.innerHTML = "$" + hobbieswidth;
        hobbiespercent.innerHTML = ((hobbieswidth / hobbiesmax) * 100).toFixed(2);
      }
    }else if (hobbieswidth > value) {
      if((hobbieswidth-1) > value){
        hobbieswidth = hobbieswidth - 1;
        hobbieswidth = Math.round((hobbieswidth) * 100) / 100;
        elem.style.width = ((hobbieswidth/hobbiesmax)* 100).toFixed(2) + "%";
        elem.innerHTML = "$" + hobbieswidth;
        hobbiespercent.innerHTML = ((hobbieswidth / hobbiesmax) * 100).toFixed(2);
      }
      else{
        hobbieswidth = hobbieswidth - 0.01;
        hobbieswidth = Math.round((hobbieswidth) * 100) / 100;
        elem.style.width = ((hobbieswidth/hobbiesmax)* 100).toFixed(2) + "%";
        elem.innerHTML = "$" + hobbieswidth;
        hobbiespercent.innerHTML = ((hobbieswidth / hobbiesmax) * 100).toFixed(2);
      }
    }
    if (hobbieswidth == "150") {
      elem.style.backgroundColor = "red";
      status.innerHTML = " Maxed spending on Hobbies!!!";
    }
  }

}
}

function subtracthobbies() {
  var hobbiespercent = document.getElementById("hobbiespercent");
  var value = parseFloat(document.getElementById("hobbiestext").value);
    value = Math.floor((value) * 100) / 100;
    value = value - hobbieswidth;
    value = value * -1;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("hobbiesbar");
    elem.style.backgroundColor = "#42f554";
    var status = document.getElementById("status");
    status.innerHTML = "";
    console.log("The Set Value: " + value)
    var id = setInterval(frame, 1);
    function frame() {
      if (hobbieswidth == value) {
        clearInterval(id);
        i = 0;
      } else if (value > 150) {
        status.innerHTML = " The Value is too large!";
        clearInterval(id);
        i = 0;
      } else if (value < 0) {
        status.innerHTML = " The Value must be bigger than $0!";
        clearInterval(id);
        i = 0;
      }
      else if (hobbieswidth < value) {
        if(hobbieswidth == 0){
         status.innerHTML = " The Value must be bigger than $0!";
         clearInterval(id);
         i = 0;
        }
        else if((hobbieswidth+1) < value){
          hobbieswidth = hobbieswidth + 1;
          hobbieswidth = Math.round((hobbieswidth) * 100) / 100;
          elem.style.width = ((hobbieswidth/hobbiesmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + hobbieswidth;
          hobbiespercent.innerHTML = ((hobbieswidth / hobbiesmax) * 100).toFixed(2);
        }
        else{
          hobbieswidth = hobbieswidth + 0.01;
          hobbieswidth = Math.round((hobbieswidth) * 100) / 100;
          elem.style.width = ((hobbieswidth/hobbiesmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + hobbieswidth;
          hobbiespercent.innerHTML = ((hobbieswidth / hobbiesmax) * 100).toFixed(2);
        }
      }else if (hobbieswidth > value) {
        if((hobbieswidth-1) > value){
          hobbieswidth = hobbieswidth - 1;
          hobbieswidth = Math.round((hobbieswidth) * 100) / 100;
          elem.style.width = ((hobbieswidth/hobbiesmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + hobbieswidth;
          hobbiespercent.innerHTML = ((hobbieswidth / hobbiesmax) * 100).toFixed(2);
        }
        else{
          hobbieswidth = hobbieswidth - 0.01;
          hobbieswidth = Math.round((hobbieswidth) * 100) / 100;
          elem.style.width = ((hobbieswidth/hobbiesmax)* 100).toFixed(2) + "%";
          elem.innerHTML = "$" + hobbieswidth;
          hobbiespercent.innerHTML = ((hobbieswidth / hobbiesmax) * 100).toFixed(2);
        }
      }
      if (hobbieswidth == "150") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Hobbies!!!";
      }
    }

  }
}