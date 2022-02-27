/**
 * Expands and contracts the articles when the readmore link is clicked.
 */
const readMore = () => {
    const readMoreLinks = document.getElementsByClassName('read-more');
    const showLessLinks = document.getElementsByClassName('show-less');

    for (let i = 0; i < readMoreLinks.length; i++) {
        const link = readMoreLinks[i];
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const article = link.closest('article');
            article.querySelector('.full-content').classList.add('show');
            article.querySelector('.read-more').classList.add('dn');
            article.querySelector('.show-less').classList.remove('dn');
        })
    }

    for (let i = 0; i < showLessLinks.length; i++) {
        const link = showLessLinks[i];
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const article = link.closest('article');
            article.querySelector('.full-content').classList.remove('show');
            article.querySelector('.read-more').classList.remove('dn');
            article.querySelector('.show-less').classList.add('dn');
        })
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => readMore());
});
