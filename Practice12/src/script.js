let chatFormBtn = document.querySelector(".chat-form-button");
let chatFormInput = document.querySelector(".chat-form-input");
let chatForm = document.querySelector(".chat-form");
let chatContent = document.querySelector('.chat-content');

let tabIndex = 0;

// console.log(chatFormBtn);

chatFormBtn.addEventListener('click', function (event) {
    event.preventDefault();

    if (chatFormInput.value.trim()) {
        // console.log(chatFormInput.value);

        let chatMessage = document.createElement('div');
        chatMessage.classList.add('chat-message');
        chatMessage.tabIndex = tabIndex++;

        let chatMessageName = document.createElement('span');
        chatMessageName.classList.add('chat-message-name');
        chatMessageName.textContent = "Неопознанный енот";
        // console.log(chatMessageName);

        let chatMessageText = document.createElement('p');
        chatMessageText.textContent = chatFormInput.value;
        chatMessageText.classList.add('chat-message-text');

        let chatMessageBtn = document.createElement('b');
        chatMessageBtn.classList.add('chat-message-button');
        chatMessageBtn.setAttribute('type', 'button');
        chatMessageBtn.textContent = "Удалить";

        chatMessage.appendChild(chatMessageName);
        chatMessage.appendChild(chatMessageText);
        chatMessage.appendChild(chatMessageBtn);

        chatContent.appendChild(chatMessage);

        removeParentHandler(chatMessageBtn);

        // Вынесла в отдельную функцию
        // chatMessageBtn.addEventListener('click', function () {
        //     this.parentNode.remove();
        // })

        chatForm.reset();
    }
})


let removeParentHandler = function (node) {
    node.addEventListener('click', function () {
        this.parentNode.remove();
    })
}


/*

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).

- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.


*/

/* <div class="chat-message" tabindex="0">
    <span class="chat-message-name">Неопознанный енот</span>
    <p class="chat-message-text"></p>
    <button class="chat-message-button" type="button">Удалить</button>
</div> */
