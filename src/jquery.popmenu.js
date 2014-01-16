(function($) {

    $.fn.popmenu = function(options) {

        var settings = $.extend({
            'controller': 'true',
            'width': '300px',
            'background': '#34495e',
            'focusColor': '#1abc9c',
            'borderRadius': '10px',
            'top': '50',
            'left': '0',
            'iconSize': '100px'
        }, options);
        if (settings.controller == 'true') {
            var temp_display = 'none';
        } else {
            temp_display = 'block';
        }
        var tar = $(this);
        var tar_body = tar.children('ul');
        var tar_list = tar_body.children('li');
        var tar_a = tar_list.children('a');
        var tar_ctrl = $('#pop_ctrl');

        function setIt() {
            tar_body.css({
                'display': temp_display,
                'position': 'absolute',
                'margin-top': -settings.top,
                'margin-left': -settings.left,
                'background': settings.background,
                'width': settings.width,
                'float': 'left',
                'padding': '0',
                'border-radius': settings.borderRadius,
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
            tar_a.css({
                'text-decoration': 'none',
                'color': '#fff'
            });
            tar_ctrl.click(function(e) {
                e.preventDefault();
                tar_body.show('fast');
                e.stopPropagation();
                $(document).click(function(e) {
                    e = window.event || e;
                    var obj = $(e.srcElement || e.target);
                    if ($(obj).is(tar)) {
                        tar_body.hide();
                        e.stopPropagation();
                    } else {
                        tar_body.hide();
                        e.stopPropagation();
                    }
                });
            });
            tar_list.hover(function() {
                $(this).css({
                    'background': settings.focusColor,
                    'cursor': 'pointer'
                });
            }, function() {
                $(this).css({
                    'background': settings.background,
                    'cursor': 'alias'
                });
            });
        }
        return setIt();

    };

}(jQuery));
