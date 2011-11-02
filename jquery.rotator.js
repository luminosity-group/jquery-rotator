/*global window, setTimeout, jQuery */
(function ($) {
    /* Banner rotator plugin for jQuery
     * Version 0.2.3
     *
     * Copyright (c) 2011 Luminosity Group
     */
    $.fn.rotator = function (options) {
        var container, defaults, stopped, settings, size, i;

        container = this;
        defaults = {
            interval: 4000,
            randomize: false,
            fadeInTime: 500,
            fadeOutTime: 1000,
            stopOnBlur: false
        };

        /* Used when settings.stopOnBlur == true */
        stopped = false;

        /* Merge options with defaults */
        settings = $.extend(true, {}, defaults, options);

        /* First, hide all the elements */
        $('li', container).each(function () {
            $(this).hide();
        });

        /* If randomize is set, pick an element randomly and show it, else show
         * the first element 
         */
        if (settings.randomize) {
            size = $('li', container).length;
            i = Math.floor(Math.random() * size) + 1;
            $('li:nth-child(' + i + ')', container).show().addClass('active');
        } else {
            $('li', container).first().show().addClass('active');
        }

        if (settings.stopOnBlur) {
            $(window).blur(function () {
                stopped = true;
            }).focus(function () {
                stopped = false;
            });
        }

        /* Does the fadein/fadeout to the next item in the list */
        function rotate() {
            var current;
            if (!settings.stopOnBlur || (settings.stopOnBlur && !stopped)) {
                current = $('li.active', container);
                $('li', container).removeClass('active');

                if ($(current).next().length > 0) {
                    $(current).fadeOut(settings.fadeInTime)
                        .next().fadeIn(settings.fadeOutTime).addClass('active');
                }
                else {
                    $(current).fadeOut(settings.fadetime);
                    $('li:first-child', container).fadeIn(settings.fadeInTime).addClass('active');
                }
            }

            setTimeout(rotate, settings.interval);
        }

        setTimeout(rotate, settings.interval);
    };
}(jQuery));
