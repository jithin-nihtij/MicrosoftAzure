function drop1(){
    var drop1 = document.getElementById('drop1')
    drop1.style.display="block"
   

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
    drop2.style.display="block"

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
    drop3.style.display="block"

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
    drop4.style.display="block"

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
    drop5.style.display="block"

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