// Function to flip a card
function flipCard(card) {
  const allCards = document.querySelectorAll('.card');
  
  // Check if the clicked card is already flipped or matched
  if (!card.classList.contains('flipped') && !card.classList.contains('matched')) {
    // Flip the clicked card
    card.classList.add('flipped');
    
    // Check if there is another front-faced card with the same emoji
    const frontFacedCards = document.querySelectorAll('.card.flipped');
    frontFacedCards.forEach((frontFacedCard) => {
      if (frontFacedCard !== card) {
        const frontFacedEmoji = frontFacedCard.querySelector('.card-back').textContent;
        const clickedEmoji = card.querySelector('.card-back').textContent;
        
        // If both cards have the same emoji, keep both front-faced and mark them as matched
        if (frontFacedEmoji === clickedEmoji) {
          frontFacedCard.classList.add('matched');
          card.classList.add('matched');
          return;
        } else {
          // If not, flip back all other cards
          frontFacedCard.classList.remove('flipped');
        }
      }
    });
  }
}
