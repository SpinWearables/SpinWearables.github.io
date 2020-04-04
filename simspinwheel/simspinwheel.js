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

  begin() {
  }

  drawLargeLEDFrame() {
    for (let i = 0; i<this._ssw_lLEDdiv.length; i++) {
      this._ssw_lLEDdiv[i].style.background = `rgb(${this._ssw_lLEDarray[3*i]},${this._ssw_lLEDarray[3*i+1]},${this._ssw_lLEDarray[3*i+2]})`;
    }
  }

  drawSmallLEDFrame() {
    for (let i = 0; i<this._ssw_sLEDdiv.length; i++) {
      this._ssw_sLEDdiv[i].style.background = `rgb(${this._ssw_sLEDarray[3*i]},${this._ssw_sLEDarray[3*i+1]},${this._ssw_sLEDarray[3*i+2]})`;
    }
  }

  drawFrame() {
    this.drawLargeLEDFrame();
    this.drawSmallLEDFrame();
  }
 
  setLargeLEDsUniform(r,g,b) {
    for (let i = 0; i<this._ssw_lLEDdiv.length; i++) {
      this._ssw_lLEDarray[3*i  ] = r;
      this._ssw_lLEDarray[3*i+1] = g;
      this._ssw_lLEDarray[3*i+2] = b;
    }
  }

  setSmallLEDsUniform(r,g,b) {
    for (let i = 0; i<this._ssw_sLEDdiv.length; i++) {
      this._ssw_sLEDarray[3*i  ] = r;
      this._ssw_sLEDarray[3*i+1] = g;
      this._ssw_sLEDarray[3*i+2] = b;
    }
  }

  setLargeLED(i, r,g,b) {
    this._ssw_lLEDarray[3*i  ] = r;
    this._ssw_lLEDarray[3*i+1] = g;
    this._ssw_lLEDarray[3*i+2] = b;
  }

  setSmallLED(i, r,g,b) {
    this._ssw_sLEDarray[3*i  ] = r;
    this._ssw_sLEDarray[3*i+1] = g;
    this._ssw_sLEDarray[3*i+2] = b;
  }

  clearAllLEDs() {
    this.setLargeLEDsUniform(0,0,0);
    this.setSmallLEDsUniform(0,0,0);
  }

  // TODO all of the set*** functions
}

// Processing functions

function get_original_code(container) {
  return Array.from(container.getElementsByClassName("ssw-codeblock"))
              .map(x => x.tagName!="TEXTAREA" ? x.innerHTML : x.value).join('');
}

function translate_code(code) {
  var base_code = code.replace('void','function')
                      .replace('int','var');
  var code = `
    var SpinWheel = this.SpinWheel;
    var button = this.querySelector('.ssw-bt-run');
    button.disabled = true;
    button.innerHTML = 'Running...';
    ${base_code}
    var c = 200;
    function _ssw_loop() {
      if (typeof setup !== 'undefined') {
        setup();
      }
      if (typeof loop !== 'undefined') {
        loop();
        c--;
        if (c>0) {
          setTimeout(_ssw_loop, 50);
        } else {
          button.disabled = false;
          button.innerHTML = 'Run for 10 seconds';
        }
      } else {
        button.disabled = false;
        button.innerHTML = 'Run for 10 seconds';
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
  Function(translate_code(get_original_code(container))).apply(container);
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
<img src="/simspinwheel/spinwheel_invertgray_nosmalls.png">
<div class="ssw-large-led ssw-large-led0"></div>
<div class="ssw-large-led ssw-large-led1"></div>
<div class="ssw-large-led ssw-large-led2"></div>
<div class="ssw-large-led ssw-large-led3"></div>
<div class="ssw-large-led ssw-large-led4"></div>
<div class="ssw-large-led ssw-large-led5"></div>
<div class="ssw-large-led ssw-large-led6"></div>
<div class="ssw-large-led ssw-large-led7"></div>
<div class="ssw-small-led ssw-small-led0"></div>
<div class="ssw-small-led ssw-small-led1"></div>
<div class="ssw-small-led ssw-small-led2"></div>
<div class="ssw-small-led ssw-small-led3"></div>
<div class="ssw-small-led ssw-small-led4"></div>
<div class="ssw-small-led ssw-small-led5"></div>
<div class="ssw-small-led ssw-small-led6"></div>
<div class="ssw-small-led ssw-small-led7"></div>
<div class="ssw-small-led ssw-small-led8"></div>
<div class="ssw-small-led ssw-small-led9"></div>
<div class="ssw-small-led ssw-small-led10"></div>
<div class="ssw-small-led ssw-small-led11"></div>
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
