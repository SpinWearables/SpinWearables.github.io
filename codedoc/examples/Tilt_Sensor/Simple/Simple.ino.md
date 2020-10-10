<div class="flex-container"><div class="wide-text">
# A Simple Tilt Sensor
</div>
<div class="side-text">
</div>
<div class="code">
```cpp

#include "SpinWearables.h"
using namespace SpinWearables; 

void setup() {
```
</div>
<div class="side-text">
Ensure all of the SpinWheel hardware is on.
</div>
<div class="code">
```cpp
  SpinWheel.begin();
}

void loop() {
```
</div>
<div class="side-text">
Read all sensor data.
</div>
<div class="code">
```cpp
  SpinWheel.readIMU();

```
</div>
<div class="side-text">
Scale the x and y measurement to a -255..255 range.
</div>
<div class="code">
```cpp
  int x = SpinWheel.ax*255;
  int y = SpinWheel.ay*255;

```
</div>
<div class="side-text">
Turn off all LEDs.
</div>
<div class="code">
```cpp
  SpinWheel.clearAllLEDs();

```
</div>
<div class="side-text">
If the tilt is in a given direction,
turn on the corresponding LED.
</div>
<div class="code">
```cpp
  if (x>10) {
    SpinWheel.setLargeLED(5, x, x, x);
  }
  else if (x<-10) {
    SpinWheel.setLargeLED(7, -x, -x, -x);
  }

```
</div>
<div class="side-text">
Do the same for the Y orientation
</div>
<div class="code">
```cpp
  if (y>10) {
    SpinWheel.setLargeLED(4, x, x, x);
  }
  else if (y<-10) {
    SpinWheel.setLargeLED(6, -x, -x, -x);
  }

```
</div>
<div class="side-text">
Turn on the LEDs as commanded above.
</div>
<div class="code">
```cpp
  SpinWheel.drawFrame();
}
```
</div>
</div>