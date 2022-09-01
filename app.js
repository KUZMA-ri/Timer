'use strict';
const root = document.querySelector('#root');           // root

const navigation = document.createElement('div');       // div for buttons   
navigation.classList.add('navigation');

const h1 = document.createElement('h1');                // timer
h1.classList.add('timer');

const btnStart = document.createElement('button');      // button START
btnStart.classList.add ('btn', 'btn-success');
btnStart.innerText = 'START';

const btnStop = document.createElement('button');       // button STOP
btnStop.classList.add ('btn', 'btn-danger');
btnStop.innerText = 'STOP';

root.append(h1, navigation);
navigation.append(btnStart, btnStop);


// -------------------------------------------------------------------------------
function saveCount(data) {
    localStorage.setItem('count', data);         // записываем данные в хранилище
};
// -------------------------------------------------------------------------------

let count = localStorage.getItem('count') ?? 0;  // получаем либо значение, либо 0
h1.textContent = `${count} sec`;                 // задаем значение h1 

let interval;                                    // задаем интервал времени

btnStart.addEventListener('click', () => {       // при нажатии на кнопку "Старт" запускаем счетчик
    interval = setInterval(() => {
    count++;                                     // увеличиваем значение на 1 (отображается в h1)
    saveCount(count);                            // сохраняем значение счетчика
    h1.textContent = `${count} sec`;             // перезаписываем значение счетчика 
}, 1000)                                         // c интервалoм в 1 сек
});  

btnStop.addEventListener('click', () => clearInterval(interval));   // при нажатии на кнопку "Стоп" останавливает счетчик

