<div class="flex-container"><div class="wide-text">
# Dancing with Color: Step x, changing color in response to rotation in the z-direction.
Here we go through in detail how to change the color of the SpinWheel in 
response to the rotation of the device. For more information and other 
examples, refer to the [dancing companion page](https://spinwearables.com/dancing/).
</div>
<div class="side-text">
</div>
<div class="code">
```cpp

```
</div>
<div class="side-text">
You've probably seen these `include` statements in some of the other code examples. 
They allow the program to access a set of tools for the SpinWheel for us to use. 
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
Instructions in a loop function are repeated over and over again, 
in other words, "in a loop".
</div>
<div class="code">
```cpp
void loop() {
 

```
</div>
<div class="side-text">
The `readIMU` function checks if the sensor is ready
and takes its current rotation data, which we will
use below to change the color.  
</div>
<div class="code">
```cpp
  SpinWheel.readIMU();

```
</div>
<div class="side-text">
Below we will use an **if/else statement**.
Ife statements are vital tools in programming.
Essentially, **if** a condition is true, we will 
follow the given instruction.  
In this case, if the x rotation (gx) is large enough,
then we will change the color of the large LEDS
by changing the `spinning` variable. 
We picked 50 because that made it turn on without 
decting too small motions. However, you can make
this more or less sensitve.
The `abs` function makes it so that the direction 
of the rotation (clockwise or counter clockwise), 
does not matter. 
</div>
<div class="code">
```cpp
  if (abs(SpinWheel.gx) > 50) {
```
</div>
<div class="side-text">
As before, the `setLargeLEDsUniform` function tells the 
SpinWheel to show the color we would like it to show. 
We will use (0,255,255), which is a light blue.
</div>
<div class="code">
```cpp
    SpinWheel.setLargeLEDsUniform(0, 255, 255);
  }
  else {
```
</div>
<div class="side-text">
Since no motion has been detected, we will instead use 
(0,0,0), which turns off the LEDs.
</div>
<div class="code">
```cpp
    SpinWheel.setLargeLEDsUniform(0, 0, 0);
  }

```
</div>
<div class="side-text">
Finally, we need to tell the SpinWheel to light up the LEDs
according to the instructions in `setLargeLEDsUniform`.
</div>
<div class="code">
```cpp
  SpinWheel.drawFrame();
 }
  
```
</div>
</div>