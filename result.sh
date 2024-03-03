<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flipping Cards in Grid Layout</title>


<style>
body {
    margin: 0;
    padding: 2vw;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 2vw;
    justify-items: center;
    align-items: center; /* Center cards vertically */
    width: 90vw;
    max-width: 800px;
    padding: 2vh;
    border: 2px solid #ccc;
}

.card {
    width: calc(100% - 4px); /* Adjusted width to account for border width */
    height:22vh ;
    padding-top: 4px; /* Adjusted padding-top to account for border width */
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center; /* Center content horizontally and vertically */
}
.card.flipped {
    transform: rotateY(180deg);
}

.card-face {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5vw; /* Adjusted font size */
    font-weight: bold;
    color: white;
    border-radius: 10px; /* Adjusted border radius */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-front {
    background-color: #3498db;
}

.card-back {
    background-color: #e74c3c;
    transform: rotateY(180deg);
}

/* Media queries for responsiveness */
@media screen and (max-width: 768px) {
    .card-face {
        font-size: 4vw;
    }
}

@media screen and (max-width: 480px) {
    .grid-container {
        grid-gap: 1.5vw; /* Adjusted grid gap */
    }

    .card-face {
        font-size: 5vw;
    }
}

</style>

    
</head>
<body>
    <div class="grid-container">
        <!-- Card 1 -->
        <div class="card" onclick="flipCard(this)">
            <div class="card-face card-front">Front</div>
            <div class="card-face card-back">Back</div>
        </div>

        <!-- Card 2 -->
        <div class="card" onclick="flipCard(this)">
            <div class="card-face card-front">Front</div>
            <div class="card-face card-back">Back</div>
        </div>

        <!-- Card 3 -->
        <div class="card" onclick="flipCard(this)">
            <div class="card-face card-front">Front</div>
            <div class="card-face card-back">Back</div>
        </div>

 <div class="card" onclick="flipCard(this)">
            <div class="card-face card-front">Front</div>
            <div class="card-face card-back">Back</div>
        </div>

 <div class="card" onclick="flipCard(this)">
            <div class="card-face card-front">Front</div>
            <div class="card-face card-back">Back</div>
        </div>

 <div class="card" onclick="flipCard(this)">
            <div class="card-face card-front">Front</div>
            <div class="card-face card-back">Back</div>
        </div>

 <div class="card" onclick="flipCard(this)">
            <div class="card-face card-front">Front</div>
            <div class="card-face card-back">Back</div>
        </div>

 <div class="card" onclick="flipCard(this)">
            <div class="card-face card-front">Front</div>
            <div class="card-face card-back">Back</div>
        </div>

 <div class="card" onclick="flipCard(this)">
            <div class="card-face card-front">Front</div>
            <div class="card-face card-back">Back</div>
        </div>

        <!-- Add more cards as needed -->
    </div>

    <script>
        function flipCard(card) {
            card.classList.toggle('flipped');
        }
    </script>
</body>
</html>
