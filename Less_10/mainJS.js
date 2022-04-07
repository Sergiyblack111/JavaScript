
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике
// на кнопку исчезал элемент с id="text".
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// 1 варінт ===========================================================
// let click = document.getElementById('text');
// let button = document.getElementById('button');
// button.onclick = function () {
//     click.style.display = 'none';
// };

// 2 варіант ===========================================================
// document.getElementById('button').onclick = function () {
//     document.getElementById('text').hidden = true;
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// document.getElementById('button1').onclick = function () {
//     let age = document.getElementById('age').value;
//     if (!age) {
//         alert('Ви не ввели свого віку');
//     } else if (+age < 18) {
//         alert('Вам менше 18');
//     } else {
//         alert('Вам більше 18');
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
// let menuElement = document.querySelector('.menu');
// let titleElement = document.querySelector('.title');
// let divElement = document.querySelector('.containerOhh');
//
// titleElement.onclick = function () {
//     menuElement.classList.toggle('hidden');
//     divElement.classList.toggle('containerOhh');
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {name: 'Максим', commentary: 'Вчи English'},
    {name: 'Іван', commentary: 'Досить сидіти, вже пізно'},
    {name: 'Льоня', commentary: 'Зупка, стине, ходи додому'},
    {name: 'Іра', commentary: 'Воно, тобі треба?'},
];

let divFather = document.createElement('div');
for (const item of comments) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let hr = document.createElement('hr');

    h3.innerText = item.name;
    p.innerText = item.commentary;
    btn.innerText = 'згорни/розгорни';

    btn.onclick = () => {
        p.classList.toggle('pHidden');
        //btn.previousElementSibling.classList.add('pHidden'); - 2 варіант
    }

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(btn);
    divFather.append(div, hr);
}
document.body.appendChild(divFather);
