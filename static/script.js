
function updateFooter() {
var now = new Date();
var year = now.getFullYear();
var month = now.toLocaleString('default', { month: 'long' })
console.log(month);
document.getElementById("copy_footer").innerHTML = "TRI-CA&copy " + month + ", " + year;
}

updateFooter();

function active_nav() {
    let NavLinks = document.querySelectorAll('nav li a');
    NavLinks.forEach(element => {
        const linkPath = new URL(element.href).pathname;

        if (window.location.pathname === linkPath) {
            element.classList.add("active");
        } 
    });
}
active_nav();

// read more
$(document).ready(function () {
    $('.toggle-content').hide();

    $('.toggle-btn').on('click', function () {
        const content = $(this).next('.toggle-content');
        content.slideToggle(200);

        if ($(this).text() === 'Read more...') {
            $(this).text('Read less...');
        } else {
            $(this).text('Read more...');
        }
    });
});


function scrollIframe(x) {
    const iframe = document.getElementById('myFrame');
    console.log(iframe.contentWindow.document);
    const iframeDoc = iframe.contentWindow.document;

    const target = iframeDoc.getElementById(x);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}
