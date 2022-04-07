
//  1.
// Отримати відповідь з цього ресурсу, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати
// 5 елементів в рядку.
//  Для кожного елементу свій блок div.post
//  Всі характеристики повинні мати свої блоки всередені div.post
//https://jsonplaceholder.typicode.com/posts
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json();
//     })
//     .then(posts => {
//         let wrapper = document.createElement('div');
//         wrapper.classList.add('wrapper');
//         for (const post of posts) {
//             let divCard = document.createElement('div');
//             divCard.classList.add('post');
//             divCard.innerHTML = `
//                 <h3>ID: ${post.id}</h3>,
//                 <h4>Title: ${post.title}</h4>,
//                 <h5>Body: ${post.body}</h5>
// `;
//             wrapper.appendChild(divCard);
//             document.body.appendChild(wrapper);
//         }
//     });



//    2.
//  Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті.
//      Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        for (const comment of comments) {
            let divCard = document.createElement('div');
            divCard.classList.add('comment');
            divCard.innerHTML = `
                    <h3>ID: ${comment.id}</h3>
                    <h4>Name: ${comment.name}</h4>
                    <h5>Email: ${comment.email}</h5>
                    <h6>Body: ${comment.body}</h6>
`;
            wrapper.appendChild(divCard);
            document.body.appendChild(wrapper);
        }
    })

