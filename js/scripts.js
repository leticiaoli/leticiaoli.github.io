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

        $('.header__up--buscaInput').keyup(function(){
            let qtyCaracter = $('.header__up--buscaInput').val().length
            if(qtyCaracter > 0) {
                $('.header__up--CloseBtn').fadeIn()
            } else {
                $('.header__up--CloseBtn').fadeOut()
            }
        })

        $('.header__up--CloseBtn').click(function(){
            $('.header__up--buscaInput').val('').focus()
            $('.header__up--CloseBtn').fadeOut()
        })
    }

    // funcs
    mainSlide()
    infoSlide()
    searchFocus()
    inputClear()

})  
