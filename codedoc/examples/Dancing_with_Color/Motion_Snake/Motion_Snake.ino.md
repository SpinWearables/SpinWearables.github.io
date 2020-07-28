<div class="flex-container"><div class="wide-text">
# Dancing with Color: Create colorful snake that changes with rotation.
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
`SpinWheel.snake()` creates a snake-like pattern 
on the device.
</div>
<div class="code">
```cpp
  if (abs(SpinWheel.gx) > 1) { 
     SpinWheel.snake();
  }

  
  SpinWheel.setLargeLEDsUniform(100, 0, 0);

  // Make the SpinWheel show the registered color.
  SpinWheel.drawFrame();
}
  
```
</div>
</div>