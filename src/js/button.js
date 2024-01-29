document.addEventListener('DOMContentLoaded', function () {
    // Найти все элементы с классом catalog__tab
    var catalogTabs = document.querySelectorAll('.catalog__tab');

    // Перебрать каждый элемент catalog__tab
    catalogTabs.forEach(function (tab) {
        // Добавить слушатель события клика
        tab.addEventListener('click', function () {
            // Удалить класс 'catalog__tab_active' у всех вкладок
            catalogTabs.forEach(function (t) {
                t.classList.remove('catalog__tab_active');
            });

            // Добавить класс 'catalog__tab_active' к текущей вкладке
            tab.classList.add('catalog__tab_active');

            // Найти соответствующий catalog__content
            var contentId = tab.getAttribute('data-content-id');
            var content = document.querySelector('.catalog__content[data-content-id="' + contentId + '"]');

            // Удалить класс 'catalog__content_active' у всех контентов
            document.querySelectorAll('.catalog__content').forEach(function (c) {
                c.classList.remove('catalog__content_active');
            });

            // Добавить класс 'catalog__content_active' к соответствующему контенту
            content.classList.add('catalog__content_active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Найти все элементы с классом catalog__tab
    var catalogTabs = document.querySelectorAll('.rooms_overview_tab');

    // Перебрать каждый элемент catalog__tab
    catalogTabs.forEach(function (tab) {
        // Добавить слушатель события клика
        tab.addEventListener('click', function () {
            // Удалить класс 'catalog__tab_active' у всех вкладок
            catalogTabs.forEach(function (t) {
                t.classList.remove('rooms_overview_tab_active');
            });

            // Добавить класс 'catalog__tab_active' к текущей вкладке
            tab.classList.add('rooms_overview_tab_active');

            // Найти соответствующий catalog__content
            var contentId = tab.getAttribute('data-content-id');
            var content = document.querySelector('.rooms_descr[data-content-id="' + contentId + '"]');

            // Удалить класс 'catalog__content_active' у всех контентов
            document.querySelectorAll('.rooms_descr').forEach(function (c) {
                c.classList.remove('rooms_descr_active');
            });

            // Добавить класс 'catalog__content_active' к соответствующему контенту
            content.classList.add('rooms_descr_active');
        });
    });
});