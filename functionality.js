window.addEventListener('load', function()
{
    var navBar = document.getElementById('top-nav'),
        navOffset = navBar.offsetTop;

    window.onscroll = function() { stickyNav() };

    // trigger scroll on load in case user loads from an anchor point lower on page
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

    // functionality for switching individual member bios
    document.getElementById('member-images').addEventListener('click', function(e)
    {
        var event = e || window.event,
            target = event.target;

        if ('bioId' in target.dataset)
        {
            let bioId = target.dataset.bioId,
                bioIdText = document.getElementById(bioId),
                bioTextContainer = document.getElementById('member-bio-text'),
                activeBioText = bioTextContainer.getElementsByClassName('active')[0];

            // if text related to clicked image isn't active, make active
            if (activeBioText.getAttribute('id') !== bioId)
            {
                activeBioText.classList.remove('active');
                bioIdText.classList.add('active');
            }
        }
    });
});