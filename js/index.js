// Navbar

const buttons = document.querySelectorAll('.nav-bar li a');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const checkbox = document.getElementById('check');
    checkbox.checked = false;
  });
});



var inputs = document.querySelectorAll(".my-input");

for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];

 
  input.addEventListener("focus", function() {
    this.style.backgroundColor = "black"; 
  });

 
  input.addEventListener("blur", function() {
    this.style.backgroundColor = ""; 
  });

 
  input.addEventListener("input", function() {
    this.style.backgroundColor = "black"; 
  });
}


// collapsible menu

var coll = document.getElementsByClassName("collapsible");
        var i;
        
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            } 
          });
        }


function myFunction(x) {
  x.classList.toggle("change");
}