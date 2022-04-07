/*--створити масив з:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/

/*
let numbers = [1, 2, 3, 4, 5];
let word  = [`one`, `two`, `three`, `four`, `five`];
let strNumBool = [`dog`, `fox`, 10, 11, true, false]; {
    console.log(numbers);
    console.log(word);
    console.log(strNumBool);
}
*/








/*-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
    Вивести в консоль*/

/*let array = [];
array[0] = 'html';
array[1] = 'css';
array[2] = 'ls';
array[3] = 'jsNode';
array[4] = 'java';
console.log(array[1]);
document.write(array[1]);*/










/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/

/*for (let i = 0; i < 10; i++) {
    document.write(`<div>emty text</div>`);
}*/

/*for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} empty text with index array for </div>`);
}*/

/*let j= 0;
while (j<20) {
    document.write(`<h1> empty text while </h1>`);
    j++
}*/

/*let q = 0;
while (q<20) {
    document.write(`<h1> text ${q}  <h1`);
    q++
}*/








// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

/*let array = ['one', 'two', 'apple', 'team', 'okten', 'hello', '2021', 'year', 'audi', 'js'];
for (i = 0; i<array.length; i++) {
    console.log(array[i])
}*/





// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

/*let numArray = [1,2,3,4,5,6,7,8,9,10];
for (i = 0; i<numArray.length; i++) {
    console.log(numArray[i])
}*/




// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

/*let allArray = [false, 'two', 111, true, 'okten', 23, 45,'vasia', {}, [], 'hi'];
for (i = 0; i < allArray.length; i++) {
    console.log(allArray[i]);
}*/







// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
//     вивести тільки булеві елементи

/*let arreyBoolean = [false, 'one', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
for (let i = 0; i < arreyBoolean.length; i++) {
     if (typeof arreyBoolean[i] === 'boolean') {
         console.log(arreyBoolean[i]);
     }
}*/









// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
//     вивести тільки числові елементи

/*let arrayNumber = [false, 'two', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
for (let i = 0; i < arrayNumber.length; i++) {
    if (typeof arrayNumber[i] === 'number') {
        console.log(arrayNumber[i]);
    }
}*/








// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
//     вивести тільки рядкові елементи

/*let arrayString = [false, 'two', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
for (let i = 0; i < arrayString.length; i++) {
    if (typeof arrayString[i] === 'string') {
        console.log(arrayString[i])
    }
}*/













// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до
// конкретних індексів. Вивести в консоль всі його елементи в циклі.

/*let newEmptyArray = [];
newEmptyArray[0] = 'Happy';
newEmptyArray[1] = 'New';
newEmptyArray[2] = 2022;
newEmptyArray[3] = 'Chto';
newEmptyArray[4] = 'Gde';
newEmptyArray[5] = 'Kuda';
newEmptyArray[6] = 'Sinho Faza Tron';
newEmptyArray[7] = true;
newEmptyArray[8] = 2019;
newEmptyArray[9] = false;
for (let i = 0; i < newEmptyArray.length; i++) {
    console.log(newEmptyArray[0])
    console.log(newEmptyArray[1])
    console.log(newEmptyArray[2])
    console.log(newEmptyArray[3])
    console.log(newEmptyArray[5])
    console.log(newEmptyArray[6])
    console.log(newEmptyArray[7])
    console.log(newEmptyArray[8])
    console.log(newEmptyArray[9])
}*/











//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через
// console.log та document.write

/*for (let i = 0; i < 10; i++) {
    console.log('поточний крок циклу: ' + i + ' ');
    document.write('поточний крок циклу: ' + i + ' ')
}*/










// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log
// та document.write
/*for (let i = 0; i < 100; i++) {
    console.log(`поточний крок циклу: ${i}\n`);
    document.write(`поточний крок циклу: ${i}\n`);
}*/






// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log
// та document.write

/*for (let i = 0; i < 100; i+=2) {
    console.log(`поточний крок циклу: ${i}\n`);
    document.write(`поточний крок циклу: ${i}\n`)
}*/









// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

/*for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(`поточний номер циклу: ${i}\n`);
        document.write(`поточний номер циклу: ${i}\n`)
    }
}*/











// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
/*for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(`поточний номер циклу: ${i}\n`);
        document.write(`поточний номер циклу: ${i}\n`)
    }
}*/
