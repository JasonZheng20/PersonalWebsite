var headerUp= false;
var currIndex = 0;

$(document).ready(function(){
    
    $('div.mini#a').click(function() {
        currIndex = 1;
        $("lo > div").removeClass('mini-blue').addClass('mini');
        $(this).addClass('mini-blue');
        if (!headerUp) {
        $('.header').animate({ top: "-=150px", height: "295"}, '75', 'swing', function() {
            $('ul.nav').animate({
                height: "275px",
                marginTop: "0px",
            }, '50', 'swing', function(){
                $('li').animate({
                    left: "3682.5px",
                    }, '2000', 'swing');
            });
        });
        headerUp=true;
        }
        else {
            $('li').animate({
                left: "3682.5px",
                }, '2000', 'swing');
        }
    });

    $('div.mini#c').click(function() {
        currIndex = 3;
        $("lo > div").removeClass('mini-blue').addClass('mini');
        $(this).addClass('mini-blue');
        if (!headerUp) {
        $('.header').animate({ top: "-=150px", height: "295"}, '75', 'swing', function() {
            $('ul.nav').animate({
                height: "275px",
                marginTop: "0px",
            }, '50', 'swing', function(){
                $('li').animate({
                    left: "2090px",
                    }, '2000', 'swing');
            });
        });
        headerUp=true;
        }
        else {
            $('li').animate({
                left: "2090px",
                }, '2000', 'swing');
        }

    });

    /*$('.page-title').click(function() {
        $(this).text('My Story');
    });*/

});

