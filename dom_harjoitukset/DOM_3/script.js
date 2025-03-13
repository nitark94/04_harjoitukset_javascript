// Haetaan syötekenttä ja div-elementti
const inputField = document.getElementById("inputText");
const displayDiv = document.getElementById("displayText");

// Lisätään tapahtumankäsittelijä syötekentälle
inputField.addEventListener("input", function() {
  // Päivitetään displayDiv-elementin tekstisisältö syötekentän arvolla
  displayDiv.textContent = inputField.value;
});
