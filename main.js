
let btn = document.getElementById('more-less')
let isopen = false

let div5 = document.getElementById('div-5')
let div6 = document.getElementById('div-6')
let div7 = document.getElementById('div-7')
let div8 = document.getElementById('div-8')
let div9 = document.getElementById('div-9')

let flowerDivs = [div5, div6, div7, div8, div9]

btn.addEventListener('click', function() {
    isopen = !isopen

    flowerDivs.forEach(function(div) {
        if (div) {
            div.style.display = isopen ? 'block' : 'none'
        }
    })

    btn.innerHTML = isopen ? 'SHOW LESS' : 'SHOW MORE'
})

let moreless = document.getElementById('more-less-two')
let isnone = false

let bouquetDivs = [
    document.getElementById('div5'),
    document.getElementById('div6'),
    document.getElementById('div7'),
    document.getElementById('div8'),
    document.getElementById('div9'),
    document.getElementById('div10'),
    document.getElementById('div11'),
    document.getElementById('div12'),
    document.getElementById('div13')
]

moreless.addEventListener('click', function() {
    isnone = !isnone

    bouquetDivs.forEach(function(div) {
        if (div) {
            div.style.display = isnone ? 'block' : 'none'
        }
    })

    moreless.innerHTML = isnone ? 'SHOW LESS' : 'SHOW MORE'
})

let flDiv = document.getElementById('fl-div')
let y = false
let btn1 = document.getElementById('show-more2')
btn1.addEventListener('click', function()
{
    if(y == false)
    {
        flDiv.style.display = 'block'
        y = true
        btn1.textContent = 'SHOW LESS'
    }
    else if(y == true)
    {
        flDiv.style.display = 'none'
        y = false
        btn1.textContent = 'SHOW MORE'
    }
})

let kcDiv1 = document.getElementById('kc-div1')
let kcDiv2 = document.getElementById('kc-div2')
let kcDiv3 = document.getElementById('kc-div3')
let kcDiv4 = document.getElementById('kc-div4')
let kcDiv5 = document.getElementById('kc-div5')
let kcDiv6 = document.getElementById('kc-div6')
let btn2 = document.getElementById('show-more1')
let x = false
btn2.addEventListener('click', function()
{
    if(x == false)
    {
        kcDiv1.style.display = 'block'
        kcDiv2.style.display = 'block'
        kcDiv3.style.display = 'block'
        kcDiv4.style.display = 'block'
        kcDiv5.style.display = 'block'
        kcDiv6.style.display = 'block'
        btn2.textContent = 'SHOW LESS'
        x = true
    }
    else if(x == true)
    {
        kcDiv1.style.display = 'none'
        kcDiv2.style.display = 'none'
        kcDiv3.style.display = 'none'
        kcDiv4.style.display = 'none'
        kcDiv5.style.display = 'none'
        kcDiv6.style.display = 'none'
        btn2.textContent = 'SHOW MORE'
        x = false
    }
})


let categories = document.getElementById('li-js')
let categoriesMenu = document.getElementById('categories-menu')
let arrow = document.querySelector('#categories i')

categories.addEventListener('click', function() {
    categoriesMenu.classList.toggle('show')

    if (arrow) {
        arrow.classList.toggle('rotate')
    }
})


// CLOSE CATEGORIES WHEN CLICKING OUTSIDE

document.addEventListener('click', function(event) {
    if (
        categories &&
        categoriesMenu &&
        !categories.contains(event.target) &&
        !categoriesMenu.contains(event.target)
    ) {
        categoriesMenu.classList.remove('show')

        if (arrow) {
            arrow.classList.remove('rotate')
        }
    }
})


// IMAGE CAROUSEL

let track = document.getElementById('track')
let slider = document.getElementById('slider')

if (track && slider) {

    // Duplicate the images to make the carousel loop smoothly

    if (!track.dataset.cloned) {
        track.innerHTML += track.innerHTML
        track.dataset.cloned = 'true'
    }

    let position = 0
    let speed = 0.5
    let isDragging = false
    let startX = 0
    let startPosition = 0
    let animationFrame

    function animate() {
        if (!isDragging) {
            position -= speed

            let halfWidth = track.scrollWidth / 2

            if (Math.abs(position) >= halfWidth) {
                position = 0
            }

            track.style.transform = `translateX(${position}px)`
        }

        animationFrame = requestAnimationFrame(animate)
    }

    animate()


    // DRAG WITH MOUSE OR TOUCH

    slider.addEventListener('pointerdown', function(event) {
        isDragging = true
        startX = event.clientX
        startPosition = position

        slider.setPointerCapture(event.pointerId)
    })

    slider.addEventListener('pointermove', function(event) {
        if (!isDragging) return

        let difference = event.clientX - startX
        position = startPosition + difference

        track.style.transform = `translateX(${position}px)`
    })

    function stopDragging() {
        isDragging = false
    }

    slider.addEventListener('pointerup', stopDragging)
    slider.addEventListener('pointercancel', stopDragging)
    slider.addEventListener('lostpointercapture', stopDragging)


    // LIGHTBOX

    let lightbox = document.getElementById('lightbox')
    let largeImg = document.getElementById('large-img')
    let closeBtn = document.getElementById('close-btn')

    track.addEventListener('click', function(event) {
        if (isDragging || !event.target.matches('img')) return

        if (lightbox && largeImg) {
            largeImg.src = event.target.src
            lightbox.classList.add('active')
        }
    })

    if (closeBtn && lightbox) {
        closeBtn.addEventListener('click', function() {
            lightbox.classList.remove('active')
        })
    }

    if (lightbox) {
        lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox) {
                lightbox.classList.remove('active')
            }
        })
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && lightbox) {
            lightbox.classList.remove('active')
        }
    })
}