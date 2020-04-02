// Define mock arduino functions

var _ssw_t_page_open = new Date().getTime();
function millis() {
  return new Date().getTime() - _ssw_t_page_open;
}

// Define mock spinwheel class

class SpinWheelClass {
  constructor(container) {
    this._ssw_container = container;
    this._ssw_lLEDdiv = Array.from(container.getElementsByClassName("ssw-large-led"));
    this._ssw_sLEDdiv = Array.from(container.getElementsByClassName("ssw-small-led"));
    this._ssw_lLEDarray = new Uint8Array(this._ssw_lLEDdiv.length*3);
    this._ssw_sLEDarray = new Uint8Array(this._ssw_sLEDdiv.length*3);
  }

  drawLargeLEDFrame() {
    for (let i = 0; i<this._ssw_lLEDdiv.length; i++) {
      this._ssw_lLEDdiv[i].style.background = `rgb(${this._ssw_lLEDarray[3*i]},${this._ssw_lLEDarray[3*i+1]},${this._ssw_lLEDarray[3*i+2]})`;
    }
  }

  // TODO the drawSmallLEDFrame function (and add it to draw)
  // TODO that also involves creating and placing the necessary divs in the template in unfinished_to_finished_html

  drawFrame() {
    this.drawLargeLEDFrame();
  }
 
  setLargeLEDsUniform(r,g,b) {
    for (let i = 0; i<this._ssw_lLEDdiv.length; i++) {
      this._ssw_lLEDarray[3*i  ] = r;
      this._ssw_lLEDarray[3*i+1] = g;
      this._ssw_lLEDarray[3*i+2] = b;
    }
  }

  // TODO all of the set*** functions
}

// Processing functions

function get_original_code(container) {
  return Array.from(container.getElementsByClassName("ssw-codeblock"))
              .map(x => x.tagName=="DIV" ? x.innerHTML : x.value).join('');
}

function translate_code(code) {
  var base_code = code.replace('void','function')
                      .replace('int','var');
  var code = `
    var SpinWheel = this;
    ${base_code}
    var c = 200;
    function _ssw_loop() {
      loop();
      c--;
      if (c>0) {
        setTimeout(_ssw_loop, 50);
      }
    };
    _ssw_loop();
  `
  return code;
}

function show_in_debug(container) {
  container.getElementsByClassName('ssw-debug')[0].innerHTML = translate_code(get_original_code(container));
}

function run_sim(container) {
  Function(translate_code(get_original_code(container))).apply(container.SpinWheel)
}

function unfinished_to_finished_html(unfinished_html) {
  return `
<div class="ssw-container">
<div class="ssw-code">
${unfinished_html}
<div class="ssw-codecontrols">
<button class="ssw-bt-run">Run for 10 seconds</button>
<button class="ssw-bt-debug">Debug</button>
<div class="ssw-debug">
</div>
</div>
</div>
<div class="ssw-vis">
<div>
<img src="/simspinwheel/spinwheel_invertgray.png">
<div class="ssw-large-led ssw-large-led0"></div>
<div class="ssw-large-led ssw-large-led1"></div>
<div class="ssw-large-led ssw-large-led2"></div>
<div class="ssw-large-led ssw-large-led3"></div>
<div class="ssw-large-led ssw-large-led4"></div>
<div class="ssw-large-led ssw-large-led5"></div>
<div class="ssw-large-led ssw-large-led6"></div>
<div class="ssw-large-led ssw-large-led7"></div>
</div>
</div>
</div>
`;
}

function prep_containers() {
  var unfinished_containers = document.querySelectorAll('.ssw-codecontent');
  unfinished_containers.forEach(function (x) {
    x.outerHTML = unfinished_to_finished_html(x.outerHTML);
  });
  var finished_containers = document.querySelectorAll('.ssw-container');
  finished_containers.forEach(function (x) {
    x.SpinWheel = new SpinWheelClass(x);
    var bt_run = x.querySelector('.ssw-bt-run');
    bt_run.onclick = function () {run_sim(x)};
    var bt_debug = x.querySelector('.ssw-bt-debug');
    bt_debug.onclick = function () {show_in_debug(x)};

    var textareas = x.querySelectorAll('textarea')
    textareas.forEach(function (text) {
      text.value = text.innerHTML.replace(/^\n+|\n+$/g, '');
      function resize () {
          text.style.height = 'auto';
          text.style.height = (text.scrollHeight+3)+'px';
      }
      resize();
      text.resize = resize;
      text.addEventListener('input', resize, false);
    });
  });
}

addEventListener('load', prep_containers, false);
