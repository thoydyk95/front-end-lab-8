let playGame = confirm('Do you want to play a game?'),
    max = 5,
    multiplic = 1,
    userString,
    totalPrize = 0,
    attempt = 3,
    curPrize,
    n = Math.floor(Math.random() * (max + 1));
if (playGame === true) {
    for (let i = 0; i < 3; i++) {
        curPrize = 10 * multiplic;
        switch (attempt) {
            case 2:
                curPrize = parseInt(5 * multiplic);
                break;
            case 1:
                curPrize = parseInt(5 / 2 * multiplic);
                break;
        }
        userString = prompt('Enter a number from 0 to ' + max + '\nAttempts left: ' + attempt + '\nTotal prize: ' + totalPrize + '$' + '\nPossible prize on current attempt: ' + curPrize + '$', '0');
        if (userString == n) {
            switch (attempt) {
                case 3:
                    totalPrize += 10 * multiplic;
                    break;
                case 2:
                    totalPrize += parseInt(5 * multiplic);
                    break;
                case 1:
                    totalPrize += parseInt(5 / 2 * multiplic);
                    break;
            }
            playGame = confirm('Congrats, do you want to continue the game?');
            if (playGame == false) {
                console.log('Thank you for a game. Your prize is : ' + totalPrize);
                playGame = confirm('Do you wanna play again?');
                if (playGame == true) {
                    n = Math.floor(Math.random() * (max + 1));
                    totalPrize = 0;
                    i = -1;
                    max = 5;
                    multiplic = 1;
                    attempt = 3;
                    continue;
                } else {
                    break;
                }
            } else {
                n = Math.floor(Math.random() * (max + 1));
                i = -1;
                attempt = 3;
                max *= 2;
                multiplic *= 3;
                continue;
            }
        } else {
            attempt -= 1;
            if (attempt == 0) {
                console.log('Thank you for a game. Your prize is : ' + totalPrize);
                playGame = confirm('Do you want to play again?');
                if (playGame == true) {
                    n = Math.floor(Math.random() * (max + 1));
                    totalPrize = 0;
                    i = -1;
                    max = 5;
                    multiplic = 1;
                    attempt = 3;
                    continue;
                } else {
                    break;
                }
            }
        }
    }
} else {
    console.log('You did not become a millionaire');
}
