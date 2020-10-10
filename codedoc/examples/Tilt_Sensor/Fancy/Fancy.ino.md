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
Turn all large LEDs white.
</div>
<div class="code">
```cpp
  SpinWheel.setLargeLEDsUniform(0xffffff);

```
</div>
<div class="side-text">
If the tilt is in a given direction,
turn on the corresponding LED purple.
</div>
<div class="code">
```cpp
  if (x>10) {
    SpinWheel.setLargeLED(7, x, 0, x);
    SpinWheel.setLargeLED(3, x, 0, x);
  }
  else if (x<-10) {
    SpinWheel.setLargeLED(5, -x, 0, -x);
    SpinWheel.setLargeLED(1, -x, 0, -x);
  }

```
</div>
<div class="side-text">
Do the same for the Y orientation
</div>
<div class="code">
```cpp
  if (y>10) {
    SpinWheel.setLargeLED(6, x, 0, x);
    SpinWheel.setLargeLED(2, x, 0, x);
  }
  else if (y<-10) {
    SpinWheel.setLargeLED(4, -x, 0, -x);
    SpinWheel.setLargeLED(0, -x, 0, -x);
  }

```
</div>
<div class="side-text">
Use the `setSmallLEDsPointer` to turn on only the small LEDs
which are at the top. This requires some tricky inverse
trigonometry, where we use the arctan function to turn the
`ay` and `ax` measurements into an angle. Then we rescale that angle
to fit the 0..255 range used by `setSmallLEDsPointer`.
</div>
<div class="code">
```cpp
  uint8_t angle = (-atan2(SpinWheel.ay, SpinWheel.ax)+3.1415/2)/2/3.1415*255;
  SpinWheel.setSmallLEDsPointer(angle, 0xffffff);

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