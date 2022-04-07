// - створити функцію яка обчислює та повертає площу прямокутника

/*function calculateRectangleArea(a, b) {
    return a * b;
}

const rectangleArea = calculateRectangleArea(10, 10);
console.log(rectangleArea);
document.write(`Площа прямокутника: ${rectangleArea}`);*/


// - створити функцію яка обчислює та повертає площу круга

/*function calculateAreaCircle(r) {
    return 3.14 * (r ** 2);
}

const sCircle = calculateAreaCircle(10);
console.log(sCircle);
document.write(`площа круга: ${sCircle}`);*/


//- створити функцію яка обчислює та повертає площу циліндру S= 2πRH

/*function calculateAreaСylinder(r, h) {
    return 2 * 3.14 * r * h;
}

const sCylindre = calculateAreaСylinder(4, 4);
console.log(sCylindre);
document.write(`площа циліндра: ${sCylindre}`);*/


//- створити функцію яка приймає масив та виводить кожен його елемент

/*let array = [1, 2, 3, 4, 5, 'hello world', 'okten'];

function dataArray(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(`${array[i]}<br>`)         //    `${ } <br>` - з нової строки;
    }
}

dataArray(array)*/


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

/*function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}
createParagraph('hello')*/


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*function createUl(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`)
}

createUl('hello world')*/


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

/*function createUl2(text, numberLi) {
    document.write(`<ul>`)
    for (let i = 0; i < numberLi; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
createUl2('hello world', 5);*/


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує
// для них список

/*const anyArray = [true,'Stepan Giga', 2021, 'Ivo Bobul'];

function createList(array) {

    document.write(`<ol>`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ol>`);
}

createList(anyArray);*/


// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить
// їх в документ. Для кожного об'єкту окремий блок.

/*let list = [{id: 1, name: 'Soso', age: 55}, {id: 2, name: 'Valeriy', age: 50},
    {id: 3, name: 'Ivo', age: 65}];

function creatNewDiv(array) {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}, ${arrayElement.name} - ${arrayElement.age}</div>`)
    }
}

creatNewDiv(list)*/
