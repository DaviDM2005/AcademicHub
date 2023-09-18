





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


// search system

function search() {
  let input = document.getElementById('searchbar').value.toLowerCase();
  let x = document.getElementsByClassName('subject-name');
  let y = document.getElementsByClassName('subject-card');

  for (i = 0; i < x.length; i++) {
    if (!input || x[i].innerHTML.toLowerCase().includes(input)) {
      y[i].style.display = "block"; // Reset to default display value
    } else {
      y[i].style.display = "none";
    }
  }
}
