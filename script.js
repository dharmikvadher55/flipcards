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

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Array of diverse emojis (you can add more)
const emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "😙", "😚", "☺️", "🙂", "🤗", "🤔", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "😯", "😪", "😫", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹️", "🙁", "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩", "😬", "😰", "😱", "😳", "😵", "😡", "😠", "😷", "🤒", "🤕", "🤢", "🤧", "😇", "🤠", "🤡", "🤥", "🤓", "😈", "👿", "👹", "👺", "💀", "☠️", "👻", "👽", "👾", "🤖", "💩", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾"];

// Function to assign emojis to cards
function assignEmojisToCards() {
  // Select all card-back elements
  const cardBacks = document.querySelectorAll('.card-back');
  
  // Shuffle the array of emojis
  const shuffledEmojis = shuffleArray(emojis);
  
  // Select 14 unique emojis for pairing
  const selectedEmojis = shuffledEmojis.slice(0, 14);
  
  // Duplicate each emoji to create pairs
  const emojiPairs = [...selectedEmojis, ...selectedEmojis];
  
  // Shuffle the pairs
  const shuffledPairs = shuffleArray(emojiPairs);
  
  // Assign each pair of emojis to a card
  cardBacks.forEach((cardBack, index) => {
    cardBack.textContent = shuffledPairs[index];
  });
}

// Call the function on page load
window.onload = function() {
  assignEmojisToCards();
};
