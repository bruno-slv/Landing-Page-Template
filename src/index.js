const selector = (query) => document.querySelector(query);

function display(qry) {
    selector(qry).style.display = 'block';
}

function hide(qry) {
    selector(qry).style.display = 'none';
}

window.onscroll = function () { fixedHeader() };

function fixedHeader() {
    document.documentElement.scrollTop > 300 ?
        (
            selector('#heading').className = 'scrollHeader'
        ) :
        (
            selector('#heading').className = ''
        )
}