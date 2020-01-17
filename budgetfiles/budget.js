

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
    value = Math.floor(value);
    console.log("The Set Value: " + value)
    var id = setInterval(frame, 15);
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
        width = Math.floor(width + 1);
        elem.style.width = width + "%";
        elem.innerHTML = "$" + width;
      }else if (width > value) {

        width = Math.floor(width - 1);
        elem.style.width = width + "%";
        elem.innerHTML = "$" + width;
      }
      if (width == "100") {
        elem.style.backgroundColor = "red";
        status.innerHTML = " Maxed spending on Auto Insurance!!!";
      }
    }

  }
}

function addauto() {
  if (i == 0) {
    i = 1;
    var elem = parseFloat(document.getElementById("autoinsurancebar").value);
    var status = document.getElementById("status");
    status.innerHTML = "";
    var value = parseFloat(document.getElementById("autotext").value);
    console.log("The Add Value: " + value)
    var id = setInterval(frame, 15);
    var count=elem + value;
    console.log("The Count Value: " + count)
      function frame() {
      if (width == count) {
        clearInterval(id);
        i = 0;
      } else if (count > 100) {
        status.innerHTML = " The Value is too large!";
        clearInterval(id);
        i = 0;
      } else if (count < 0) {
        status.innerHTML = " The Value must be bigger than $0!";
        clearInterval(id);
        i = 0;
      }
      else if (width < count) {
        width = width + 0.1;
        elem.style.width = width + "%";
        elem.innerHTML = "$" + width;
      } else if (width > count) {
        width = width - 0.1;
        elem.style.width = width + "%";
        elem.innerHTML = "$" + width;

      }
    }
  }
}