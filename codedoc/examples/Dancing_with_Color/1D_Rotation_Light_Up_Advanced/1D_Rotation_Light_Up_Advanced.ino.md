<div class="flex-container"><div class="wide-text">
# Dancing with Color: Color changes based on direction.  
In this example, we will step through the code used
to make the SpinWheel change color based on the direction
of the spin. For more information and previous examples, 
click [here](https://spinwearables.com/dancing/). 
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
  // Initialize all of the hardware on the SpinWheel.
  SpinWheel.begin();
}


```
</div>
<div class="side-text">
Here, we initialize two variables, 
one to tell the SpinWheel what color to display
when the device is spun in the positive direction
and the other for the negative direction. 
</div>
<div class="code">
```cpp
int pos_spin = 0;
int neg_spin = 0;

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
Here, we will also utilize `else if` 
and `else` commands. These commands are used in
programming along with an **if statement**
to tell the program what to do when the if condition
is not met. In this example, our **if condition**
checks whether or not the rotation is big enough in
the **positive direction**. If this condition is true
we will light up the LEDs according to the given
instruction. 
</div>
<div class="code">
```cpp
  if (abs(SpinWheel.gx) > 1) {
    pos_spin = 255;
    neg_spin = 0;
  }
```
</div>
<div class="side-text">
If the rotation is not big enough in the 
positive direction, we will use an `else if`
command to see if the spin is large enough 
in the **negative direction**. If it is, 
then we will follow the given instruction.
</div>
<div class="code">
```cpp
  else if (SpinWheel.gx < -1) {
    neg_spin = 255;
    pos_spin = 0;
  }
```
</div>
<div class="side-text">
If all previous conditions are not true, 
then we will use an `else` command. In this 
case, if the rotation is not large enough in 
either direction, the SpinWheel will not light up. 
</div>
<div class="code">
```cpp
  else {
    pos_spin = 0;
    neg_spin = 0;
  }
```
</div>
<div class="side-text">
As before, the `setLargeLEDsUniform` function tells the
SpinWheel to show the color we would like it to show.
Based on the previous if statements, if the device is 
spinning in the positive direction, the LEDs will light up 
green. If the device is spinning in the negative direction
the LEDs will light up blue. 
</div>
<div class="code">
```cpp

  SpinWheel.setLargeLEDsUniform(0, pos_spin, neg_spin);

  SpinWheel.drawFrame();
 }
```
</div>
</div>