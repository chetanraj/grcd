(function ($, window, document) {
    'use strict';

    // Main function
    $.fn.grcd = function (options) {

        // make sure that only one grcd exists
        if (!$.data(document.body, 'grcd')) {
					$.data(document.body, 'grcd', true);
        	$.fn.grcd.init(options);
        }
    };

    // Init Function with the default/extend options
    $.fn.grcd.init = function (options) {

        // Define vars
        var o = $.fn.grcd.settings = $.extend({}, $.fn.grcd.defaults, options);

        // Create element
				this.grcd = $('<style/>', {id:'grcd'});
        
        // Add the css to body
				var $grcdCSS = "body:after,body:before{position:absolute;width:auto;height:auto;z-index:9999;content:'';display:block;pointer-events:none;top:0;right:0;bottom:0;left:0;background-color:transparent}body{position:relative}body:after{background-image:linear-gradient(rgba(0,0,0,.2) 1px,transparent 1px);background-size:100% "+o.width+"px}body:before{background-image:linear-gradient(90deg,rgba(0,0,0,.2) 1px,transparent 1px);background-size:"+o.width+"px 100%}";
        
        // Append the stylesheet to the head
				this.grcd.html($grcdCSS).appendTo('head');
    };
		
		// Remove grcd plugin from the DOM
		$.fn.grcd.remove = function () {
				$.removeData(document.body, 'grcd');
        $('#' + $.fn.grcd.settings.id).remove();
		};

    // Defaults
    $.fn.grcd.defaults = {
        id 			: 'grcd',
				width		: '16'			// Default width
    };

    $.grcd = $.fn.grcd;

})(jQuery, window, document);