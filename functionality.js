window.addEventListener('load', function () {
    var navBar = document.getElementById('top-nav'),
        navOffset = navBar.offsetTop;

    window.onscroll = function () { stickyNav() };

    // trigger scroll on load in case user loads from an anchor point lower on page
    window.dispatchEvent(new CustomEvent('scroll'))

    function stickyNav() {
        if (window.innerWidth > 834 && window.pageYOffset >= navOffset) { navBar.classList.add('sticky'); }

        else { navBar.classList.remove('sticky'); }
    }

    var menuToggle = document.getElementById('menu-toggle')

    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        if (navBar.classList.contains('expanded')) {
            this.setAttribute('aria-expanded', 'false');
        }
        else {
            this.setAttribute('aria-expanded', 'true');
        }

        navBar.classList.toggle('expanded');
    });

    // collapse mobile menu when clicking outside of it
    document.addEventListener('click', function (e) {
        if (navBar.classList.contains('expanded')) {
            navBar.classList.remove('expanded');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});