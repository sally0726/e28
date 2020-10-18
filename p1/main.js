Vue.component('score-disp', {
    template: '#score-disp',
    props: ['scores']
});

Vue.component('guess-history', {
    template: '#guess-history-disp',
    props: ['history', 'target']
});

let app = new Vue({
    el: '#app',
    data: {
        title: 'Hi-Low Game',
        numGuesses: 16,
        target: Math.round(Math.random() * 10000),
        message: '',
        guess: 0,
        scores: {'me': 0, 'computer': 0},
        historyList: [],
        isCorrect: false,
        isGameOver: false,
    },
    methods: {
        init(event) {
            // resets the game
            this.target = Math.round(Math.random() * 10000);
            this.numGuesses = 13;
            this.historyList = [];
            this.message = '';
            this.isCorrect = false;
            this.isGameOver = false;
            console.log(this.target);
        },

        makeGuess(event) {
            if (this.numGuesses <= 0) { // game over
                return;
            }

            // check for duplicates
            for (var i = 0; i < this.historyList.length; i++) {
                if (this.guess == this.historyList[i]) {
                    this.message = "Come on, try another one!";
                    return;
                }
            }

            this.numGuesses--;
            this.isGameOver = this.numGuesses <= 0;
            this.isCorrect = this.guess == this.target;
            if (this.isCorrect) {
                this.scores['me']++;
                this.message = 'Spot on! Good job!';
            } else {
                if (this.isGameOver) {
                    this.scores['computer']++;
                    this.message = 'Game over! The correct answer is ' + this.target + '\nYou can restart though.';
                } else if (this.guess > this.target) {
                    this.message = 'Try a smaller number!';
                } else {
                    this.message = 'Try a larger number!';
                }
            }
            // update history
            this.historyList.push(this.guess);
        }
    }
});