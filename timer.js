let start_time = null;

        function startTimer() {
            start_time = new Date().getTime();
            updateTimer();
        }

        function stopTimer() {
            if (!start_time) {
                console.log("Timer hasn't started yet.");
                return;
            }

            let end_time = new Date().getTime();
            let elapsed_time = end_time - start_time;
            let minutes = Math.floor(elapsed_time / (1000 * 60));
            let seconds = Math.floor((elapsed_time % (1000 * 60)) / 1000);
            let milliseconds = Math.floor((elapsed_time % 1000));
            
            document.getElementById("timer").innerHTML = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
        }

        function updateTimer() {
            setInterval(stopTimer, 1); // Update the timer every millisecond
        }