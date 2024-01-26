
const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack: () => {
        console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution: function(newPlayer) {
        console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    }
};

const attack = footballer.attack.bind(footballer);
const score = footballer.scoreGoal.call(footballer, 'Сиииии');
const substitute = footballer.goToSubstitution.apply(footballer, ['Paulo Dibala']);
attack();