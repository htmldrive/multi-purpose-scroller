(function(a){
    a.fn.webwidget_slideshow_common=function(p){
        var p=p||{};

        var ste=p&&p.slideshow_transition_effect?p.slideshow_transition_effect:"fly";
        var m=p&&p.slideshow_time_interval?p.slideshow_time_interval:"2000";
        var q=p&&p.slideshow_window_width?p.slideshow_window_width:"400";
        var r=p&&p.slideshow_window_height?p.slideshow_window_height:"400";
        var sbst=p&&p.slideshow_border_style?p.slideshow_border_style:"solid";
        var sbs=p&&p.slideshow_border_size?p.slideshow_border_size:"1";
        var sbc=p&&p.slideshow_border_color?p.slideshow_border_color:"#000";
        var sbr=p&&p.slideshow_border_radius?p.slideshow_border_radius:"5";
        var sbgc=p&&p.soldeshow_background_color?p.soldeshow_background_color:"#FFF";
        var sps=p&&p.slideshow_padding_size?p.slideshow_padding_size:"2";
        var v;
        var w=-1;
        var x=a(this);
        var cu;
        var y=x.find("ul:first").children("li").length;
        if(x.find("ul").length==0||x.find("li").length==0){
            x.append("Require content");
            return null
        }
        init();
        play();
        function init(){
            x.find("ul:first").wrap('<div class="slides_box"></div>');
            x.css("width",q+"px").css("height",r+"px").css("border-style",sbst).css("border-width",sbs+"px").css("border-color",sbc).css("-moz-border-radius",sbr+"px").css("background-color",sbgc);
            x.find(".slides_box").css("width",q+"px").css("height",r+"px");
            x.find("ul:first").css("width",q*y+"px").css("height",r+"px").css("margin","0px").css("padding","0px").css("list-style","none").css("position","absolute");
            x.find("ul:first").children("li").css("width",(q-sps*2)+"px").css("height",(r-sps*2)+"px").css("margin","0px").css("padding",sps+"px").css("float","left");
            x.hover(
                function(){
                    stop();
                },
                function(){
                    v=setTimeout(play,m);
                }
                );
            x.find(".slides_box").children("ul").children("li").hide();
        }
        function play(){
            cu = w;
            clearTimeout(v);
            w++;
            if(w>=y){
                w=0
            }
            
            switch(ste){
                case "slide_left":
                    x.find(".slides_box").children("ul").children("li").css("float","left");
                    x.find(".slides_box").children("ul").children("li").show();
                    x.find(".slides_box").children("ul").animate({
                        left:-(w*parseInt(q))
                    },600);
                    break;
                case "fade_in":
                    x.find(".slides_box").children("ul").children("li").css("left","0px");
                    x.find(".slides_box").children("ul").children("li").hide();
                    x.find(".slides_box").children("ul").children("li").eq(cu).show();
                    if(cu == -1){
                        x.find(".slides_box").children("ul").children("li").eq(w).fadeIn("slow");
                    }else{
                        x.find(".slides_box").children("ul").children("li").eq(cu).fadeOut("slow",function(){
                            x.find(".slides_box").children("ul").children("li").eq(w).fadeIn("slow");
                        });
                    }
                    //x.find(".slides_box").children("ul").children("li").eq(w).fadeIn("slow");
                    break;
                case "slide_down":
                    x.find(".slides_box").children("ul").children("li").css("float","none");
                    x.find(".slides_box").children("ul").children("li").show();
                    x.find(".slides_box").children("ul").animate({
                        top:-(w*parseInt(r))
                    },600);
                    break;
            }
            
            v=setTimeout(play,m)
        }
        function stop(){
            clearTimeout(v);
        }
        
        
    }
})(jQuery);