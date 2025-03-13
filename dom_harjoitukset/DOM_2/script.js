// Haetaan nappi ja syötekenttä
const addFruitBtn = document.getElementById("addFruitBtn");
const fruitInput = document.getElementById("fruitInput");
const fruitList = document.getElementById("fruitList");

// Lisätään tapahtumankäsittelijä napille
addFruitBtn.addEventListener("click", function() {
  // Haetaan syötekentän arvo
  const fruitName = fruitInput.value.trim(); // Poistetaan mahdolliset ylimääräiset välilyönnit

  // Tarkistetaan, että käyttäjä on syöttänyt jotain
  if (fruitName !== "") {
    // Luodaan uusi <li> elementti
    const newFruitItem = document.createElement("li");
    
    // Asetetaan <li>-elementin tekstiksi hedelmän nimi
    newFruitItem.textContent = fruitName;
    
    // Lisätään uusi <li> elementti hedelmälistaan
    fruitList.appendChild(newFruitItem);
    
    // Tyhjennetään syötekenttä hedelmän lisäämisen jälkeen
    fruitInput.value = "";
  } else {
    // Jos syötekenttä on tyhjä, ei tehdä mitään
    alert("Syötä hedelmän nimi ennen lisäystä!");
  }
});
