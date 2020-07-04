<div class="flex-container"><div class="wide-text">
# A Simple Blink Animation Using a Timer
In our [animations and patterns](https://spinwearables.com/animation/)
lesson we describe how an animation can be created by instructing
a computer to make a particular drawing dependent on a single number,
the current time. This is a small example doing exactly that:
We read the current time, divide it in intervals,
and depending on the time since the start of the last interval,
we change the brightness of the LEDs.
<video src="./simple_blink.mp4" muted="" autoplay="" playsinline="" loop=""></video>
</div>
<div class="side-text">
</div>
<div class="code">
```cpp

```
</div>
<div class="side-text">
Most of our code examples start with these `include` statements,
as they tell the computer that there is a set of coding tools
related to the SpinWheel that we will want to use.
</div>
<div class="code">
```cpp
#include "SpinWearables.h"
using namespace SpinWearables;

```
</div>
<div class="side-text">
The instructions we write in the `setup` block are executed
once when the SpinWheel device powers on. We run one single instruction
called `SpinWheel.begin()` which prepares all the LEDs to accept new colors.
</div>
<div class="code">
```cpp
void setup() {
  SpinWheel.begin();
}

```
</div>
<div class="side-text">
The instructions in the `loop` block are executed repeatedly "in a loop".
This is what lets us smoothly update the brightness of the LEDs and make
a simple animation.
</div>
<div class="code">
```cpp
void loop() {
```
</div>
<div class="side-text">
First we store the current time in the variable `t`.
The function `millis()` gives us that time.
</div>
<div class="code">
```cpp
  int t = millis();
```
</div>
<div class="side-text">
Then we divide the time in equal intervals of length
2.5 seconds (2500 milliseconds). By performin division
with remainder and storing only the remainder, we
find the time since the last interval has started.
In this computer language `a / b` means "divide a by b",
while `a % b` means "find the remainder after dividing a by b".
We store this time in `t_repeating`.
</div>
<div class="code">
```cpp
  int t_repeating = t % 2500;
```
</div>
<div class="side-text">
`t_repeating` will now smoothly go from 0 to 2500,
and then repeat. We want to turn this number into a brightness,
but 
</div>
<div class="code">
```cpp
  int b = t_repeating / 10;
  SpinWheel.setLargeLEDsUniform(b, b, b);
  SpinWheel.drawFrame();
}
```
</div>
</div>