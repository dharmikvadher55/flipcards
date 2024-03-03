function generateRandomEmojis() {
  // Define an array of emojis for better user experience
  const emojis = [
    "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘",
    "😇", "🥰", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤩", "🤭", "🤫", "🤔", "🤐", "🤨",
    "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "😳", "🤥", "😌", "😔", "😪", "🤤", "😴",
    "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧",
    "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤",
    "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻", "👽", "👾",
    "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "💋"
  ];

  // Shuffle the array to randomize the emojis
  for (let i = emojis.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [emojis[i], emojis[j]] = [emojis[j], emojis[i]];
  }

  // Select the first 28 emojis to pair with the cards
  const emojiPairs = emojis.slice(0, 28);

  // Duplicate the emojiPairs array to create pairs
  const cardEmojis = emojiPairs.concat(emojiPairs);

  // Get all the card-back elements
  const cardBacks = document.querySelectorAll('.card-face.card-back');

  // Loop through each card back and assign a random emoji pair
  cardBacks.forEach((cardBack, index) => {
    cardBack.textContent = cardEmojis[index];
  });
}

// Call the function to generate random emojis when the page loads
window.onload = generateRandomEmojis;
