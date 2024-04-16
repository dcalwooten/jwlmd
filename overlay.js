window.addEventListener('load', function () {
    /* overlay functionality */
    const overlayShownDate = localStorage.getItem('overlayShownDate');

    var clearLocalStorageBtn = document.getElementById('clearLocalStorage')

    clearLocalStorageBtn.addEventListener('click', () => {
        localStorage.removeItem('overlayShownDate')
        location.reload();
    })

    var overlay = document.getElementById('overlay-container'),
        closeOverlayBtn = document.getElementById('close-overlay')

    closeOverlayBtn.addEventListener('click', () => {
        closeOverlay()
    })

    if (checkShowOverlay(overlayShownDate)) {
        showOverlay()
        localStorage.setItem('overlayShownDate', Date.now())
    }

    function checkShowOverlay(overlayShownDate) {
        // display if past duration of expiration since last showing
        const overlayShownExpirationMs = 15 * 1000
        return (!overlayShownDate || (Date.now() - overlayShownDate > overlayShownExpirationMs))
    }

    function showOverlay() {
        overlay.style.display = 'flex'

        window.setTimeout(function () {
            overlay.style.opacity = 1
        }, 50)

        closeOverlayTimeout = window.setTimeout(function () {
            closeOverlay()
        }, 7000)
    }

    function closeOverlay() {
        clearTimeout(closeOverlayTimeout)

        overlay.style.opacity = 0
        window.setTimeout(function () {
            overlay.style.display = 'none'
        }, 250)
    }
});