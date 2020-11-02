
    function openNav()
    {
        document.getElementById("side-nav").style.width = "250px";
        document.getElementById("open-nav").style.display = "none";
        document.getElementById("close-nav").style.display = "block";
        document.getElementById("side-nav").focus({preventScroll:true});
    }

    function closeNav() {
        document.getElementById("side-nav").style.width = "0px";
        document.getElementById("close-nav").style.display = "none";
        document.getElementById("open-nav").style.display = "block";
    }