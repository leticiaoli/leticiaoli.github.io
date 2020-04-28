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
            let qtyCaracter = $('.header__up--buscaInput').val().length
            
            $('.header__up--busca').addClass('active')
            if(qtyCaracter > 0){
                $('.header__up--CloseBtn').hide()
            }
        })

        boxSearch.focusout(function(){
            $('.header__up--busca').removeClass('active')
            $('.header__up--CloseBtn').hide()
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

    function menuList() {
        $('.header__up--btnMenu').click(function(){
            $('.menu').slideToggle()
            $('.header__up--btnMenuClose').fadeToggle()
        })
    }

    function menuListColletions() {
        $('.mainCollections__section-header a,.mainCollections__arrow').click(function(event){
            event.preventDefault()
            $('.mainCollections__optionsCollections').fadeToggle()
            $('.mainCollections__arrow').toggleClass('open')
        })

        $('.mainCollections__options--item').click(function(){
            $('.mainCollections__options--item').removeClass('active')
            $(this).addClass('active')

            let valorSelecionado = $(this).text()
            $('.mainCollections__section-header a').text(valorSelecionado)

            $('.mainCollections__optionsCollections').fadeOut() 
        })


    }



    // funcs
    mainSlide()
    infoSlide()
    searchFocus()
    inputClear()
    menuList()
    menuListColletions()

})  
