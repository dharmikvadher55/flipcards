// Variable to store the previously flipped card
let previousCard = null;

// Function to flip a card
function flipCard(card) {
  // If the clicked card is already flipped, do nothing
  if (card.classList.contains('flipped')) {
    return;
  }

  // Flip the clicked card
  card.classList.add('flipped');

  // If there's a previously flipped card
  if (previousCard !== null) {
    const previousEmoji = previousCard.querySelector('.card-back').textContent;
    const currentEmoji = card.querySelector('.card-back').textContent;

    // If the emojis match, keep both cards flipped
    if (previousEmoji === currentEmoji) {
      previousCard = null;
    } else {
      // If the emojis don't match, flip back the previously flipped card after a short delay
      setTimeout(() => {
        previousCard.classList.remove('flipped');
        card.classList.remove('flipped');
        previousCard = null;
      }, 400); // Adjust the delay as needed
    }
  } else {
    // If there's no previously flipped card, set the current card as the previously flipped card
    previousCard = card;
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
window.onload = function () {
  assignEmojisToCards();
};
