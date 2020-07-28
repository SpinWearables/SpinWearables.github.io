<div class="flex-container"><div class="wide-text">
# Dancing with Color: Have the SpinWheel respond to both acceleration and rotation. 
Here we include one final code example. This example is designed
to be more complex than the previous examples and to inspire
future work. For more information and other examples, 
[click here](https://spinwearables.com/dancing/).
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


int offset = 0;
int colorChange;

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
Here, we use an **if statement** to check if 
the rotation is fast. If this is true, then add 
a step to the offset.
</div>
<div class="code">
```cpp
  if (abs(SpinWheel.gx) > 1) {
    offset = SpinWheel.gx*100; 
    Serial.println(offset);
  }

```
</div>
<div class="side-text">
Here we will use a **for loop**. Similar to the 
`loop` function, instructions inside the for loop
repeat. In this case the insturctions inside the 
for loop will repeat four times as specified by the 
`i < 4`. This will make a rainbow in the large LEDs
with a color change specified by the movement of the 
device. 
</div>
<div class="code">
```cpp
  for (int i=0; i<4; i++) {
    colorChange = offset+i*255/4;
    Serial.println(colorChange);
    SpinWheel.setLargeLED(i, colorWheel(colorChange));
    SpinWheel.setLargeLED(7-i, colorWheel(colorChange));
  }

```
</div>
<div class="side-text">
Here we define the total acceleration as the 
sum of the acceleration in the x,y,and z directions.
</div>
<div class="code">
```cpp
  float total_acceleration = SpinWheel.ax + SpinWheel.ay + SpinWheel.az;
  
```
</div>
<div class="side-text">
Here we use an **if statement** to check to see if the 
the total acceleration is large enough. If it is, 
then we will create a snake on the small LEDs using
`SpinWheel.snake()`. Here we use (0,255,0) to make the 
snake green, but you can use any color you like! 
</div>
<div class="code">
```cpp
  if (abs(total_acceleration) > 1) { 
     SpinWheel.snake(0,255,0);
  }



  SpinWheel.drawFrame();
}
```
</div>
</div>