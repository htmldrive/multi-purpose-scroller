Multi-purpose slideshow jquery plugin
=======================

text scroller,images scroller,images slideshow

[Demo](http://www.htmldrive.net/items/demo/38/Multi-purpose-slideshowtext-scrollerimages-scroller-jquery-plugin "Multi-purpose slideshow(text scroller,images scroller) jquery plugin")
##Usage
**Include js and css files.**

    <script type="text/javascript" src="js/jquery.js"></script>
    <link href="css/webwidget_slideshow_common.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/webwidget_slideshow_common.js"></script>
  
**Add html.**

    <div id="webwidget_slideshow_common" class="webwidget_slideshow_common">
        <ul>
            <li><a style="line-height:17px;color:#F4F4F4;text-decoration:none;" href="link1" title="Title1"><img border="0" src="images/slideshow_1.jpg" width="130" height="110" /><br/>Title1</a></li>
            <li><a style="line-height:17px;color:#F4F4F4;text-decoration:none;" href="link2" title="Title2"><img border="0" src="images/slideshow_2.jpg" width="130" height="110" /><br/>Title2</a></li>
            <li><a style="line-height:17px;color:#F4F4F4;text-decoration:none;" href="link3" title="Title3"><img border="0" src="images/slideshow_3.jpg" width="130" height="110" /><br/>Title3</a></li>
            <li><a style="line-height:17px;color:#F4F4F4;text-decoration:none;" href="link4" title="Title4"><img border="0" src="images/slideshow_4.jpg" width="130" height="110" /><br/>Title4</a></li>
        </ul>
    <div style="clear: both"></div>
    </div>
        
**Add startup script.**

    <script language="javascript" type="text/javascript">
        $(function() {
            $("#webwidget_slideshow_common").webwidget_slideshow_common({
                slideshow_transition_effect: 'fade_in',//option: slide_left,slide_down,fade_in
                slideshow_time_interval: '6000',
                slideshow_window_width: '150',
                slideshow_window_height: '150',
                slideshow_border_style: 'solid',//option: dashed dotted double groove hidden inset none outset ridge solid
                slideshow_border_size: '2',
                slideshow_border_color: '#000',
                slideshow_border_radius: '5',
                slideshow_padding_size: '10',
                soldeshow_background_color: '#666'
            });
        });
    </script>