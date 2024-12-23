class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <script src="./resources/CCS/script.js"></script>
        <header>
        	<section class="header" id="myHeader">
    	<div id="info-button">
      	<button class="info" onclick="openWindow2()">
        	<i class="fa-solid fa-play" style="color: rgb(255, 249, 254);"></i> ABOUT US
      	</button>
    	</div>
    	<div class="dropdown" id="articles">
      	<button onclick="articleList()" class="dropbtn"><i class="fa-solid fa-play fa-rotate-90" style="color: rgb(177, 236, 244);"></i> CRONACHE DISTOPICHE</button>
      	<div id="myDropdown1" class="dropdown-content1">
        	<a href="schizzidalladistopia.html">Schizzi dalla Distopia</a>
        	<a href="distopiaintemporeale.html">Distopia in Tempo Reale</a>
        	<a href="teoriaperil99percento.html"> Teoria per il 99%</a>
      	</div>
    	</div>
			<div class="dropdown" id="articles">
      	<button onclick="articleList3()" class="dropbtn"><i class="fa-solid fa-play fa-rotate-90" style="color: rgb(177, 236, 244);"></i> BIBLIOTECA<br>DIGITALE</button>
      	<div id="myDropdown3" class="dropdown-content3">
        	<a href="bibliotecadigitale.html"><i>Vai agli Scaffali ></i></a>
        	<a href="dispenseinmovimento.html">Dispense in Movimento</a>
      	</div>
    	</div>

    	<div id="header-logo">
      	<a href="index.html"> <img src= "https://i.ibb.co/LgYj2hy/SITO.png" alt="la 0" class="center"> </a>   
    	</div>
    	<div class="container">
<i>C O M I N G<br>S O O N</i>
    	</div>
    	<div class="container2">
      	<i>C O M I N G<br>S O O N</i>
    	</div>
    	<div id="contattaci">
      	<button class="info" onclick="openWindow4()">
      	CONTATTACI <i class="fa-solid fa-play fa-rotate-180" style="color: #fff9fe;"></i>
      	</button>
    	</div>
  	</section>
 	 
  	<section class="mobile-header">
 	 
    	<label class="menu-button-wrapper" for="">
    	<input type="checkbox" class="menu-button">
    	<div class="icon-wrapper">
      	<label class="hamburger">
        	<input class="hamburger-input" type="checkbox">
        	<span class="hamburger-line first"></span>
        	<span class="hamburger-line second"></span>
        	<span class="hamburger-line third"></span>
      	</label>
    	</div>
    	<div class="item-list">
      	<div class="item"><a href="aboutus.html" style="color:rgb(246, 9, 143);">ABOUT US</a></div>
      	<div class="item"><a href="distopiaintemporeale.html" style="color:rgb(246, 9, 143);">DISTOPIA IN TEMPO REALE</a></div>
      	<div class="item"><a href="schizzidalladistopia.html" style="color:rgb(246, 9, 143);">SCHIZZI DALLA DISTOPIA</a></div>
      	<div class="item"><a href="teoriaperil99percento.html" style="color:rgb(246, 9, 143);">TEORIA PER IL 99%</a></div>  
      	<div class="item"><a href="bibliotecadigitale.html" style="color:rgb(246, 9, 143);">BIBLIOTECA DIGITALE</a></div>
				<div class="item"><a href="dispenseinmovimento.html" style="color:rgb(246, 9, 143);">DISPENSE IN MOVIMENTO</a></div>
      	<div class="item"><a href="contattaci.html" style="color:rgb(246, 9, 143);">CONTATTACI</a></div>
    	</div>
    	</label>   	 
    	<div id="header-logo">
      	<a href="index.html"> <img src= "https://i.ibb.co/LgYj2hy/SITO.png" alt="la 0" class="center"> </a>   
    	</div>
 	 
  	</section>

        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
  