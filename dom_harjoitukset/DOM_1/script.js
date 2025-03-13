// Funktio, joka päivittää div-elementin tekstisisällön
function muokkaaTekstia() {
    // Valitaan elementti ID:llä "content"
    const contentElement = document.getElementById("content");
  
    // Päivitetään tekstisisältö
    contentElement.textContent = "Hei, maailma!";
  }
  