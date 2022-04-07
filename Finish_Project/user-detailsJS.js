
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен
// клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего
// юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу
// post-details.html, которая имеет детальную информацию про текущий пост.

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

let userDetailsContainer = document.getElementsByClassName('user-details')[0];
let postsContainer = document.getElementsByClassName('posts')[0];

let postsDetailButton = document.getElementsByClassName('postsDetailButton')[0];
userDetailsContainer.innerText = `${JSON.stringify(user)}`;

postsDetailButton.innerText = 'show posts of user';
postsDetailButton.onclick = function () {
    this.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            for (const postItem of value) {
                let postContainer = document.createElement('div');
                postContainer.classList.add('post');
                postContainer.innerText = postItem.title;
                let postDetailsButton = document.createElement('button');
                postDetailsButton.innerText = 'post details';
                postDetailsButton.onclick = function () {
                    location.href = `./postDetails.html?data=${JSON.stringify(postItem)}`;
                };

                postContainer.appendChild(postDetailsButton);
                postsContainer.appendChild(postContainer);
            }
        });
};
