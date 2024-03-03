function generateRandomEmojis() {
  // Define an array of emojis for better user experience
  const emojis = [
    "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘",
    "😇", "🥰", "😏", "😌", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤫", "🤭", "🤔", "🤐",
    "🥳", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😵", "🤯", "🤠", "🥸", "😈", "👿",
    "👹", "👺", "💀", "👻", "👽", "👾", "🤖", "💩", "😺", "😸", "😹", "😻", "😼", "😽"
  ];

  // Shuffle the array to randomize the emojis
  for (let i = emojis.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [emojis[i], emojis[j]] = [emojis[j], emojis[i]];
  }

  // Duplicate the emojis array to create pairs
  const emojiPairs = emojis.concat(emojis);

  // Get all the card-back elements
  const cardBacks = document.querySelectorAll('.card-face.card-back');

  // Loop through each card back and assign a random emoji pair
  cardBacks.forEach((cardBack, index) => {
    cardBack.textContent = emojiPairs[index];
  });
}

// Call the function to generate random emojis when the page loads
window.onload = generateRandomEmojis;
