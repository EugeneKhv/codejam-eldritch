import cardsDataBlue from './blueCardsArr.js';
import cardsDataGreen from './greenCardsArr.js';
import cardsDataBrown from './brownCardsArr.js';

const azathothCard = document.getElementById('azathoth-card');
const cthulhuCard = document.getElementById('cthulthu-card');
const iogSothothCard = document.getElementById('iogsothoth-card');
const shubNiggurathCard = document.getElementById('shubniggurath-card');

let azathothPath;
let cthulhuPath;
let iogsothPath;
let shubNiggurathPath;

azathothCard.addEventListener('click', () => {
    azathothCard.classList.add('active');
    cthulhuCard.classList.remove('active');
    iogSothothCard.classList.remove('active');
    shubNiggurathCard.classList.remove('active');
    document.querySelector('.difficulty-container').classList.add('active');
    document.querySelector('.separator').classList.remove('active');
    document.querySelector('.current-state').classList.remove('active');
    azathothPath = true;
    cthulhuPath = false;
    iogsothPath = false;
    shubNiggurathPath = false;
})
cthulhuCard.addEventListener('click', () => {
    azathothCard.classList.remove('active');
    cthulhuCard.classList.add('active');
    iogSothothCard.classList.remove('active');
    shubNiggurathCard.classList.remove('active');
    document.querySelector('.difficulty-container').classList.add('active');
    document.querySelector('.separator').classList.remove('active');
    document.querySelector('.current-state').classList.remove('active');
    cthulhuPath = true;
    azathothPath = false;
    iogsothPath = false;
    shubNiggurathPath = false;

})
iogSothothCard.addEventListener('click', () => {
    azathothCard.classList.remove('active');
    cthulhuCard.classList.remove('active');
    iogSothothCard.classList.add('active');
    shubNiggurathCard.classList.remove('active');
    document.querySelector('.difficulty-container').classList.add('active');
    document.querySelector('.separator').classList.remove('active');
    document.querySelector('.current-state').classList.remove('active');
    iogsothPath = true;
    azathothPath = false;
    cthulhuPath = false;
    shubNiggurathPath = false;

})
shubNiggurathCard.addEventListener('click', () => {
    azathothCard.classList.remove('active');
    cthulhuCard.classList.remove('active');
    iogSothothCard.classList.remove('active');
    shubNiggurathCard.classList.add('active');
    document.querySelector('.difficulty-container').classList.add('active');
    document.querySelector('.separator').classList.remove('active');
    document.querySelector('.current-state').classList.remove('active');
    shubNiggurathPath = true;
    azathothPath = false;
    cthulhuPath = false;
    iogsothPath = false;

})
let difficulty;
document.getElementById('very__low-dif').addEventListener('click', () => {
    document.querySelector('.separator').classList.add('active');
    document.querySelector('.current-state').classList.remove('active');
    difficulty = 'veryEasy';
})
document.getElementById('low-dif').addEventListener('click', () => {
    document.querySelector('.separator').classList.add('active');
    document.querySelector('.current-state').classList.remove('active');
    difficulty = 'easy';
})

document.getElementById('middle-dif').addEventListener('click', () => {
    document.querySelector('.separator').classList.add('active');
    document.querySelector('.current-state').classList.remove('active');
    difficulty = 'normal';
})

document.getElementById('high-dif').addEventListener('click', () => {
    document.querySelector('.separator').classList.add('active');
    document.querySelector('.current-state').classList.remove('active');
    difficulty = 'hard';
})
document.getElementById('veryhigh-dif').addEventListener('click', () => {
    document.querySelector('.separator').classList.add('active');
    document.querySelector('.current-state').classList.remove('active');
    difficulty = 'veryHard';
})
let stageOnesum;
let stageTwosum;
let stageThreesum;
function getCurrentCard() {
    if (azathothPath) {
        document.getElementById('1').innerHTML = 1;
        document.getElementById('2').innerHTML = 2;
        document.getElementById('3').innerHTML = 1;
        document.getElementById('4').innerHTML = 2;
        document.getElementById('5').innerHTML = 3;
        document.getElementById('6').innerHTML = 1;
        document.getElementById('7').innerHTML = 2;
        document.getElementById('8').innerHTML = 4;
        document.getElementById('9').innerHTML = 0;
        stageOnesum = 4;
        stageTwosum = 6;
        stageThreesum = 6;
    }
    if (cthulhuPath) {
        document.getElementById('1').innerHTML = '0';
        document.getElementById('2').innerHTML = '2';
        document.getElementById('3').innerHTML = '2';
        document.getElementById('4').innerHTML = '1';
        document.getElementById('5').innerHTML = '3';
        document.getElementById('6').innerHTML = '0';
        document.getElementById('7').innerHTML = '3';
        document.getElementById('8').innerHTML = '4';
        document.getElementById('9').innerHTML = '0';
        stageOnesum = 4;
        stageTwosum = 4;
        stageThreesum = 7;
    }
    if (iogsothPath) {
        document.getElementById('1').innerHTML = '0';
        document.getElementById('2').innerHTML = '2';
        document.getElementById('3').innerHTML = '1';
        document.getElementById('4').innerHTML = '2';
        document.getElementById('5').innerHTML = '3';
        document.getElementById('6').innerHTML = '1';
        document.getElementById('7').innerHTML = '3';
        document.getElementById('8').innerHTML = '4';
        document.getElementById('9').innerHTML = '0';
        stageOnesum = 3;
        stageTwosum = 6;
        stageThreesum = 7;
    }
    if (shubNiggurathPath) {
        document.getElementById('1').innerHTML = '1';
        document.getElementById('2').innerHTML = '2';
        document.getElementById('3').innerHTML = '1';
        document.getElementById('4').innerHTML = '3';
        document.getElementById('5').innerHTML = '2';
        document.getElementById('6').innerHTML = '1';
        document.getElementById('7').innerHTML = '2';
        document.getElementById('8').innerHTML = '4';
        document.getElementById('9').innerHTML = '0';
        stageOnesum = 4;
        stageTwosum = 6;
        stageThreesum = 6;
    }
}

document.querySelector('.separator').addEventListener('click', () => {
    document.querySelector('.separator').classList.remove('active');
    document.querySelector('.current-state').classList.add('active');
    getCurrentCard();
})


let greenCardsDeckCopy = Object.assign([], cardsDataGreen);
let blueCardsDeckCopy = Object.assign([], cardsDataBlue);
let brownCardsDeckCopy = Object.assign([], cardsDataBrown);
let cardDeckTempGreen;
function separatorGreenCard(sumOfCards) {
    let temp = [];
    let temp2 = [];
    if (difficulty === 'veryEasy') {
        for (let i = 0; i < greenCardsDeckCopy.length; i++) {
            if (greenCardsDeckCopy[i].difficulty == 'easy') {
                temp.push(greenCardsDeckCopy[i]);
            }
        }
        if (temp.length < sumOfCards) {
            for (let i = 0; i < greenCardsDeckCopy.length; i++) {
                if (greenCardsDeckCopy[i].difficulty == 'normal') {
                    temp2.push(greenCardsDeckCopy[i]);
                }
            }
        }
        temp2.sort(() => Math.random() - 0.5);//перемешиваем карты во втором массиве
        if ((sumOfCards - temp.length) < 0) {
            temp2.length = 0;
        } else {
            temp2.length = sumOfCards - temp.length;
        }
        cardDeckTempGreen = temp.concat(temp2).sort(() => Math.random() - 0.5);
    }
    if (difficulty === 'easy') {
        for (let i = 0; i < greenCardsDeckCopy.length; i++) {
            if (greenCardsDeckCopy[i].difficulty == 'easy' || greenCardsDeckCopy[i].difficulty == 'normal') {
                temp.push(greenCardsDeckCopy[i]);
            }
        }
        if (temp.length > sumOfCards) {
            temp.sort(() => Math.random() - 0.5);
            temp.length = sumOfCards;
        }
        cardDeckTempGreen = temp.sort(() => Math.random() - 0.5);

    }
    if (difficulty === 'normal') {
        for (let i = 0; i < greenCardsDeckCopy.length; i++) {
            temp.push(greenCardsDeckCopy[i]);

        }
        if ((sumOfCards - temp.length) < 0) {
            temp.sort(() => Math.random() - 0.5);
            temp.length = sumOfCards;
        }
        cardDeckTempGreen = temp.sort(() => Math.random() - 0.5);
    }

    if (difficulty === 'hard') {
        for (let i = 0; i < greenCardsDeckCopy.length; i++) {
            if (greenCardsDeckCopy[i].difficulty == 'hard' || greenCardsDeckCopy[i].difficulty == 'normal') {
                temp.push(greenCardsDeckCopy[i]);
            }
        }
        if ((sumOfCards - temp.length) < 0) {
            temp.sort(() => Math.random() - 0.5);
            temp.length = sumOfCards;
        }
        cardDeckTempGreen = temp.sort(() => Math.random() - 0.5);
    }

    if (difficulty === 'veryHard') {
        for (let i = 0; i < greenCardsDeckCopy.length; i++) {
            if (greenCardsDeckCopy[i].difficulty == 'hard') {
                temp.push(greenCardsDeckCopy[i]);
            }
        }
        if (temp.length < sumOfCards) {
            for (let i = 0; i < greenCardsDeckCopy.length; i++) {
                if (greenCardsDeckCopy[i].difficulty == 'normal') {
                    temp2.push(greenCardsDeckCopy[i]);
                }
            }
        }
        temp2.sort(() => Math.random() - 0.5);//перемешиваем карты во втором массиве
        if ((sumOfCards - temp.length) < 0) {
            temp2.length = 0;
        } else {
            temp2.length = sumOfCards - temp.length;
        }
        cardDeckTempGreen = temp.concat(temp2).sort(() => Math.random() - 0.5);
    }
}

let cardDeckTempBlue;
function separatorBlueCard(sumOfCards) {
    let temp = [];
    let temp2 = [];
    if (difficulty === 'veryEasy') {
        for (let i = 0; i < blueCardsDeckCopy.length; i++) {
            if (blueCardsDeckCopy[i].difficulty == 'easy') {
                temp.push(blueCardsDeckCopy[i]);
            }
        }
        if (temp.length < sumOfCards) {
            for (let i = 0; i < blueCardsDeckCopy.length; i++) {
                if (blueCardsDeckCopy[i].difficulty == 'normal') {
                    temp2.push(blueCardsDeckCopy[i]);
                }
            }
        }
        temp2.sort(() => Math.random() - 0.5);//перемешиваем карты во втором массиве
        if ((sumOfCards - temp.length) < 0) {
            temp2.length = 0;
        } else {
            temp2.length = sumOfCards - temp.length;
        }
        cardDeckTempBlue = temp.concat(temp2).sort(() => Math.random() - 0.5);
    }
    if (difficulty === 'easy') {
        for (let i = 0; i < blueCardsDeckCopy.length; i++) {
            if (blueCardsDeckCopy[i].difficulty == 'easy' || blueCardsDeckCopy[i].difficulty == 'normal') {
                temp.push(blueCardsDeckCopy[i]);
            }
        }
        if ((sumOfCards - temp.length) < 0) {
            temp.sort(() => Math.random() - 0.5);
            temp.length = sumOfCards;
        }
        cardDeckTempBlue = temp.sort(() => Math.random() - 0.5);

    }
    if (difficulty === 'normal') {
        for (let i = 0; i < blueCardsDeckCopy.length; i++) {
            temp.push(blueCardsDeckCopy[i]);

        }
        if ((sumOfCards - temp.length) < 0) {
            temp.sort(() => Math.random() - 0.5);
            temp.length = sumOfCards;
        }
        cardDeckTempBlue = temp.sort(() => Math.random() - 0.5);
    }

    if (difficulty === 'hard') {
        for (let i = 0; i < blueCardsDeckCopy.length; i++) {
            if (blueCardsDeckCopy[i].difficulty == 'hard' || blueCardsDeckCopy[i].difficulty == 'normal') {
                temp.push(blueCardsDeckCopy[i]);
            }
        }
        if ((sumOfCards - temp.length) < 0) {
            temp.sort(() => Math.random() - 0.5);
            temp.length = sumOfCards;
        }
        cardDeckTempBlue = temp.sort(() => Math.random() - 0.5);
    }

    if (difficulty === 'veryHard') {
        for (let i = 0; i < blueCardsDeckCopy.length; i++) {
            if (blueCardsDeckCopy[i].difficulty == 'hard') {
                temp.push(blueCardsDeckCopy[i]);
            }
        }
        if (temp.length < sumOfCards) {
            for (let i = 0; i < blueCardsDeckCopy.length; i++) {
                if (blueCardsDeckCopy[i].difficulty == 'normal') {
                    temp2.push(blueCardsDeckCopy[i]);
                }
            }
        }
        temp2.sort(() => Math.random() - 0.5);//перемешиваем карты во втором массиве
        if ((sumOfCards - temp.length) < 0) {
            temp2.length = 0;
        } else {
            temp2.length = sumOfCards - temp.length;
        }
        cardDeckTempBlue = temp.concat(temp2).sort(() => Math.random() - 0.5);
    }
}


let cardDeckTempBrown;
function separatorBrownCard(sumOfCards) {
    let temp = [];
    let temp2 = [];
    if (difficulty === 'veryEasy') {
        for (let i = 0; i < brownCardsDeckCopy.length; i++) {
            if (brownCardsDeckCopy[i].difficulty == 'easy') {
                temp.push(brownCardsDeckCopy[i]);
            }
        }
        if (temp.length < sumOfCards) {
            for (let i = 0; i < brownCardsDeckCopy.length; i++) {
                if (brownCardsDeckCopy[i].difficulty == 'normal') {
                    temp2.push(brownCardsDeckCopy[i]);
                }
            }
        }
        temp2.sort(() => Math.random() - 0.5);//перемешиваем карты во втором массиве
        if ((sumOfCards - temp.length) < 0) {
            temp2.length = 0;
        } else {
            temp2.length = sumOfCards - temp.length;
        }
        cardDeckTempBrown = temp.concat(temp2).sort(() => Math.random() - 0.5);
    }
    if (difficulty === 'easy') {
        for (let i = 0; i < brownCardsDeckCopy.length; i++) {
            if (brownCardsDeckCopy[i].difficulty == 'easy' || brownCardsDeckCopy[i].difficulty == 'normal') {
                temp.push(brownCardsDeckCopy[i]);
            }
        }
        if ((sumOfCards - temp.length) < 0) {
            // temp.sort(() => Math.random() - 0.5);
            temp.length = sumOfCards;
        }
        cardDeckTempBrown = temp.sort(() => Math.random() - 0.5);

    }
    if (difficulty === 'normal') {
        for (let i = 0; i < brownCardsDeckCopy.length; i++) {
            temp.push(brownCardsDeckCopy[i]);

        }
        if ((sumOfCards - temp.length) < 0) {
            temp.sort(() => Math.random() - 0.5);
            temp.length = sumOfCards;
        }
        cardDeckTempBrown = temp.sort(() => Math.random() - 0.5);
    }

    if (difficulty === 'hard') {
        for (let i = 0; i < brownCardsDeckCopy.length; i++) {
            if (brownCardsDeckCopy[i].difficulty == 'hard' || brownCardsDeckCopy[i].difficulty == 'normal') {
                temp.push(brownCardsDeckCopy[i]);
            }
        }
        if ((sumOfCards - temp.length) < 0) {
            temp.sort(() => Math.random() - 0.5);
            temp.length = sumOfCards;
        }
        cardDeckTempBrown = temp.sort(() => Math.random() - 0.5);
    }

    if (difficulty === 'veryHard') {
        for (let i = 0; i < brownCardsDeckCopy.length; i++) {
            if (brownCardsDeckCopy[i].difficulty == 'hard') {
                temp.push(brownCardsDeckCopy[i]);
            }
        }
        if (temp.length < sumOfCards) {
            for (let i = 0; i < brownCardsDeckCopy.length; i++) {
                if (brownCardsDeckCopy[i].difficulty == 'normal') {
                    temp2.push(brownCardsDeckCopy[i]);
                }
            }
        }
        temp2.sort(() => Math.random() - 0.5);//перемешиваем карты во втором массиве
        if ((sumOfCards - temp.length) < 0) {
            temp2.length = 0;
        } else {
            temp2.length = sumOfCards - temp.length;
        }
        cardDeckTempBrown = temp.concat(temp2).sort(() => Math.random() - 0.5);
    }
}

let cardDeckRes = [];
function separator(level) {
    let cardDeckStage1 = [];
    let cardDeckStage2 = [];
    let cardDeckStage3 = [];
    if (azathothPath) {
        separatorBlueCard(2);
        separatorBrownCard(9);
        separatorGreenCard(5);
        //формируем колоду первой стадии Blue
        cardDeckStage1.push(cardDeckTempBlue[cardDeckTempBlue.length - 1])
        cardDeckTempBlue.pop();
        //формируем колоду первой стадии Brown
        cardDeckStage1.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage1.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        //формируем колоду первой стадии Green
        cardDeckStage1.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage1.sort(() => Math.random() - 0.5); //Перемешиваем
        //второй стадии Blue
        cardDeckStage2.push(cardDeckTempBlue[cardDeckTempBlue.length - 1])
        cardDeckTempBlue.pop();
        //второй стадии Brown
        cardDeckStage2.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage2.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage2.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        //второй стадии Green
        cardDeckStage2.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage2.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage2.sort(() => Math.random() - 0.5); //Перемешиваем
        //3-й стадии Blue
        //3-й стадии Brown
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        //3-й стадии Green
        cardDeckStage3.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage3.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage3.sort(() => Math.random() - 0.5); //Перемешиваем
        //Формируем общую колоду
        cardDeckRes = cardDeckStage1.concat(cardDeckStage2).concat(cardDeckStage3);

    }
    if (cthulhuPath) {
        separatorBlueCard(2);
        separatorBrownCard(9);
        separatorGreenCard(4);
        //формируем колоду первой стадии Blue
        cardDeckStage1.push(cardDeckTempBlue[cardDeckTempBlue.length - 1])
        cardDeckTempBlue.pop();
        cardDeckStage1.push(cardDeckTempBlue[cardDeckTempBlue.length - 1])
        cardDeckTempBlue.pop();
        //формируем колоду первой стадии Brown
        cardDeckStage1.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage1.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        //формируем колоду первой стадии Green
        cardDeckStage1.sort(() => Math.random() - 0.5); //Перемешиваем
        //второй стадии Blue
        //второй стадии Brown
        cardDeckStage2.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage2.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage2.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        //второй стадии Green
        cardDeckStage2.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage2.sort(() => Math.random() - 0.5); //Перемешиваем
        //3-й стадии Blue
        //3-й стадии Brown
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        //3-й стадии Green
        cardDeckStage3.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage3.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage3.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage3.sort(() => Math.random() - 0.5); //Перемешиваем
        //Формируем общую колоду
        cardDeckRes = cardDeckStage1.concat(cardDeckStage2).concat(cardDeckStage3);

    };
    if (iogsothPath) {
        separatorBlueCard(2);
        separatorBrownCard(9)
        separatorGreenCard(5);
        //формируем колоду первой стадии Blue
        cardDeckStage1.push(cardDeckTempBlue[cardDeckTempBlue.length - 1])
        cardDeckTempBlue.pop();
        //формируем колоду первой стадии Brown
        cardDeckStage1.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage1.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        //формируем колоду первой стадии Green
        cardDeckStage1.sort(() => Math.random() - 0.5); //Перемешиваем
        //второй стадии Blue
        cardDeckStage2.push(cardDeckTempBlue[cardDeckTempBlue.length - 1])
        cardDeckTempBlue.pop();
        //второй стадии Brown
        cardDeckStage2.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage2.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage2.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        //второй стадии Green
        cardDeckStage2.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage2.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage2.sort(() => Math.random() - 0.5); //Перемешиваем
        //3-й стадии Blue
        //3-й стадии Brown
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        //3-й стадии Green
        cardDeckStage3.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage3.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage3.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage3.sort(() => Math.random() - 0.5); //Перемешиваем
        //Формируем общую колоду
        cardDeckRes = cardDeckStage1.concat(cardDeckStage2).concat(cardDeckStage3);

    };
    if (shubNiggurathPath) {
        separatorBlueCard(2);
        separatorBrownCard(8);
        separatorGreenCard(6);
        //формируем колоду первой стадии Blue
        cardDeckStage1.push(cardDeckTempBlue[cardDeckTempBlue.length - 1])
        cardDeckTempBlue.pop();
        //формируем колоду первой стадии Brown
        cardDeckStage1.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage1.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        //формируем колоду первой стадии Green
        cardDeckStage1.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();

        cardDeckStage1.sort(() => Math.random() - 0.5); //Перемешиваем
        //второй стадии Blue
        cardDeckStage2.push(cardDeckTempBlue[cardDeckTempBlue.length - 1])
        cardDeckTempBlue.pop();
        //второй стадии Brown
        cardDeckStage2.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage2.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        //второй стадии Green
        cardDeckStage2.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage2.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage2.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();

        cardDeckStage2.sort(() => Math.random() - 0.5); //Перемешиваем
        //3-й стадии Blue

        //3-й стадии Brown
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        cardDeckStage3.push(cardDeckTempBrown[cardDeckTempBrown.length - 1])
        cardDeckTempBrown.pop();
        //3-й стадии Green
        cardDeckStage3.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage3.push(cardDeckTempGreen[cardDeckTempGreen.length - 1])
        cardDeckTempGreen.pop();
        cardDeckStage3.sort(() => Math.random() - 0.5); //Перемешиваем
        //Формируем общую колоду
        cardDeckRes = cardDeckStage1.concat(cardDeckStage2).concat(cardDeckStage3);

    }
}

let count = 0;
document.getElementById('separator__button').addEventListener('click', function () {
    document.querySelector('.deck').style.visibility = 'visible';
    separator(difficulty);
})

function counter() {
    if (count < stageOnesum && cardDeckRes[count].color == 'green' && document.getElementById('1').innerHTML != 0) {

        document.getElementById('1').innerHTML = +document.getElementById('1').innerHTML - 1;
    } else if (count < stageOnesum && cardDeckRes[count].color == 'brown' && document.getElementById('2').innerHTML != 0) {
        document.getElementById('2').innerHTML = +document.getElementById('2').innerHTML - 1;

    } else if (count < stageOnesum && cardDeckRes[count].color == 'blue' && document.getElementById('3').innerHTML != 0) {
        document.getElementById('3').innerHTML = +document.getElementById('3').innerHTML - 1;
    }

    if (count >= stageOnesum && count < (stageTwosum + stageOnesum) && cardDeckRes[count].color == 'green' && document.getElementById('4').innerHTML != 0) {
        document.getElementById('4').innerHTML = +document.getElementById('4').innerHTML - 1;

    } else if (count >= stageOnesum && count < (stageTwosum + stageOnesum) && cardDeckRes[count].color == 'brown' && document.getElementById('5').innerHTML != 0) {
        document.getElementById('5').innerHTML = +document.getElementById('5').innerHTML - 1;


    } else if (count >= stageOnesum && count < (stageTwosum + stageOnesum) && cardDeckRes[count].color == 'blue' && document.getElementById('6').innerHTML != 0) {
        document.getElementById('6').innerHTML = +document.getElementById('6').innerHTML - 1;

    }

    if (count >= (stageOnesum + stageTwosum) && count < (stageThreesum + stageTwosum + stageOnesum) && cardDeckRes[count].color == 'green' && document.getElementById('7').innerHTML != 0) {
        document.getElementById('7').innerHTML = +document.getElementById('7').innerHTML - 1;

    } else if (count >= (stageOnesum + stageTwosum) && count < (stageThreesum + stageTwosum + stageOnesum) && cardDeckRes[count].color == 'brown' && document.getElementById('8').innerHTML != 0) {
        document.getElementById('8').innerHTML = +document.getElementById('8').innerHTML - 1;


    } else if (count >= (stageOnesum + stageTwosum) && count < (stageThreesum + stageTwosum + stageOnesum) && cardDeckRes[count].color == 'blue' && document.getElementById('9').innerHTML != 0) {
        document.getElementById('9').innerHTML = +document.getElementById('9').innerHTML - 1;

    }
}

function getCardToScreen() {
    if (count < cardDeckRes.length) {
        document.querySelector('.last-card').style.backgroundImage = `url(${cardDeckRes[count].url}`;
        counter();
        count++;
    }



    else {
        alert('The deck of cards is over');
        window.location.reload();
        return;
    }
    console.log(cardDeckRes);
}

document.querySelector('.deck').addEventListener('click', () => {

    getCardToScreen();
    if (count == cardDeckRes.length) {
        document.querySelector('.deck').style.cursor = 'default';
        document.querySelector('.deck').style.opacity = 0;
    }

})

// function enumerator() {
//     if (count < 3 &&  cardDeckRes[count].сolor == 'brown') {
//        document.getElementById('2').innerHTML = +document.getElementById('2').innerHTML--
//     }
// }