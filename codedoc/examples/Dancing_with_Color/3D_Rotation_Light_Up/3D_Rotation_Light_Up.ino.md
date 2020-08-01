<div class="flex-container"><div class="wide-text">
# Dancing with Color: Changing color in response to a 3D rotation. 
In this example, we will build off of previous examples
in order to code the color LEDs of the SpinWheel in order 
to respond to a 3D rotation. For more information and 
other examples, refer to the [dancing companion page](https://spinwearables.com/dancing/).
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
Now, we will need to initialize three variables, 
for the red, green, and blue LED of each big 
LED. These variables will hold information
telling the SpinWheel whether or not to 
display these colors.  
</div>
<div class="code">
```cpp
int red = 0;
int green = 0;
int blue = 0;

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
Set the colors to zero. Below we will measure rotations
and change the values away from zero if necessary. 
</div>
<div class="code">
```cpp
  red = 0;
  green = 0;
  blue = 0;

```
</div>
<div class="side-text">
Here we will also use if statements. 
In this case if the rotation in the 
**x direction** is large, then we will change 
the value of the `red` variable. Later, this
will be used to turn red LED of **each** 
big LED on. 
</div>
<div class="code">
```cpp
  if (abs(SpinWheel.gx) > 1) {
    red = 255;
  }

```
</div>
<div class="side-text">
Similarly, if the rotation in the	
**y	direction** is large, then we will
change the value of the `green` variable.
Later this will be use to turn the
green LED of **each** big LED on.
</div>
<div class="code">
```cpp
  if (abs(SpinWheel.gy) > 1) {
    green = 255;
  }

```
</div>
<div class="side-text">
Also, if the rotation in the **z-direction**
is large, then  we will change the value of the
`blue` variable. Later this will be used to turn 
the blue LED of **each** big LED on. 
</div>
<div class="code">
```cpp
  if (abs(SpinWheel.gz) > 1)  {
    blue = 255;
  }

```
</div>
<div class="side-text">
Here, we will use the `setLargeLEDsUniform` and 
`setSmallLEDsUniform` function to tell the  
SpinWheel what color to display. 
</div>
<div class="code">
```cpp
  SpinWheel.setLargeLEDsUniform(red, green, blue);
  SpinWheel.setSmallLEDsUniform(red, green, blue);

  SpinWheel.drawFrame();
 }
  
```
</div>
</div>