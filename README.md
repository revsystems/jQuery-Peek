# jQuery-inPixels

This plugin implements cross-browser jQuery extensions to get numeric pixel values of margin, 
padding, and border widths. It also provides a simple mechanism to convert any measurement unit 
on the screen into pixels.

# Demo

You can see some examples [here](http://dl.dropbox.com/u/124192/websites/jqueryinpixels/index.html).

## Features

  * Returns numeric values for all measurements, ready-to-use for positioning calculations.
  * Simplifies syntax.
    parseFloat($("target").css("margin-left").match(/^\\d+/) ? $("target").css("margin-left") : 0)
    becomes
    $("target").marginLeft()
  * Returns numeric values in all browsers down to IE7 when margin is set to "auto".
  * Returns numeric values in all browsers down to IE7 when border-width is set to "thin", "medium", or "thick".
  
## Compatibility

jQuery-inPixels has been tested in the following browsers:
  
  * Firefox 3.6.12
  * Google Chrome 8.0.552.224
  * IE7 (via IE9 beta)
  * IE8 (via IE9 beta)
  * IE9 beta
  
It requires [jQuery version 1.3.x](http://jquery.com) and up.


## Usage

Requires [jQuery](http://jquery.com) and this plugin.

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.tie.js"></script>
    
You can then use width values for margin/padding/border just as you would with jQuery's width() and height() functions:

    alert($("target").marginTop() * 3);
    alert($("target").offset().left + $("target").marginLeft() + $("target").borderLeft() + $("target").paddingLeft());
    
## Functions

  * marginTop()
  * marginRight()
  * marginBottom()
  * marginLeft()
  * marginWidth()
  * marginHeight()
  * paddingTop()
  * paddingRight()
  * paddingBottom()
  * paddingLeft()
  * paddingWidth()
  * paddingHeight()
  * borderTop()
  * borderRight()
  * borderBottom()
  * borderLeft()
  * borderWidth()
  * borderHeight()
  * $.inPx( measurement, ctx ) // e.g. $.inPx("2in") or $.inPx("2em", "#header")