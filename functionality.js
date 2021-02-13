window.addEventListener('load', function()
{
    var navBar = document.getElementById('top-nav'),
        navOffset = navBar.offsetTop;

    window.onscroll = function() { stickyNav() };

    window.dispatchEvent(new CustomEvent('scroll'))

    function stickyNav() {
        if (window.pageYOffset >= navOffset)
        { navBar.classList.add('sticky'); }

        else
        { navBar.classList.remove('sticky'); }
    }

    var menu = document.getElementById('menu'),
        menuToggle = document.getElementById('menu-toggle')

    menuToggle.addEventListener('click', function()
    {
        if (menu.classList.contains('is-active'))
        {
            menu.classList.remove('is-active');
            this.setAttribute('aria-expanded', 'false');
        }

        else
        {
            menu.classList.add('is-active');
            this.setAttribute('aria-expanded', 'true');
        }
    });
});