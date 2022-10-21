// Hero Cursor Effect
const cusorImage = document.getElementById('cursor-image')
const heroWrapper = document.querySelector('.hero-wrapper')
heroWrapper.addEventListener('mousemove', function (e) {
    cusorImage.style.display = 'block'
    cusorImage.style.top = e.pageY + 'px'
    cusorImage.style.left = e.pageX + 'px'
})
heroWrapper.addEventListener('mouseleave', function(e){
    cusorImage.style.display = 'none'
})



//Reviews
// const reviewsRow = document.querySelector('.reviews-row')
// let count = 0;
// function move(){
//     count++
//     reviewsRow.style.transform = `translateX(${count * -10}px)`
// }

// setInterval(move, 1000)