function loadTestcase(evt, id, testcaseName) {
  // Get all elements with class="tablinks" and remove the class "active"
  var tablinks = document.getElementById(id).querySelectorAll(".tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  var _in = document.getElementById(id + "_in_" + testcaseName).innerHTML;
  var _out = document.getElementById(id + "_out_" + testcaseName).innerHTML;
  document.getElementById(id + "_in").innerHTML = _in;
  document.getElementById(id + "_out").innerHTML = _out;
  evt.currentTarget.className += " active";
}

window.loadTestcase = loadTestcase;
