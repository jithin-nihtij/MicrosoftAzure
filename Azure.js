function drop1(){
    var drop1 = document.getElementById('drop1')
   

    if(drop1.style.display === "block"){
      drop1.style.display = "none"
    }

    else{
      drop1.style.display = "block"
    }
   

    var drop2 = document.getElementById('drop2')
    drop2.style.display="none"
    
    var drop3 = document.getElementById('drop3')
    drop3.style.display="none"

    var drop4 = document.getElementById('drop4')
    drop4.style.display="none"

    var drop5 = document.getElementById('drop5')
    drop5.style.display="none"
    
  }

  function drop2(){
    var drop2 = document.getElementById('drop2')
    
    if(drop2.style.display === "block"){
      drop2.style.display = "none"
    }

    else{
      drop2.style.display = "block"
    }
   

    var drop1 = document.getElementById('drop1')
    drop1.style.display="none"

    var drop3 = document.getElementById('drop3')
    drop3.style.display="none"

    var drop4 = document.getElementById('drop4')
    drop4.style.display="none"

    var drop5 = document.getElementById('drop5')
    drop5.style.display="none"
    
  }

  function drop3(){
    var drop3 = document.getElementById('drop3')
    
    if(drop3.style.display === "block"){
      drop3.style.display = "none"
    }

    else{
      drop3.style.display = "block"
    }

    var drop2 = document.getElementById('drop2')
    drop2.style.display="none"

    var drop1 = document.getElementById('drop1')
    drop1.style.display="none"

    var drop4 = document.getElementById('drop4')
    drop4.style.display="none"

    var drop5 = document.getElementById('drop5')
    drop5.style.display="none"

  }

  function drop4(){
    var drop4 = document.getElementById('drop4')
    
    if(drop4.style.display === "block"){
      drop4.style.display = "none"
    }

    else{
      drop4.style.display = "block"
    }

    var drop3 = document.getElementById('drop3')
    drop3.style.display="none"

    var drop2 = document.getElementById('drop2')
    drop2.style.display="none"

    var drop1 = document.getElementById('drop1')
    drop1.style.display="none"

    var drop5 = document.getElementById('drop5')
    drop5.style.display="none"

  }

  function drop5(){
    
    var drop5 = document.getElementById('drop5')
    
    if(drop5.style.display === "block"){
      drop5.style.display = "none"
    }

    else{
      drop5.style.display = "block"
    }
    
    var drop4 = document.getElementById('drop4')
    drop4.style.display="none"

    var drop3 = document.getElementById('drop3')
    drop3.style.display="none"

    var drop2 = document.getElementById('drop2')
    drop2.style.display="none"

    var drop1 = document.getElementById('drop1')
    drop1.style.display="none"

  }


  function expand() {
    var input = document.getElementById("expanding-input");
    input.style.width = "270px";

    var hide = document.getElementById("styleA");

    if (window.innerWidth <= 992) {
      hide.style.visibility = "visible";
      input.style.width = "100%";
    } else {
      hide.style.visibility = "hidden";
    }

    var closebtn = document.getElementById("close");
    closebtn.style.visibility = "visible";
  }

  function closeButton() {
    var goBack = document.getElementById("expanding-input");
    goBack.style.width = "100px";

    var hiddenElements = document.getElementById("styleA");
    hiddenElements.style.visibility = "visible";

    var closebtn = document.getElementById("close");
    closebtn.style.visibility = "hidden";
  }


  function explore(){

    var explore =document.getElementById('explore')

    if(window.innerWidth <=1159){
      if (explore.style.display === "block") {
          explore.style.display = "none";
      } 

      else{
        explore.style.display = "block";
      }
    }  
    }



 
  function products(){

    var products = document.getElementById('products')
    
    if(window.innerWidth <=1159){
      if (products.style.display === "block") {
      
            products.style.display = "none";
        } else {
            
            products.style.display = "block";
        }
    }

  }


  function solution(){
    var solution = document.getElementById('solution')

    if(window.innerWidth <=1159){

        if (solution.style.display === "block") {
              solution.style.display = "none";
          } else {
              
              solution.style.display = "block";
          }
      }
  }

  function partners(){

    var partners = document.getElementById('partners')

    if(window.innerWidth <=1159){
        if (partners.style.display === "block") {
          partners.style.display = "none";
      } else {
          
          partners.style.display = "block";
      }
    }

  }


  function resources(){

    var resources = document.getElementById('resources')

    if(window.innerWidth <=1159){
        if (resources.style.display === "none") {
          resources.style.display = "block";
      } else {
          
          resources.style.display = "none";
      }
    }

  }

  function cloud(){

    var cloud = document.getElementById('cloud')


    if(window.innerWidth <=1159){
        if (cloud.style.display === "none") {
          cloud.style.display = "block";
      } else {
          
          cloud.style.display = "none";
      }
        }
  }