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

    function searchFocus() {
        let boxSearch = $('.header__up--buscaInput')

        boxSearch.focusin(function(){
            $('.header__up--busca').addClass('active')
        })

        boxSearch.focusout(function(){
            $('.header__up--busca').removeClass('active')
        })

    }

    function inputClear() {
        let boxSearch = $('.header__up--buscaInput')

        boxSearch.append()

        boxSearch.keyup(function(){
            let qtyCaracter = $('.header__up--buscaInput').val().length
            if(qtyCaracter > 0) {
                alert('mais de zero')
            } else {
                alert('menos ou igual a zero')
            }
            
        })
    }

    // funcs
    mainSlide()
    infoSlide()
    searchFocus()
    inputClear()

})  
