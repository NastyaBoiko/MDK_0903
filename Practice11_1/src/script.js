let btnShow = document.querySelector(".button-show");
let popup = document.querySelector(".popup");
let btnHide = document.querySelector(".button-hide");

// btnShow.removeAttribute("href");

// Открытие модалки по кнопке
btnShow.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup--open');
})

// Закрытие модалки по кнопке
btnHide.addEventListener('click', function () {
    popup.classList.remove('popup--open');
})

// Закрытие модалки по ESC
document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    // console.log(e.code);
    if (e.key == "Escape" && popup.classList.contains('popup--open')) {
        popup.classList.remove('popup--open');
    }

    // Можно через код ивента
    // if (e.code === 27) {
    //     popup.classList.remove('popup--open');
    // }
})


/* Техническое задание

Нужно запрограммировать взаимодействие с пользователем.

В разметке есть попап (класс 'popup').

Клик по кнопке «Показать подробности» (класс 'button-show') должен вызвать показ окна на странице. У попапа должен появиться класс 'popup--open'.

Клик крестику в теле попапа (класс 'button-hide') должен спрятать окно со страницы. Для этого нужно удалить класс 'popup--open' у окна.

Кроме этого, если окно на странице, а пользователь нажал клавишу ESC, попап тоже должен исчезнуть. Закрытие попапа должно срабатывать только по этой клавише, нажатие на другие клавиши не должны влиять на положение всплывающего окна.

И не забывай, что кнопка «Показать подробности» свёрстана ссылкой. Не забудь отменить переход по этой ссылке.

*/
