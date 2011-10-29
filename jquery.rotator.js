;(function($) {
    /*
     * Banner rotator plugin for jQuery
     * Version 0.2.1
     *
     * Copyright (c) 2011 Luminosity Group
     */
    $.fn.rotator = function(options) {
        var container = this;
        var defaults = {
            interval: 4000,
            randomize: false,
            fadetime: 500
        };

        /* Merge options with defaults */
        var settings = $.extend(true, {}, defaults, options);

        /* First, hide all the elements */
        $('li', container).each(function(){
            $(this).hide();
        });

        /* If randomize is set, pick an element randomly and show it, else show
         * the first element 
         */
        if (settings.randomize) {
            var size = $('li', container).length;
            var i = Math.floor(Math.random() * size) + 1;
            $('li:nth-child(' + i + ')', container).show().addClass('active');
        } else {
            $('li', container).first().show().addClass('active');
        }

        /* Does the fadein/fadeout to the next item in the list */
        function rotate() {
            var current = $('li.active', container);
            $('li', container).removeClass('active');
            if ($(current).next().length > 0) {
                $(current).fadeOut(settings.fadetime).next().fadeIn(settings.fadetime).addClass('active');
            }
            else {
                $(current).fadeOut(settings.fadetime);
                $('li:first-child', container).fadeIn(settings.fadetime).addClass('active');
            }
            setTimeout(rotate, settings.interval);
        }

        setTimeout(rotate, settings.interval);
    };
})(jQuery);
