const article = document.querySelector("#navigation-bar"); 
const button = document.querySelector("button");

function openWindow() {
    window.location.replace("aboutus.html");
}

function openWindow2() {
  window.location.replace("https://www.google.com/");
}


function articleList() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }


  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function articleList2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }



 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content2");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }


function openWindow2() {
    window.location.replace("https://www.w3schools.com");
}


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "<b>READ MORE</b>";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "<b>READ LESS</b>";
      moreText.style.display = "inline";
    }
  }  
