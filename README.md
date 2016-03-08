# Introduction

Simple front-end terminal simulator with animation.

Here is a live demo:

https://micooz.github.io/terminal-js

Screenshot:

![1]

# Usage

First, provide a div in your html code:

    <div id="terminal"></div>

Second, include `terminal[.min].js`:

    <script src="dist/terminal.min.js"></script>

Finally, coding as this example:

1). Create an instance of Terminal class. You can specify options in an object and pass it to the constructor:

    var t = new Terminal({
      dom: document.getElementById('terminal'), // required
      speed: 15 // chars per second
    });

2). run() will give you an object of 'Operator' in your callback. The 'Operator' supports chain operation or function calls respectively:

    t.run(function (o) {
      o.output('Hi, there. I\'m Micoz. ').wait(300);
      o.del(3).output('oz. ').wait(1000);

      o.output('I want to show you an awesome simulator');
      o.del(9).output('terminal powered by HTML4').wait(200).del(1).output('5. ').wait(800);

      o.output('The terminal is a simulator with animation.').wait(800);
      o.newline();
      o.output('-- Micooz');
    });

# Installation

    $ npm i

### via npm

	$ npm i terminal-js --save

# Build

    $ npm run build
    
Compile and compress `src/*.*` into `dist/terminal.min.js`, this file is for production.
    
# Run in Development

    $ npm run dev

Compile `src/*.*` into `dist/terminal.js` and generate source maps for better debugging. Auto-recompile sources after modification.

# License

MIT

[1]: screenshot.png