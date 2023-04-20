let dubaitext = document.getElementById('dubaitext')
let burjkhalifa = document.getElementById('burgkhalifa')
let stars = document.getElementById('stars')

window.addEventListener('scroll' , () => {
    let valu = window.scrollY;

    dubaitext.style.left = valu * -2 + 'px';
    burjkhalifa.style.top = valu * 1 + 'px';
    stars.style.top = valu * 1 +'px'
})