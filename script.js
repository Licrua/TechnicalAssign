document.addEventListener('DOMContentLoaded', () => {
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');
    const cardPopcorn = document.querySelector('.card--popcorn');
    const cardIcecream = document.querySelector('.card--icecream');

    function updateCards() {
        if (slide1.checked) {
            cardPopcorn.classList.add('center');
            cardPopcorn.classList.remove('offset');
            cardIcecream.classList.add('offset');
            cardIcecream.classList.remove('center');
        } else if (slide2.checked) {
            cardIcecream.classList.add('center');
            cardIcecream.classList.remove('offset');
            cardPopcorn.classList.add('offset');
            cardPopcorn.classList.remove('center');
        }
    }

    slide1.addEventListener('change', updateCards);
    slide2.addEventListener('change', updateCards);

    updateCards();
});
