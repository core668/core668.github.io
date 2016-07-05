
$(function () {
    $('#header   .imga').slideUp(500, function () {
        $('#header h1').fadeIn('fast');
        $('#content .sec_1').animate({
            'padding-top':'30px',
            'margin-top':0,
            opacity: 1
        }, 500)
    });
    //点击about me
    $('#me').click(function () {
         $('.sec_1 .ico_a').slideUp(500);
        var high=$('.sec_1').offset().top;
        $('html,body').animate({
                'scrollTop':high
            },500, function () {
            $('.sec_1 .con').fadeIn(500, function () {
                $('.sec_2').animate({
                    opacity: 1
                },500);
                $(' .con .left').animate({'margin-bottom':'50px'},500)
            });
        });
    });
    //点击what skill do i have,  id=have
    $('#have').click(function () {
        $('.sec_2 .ico_a').slideUp(500);
        var high=$('.sec_2').offset().top;
        $('html,body').animate({
            'scrollTop':high
        },500, function () {
            $('.sec_2 .con').fadeIn(500, function () {
                $('.sec_3 ').animate({
                    'opacity': 1,
                    'margin-top':'180px'
                },500);
            });
        });
    });
    //将技能点闪烁
    //     function shan() {
    //         $('.sec_2 li:even').animate({'opacity':0.1},500,function () {
    //             $('.sec_2 li:even').animate({'opacity':0.9},500)
    //         });
    //         $('.sec_2 li:odd').animate({'opacity':0.1},500,function () {
    //             $('.sec_2 li:odd').animate({'opacity':0.9},500)
    //         });
    //     };
    // var timer=setInterval(shan,1000);
    //点击code时候，显示出来
    $('#code').click(function () {
        // clearInterval(timer);
        $('.sec_2 .c').animate({'opacity':0.9},1000);
        $('.sec_2 .d').animate({'opacity':0.1},1000);
    });
    //点击design的时候显示出来
    $('#desi').click(function () {
        // clearInterval(timer);
        $('.sec_2 .d').animate({'opacity':0.9},1000);
        $('.sec_2 .c').animate({'opacity':0.1},1000);
    })
    //点击what do i know  id=know
    $('#know').click(function () {
        $('.sec_3 .ico_a').slideUp(500);
        var high=$('.sec_3').offset().top;
        $('html,body').animate({
            'scrollTop':high
        },500, function () {
            $('.sec_3 #timeline').fadeIn(500, function () {
                $('#footer').animate({
                    opacity: 1
                },500);
            });
        });
    });

    //鼠标点击timeline-content,显示ul 
    $(".timeline-content h2").click(function(){
        $(".timeline-content ul").hide();
        $(this).next('ul').toggle(1000);                     
    })

    /*//列表隔行变色
    $(".timeline-content li:even").css("backgroundColor","#F4F4F4");
    $(".timeline-content li:odd").css("backgroundColor","#E8E8E8");*/

    //鼠标移入移出
    $(".timeline-content li").mouseover(function(){
        $(this).css("backgroundColor","#EEEEEE");
    });
    $(".timeline-content li").mouseout(function(){
        $(".timeline-content li:even").css("backgroundColor","#E8E8E8");
        $(".timeline-content li:odd").css("backgroundColor","#F4F4F4");
    });

});


