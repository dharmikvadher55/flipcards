document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('myModal');
  var btnClose = document.getElementById('btnCloseModal');
  var spanClose = document.getElementById('closeModal');

  spanClose.onclick = function () {
    modal.style.display = 'none';
  }

  btnClose.onclick = function () {
    modal.style.display = 'none';
    startTimer();
    
  }

 window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    } 
  }

  modal.style.display = 'block';
});
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
      }, 550); // Adjust the delay as needed
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



// Function to check if all cards are flipped and matched
function checkAllCardsMatched() {
  const allCards = document.querySelectorAll('.card');
  let matchedPairs = 0;

  // Loop through all cards to count matched pairs
  for (let i = 0; i < allCards.length; i++) {
    if (allCards[i].classList.contains('flipped')) {
      matchedPairs++;
    }
  }

  // If all 14 pairs are matched, return true
  if (matchedPairs === 28) {
    return true;
  } else {
    return false;
  }
}



// Check every 1 second if all cards are matched
// Check every 1 second if all cards are matched
const checkInterval = setInterval(function() {
  if (checkAllCardsMatched()) {
    // All cards are matched, perform necessary actions
    document.getElementById("timer"). style.display="none";
    // Retrieve text from the timer display
let timerText = document.getElementById("timer").innerHTML;
var modal = document.getElementById('myModal');
  var btnClose = document.getElementById('btnCloseModal');
  var spanClose = document.getElementById('closeModal');

  spanClose.onclick = function () {
    modal.style.display = 'none';
  }

  btnClose.onclick = function () {
    modal.style.display = 'none';
    startTimer();
    
  }

  modal.style.display = 'block';
  modal.innerHTML= "Congratulations you took " + timerText +" time to Match all cards 🃏";
console.log(timerText); // Output the retrieved text

    console.log("Congratulations! All cards are matched.");
    clearInterval(checkInterval); // Stop checking
  }
}, 1000); // Check every 1 second

/* 
<!DOCTYPE html>
<html lang="en">
<head>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-KW762DYN1X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KW762DYN1X');
</script>



    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flipping Cards in Grid Layout</title>

<link rel="stylesheet" href="css/styles.css">
<style>
    body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
  width: 80%;
  max-width: 400px;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.content {
  text-align: center;
}

@media screen and (max-width: 600px) {
  .modal-content {
    margin: 10% auto;
  }
}

    
</style>

    <script src="timer.js"></script>
</head>
<body>
  <iframe src="https://xmind.ai/embed/dLiTleJ0?sheet-id=b6a2b210-e0a2-4ce9-a062-bc4387716f43" width="900px" height="540px" frameborder="0" scrolling="no" allow="fullscreen"></iframe>
    <div class="grid-container">
       <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
      <div class="card" onclick="flipCard(this)">
        <div class="card-face card-front"></div>
        <div class="card-face card-back">Back</div>
      </div>
    
    
    
    
        <!-- Add more cards as needed -->
        
        
        
        
    <div id="timer">00:00.000</div>
    </div>
    
    <div class="modal" id="myModal">
    <div class="modal-content">
      <span class="close" id="closeModal">&times;</span>
      <p>Match all cards accordingly 🎉</p>
      <button id="btnCloseModal">start Game </button>
    </div>
  </div>
    
    
    <script>
      
    </script>
    
    <script src="flip.js"></script>

</body>
</html>
 */