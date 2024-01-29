document.addEventListener('DOMContentLoaded', function () {
    var catalogItemLinks = document.querySelectorAll('.catalog-item__link');

    catalogItemLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var contentItem = link.parentElement;
            var listItem = contentItem.nextElementSibling;

            contentItem.classList.remove('catalog-item__content_active');

            listItem.classList.add('catalog-item__list_active');
        });
    });

    var catalogItemBacks = document.querySelectorAll('.catalog-item__back');

    catalogItemBacks.forEach(function (back) {
        back.addEventListener('click', function (event) {
            event.preventDefault();

            var listItem = back.parentElement;
            var contentItem = listItem.previousElementSibling;

            listItem.classList.remove('catalog-item__list_active');

            contentItem.classList.add('catalog-item__content_active');
        });
    });
});
