// Function to flip a card
function flipCard(card) {
  const allCards = document.querySelectorAll('.card');
  
  // Check if the clicked card is already flipped
  if (!card.classList.contains('flipped')) {
    // Flip the clicked card
    card.classList.add('flipped');
    
    // Flip back all other cards
    allCards.forEach((otherCard) => {
      if (otherCard !== card && otherCard.classList.contains('flipped')) {
        otherCard.classList.remove('flipped');
      }
    });
  } else {
    // If the clicked card is already flipped, flip it back
    card.classList.remove('flipped');
  }
}
