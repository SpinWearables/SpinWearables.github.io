<div class="flex-container"><div class="wide-text">
# Dancing with Color: Create colorful snake that changes with rotation.
For more examples and information, refer to the [dancing companion page](https://spinwearables.com/dancing/).
</div>
<div class="side-text">
</div>
<div class="code">
```cpp

```
</div>
<div class="side-text">
These include statements should look familiar!
As a reminder, they allow the program to access
coding tools for the SpinWheel.
</div>
<div class="code">
```cpp
#include "SpinWearables.h"
using namespace SpinWearables;

```
</div>
<div class="side-text">
The setup function should also seem familiar.
As a reminder, the `setup` function is run once when
the SpinWheel turns on. Also, `SpinWheel.begin()`
prepares the LED to accept new colors.
</div>
<div class="code">
```cpp
void setup() {
  SpinWheel.begin();
}

```
</div>
<div class="side-text">
Initialize the angle variable to zero. This will keep
track of the Spin Wheel's rotation.
</div>
<div class="code">
```cpp
int angle = 0; 
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
and takes its current rotation data.
</div>
<div class="code">
```cpp
  SpinWheel.readIMU();

```
</div>
<div class="side-text">
Use an **if statement** to check to see if the rotation is
large enough. If the rotation is large enough, then 
we will create a snake-like pattern on the device
where the motion of the snake is based on the motion 
of the device. Experiment with changing the `100` threshold
value if you want to make the SpinWheel more or less
sensitive. Keep in mind that `gy` measures rotation around
the y axis, i.e. spinning in place while hanging the SpinWheel
by the keyring.
</div>
<div class="code">
```cpp
  if (abs(SpinWheel.gy) > 100) {
     // Add 10 to make it spin at a reasonable speed.
     // Experiment with this number to change the rate
     // with which the snake spins. Can you make the 
     // snake go the other way? (Hint: what happens if you
     // subtract 10 instead?)
     angle = angle+10;
     // Here we use (0,255,0) to make the 
     // snake green, but you can use any color you like. 
     SpinWheel.setSmallLEDsPointer(angle, 0, 255, 0);
  }
```
</div>
<div class="side-text">
Create a pattern on the large LEDs as well. 
</div>
<div class="code">
```cpp
  SpinWheel.setLargeLEDsUniform(100, 0, 100);
```
</div>
<div class="side-text">
Have the SpinWheel draw the desired pattern.
</div>
<div class="code">
```cpp
  SpinWheel.drawFrame();
}
  
```
</div>
</div>