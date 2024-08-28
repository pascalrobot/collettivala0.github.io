class Footer extends HTMLElement {
    constructor() {
      super();
    }

 connectedCallback() {
      this.innerHTML = `
      <footer>

      <script src="./resources/CCS/script.js"></script>
        
<section class="computer-footer">

  <div class="grid-container3">
  
    <div id="header-logo">
      <a href="index.html"> <img src="https://i.ibb.co/LgYj2hy/SITO.png" alt="la 0"> </a>   
    </div> 
    <div class="riassunto">
    <a href="aboutus.html" style="color:rgb(246, 9, 143);"><b>CHI SIAMO</b></a> 
    <br><br> 
    <a href="contattaci.html" style="color:rgb(246, 9, 143);"><b>CONTATTACI</b></a>
    <br><br> 
    <b><a href="https://x.com/collettivala0" style="color:rgb(246, 9, 143);"><i class="fa-brands fa-x-twitter"></i></a> - <a href="https://www.instagram.com/collettivalazero/"  style="color:rgb(246, 9, 143);"><i class="fa-brands fa-instagram"></i></a></b>
    </div>
  
  </div>
  
  </section>
  
  <section class="mobile-footer">
    <div id="header-logo">
      
      <a href="index.html"> <img src= "https://i.ibb.co/LgYj2hy/SITO.png" alt="la 0"> </a>   
    </div> 
    <div class="riassunto">
    <a href="aboutus.html" style="color:rgb(246, 9, 143);"><b>CHI SIAMO</b></a> 
    <br><br> 
    <a href="contattaci.html" style="color:rgb(246, 9, 143);"><b>CONTATTACI</b></a>
    <br><br> 
    <b><a href="https://x.com/collettivala0" style="color:rgb(246, 9, 143);"><i class="fa-brands fa-x-twitter"></i></a> - <a href="https://www.instagram.com/collettivalazero/"  style="color:rgb(246, 9, 143);"><i class="fa-brands fa-instagram"></i></a></b>
    </div>
  
  </div>
  
  </section>
</footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
  