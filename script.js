document.addEventListener('DOMContentLoaded', function() {

  const dummyLinks = document.querySelectorAll("a:not(.working)");

  for (const link of dummyLinks) {
    link.addEventListener("click", () => {
      fetch(`https://icanhazdadjoke.com/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
      })
      .then(response => {
          if (response.ok) return response.json();
          return response.json().then(response => {throw new Error(response.error)})
      })
      .then(result => {
          //console.log(result)
          alert(`You clicked a dummy link, so here's a dad joke:\n\n${result.joke}`);
      })
      .catch(error => {
          console.log(error);
      });

    })
  }

});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("pfp");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}