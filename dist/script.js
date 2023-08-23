let lastScrollTop = 0;
const contentSection = document.getElementById('intro');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top <= window.innerHeight && rect.bottom >= 0);
}

window.addEventListener("scroll", function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        // Downward scroll
        if (isElementInViewport(contentSection)) {
            contentSection.classList.add("enter-from-left");
            contentSection.classList.remove("exit-to-left");
        }
    } else {
        // Upward scroll
        if (!isElementInViewport(contentSection)) {
            contentSection.classList.add("exit-to-left");
            contentSection.classList.remove("enter-from-left");
        }
    }

    lastScrollTop = st <= 0 ? 0 : st;
}, false);