<div class="flex-container"><div class="wide-text">
# Dancing with Color: Have the SpinWheel respond to both acceleration and rotation. 
Here we include one final code example. This example is designed
to be more complex than the previous examples and to inspire
future work. For more information and other examples, 
refer to the [dancing companion page](https://spinwearables.com/dancing/).
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
Here, we initialize some variables that we
will make use of later. 
</div>
<div class="code">
```cpp
int offset = 0;
int colorChange;
uint8_t angle = 0; 

int a_cum = 0;

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
First, we can add a "motion_snake" like in the previous sketch.
</div>
<div class="code">
```cpp
  if (abs(SpinWheel.gy) > 50) {
     // add 10 to make it spin at a reasonable speed
     angle = angle+10;
     SpinWheel.setSmallLEDsPointer(angle, 255, 255, 255);
  }

```
</div>
<div class="side-text">
Rather than having the color of the large LEDs change
based on the SpinWheel's angular velocity, instead
we can have the color change when the acceleration
of the SpinWheel is sufficient.  
</div>
<div class="code">
```cpp
  int a = abs(SpinWheel.ax);
```
</div>
<div class="side-text">
Like r_cum in the Rainbow_Chase_Advanced sketch, a_cum
is the sum of the SpinWheel's acceleration in the x 
direction. We multiply the acceleration by 10 to have
the color change be noticeable. We did a similar thing
in the snake example.
</div>
<div class="code">
```cpp
  a_cum = a*10 + a_cum;
```
</div>
<div class="side-text">
We will have some fixed "delay" between the
numbers controlling each LED's color.
Change this number! What happens?
</div>
<div class="code">
```cpp
  int a_delay = 15;
```
</div>
<div class="side-text">
We will have the inner and outer large LEDs
light up the same color. The color of each pair
will be governed by a slightly modified number.
</div>
<div class="code">
```cpp
  int a0 = a_cum % 255;
  int a1 = (a_cum+a_delay) % 255;
  int a2 = (a_cum+2*a_delay) % 255;
  int a3 = (a_cum+3*a_delay) % 255;
```
</div>
<div class="side-text">
Here we finally set those colors. 
</div>
<div class="code">
```cpp
  SpinWheel.setLargeLED(0, colorWheel(a0));
  SpinWheel.setLargeLED(1, colorWheel(a1));
  SpinWheel.setLargeLED(2, colorWheel(a2));
  SpinWheel.setLargeLED(3, colorWheel(a3));
  SpinWheel.setLargeLED(4, colorWheel(a0));
  SpinWheel.setLargeLED(5, colorWheel(a1));
  SpinWheel.setLargeLED(6, colorWheel(a2));
  SpinWheel.setLargeLED(7, colorWheel(a3));


  
```
</div>
<div class="side-text">
Have the SpinWheel display the desired pattern.
</div>
<div class="code">
```cpp
  SpinWheel.drawFrame();
}
```
</div>
</div>