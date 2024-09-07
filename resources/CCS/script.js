const article = document.querySelector("#navigation-bar"); 
const button = document.querySelector("button");

function openWindow1() {
    window.location.replace("bibliotecadigitale.html");
}

function openWindow() {
  window.location.replace("bibliotecadigitale.html");
}

function openWindow2() {
  window.location.replace("aboutus.html");
}

function openWindow3() {
  window.location.replace("https://www.google.com/");
}

function openWindow4() {
  window.location.replace("contattaci.html");
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



 function articleList3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}


window.onclick = function(event) {
 if (!event.target.matches('.dropbtn')) {
   var dropdowns = document.getElementsByClassName("dropdown-content3");
   var i;
   for (i = 0; i < dropdowns.length; i++) {
     var openDropdown = dropdowns[i];
     if (openDropdown.classList.contains('show')) {
       openDropdown.classList.remove('show');
     }
   }
 }
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


let processScroll = () => {
let docElem = document.documentElement, 
  docBody = document.body,
  scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
    scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
  scrollPercent = scrollTop / scrollBottom * 100 + '%';

// console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);

  document.getElementById("progress-bar").style.setProperty("--scrollAmount", scrollPercent); 
}

document.addEventListener('scroll', processScroll);

