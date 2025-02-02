const pagesContainer = document.querySelector('.pages-container');
const dots = document.querySelectorAll('.dot');

let currentPage = 0;

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        changePage(index);
    });
});

function changePage(pageIndex) {
    if (pageIndex === currentPage) return;

    currentPage = pageIndex;
    pagesContainer.style.transform = `translateX(${-100 * pageIndex}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[pageIndex].classList.add('active');
}