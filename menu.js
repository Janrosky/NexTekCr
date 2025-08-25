(function () {
    const btn = document.querySelector('.hamburger');
    const nav = document.getElementById('primary-nav');
    const header = document.querySelector('header');

    function syncHeaderHeight() {
        if (!header) return;
        document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
    }

    btn.addEventListener('click', function () {
        const open = nav.classList.toggle('show');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            nav.classList.remove('show');
            btn.setAttribute('aria-expanded', 'false');
        }
    });

    window.addEventListener('load', syncHeaderHeight);
    window.addEventListener('resize', syncHeaderHeight);
})();
