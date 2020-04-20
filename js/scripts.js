$(document).ready(function () {

    function mainSlide() {
        let imgs = $('.mainSlide')

        imgs.slick({
            dots: true
        })
    }

    function infoSlide() {
        let item = $('.slideInfo')

        item.slick({
            arrows: false,
            dots: true
        })
    }

    // funcs
    mainSlide()
    infoSlide()

})
