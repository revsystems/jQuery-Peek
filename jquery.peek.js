/*
    This product includes software developed 
    by RevSystems, Inc (http://www.revsystems.com/) and its contributors
    
    Please see the accompanying LICENSE.txt for licensing information.
*/
(function($) {

/*
Like each, except you're guaranteed that the target element is js-visible.

If you want to do a bunch of changes and continue chaining, you want the 
following syntax:
$(".targets").peek(function() {
    var $e = $(this);
    $e.children().height($e.height() - 10);
}).continueChaining();

If a value is returned in the callback function, then peek returns that 
value instead of chaining. It uses the first return value it encounters.
If you wanted to get the largest height of a hidden element's children, you
could use:
$("#target").peek(function() { return $(this).children().maxHeight(); });

For simpler one liners, peek also supports jquery functions in string format, 
with the arguments following normally:

    $("#target").peek("height");
    $("#target").peek("outerHeight", true);
    $("#target").peek("offset").left;
*/  
$.fn.peek = function(callback) {
    var r,
        ret,
        args = arguments,
        aps = Array.prototype.slice,
        me = "peek" + Math.floor(Math.random()*999999);
    
    // saving must be done before peek so that an element's visibility doesn't affect its descendants
    function save() {
        var $e = $(this);
        $e.data(me + "-visibility", $e.css("visibility"));
        $e.data(me + "-display", $e.css("display"));
    }
    
    // show the element, but make it so it isn't visible
    function peek() {
        $(this).css({ visibility: "hidden" }).show();
    }
    
    // restore the element to its previous state
    function aboo() {
        var $e = $(this);
        $e.css({
          display: $e.data(me + "-display"),
          visibility: $e.data(me + "-visibility")
        });
        $e.removeData(me + "-display");
        $e.removeData(me + "-visibility");
    }
    
    // peek this element and any hidden ancestors--they need to be visible too
    // execute the callback on the target elements
    if(!$.isFunction(callback) && $.isFunction($.fn[callback])) { 
        callback = $.fn[callback];
    }
    $(this).each(function() {
        var $e = $(this),
            $all = $e.parents(":hidden").andSelf();
        $all.each(save).each(peek);
        if(callback) {
            r = callback.apply($e, aps.call(args, 1));
            if(ret === undefined && r !== undefined) { 
              ret = r;
            }
        }
        $all.each(aboo);
    });
    
    // if a return value is specified for the callback, return that
    if(ret !== undefined) {
        return ret;
    }
    
    // otherwise chain
    return $(this);
};

}(jQuery));