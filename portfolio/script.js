document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const projects = document.querySelector('.projects');
    const items = projects.querySelectorAll('.project-tile');
    let index = 0;

    function showItem(newIndex) {
        items[index].classList.remove('active');
        items[newIndex].classList.add('active');
        projects.style.transform = `translateX(-${newIndex * 100}%)`;
        index = newIndex;
    }

    prevButton.addEventListener('click', function() {
        showItem((index - 1 + items.length) % items.length);
    });

    nextButton.addEventListener('click', function() {
        showItem((index + 1) % items.length);
    });
});
