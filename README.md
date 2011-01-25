# jQuery-Peek

I often need to initialize the size or positioning of elements on a page, but there's a problem. 
These elements are spawned in a hidden tab. When they're hidden like that, their width/height is 
effectively 0. It's impossible to figure out positioning that way. jQuery-Peek provides a variety 
of ways to get around that issue.

# Demo

You can see an example [here](http://dl.dropbox.com/u/124192/websites/jquerypeek/index.html).

## Usage

Requires [jQuery](http://jquery.com) and this plugin.

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.peek.js"></script>

Now you can use it in a variety of ways:
    
    // Use it to call a quick jQuery function
    var width = $(".target:first").peek("width");
    
    // It works with parameters too
    var outerWidth = $(".target:first").peek("outerWidth", true);

    // Use it like each
    $(".target").peek(function() {
      console.log("this target is visible to js right now!");
      console.log($(this).width());
    });
    
    // Return a more complex value
    $(".target:first").peek(function() {
      return $(this).outerWidth() + $(this).position().left;
    });