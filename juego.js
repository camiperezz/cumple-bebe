document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "foto1.jpg", "foto2.jpg", 
    "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg",
    "foto7.jpg", "foto8.jpg", "foto9.jpg", "foto10.jpg"
  ];

  let flippedCards = [];
  let matchedCards = [];

  const memoryGame = document.getElementById("memory-game");
  const winModal = document.getElementById("win-modal");
  const closeModal = document.getElementById("close-modal");

  // Shuffle the images
  const shuffledImages = images.sort(() => Math.random() - 0.5);

  // Duplicate the images to have 12 pairs
  const duplicatedImages = shuffledImages.concat(shuffledImages);

  // Create cards and append them to the memory game
  duplicatedImages.forEach((image, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.index = index;

    const img = document.createElement("img");
    img.src = "img/juego/" + image; // Replace "images/" with the actual path to your images folder
    img.alt = "Card";
    img.style.display = "none"; // Initially hide the image

    card.appendChild(img);
    memoryGame.appendChild(card);

    // Event listener for card click
    card.addEventListener("click", () => flipCard(card));
  });

  // Function to flip a card
  function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
      card.classList.add("flipped");
      card.firstChild.style.display = "block"; // Show the image

      flippedCards.push(card);

      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
      }
    }
  }

  // Function to check if the flipped cards match
  function checkMatch() {
    const [firstCard, secondCard] = flippedCards;
    const firstIndex = firstCard.dataset.index;
    const secondIndex = secondCard.dataset.index;

    if (duplicatedImages[firstIndex] === duplicatedImages[secondIndex]) {
      // Cards match
      matchedCards.push(...flippedCards);

      if (matchedCards.length === duplicatedImages.length) {
        openWinModal();
      }
    } else {
      // Cards do not match
      flippedCards.forEach(card => {
        card.classList.remove("flipped");
        card.firstChild.style.display = "none"; // Hide the image
      });
    }

    flippedCards = [];
  }

  // Function to open the win modal
  function openWinModal() {
    winModal.style.display = "flex";
  }

  // Event listener to close the win modal
  closeModal.addEventListener("click", () => {
    winModal.style.display = "none";
  });
});