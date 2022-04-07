
//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або
// document.getElementsByTagName :


//-- отримує текст з параграфа з id "content"
let contentById = document.getElementById('content');
console.log(contentById);

// -- отримує текст з блоку з id "rules"
let rulesById = document.getElementById('rules');
console.log(rulesById);

// -- замініть текст параграфа з id 'content' на будь-який інший
contentById.innerHTML = '<b>TEST TEST TEST Lorem ipson beauty today</b>'

// -- замініть текст параграфа з id 'rules' на будь-який інший
rulesById.innerHTML = '<h1>Декілька правил виконання ДЗ в OKTEN SCHOOL</h1>'

// -- змініть кожному елементу колір фону на червоний
let childrenBackground = document.body.children;
for (const el of childrenBackground) {
    el.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій
let childrenTextColor = document.body.children;
for (const ol of childrenTextColor) {
    ol.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesId = document.getElementById('rules');
console.log(rulesId.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let classRules = document.getElementsByClassName('fc_rules');
for (const el of classRules) {
    el.style.color = 'red'
}

