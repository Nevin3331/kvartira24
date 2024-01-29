document.addEventListener('DOMContentLoaded', function () {
    // Находим все элементы с классом stars-item
    var starsItems = document.querySelectorAll('.stars-item');

    // Навешиваем обработчик события на каждый элемент
    starsItems.forEach(function (item, index) {
        item.addEventListener('mouseenter', function () {
            // При наведении изменяем цвет фона на жёлтый
            for (var i = 0; i <= index; i++) {
                starsItems[i].classList.add('active');
            }
        });

        item.addEventListener('mouseleave', function () {
            // При уходе мыши возвращаем цвет фона на серый
            for (var i = 0; i < starsItems.length; i++) {
                if (!starsItems[i].classList.contains('selected')) {
                    starsItems[i].classList.remove('active');
                }
            }
        });

        item.addEventListener('click', function (event) {
            // Предотвращаем автоматическую прокрутку страницы
            event.preventDefault();

            // Убираем класс 'selected' со всех элементов
            starsItems.forEach(function (star) {
                star.classList.remove('selected');
            });

            // При клике сохраняем выбор в скрытом поле
            document.getElementById('comment-form-stars').value = index + 1;

            // Добавляем класс 'selected' к выбранной звезде
            for (var i = 0; i <= index; i++) {
                starsItems[i].classList.add('selected');
            }
        });
    });
});