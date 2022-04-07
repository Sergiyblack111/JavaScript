// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone
}

const kokos = new User(1, 'kokos', 'abrikos', 'kokos@gmail', 776);
console.log(kokos)
document.write(kokos.name, kokos.surname)


// створити пустий масив, наповнити його 10 об'єктами new User(....)

const userArr = [
    new User(14, 'Stepan', 'Giga', 'sg@gmail.com', 30680000001),
    new User(2, 'Olko', 'Atb', 'av@gmail.com', 30680000002),
    new User(36, 'Nina', 'Ola', 'ddf@gmail.com', 30680000003),
    new User(43, 'Stepan', 'Btn', 'gtr@gmail.com', 30680000004),
    new User(5, 'Stecia', 'Luziv', 'sde@gmail.com', 30680000005),
    new User(61, 'Stepan', 'Misko', 'ashh@gmail.com', 30680000006),
    new User(78, 'Yozef', 'Liga', 'uj7@gmail.com', 30680000007)
];

console.log(userArr[0]);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з
// парними id (filter)

let filterUser = userArr.filter(item => {
    if (item.id % 2 === 0) {
        return item
    }
});
console.log(filterUser);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

userArr.sort((a, b) => a.id - b.id);
console.log(userArr.sort());

console.log(userArr.sort((a, b) => a.id - b.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id,
            this.name = name,
            this.surname = surname,
            this.email = email,
            this.phone = phone,
            this.order = order
    }
}

let client = new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
    8);

console.log(client);


// створити пустий масив, наповнити його 10 об'єктами Client

let emptyArray = [
    new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
        8),
    new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
        6),
    new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
        3),
    new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
        8),
    new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
        1),
    new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
        11),
    new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
        13),
    new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
        13),
    new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
        14),
    new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
        3)
];

console.log(emptyArray);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в
// полі order по зростанню. (sort)

console.log(emptyArray.sort((a, b) => a.order - b.order));

// let sortCLients = emptyArray.sort((a, b) => a.order.length - b.order.length);
// console.log(sortCLients)
