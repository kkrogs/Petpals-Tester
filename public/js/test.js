var submitPet = document.querySelector('#add-pet');

function testBtn() {
    // Stringify and set key in localStorage to initials array
  
  // Add submit event to form
  submitPet.addEventListener("submit", function(event) {
    event.preventDefault();
    window.alert("test message") }
  
  )};

testBtn();

// submitPet.addEventlistener("click",function() {
//     alert("I am an alert box!");
    
//     });