$(function(){
    //楼层效果
    $('.floor_xiao').each(function(i){
        $(this).data('index',i);
    });
    $('.floor_xiao2').each(function(i){
        $(this).data('index',i);
    });
    $('.floor_xiao3').each(function(i){
        $(this).data('index',i);
    });
    $('.floor_xiao').click(function(){
        var i=$(this).data('index');
        var newtop=$($('.floor')[i]).offset().top;
        $({top:$(window).scrollTop()}).animate(
            {top:newtop},
            {
                duration:700,
                step:function(){
                    $(window).scrollTop(this.top);
                }
            }
        );
    });
    $('.floor_xiao2').click(function(){
        var i=$(this).data('index');
        var newtop=$($('.floor')[i]).offset().top;
        $({top:$(window).scrollTop()}).animate(
            {top:newtop},
            {
                duration:700,
                step:function(){
                    $(window).scrollTop(this.top);
                }
            }
        );
    });
    $('.floor_xiao3').click(function(){
        var i=$(this).data('index');
        var newtop=$($('.floor')[i]).offset().top;
        $({top:$(window).scrollTop()}).animate(
            {top:newtop},
            {
                duration:700,
                step:function(){
                    $(window).scrollTop(this.top);
                }
            }
        );
    });

    //产品展示楼层效果
    $('.cpfloor_xiao').each(function(i){
        $(this).data('index',i);
    });
    $('.cpfloor_xiao').click(function(){
        var i=$(this).data('index');
        var newtop=$($('.cpfloor')[i]).offset().top-0;
        $({top:$(window).scrollTop()}).animate(
            {top:newtop},
            {
                duration:700,
                step:function(){
                    $(window).scrollTop(this.top);
                }
            }
        );
    });
    //返回顶部
    $('#top_btn').click(function(){
        $({top:$(window).scrollTop()}).animate(
            {top:0},
            {
                duration:700,
                step:function(){
                    $(window).scrollTop(this.top);
                }
            }
        );
    });

    //header
    $(window).resize(function(){
        var clientW=$(window).width();
        if(clientW<700){
            $(".header1").css("display","none");
            $(".header2").css("display","none");
            $(".header3").css("display","block");
            $(".contact .row li").attr("icon-pos","left");

            $(".ps1").css({display:"none"});
            $(".ps2").css({display:"block"});
        }else if(clientW>700&&clientW<1000){
            $(".header2").css("display","block");
            $(".header1").css("display","none");
            $(".header3").css("display","none");
            $(".contact .row li").attr("icon-pos","left");
            $(".ps2").css({display:"none"});
            $(".ps1").css({display:"block"});

        }else{
            $(".header1").css("display","block");
            $(".header2").css("display","none");
            $(".header3").css("display","none");
            $(".contact .row li").attr("icon-pos","top");
            $(".ps2").css({display:"none"});
            $(".ps1").css({display:"block"});
        }
    });
    $(window).resize();

    $(".menu-btn").click(function(){
        $(".header3 ul").finish();
        $(".header3 ul").slideToggle(300);
    });

//    轮播
    $(".erweima").click(function(){
        $(this).css({display:"none"});
        $(".erwei").css({display:"block"});
    });
    $(".erwei").click(function(){
        $(this).css({display:"none"});
        $(".erweima").css({display:"block"});
    });
//    var num=0;
//    var move=function(){
//        num++;
//        if(num==$(".banner-box a").length-1){
//            $(".banner-box").animate({marginLeft:-num*100+"%"},function(){
//                $(".banner-box").css({marginLeft:0});
//            });
//            num=0;
//        }else{
//            $(".banner-box").animate({marginLeft:-num*100+"%"});
//        }
//        $(".banner-btn li").css({background:"#888",border:"none"});
//        $(".banner-btn li").eq(num).css({background:"none",border:"1px solid #00ff12"});
//    };
//    var timerId=setInterval(move,3000);
    //轮播按钮点击
    //$(".banner-btn li").click(function(){
    //    clearInterval(timerId);
    //    var index=$(this).index();
    //    num=index;
    //    $(".banner-btn li").css({background:"#888",border:"none"});
    //    $(this).css({background:"none",border:"1px solid #00ff12"});
    //    $(".banner-box").animate({marginLeft:-num*100+"%"});
    //});
    //$(".banner").hover(function(){
    //    clearInterval(timerId);
    //},function(){
    //    timerId=setInterval(move,3000);
    //});
    //关于我
    $(".about-me .row div[class*=col]").hover(function(){
        $(this).find($(".about-me .row>div>span")).css({
            animation:"xiala 1s forwards"
        });
        $(this).find($(".about-me p")).css({display:"block"});
    },function(){
        $(this).find($(".about-me .row>div>span")).css({animation:"shanglai 1s forwards"});
        $(this).find($(".about-me p")).css("display","none");
    });
    //产品展示
    $(".show-zj").hover(function(){
        $(".roo").css({animation:"show 2s",animationFillMode:"forwards"});
        $(".roo span").css({animation:"budong 1s",animationFillMode:"forwards"});
    },function(){
        $(".roo").css({animation:"none"});
        $(".roo span").css({animation:"none"});
    });
    $(".roo").hover(function(){
        $(this).css({color:"#00ff00"});
        $(this).find($(".roo span i")).css({animation:"zhuan 1s"});
    },function(){
        $(this).css({color:"white"});
        $(this).find($(".roo span i")).css({animation:"none"});
    });
//    PS
    var cl1=0;
    var cl1lunbo=function(){
        $('.psbox .lubo1').hide();
        var el1=$('.psbox .lubo1')[cl1];
        $(el1).show();
        $('.psbox .lubo1').removeClass('psshow');
        $($('.psbox .lubo1')[cl1]).addClass('psshow');
        cl1+=1;
        if(cl1===$('.psbox .lubo1').length){
            cl1=0;
        }
    };
    var cl1timerId=setInterval(cl1lunbo,2000);
    var cl2=0;
    var cl2lunbo=function(){
        $('.psbox .lubo2').hide();
        var el1=$('.psbox .lubo2')[cl2];
        $(el1).show();
        $('.psbox .lubo2').removeClass('psshow');
        $($('.psbox .lubo2')[cl2]).addClass('psshow');
        cl2+=1;
        if(cl2===$('.psbox .lubo2').length){
            cl2=0;
        }
    };
    var cl2timerId=setInterval(cl2lunbo,2000);
    $('.psbox').hover(function(){
        clearInterval(cl1timerId);
    },function(){
        cl1timerId=setInterval(cl1lunbo,2000);
    });
    $('.psbox').hover(function(){
        clearInterval(cl2timerId);
    },function(){
        cl2timerId=setInterval(cl2lunbo,2000);
    });

    $('.psbox .lubo1').each(function(ii){
        $(this).data('index',ii);
    });
    var ii=$('.psbox .lubo1').data('index');
    $('.psb2').click(function(){
        clearInterval(cl1timerId);
        $('.psbox .lubo1').hide();
        $($('.psbox .lubo1')[ii]).show();
        ii+=1;
        if(ii==3){
            ii=0;
        }
    });
    $('.psb1').click(function(){
        clearInterval(cl1timerId);
        $('.psbox .lubo1').hide();
        $($('.psbox .lubo1')[ii]).show();
        ii-=1;
        if(ii==-1){
            ii=2;
        }
    });
    $('.psbox .lubo2').each(function(ii2){
        $(this).data('index',ii2);
    });
    var ii2=$('.psbox .lubo2').data('index');
    $('.psb4').click(function(){
        clearInterval(cl2timerId);
        $('.psbox .lubo2').hide();
        $($('.psbox .lubo2')[ii2]).show();

        ii2+=1;
        if(ii2==6){
            ii2=0;
        }
    });
    $('.psb3').click(function(){
        clearInterval(cl2timerId);
        $('.psbox .lubo2').hide();
        $($('.psbox .lubo2')[ii2]).show();
        ii2-=1;
        if(ii2==-1){
            ii2=5;
        }
    });
    $('.psb1').mousedown(function(e){
        e.preventDefault();
    });
    $('.psb2').mousedown(function(e){
        e.preventDefault();
    });
    $('.psb3').mousedown(function(e){
        e.preventDefault();
    });
    $('.psb4').mousedown(function(e){
        e.preventDefault();
    });

    $(".lubo img").hover(function(){
        $(this).css({animation:"rubberBand 1s"});
    },function(){
        $(this).css({animation:"none"});
    });

    //点击放大
    $(".lubo img").click(function(){
        var aa=$(this).attr("src");
        $(".ps-fangda").css({display:"block"});
        $(".ps-fangda>div>img").attr("src",aa);
    });
    $(".ps-fangda").click(function(){
        $(this).css({display:"none"})
    });
//AI
    $(".ai-box>.row>div[class*=col]>img").hover(function(){
        $(this).css({transform:"scale(1.3)"})
    },function(){
        $(this).css({transform:"scale(1)"})
    });
    //AI点击放大
    $(".ai-box>.row>div[class*=col]>img").click(function(){
        var aa=$(this).attr("src");
        $(".ai-zhezhao").css({display:"block"});
        $(".ai-zhezhao>.zhong>img").attr("src",aa);
    });
    $(".ai-zhezhao").click(function(){
        $(this).css({display:"none"})
    });
//平面设计
    var wh=$(".same").width();
    $(".pm-r").hover(function(){
        $("#ass").css({transform:"translateX(-250px)"});
        $("#bss").css({transform:"translateX(-500px)"});
        $("#css").css({transform:"translateX(-750px)"});
        $("#dss").css({transform:"translateX(-900px)"})
    },function(){
        $("#ass").css({transform:"translateX(0px)"});
        $("#bss").css({transform:"translateX(0px)"});
        $("#css").css({transform:"translateX(0px)"});
        $("#dss").css({transform:"translateX(0px)"})
    });
//游戏类
    var clientW=$(".youxi-zj").width();
    var clientH=$(".youxi-zj").height();
    var box=$('.box');
    var boxW=box.outerWidth();
    var boxH=box.outerHeight();
    box.css({
        left:(clientW-boxW)/2+'px',
        top:(clientH-boxH)/2+'px',
        transform:'scale(0.2,0.2)'
    });
    setTimeout(function(){
        box.css({
            transition:'transform 1s ease',
            transform:'scale(1,1)'
        });
    },300);
    var bx=(boxW-clientW)/clientW;
    var by=(boxH-clientH)/clientH;
    var ll=$(".youxi-zj").offset();
    var tt=$(".youxi-zj").offset();
    console.log(ll.left,ll.top);
    var sd=document.getElementById("sd");

    //console.log(sd.scrollTop);
    //163   3916
    var px, py;
    $(".youxi-zj").mousemove(function(e){
        px= e.pageX-ll.left;
        py= e.pageY-ll.top;
        //console.log(px,py);
    });
    setInterval(function(){
        box.css({
            transition:'top 0.5s,left 0.5s',
            left:bx*-px+'px',
            top:by*-py+'px'
        })
    })

    $(".box li").hover(function(){
        $(this).find($(".yx-zhezhao")).css({display:"block",animation:"youxi 1s"})
    },function(){
        $(this).find($(".yx-zhezhao")).css({display:"none",animation:"none"})
    })

//    网站类项目
    $(".wz-hang span").hover(function(){
        $(this).css({animation:"rotateIn 1s forwards"})
    },function(){
        $(this).css({animation:"none"})
    })
});