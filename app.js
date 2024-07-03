const slides = document.querySelectorAll(".slide")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

let idx = 0
prevBtn.disabled = true

slides.forEach((slide, idx) => {
   slide.style.left = `${idx * 100}%`
})

const slideImage = () => {
    slides.forEach((slide) => {
       slide.style.transform = `translateX(-${idx * 100}%)`
    })
}


prevBtn.addEventListener("click", () => {
    idx--
    if(idx <= 0) {
        prevBtn.disabled = true
        nextBtn.disabled = false
    }

    else{
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
    slideImage()  
})

nextBtn.addEventListener("click", () => {
    idx++
    if(idx >= 3) {
        nextBtn.disabled = true
        prevBtn.disabled = false
    }

    else{
        nextBtn.disabled = false
        prevBtn.disabled = false
    }
    slideImage()
})