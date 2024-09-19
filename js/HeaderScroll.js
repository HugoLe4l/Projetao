window.addEventListener("scroll", function(){
    let header = document.getElementById("header")
    let search_box = document.querySelector('.search-box')
    let categories_box = document.querySelector('.categories-box')

    header.classList.toggle("header-height", window.scrollY > 0)
    search_box.classList.toggle("search-box-scroll-animation", window.scrollY > 0)
    categories_box.classList.toggle("categories_box-scroll-animation", window.scrollY > 0)


})