(function ( $ ) {

    $.fn.popmenu = function( options ) {

        var settings = $.extend({
            'controller': 'true',
            'width': '100%',
            'background': '#34495e',
            'focusColor': '#1abc9c',
            'borderRadius': '10px',
            'top': '0',
            'left': '0',
            'iconSize': '100px'
        }, options );
        if(settings.controller == 'true'){
            var temp_display = 'none';
        }else{
            temp_display = 'block';
        }
        var tar = $(this);
        var tar_body = tar.children('ul');
        var tar_list = tar_body.children('li');
        var tar_ctrl = $('#pop_ctrl');
        function setIt(){
            tar_body.css({
                'display': temp_display,
                'position': 'relative',
                'top': settings.top,
                'left':settings.left,
                'background': settings.background,
                'width': settings.width,
                'float': 'left',
                'padding': '0',
                'border-radius': settings.borderRadius
            });
            tar_list.css({
                'display': 'block',
                'color': '#fff',
                'float': 'left',
                'width': settings.iconSize,
                'height': settings.iconSize,
                'text-align': 'center',
                'border-radius': settings.borderRadius
            });
            tar_ctrl.click(function(e){
                var $this = $(this);
                e.preventDefault();
                $this.hide();
                tar_body.show('fast');
                e.stopPropagation();
                $(document).click(function(e){
                    e = window.event || e;
                    var obj = $(e.srcElement || e.target);
                    if ($(obj).is(tar)) {
                    } else {
                        tar_body.hide('fast');
                        $this.show('slow');
                    }
                });
            });
            tar_list.hover(function(){
                $(this).css({'background': settings.focusColor,'cursor':'pointer'});
            },function(){
                $(this).css({'background': settings.background,'cursor':'alias'});
            });
        }
        return setIt();

    };

}( jQuery ));