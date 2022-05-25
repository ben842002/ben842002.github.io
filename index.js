let navBarHeight = 72;
function ScrollToSection(sectionTag) {
    let node = document.getElementById(sectionTag);
    console.log(node);

    // account for fixed header
    window.scroll(0, node.offsetTop - navBarHeight);
}