window.addEventListener('load', function () {
    var navBar = document.getElementById('top-nav'),
        navOffset = navBar.offsetTop;

    window.onscroll = function () { stickyNav() };

    // trigger scroll on load in case user loads from an anchor point lower on page
    window.dispatchEvent(new CustomEvent('scroll'))

    function stickyNav() {
        if (window.pageYOffset >= navOffset) { navBar.classList.add('sticky'); }

        else { navBar.classList.remove('sticky'); }
    }

    var menu = document.getElementById('menu'),
        menuToggle = document.getElementById('menu-toggle')

    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        if (menu.classList.contains('is-active')) {
            menu.classList.remove('is-active');
            this.setAttribute('aria-expanded', 'false');
        }

        else {
            menu.classList.add('is-active');
            this.setAttribute('aria-expanded', 'true');
        }
    });

    // collapse mobile menu when clicking outside of it
    document.addEventListener('click', function (e) {
        if (menu.classList.contains('is-active') &&
            e.target.closest('#menu') == null) {
            menu.classList.remove('is-active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});