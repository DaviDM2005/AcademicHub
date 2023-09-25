





// collapsible menu

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function(event) {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
    
    
    event.stopPropagation();
  });
}


document.addEventListener("click", function(event) {
  var coll = document.getElementsByClassName("collapsible");
  for (var i = 0; i < coll.length; i++) {
    var content = coll[i].nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      coll[i].classList.remove("active");
    }
  }
});


document.querySelector(".filterbtndiv").addEventListener("click", function(event) {
  event.stopPropagation();
});


function myFunction(x) {
  x.classList.toggle("change");
}



// search system

function search() {
  let input = document.getElementById('searchbar').value.toLowerCase();
  let x = document.getElementsByClassName('subject-name');
  let x2 = document.getElementsByClassName('description');
  let y = document.getElementsByClassName('filterDiv');
  let notFoundMessage = document.getElementById('notFoundMessage');

  let found = false; // Initialize a flag to track if any results were found

  for (i = 0; i < x.length; i++) {
    if ((!input || x[i].innerHTML.toLowerCase().includes(input)) || (!input || x2[i].innerHTML.toLowerCase().includes(input))) {
      y[i].style.display = "block"; // Reset to default display value
      found = true; // Set the flag to true if a result is found
    } else {
      y[i].style.display = "none";
    }
  }

  // Show/hide the "Nothing was found" message based on the flag
  if (found) {
    notFoundMessage.style.display = "none";
  } else {
    notFoundMessage.style.display = "block";
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




// nothing was found

const searchInput = document.querySelector('#searchbar'); // Update the ID to match your HTML
const list = document.querySelector('.subjects-article'); // Update the class to match your HTML
const nothingFound = document.querySelector('#nothing-found');

searchInput.addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  let numMatches = 0;

  Array.from(list.children).forEach((item) => {
    const textContent = item.textContent.toLowerCase();
    if (textContent.includes(searchTerm)) {
      item.style.display = 'block';
      numMatches++;
    } else {
      item.style.display = 'none';
    }
  });

  if (numMatches === 0) {
    nothingFound.style.display = 'block'; // Display the "Nothing was found" message
  } else {
    nothingFound.style.display = 'none'; // Hide the message if there are matches
  }
});


