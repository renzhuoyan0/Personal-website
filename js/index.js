$(function(){
    //下雨
    function rain(){
        var arr =[];
        for(var i=0;i<5;i++){
            var lefts = 10+(mainW-20)*Math.random();
            var time = 5*Math.random();
            var ran = Math.floor(Math.random()*10)+5;
            var rains = $("<div>").attr("class","rain").css({width:ran+"px",height:ran+"px",background:"#fff",borderRadius:"50%",position:"absolute",zIndex:2,left:lefts+"px",top:"-20px",transition:"top 3s linear "+time+"s",filter:"blur(1px)"}).appendTo(".main");
            arr.push(rains[0]);
        }
        setTimeout(function(){
            for(var i=0;i<arr.length;i++){
                arr[i].style.top=mainH-20+"px";
                arr[i].addEventListener("webkitTransitionEnd",function(){
                    this.style.transition="none";
                    this.style.top='-20px';
                    var time = 3*Math.random();
                    var that = this;
                    setTimeout(function(){
                        that.style.transition = "top 3s linear "+time+"s";
                        that.style.top=mainH-20+"px";
                    },0)
                },false)
            }
        },0)
    }
    var bgImg = ["./images/bg01.jpg","./images/bg02.jpg","./images/bg03.jpg"];
    var ii = 0;
    var bgChange =setInterval(function(){
        ii++;
        if(ii==3){
            ii=0;
        }
        $(".content").css({background:"url("+bgImg[ii]+") no-repeat",backgroundSize:"cover"});
    },3000)
    var pos=[];
    //画背景格子
    function drawBlock(width){

        var num1=Math.ceil( mainH/width);
        var num2=Math.floor( mainW/width);
        for(var i=0;i<num1;i++){
           var uls =  $("<ul>").attr("class","row1").css({width:"100%",height:width+"px",borderBottom:"1px dotted #333",position:"relative",zIndex:"20"}).appendTo('.main');
            for(var j=0;j<num2;j++){
                var lis = $("<li>").attr("id",i+"_"+j).css({width:width+"px",height:"100%",borderRight:"1px dotted #333",position:"relative",zIndex:"20",float:"left"}).appendTo(uls);
                pos.push(lis.attr("id"));
            }
        }
    }
    //检测位置是否重复
    var objPos ={};
    function onPos(a,b){
        var a= "l"+a;
        if(objPos[a] == b){
            return false;
        }else{
            objPos[a] = b;
            return true;
        }
    }
    //内容位置,颜色改变
    function bodyPos(a,b){
        var maxL =parseInt( $('li:last-child').attr("id").split("_")[1]);
        var maxT =parseInt($('.row1:last-child>li').attr("id").split("_")[0]) ;
        var ranL = Math.floor(Math.random()*(maxL+1))*b;
        var ranT = Math.floor(Math.random()*(maxT))*b;
        while(!onPos(ranL,ranT)) {
            ranL = Math.floor(Math.random() * (maxL + 1)) * b;
            ranT = Math.floor(Math.random() * (maxT )) * b;
        }
        var ranR = Math.floor(Math.random()*256)
        var ranG = Math.floor(Math.random()*256)
        var ranB = Math.floor(Math.random()*256)
        $(a).css({left:ranL+"px",top:ranT+"px",backgroundColor: "rgb("+ranR+","+ranG+","+ranB+")"})
    }
    var clientH = $(window).height();
    $('.main').css({height:clientH+"px"});
    var mainH= $(".main").height();
    var mainW= $(".main").width();
    rain();
    if(mainW<=800){
        drawBlock(70);
        bodyPos(".body_about",70);
        bodyPos(".body_edu",70);
        bodyPos(".body_works",70);
        bodyPos(".body_ask",70);
    }else{
        drawBlock(100);
        bodyPos(".body_about",100);
        bodyPos(".body_edu",100);
        bodyPos(".body_works",100);
        bodyPos(".body_ask",100);
    }
    var oldW = $('.main').width();
    //屏幕大小改变
    $(window).resize(function(){
        clientH = $(window).height();
        $('.main').css({height:clientH+"px"});
        mainH= $(".main").height();
        mainW= $(".main").width();
        $('.rain').remove();
        rain();
        if(mainW<=800){
            pos=[];
            $(".main .row1").remove();
            drawBlock(70);
            objPos ={};
            bodyPos(".body_about",70);
            bodyPos(".body_edu",70);
            bodyPos(".body_works",70);
            bodyPos(".body_ask",70);
            oldW = mainW;
            clearInterval(t);
            t = setInterval(moveSelf,5000);
            $(".ps-1 li").hide();
            $(".ps-1 li").eq(0).show();
            $(".ps-1 li").eq(1).show();
            $(".work-exp1").css("display",'none');
            $(".pitcure").css({width:"100%",height:"100%"})
            //var width1 = $('.pitcure').width();
            //$(".pitcure").css({height:width1+"px"});

        }else{
            pos=[];
            $(".main .row1").remove();
            drawBlock(100);
            objPos ={};
            bodyPos(".body_about",100);
            bodyPos(".body_edu",100);
            bodyPos(".body_works",100);
            bodyPos(".body_ask",100);
            oldW = mainW;
            clearInterval(t);
            t = setInterval(moveSelf,5000);
            $(".my-experience ul").css("display",'block');
            $(".works-1 li").show();
            $(".pitcure").attr("style","none");
        }
        if(mainW>800&&mainW<1000){
            $('.my-experience ul li').css({fontSize:"20px"});
            $('.about-me ul li').css({fontSize:"18px"});
        }else{
            $('.my-experience ul li').css({fontSize:"20px"});
            $('.about-me ul li').css({fontSize:"20px"});
        }
    })
    //轮播式移动
    function moveSelf(){
        var maxL =parseInt( $('li:last-child').attr("id").split("_")[1]);
        var aa = $("li").width()+1;
        var aboutL = $(".body_about").offset().left+aa;
        var eduL = $(".body_edu").offset().left+aa;
        var worksL = $(".body_works").offset().left+aa;
        var askL = $(".body_ask").offset().left+aa;
        if(aboutL>(maxL)*aa){aboutL = 0;}
        if(eduL>(maxL)*aa){eduL = 0;}
        if(worksL>(maxL)*aa){worksL = 0;}
        if(askL>(maxL)*aa){askL = 0;}
        $(".body_about").css("left",aboutL+"px");
        $(".body_edu").css("left",eduL+"px");
        $(".body_works").css("left",worksL+"px");
        $(".body_ask").css("left",askL+"px");
    }
    var t = setInterval(moveSelf,5000);

    //文字的隐藏显示
    $('.body_all').hover(function(){
        $(this).finish();
        $(this).find(".thumb").fadeIn();
        $('.body_all').css({opacity:0.5});
        $(this).find(".thumb").css({opacity:1});
        clearInterval(t);
    },function(){
        $(this).finish();
        $(this).find(".thumb").fadeOut();
        $('.body_all').css({opacity:1});
        t = setInterval(moveSelf,5000);
    })
    clientH = (clientH>630)?clientH:630;
    $('.content').css({height:clientH});
    $('.shangyiye').click(function(){
        $(".my-experience ul").fadeToggle();
    })
    $('.xiayiye').click(function(){
        $(".my-experience ul").fadeToggle();
    })
    $('.xiala-control').click(function(){
        $('.xiala-title').slideToggle();
    })
    //主内容的隐藏与显示
    $('.body_all').click(function(){
        var index = $(this).index(".body_all");
        $('.content').hide();
        $('.content').eq(index).show();
        $("body").animate({scrollTop:$(window).height()+"px"},1000);
    })
    $('.close').click(function(){
        $(this).parent().slideUp(1000);
    })
    //$('.works li').hover(function(){
    //    alert(1);
    //})
    $('.works-1').eq(0).show();
    $(".xiala-title-1").eq(0).css("color","red");
    $(".xiala-title").eq(0).css("color","red");
    $(".xiala-title-1").click(function(){
        $(".xiala-title-1").css({borderBottom:"none",color:"#000"});
        $(this).css("color","red");
        //$(this).css({borderBottom:"1px solid red"})
        var index = $(this).index(".xiala-title-1");
        $('.works-1').hide();
        $('.works-1').eq(index).fadeIn(1500);
    })
    $(".xiala-title").click(function(){
        $(".xiala-title").css({borderBottom:"none",color:"#000"});
        $(this).css("color","red");
        //$(this).css({borderBottom:"1px solid red"})
        var index = $(this).index(".xiala-title");
        $('.works-1').hide();
        $('.works-1').eq(index).fadeIn(1500);
        $(".works-1 li").hide();
        $(".works-1").eq(index).find("li").eq(0).show();
        $(".works-1").eq(index).find("li").eq(1).show();

    })
    var s1 = 0;
    $(".ps-1 .show_down").click(function(){
        s1++;
        if(s1==3){
            s1=0;
        }
        $(".ps-1 li").hide();
        $(".ps-1 li").eq(s1*2).fadeIn(1000);
        $(".ps-1 li").eq(s1*2+1).fadeIn(1000);
    })
    $(".ps-1 .show_up").click(function(){
        s1--;
        if(s1==-1){
            s1=2;
        }
        $(".ps-1 li").hide();
        $(".ps-1 li").eq(s1*2).fadeIn(1000);
        $(".ps-1 li").eq(s1*2+1).fadeIn(1000);
    })
    var s2 = 0;
    $(".wangye-1 .show_down").click(function(){
        s2++;
        if(s2==3){
            s2=0;
        }
        $(".wangye-1 li").hide();
        $(".wangye-1 li").eq(s2*2).fadeIn(1000);
        $(".wangye-1 li").eq(s2*2+1).fadeIn(1000);
    })
    $(".wangye-1 .show_up").click(function(){
        s2--;
        if(s2==-1){
            s2=2;
        }
        $(".wangye-1 li").hide();
        $(".wangye-1 li").eq(s2*2).fadeIn(1000);
        $(".wangye-1 li").eq(s2*2+1).fadeIn(1000);
    })
    var s3 = 0;
    $(".zhengzhan-1 .show_down").click(function(){
        s3++;
        if(s3==3){
            s3=0;
        }
        $(".zhengzhan-1 li").hide();
        $(".zhengzhan-1 li").eq(s3*2).fadeIn(1000);
        $(".zhengzhan-1 li").eq(s3*2+1).fadeIn(1000);
    })
    $(".zhengzhan-1 .show_up").click(function(){
        s3--;
        if(s3==-1){
            s3=2;
        }
        $(".zhengzhan-1 li").hide();
        $(".zhengzhan-1 li").eq(s3*2).fadeIn(1000);
        $(".zhengzhan-1 li").eq(s3*2+1).fadeIn(1000);
    })
    var s4 = 0;
    $(".youxi-1 .show_down").click(function(){
        s4++;
        if(s4==3){
            s4=0;
        }
        $(".youxi-1 li").hide();
        $(".youxi-1 li").eq(s4*2).fadeIn(1000);
        $(".youxi-1 li").eq(s4*2+1).fadeIn(1000);
    })
    $(".youxi-1 .show_up").click(function(){
        s4--;
        if(s4==-1){
            s4=2;
        }
        $(".youxi-1 li").hide();
        $(".youxi-1 li").eq(s4*2).fadeIn(1000);
        $(".youxi-1 li").eq(s4*2+1).fadeIn(1000);
    })

})