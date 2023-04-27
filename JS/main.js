let allGallery = document.querySelectorAll(".all")
let filterBtns = document.querySelectorAll(".gallery ul li")


filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        filterBtns.forEach(btn => {
            btn.classList.remove("active")
        })
        e.target.classList.add("active")

        allGallery.forEach(ele => {
            ele.style.display = "none"
        })
        document.querySelectorAll(e.target.dataset.filter).forEach(element => {
            element.style.display = "block"
        })
    })
})

