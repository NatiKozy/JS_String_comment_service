// - Поле для ввода имени. Сделайте интерфейс преобразования имени, который учтёт, все нюансы — лишние пробелы, отсутствие больших букв в имени и прочее.
// Например, было введено пользователем : `иВаН` .
// Стало: `Иван` .
// - поле для ввода ссылки на аватар;
// - поле ввода сообщения. Необходимо реализовать отображение и добавление сообщений, а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***` ;
// - функция должна быть нечувствительна к регистру:


function showData(name, imageSrc, editComments){
    let nameInput = document.createElement('div');
    nameInput.textContent = name;

    let image = document.createElement('img');
    image.classList.add('img__size');
    image.src = imageSrc;

    let commentsDiv = document.createElement('div');
    commentsDiv.textContent = editComments;

    let nameContainer = document.querySelector('.service__chat');
    nameContainer.append(nameInput);
    nameContainer.append(image);
    nameContainer.append(commentsDiv);
}


function correctName(str){
    let rightName = str.trim();
    rightName = (rightName[0].toUpperCase() + rightName.slice(1).toLowerCase());
    return rightName;
}


function checkSpam(str){
    let editComments = str.trim();
    editComments = /(viagra|xxx)/gi;
    return str.replace(editComments, '***');
}


const input = document.getElementById('avatar');
const button = document.getElementById('button');
button.addEventListener('click', () =>{
    let formattedName = correctName(document.getElementById('name').value);
    document.getElementById('name').value = " ";

    let input = document.getElementById('avatar').value;
    document.getElementById('avatar').value = " ";

    let userComments = checkSpam(document.getElementById('comments').value);
    document.getElementById('comments').value = " ";

    showData(formattedName, input, userComments);

});

const text = '<div id="text"><h1>Здесь лежит важная</h1><br> <a href="link"><b>информация</b></a> о тегах HTML, <i>которую нужно очистить.</i></div>'

function deleteTags(text) {
    const regex = /( |<([^>]+)>)/ig,
    result = text.replace(regex, " ");

    return result;
}

document.writeln(deleteTags(text)) // 'Здесь лежит важная информация о тегах HTML, которую нужно очистить.'











