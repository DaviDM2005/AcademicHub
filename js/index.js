





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
  let x2 = document.getElementsByClassName('description');
  let y = document.getElementsByClassName('filterDiv');

  for (i = 0; i < x.length; i++) {
    if ((!input || x[i].innerHTML.toLowerCase().includes(input)) || !input || x2[i].innerHTML.toLowerCase().includes(input)) {
      y[i].style.display = "block"; // Reset to default display value
    } else {
      y[i].style.display = "none";
    }
  }
}



// reveal animation

const filterDivs = document.querySelectorAll('.filterDiv');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

filterDivs.forEach(div => {
    observer.observe(div);
});






