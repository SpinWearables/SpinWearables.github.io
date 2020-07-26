<div class="flex-container"><div class="wide-text">
# A Few LEDs with continuously changing colors "chasing" each other
This is the last of the  [animations and patterns](https://spinwearables.com/animation/)
examples.
By introducing a "delay" or "offset" between the numbers governing the
colors of a given LED, we can make them look as if they are chasing each other. 
Some pieces of code are the same as in previous examples from
this series on coded animations, We do not comment them as extensively here,
but consult the [`Simple_Blink`](../Simple_Blink) example if you need a refresher.
</div>
<div class="side-text">
</div>
<div class="code">
```cpp

#include "SpinWearables.h"
using namespace SpinWearables;

void setup() {
  SpinWheel.begin();
}

void loop() {
  int t = millis();
```
</div>
<div class="side-text">
We will have some fixed "delay" between the
numbers controlling each LED's color.
Change this number! What happens?
</div>
<div class="code">
```cpp
  int t_delay = 200;
```
</div>
<div class="side-text">
We will turn 4 of the LEDs on, but the
color of each one of them will be governed by
a slightly modified number.
</div>
<div class="code">
```cpp
  int t0 = (t % 2500) / 10;
  int t1 = ((t+t_delay) % 2500) / 10;
  int t2 = ((t+2*t_delay) % 2500) / 10;
  int t3 = ((t+3*t_delay) % 2500) / 10;
```
</div>
<div class="side-text">
Here we finally set those colors.
</div>
<div class="code">
```cpp
  SpinWheel.setLargeLED(0, colorWheel(t0));
  SpinWheel.setLargeLED(1, colorWheel(t1));
  SpinWheel.setLargeLED(2, colorWheel(t2));
  SpinWheel.setLargeLED(3, colorWheel(t3));
```
</div>
<div class="side-text">
Draw the image that was prepared in the previous lines.
</div>
<div class="code">
```cpp
  SpinWheel.drawFrame();
}
```
</div>
</div>