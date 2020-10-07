const player = {
    name: '',
    class: '',
    level: 0,
    xp: null,

    baseParams: {
        hp: null,
        mp: null,
    },

    attack: {
        minDmg: null,
        maxDmg: null,
        action: null,
    }
};


const baseConfig = {

    baseParams: {
        warrior: {
            hp: 200,
            mp: 50,
        },

        scout: {
            hp: 150,
            mp: 100,
        },

        wizard: {
            hp: 100,
            mp: 200,
        },
    },

    attack: {
        warrior: {
            minDmg: 10,
            maxDmg: 20,
            action: (minDmg, maxDmg) => {
                const finalDmg = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;
                console.log(finalDmg);
            }
        },

        scout: {
            minDmg: 30,
            maxDmg: 40,
            action: (minDmg, maxDmg) => {
                const finalDmg = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;
                console.log(finalDmg);
        },
    },

        wizard: {
            minDmg: 50,
            maxDmg: 60,
            action: (minDmg, maxDmg) => {
                const finalDmg = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;
                console.log(finalDmg);
        },
    }
}

player.name = prompt('Как тебя зовут?') || 'Loser';

preparePlayerInfoByClass();

console.log(player);

function preparePlayerInfoByClass() {
        chosenClass = prompt('Выберите класс персонажа: "warrior" | "scout" | "wizard"');

    if (chosenClass === 'warrior' || chosenClass === 'scout' || chosenClass === 'wizard') {
        player.class = chosenClass;
    setBasePlayerParams(chosenClass);
    } else {
        alert('Ты дурак');
        preparePlayerInfoByClass();
    }
} 



function setBasePlayerParams(chosenClass) {
    player.baseParams = baseConfig.baseParams[chosenClass];
    player.attack = baseConfig.attack[chosenClass];
}























































// // const user = {}

// // // goGetSomeBread(10);

// // // function goGetSomeBread(breadCount) {
// // //     console.log('Взять денег');
// // //     console.log('Пойти в магаз');
// // //     console.log('Оплатить ' + breadCount + ' хлеб');
// // //     console.log('Вернуться домой');
// // //     console.log('Лечь на диван и отдыхать');
// // // }


// // alert('Привет — давай заполним твою страницу!');


// // user.name = prompt('Как тебя зовут?') || 'Кеша';

// // user.age = prompt('Сколько тебе лет?') || '5';

// // if (confirm('Учишься в школе?')) {
// //     user.school = prompt('В какой школе?') || 'Интернат';

// // } else {
// //     user.job = prompt('Кем работешь?') || 'Блогер';
// // }

// // user.avatar = prompt('Скинь ссылку на фото') || 'https://sun9-3.userapi.com/fnI_lrvN4HF2ogDCgT_jsDQ_-QtpvkJAQE0lWg/QgajxL_vCBY.jpg';

// // document.getElementById('js-name').innerText = ('Имя:' + ' ' + user.name);
// // document.getElementById('js-age').innerText =  'Возраст: ' + setDeclinationByCount(user.age);

// // if (user.school) {
// //     document.getElementById('js-school').innerText =('Школа:' + ' ' + user.school);
// // }

// // else (document.getElementById('js-job').innerText = ('Должность:' + ' ' + user.job));


// // document.getElementById('js-avatar').innerText = user.avatar;

// // function setDeclinationByCount(count) {
// //     if (count == 1) {
// //         return count + ' год'
// //     } else if (count > 1 && count < 5) {
// //         return count + ' года'
// //     } else {
// //         return count + ' лет'
// //     }
// // }


// function getSquareSum() {
//    return getSquare(prompt('введите первое число', 11)) + getSquare(prompt('введите второе число', 12));
// }

// function getSquare(a) {
//     return a * a;
// }

// function checkHomeworkStatus() {

//      if (getSquareSum() == 265) {
//         return 'perfect';
//     } 
    
//     return 'nope';

// }

// function setMark(status) {
//     if (status === 'perfect') {
//         alert('5');
//     } else if (status === 'nope') {
//         alert('2');
//     }
// }

// alert(setMark());

// //  alert(getSquareSum());

// // function getProsent() {
// //     return(prompt('введите первое число') || 15) / (prompt('введите второе число') || 90) * 100;
// // }

// // alert(getProsent());

































