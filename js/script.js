 // $(function () {
        //     $('[data-toggle="tooltip"]').tooltip()
        // })
        // $(function(){
        //     $('.carousel').carousel({interval: 6000, pause: 'false'});
        //     $('#carouselPause').click(function(){
        //         $('.carousel').carousel('pause');
        //         console.log('Carousel paused');
        //     });
        //     $('#carouselPlay').click(function(){
        //         $('.carousel').carousel('cycle');
        //     })
        // })
        $(function(){
            $('.carousel').carousel({interval: 3000, pause: 'false'});
            $('#carouselButton').click(function(){
                if($('#carouselButton').children('i').hasClass('fa fa-pause')){
                    $('.carousel').carousel('pause');
                    $('#carouselButton').children('i').removeClass('fa-pause');
                    $('#carouselButton').children('i').addClass('fa-play');
                }else{
                    $('.carousel').carousel('cycle');
                    $('#carouselButton').children('i').removeClass('fa-play');
                    $('#carouselButton').children('i').addClass('fa-pause');
                }
            })
        })