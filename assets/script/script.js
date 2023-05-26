// - Поле для ввода имени. Сделайте интерфейс преобразования имени, который учтёт, все нюансы — лишние пробелы, отсутствие больших букв в имени и прочее.
// Например, было введено пользователем : `иВаН` .
// Стало: `Иван` .
// - поле для ввода ссылки на аватар;
// - поле ввода сообщения. Необходимо реализовать отображение и добавление сообщений, а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***` ;
// - функция должна быть нечувствительна к регистру:


function correctName(str){
    const nameContainer = document.querySelector('.service__chat');

    const nameInput = document.createElement('div');
    const username = document.getElementById('name').value;

    let change = username.trim();

    change = (username[0].toUpperCase() + username.slice(1).toLowerCase());


    nameInput.textContent = change;
    nameContainer.append(nameInput);
    document.getElementById('name').value = " ";

}

function showImg(src) {
    const imgContainer = document.querySelector('.service__chat');

    let image = document.createElement('img');
    image.classList.add('img__size')
    image.src = src;
    imgContainer.append(image);
}

function checkSpam(str){
    const commentsContainer = document.querySelector('.service__chat');

    const commentsDiv = document.createElement('div');

    const userComments = document.getElementById('comments').value;

    let editComments = userComments.trim();
    editComments = userComments.replace(/viagra|xxx/gi, '***');
    commentsDiv.textContent = editComments;

    commentsContainer.append(commentsDiv);
    document.getElementById('comments').value = " ";

}


const input = document.getElementById('avatar');
const button = document.getElementById('button');
button.addEventListener('click', () =>{
    correctName();
    showImg(input.value);
    input.value = null;
    checkSpam();
},
{once:true}
);











