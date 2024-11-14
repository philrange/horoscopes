
var menuOpen = false;

function toggleMenu() {
    
    var menuButtonClosed = document.getElementById("menuButtonClosed");
    var menuButtonOpen = document.getElementById("menuButtonOpen");
    var mobileMenu = document.getElementById("mobile-menu");
    
    menuOpen = !menuOpen;
    
    if (menuOpen) {
        menuButtonClosed.style.display = "none";
        menuButtonOpen.style.display = "block";
        //mobileMenu.style.display = "block";
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("sm:hidden");
    } else {
        menuButtonClosed.style.display = "block";
        menuButtonOpen.style.display = "none";
        mobileMenu.classList.add("hidden");
    }
}


function setMenuItemActive(linkName) {
        console.log("active: " + linkName)

    
    //mobile links
    var mobileLinks = document.getElementById("mobileLinks");
    var mobileSelectedClasses = ["bg-gray-900", "text-white"]
    var mobileUnselectedClasses = ["text-gray-300", "hover:bg-gray-700", "hover:text-white"]
    for (link of mobileLinks.children) {
        //console.log("loop: " + link)
        if (link.innerHTML == linkName) {
            mobileSelectedClasses.forEach(function(c) {
                link.classList.add(c)
            })
            mobileUnselectedClasses.forEach(function(c) {
                link.classList.remove(c)
            })
        } else {
            mobileSelectedClasses.forEach(function(c) {
                link.classList.remove(c)
            })
            mobileUnselectedClasses.forEach(function(c) {
                link.classList.add(c)
            })
        }
    }
    
    // normal links
    var links = document.getElementById("links");
    var mobileSelectedClasses = ["bg-gray-900", "text-white"]
    var mobileUnselectedClasses = ["text-gray-300", "hover:bg-gray-700", "hover:text-white"]
    for (link of links.children) {
        //console.log("loop: " + link)
        if (link.innerHTML == linkName) {
            mobileSelectedClasses.forEach(function(c) {
                link.classList.add(c)
            })
            mobileUnselectedClasses.forEach(function(c) {
                link.classList.remove(c)
            })
        } else {
            mobileSelectedClasses.forEach(function(c) {
                link.classList.remove(c)
            })
            mobileUnselectedClasses.forEach(function(c) {
                link.classList.add(c)
            })
        }
    }
    
    // content
    var contentBlocks = document.querySelectorAll('[id^=content]')

    for (contentElement of contentBlocks) {
        //console.log("loop: " + link)
        if (contentElement.id.endsWith(linkName)) {
            contentElement.style.display = "block";
        } else {
            contentElement.style.display = "none";
        }
    }
    // loop through all links, and remove active
}

function clickLink(linkName) {
    
    setMenuItemActive(linkName);
    
}

function createMenuItem(linkName) {
    
    var element = document.createElement("a");
    
	element.classList.add("block", "rounded-md", "px-3", "py-2", "text-base", "font-medium");
	element.innerHTML = linkName;
	element.onclick = function() { setMenuItemActive(linkName); };

    return element;
}

function createMobileMenuItem(linkName) {
    var element = createMenuItem(linkName);
    //element.classList.add("sm:hidden");
    return element;
}