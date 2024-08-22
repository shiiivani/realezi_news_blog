document.querySelector('.toggle-collapse').addEventListener('click', function () {
    var cardContainer = document.getElementById('cardContainer');
    var arrowIcon = document.getElementById('arrowIcon').querySelector('i');

    if (cardContainer.classList.contains('collapse')) {
        cardContainer.classList.remove('collapse');
        cardContainer.classList.add('show');
        arrowIcon.classList.remove('fa-arrow-down');
        arrowIcon.classList.add('fa-arrow-up');
    } else {
        cardContainer.classList.remove('show');
        cardContainer.classList.add('collapse');
        arrowIcon.classList.remove('fa-arrow-up');
        arrowIcon.classList.add('fa-arrow-down');
    }
});