(function(a){
    a.fn.webwidget_rating_bar=function(p){
        var p=p||{};

        var b=p&&p.rating_star_length?p.rating_star_length:"5";
        var c=p&&p.rating_function_name?p.rating_function_name:"";
        var f=p&&p.rating_default_value?p.rating_default_value:"0";
        var d=p&&p.directory?p.directory:"images";
        var g="";
        var h="";
        var j="";
        var k="";
        var l="";
        var m="";
        var n="";
        var o="";
        var q=a(this);
        b=parseInt(b);
        init();
        q.next("ul").children("li").hover(function(){
            $(this).parent().children("li").children("div").width(0);
            var a=$(this).parent().children("li").index($(this));
            $(this).parent().children("li").children("div").slice(0,a).width(25)
            });
        q.next("ul").children("li").mousemove(function(e){
            var a=$(this).parent().children("li").index($(this));
            if(a*g+g*(n/25)>99){
                o=100
                }else if(a*g+g*(n/25)<1){
                o=0
                }else{
                o=parseInt(a*g+g*(n/25))
                }
                q.val(o);
            n=e.clientX-$(this).offset().left;
            $(this).children("div").width(n)
            });
        q.next("ul").children("li").click(function(){
            eval(c+"("+o+")");
            set_value(o)
            });
        q.next("ul").hover(function(){},function(){
            if(h==""){
                $(this).children("li").children("div").width(0)
                }else{
                set_value(h)
                }
            });
    function init(){
        $('<div style="clear:both;"></div>').insertAfter(q);
        q.css("float","left");
        var a=$("<ul>");
        a.attr("class","webwidget_rating_bar");
        for(var i=1;i<=b;i++){
            a.append('<li style="background-image:url('+d+'/web_widget_star.gif)"><div></div></li>')
            }
            a.insertAfter(q);
        q.next("ul").children("li").children("div").css('background-image','url('+d+'/web_widget_star.gif)');
        q.next("ul").children("li").children("div").css('background-position','0px -50px');
        if(f!=""){
            set_value(f)
            }else{
            q.next("ul").children("li").children("div").width(0)
            }
        }
    function set_value(a){
    g=100/b;
    j=Math.floor(a/g);
    k=a%g;
    l=k/g;
    m=25*l;
    h=a;
    q.val(a);
    q.next("ul").children("li").children("div").width(0);
    q.next("ul").children("li").children("div").slice(0,j).width(25);
    q.next("ul").children("li").children("div").eq(j).width(m)
    }
}
})(jQuery);