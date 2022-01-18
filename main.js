window.onresize = function(event) {
    document.location.reload(true);
  }
  
  var href = window.location.href.split("/")
  var html_location = href[href.length-1]
  
  if (window.innerWidth >= 960 && html_location !== "index.html") {
      window.location = "index.html";
  }
  
  if (window.innerWidth < 960 && html_location !== "index2.html") {
      window.location = "index2.html";
  }

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }