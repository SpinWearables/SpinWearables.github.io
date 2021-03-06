<div class="flex-container"><div class="wide-text">
# A Stroboscope
As seen in the SpinWheel [stroboscope adventure](https://spinwearables.com/stroboscope/)
</div>
<div class="side-text">
</div>
<div class="code">
```cpp

#include "SpinWearables.h"
using namespace SpinWearables;

```
</div>
<div class="side-text">
First we would like to ensure the brightness
is set to maximum, as we are not going to use
the LEDs for aesthetics,
but rather as a source of illumination.
</div>
<div class="code">
```cpp
void setup() {
  SpinWheel.begin();
  SpinWheel.setBrightness(255);
}

```
</div>
<div class="side-text">
We will set the default period to
10 milliseconds and let it vary
from 8 milliseconds to 12 milliseconds.
</div>
<div class="code">
```cpp
long default_delay_time = 10000;
long max_correction = 2000;

```
</div>
<div class="side-text">
And now we have the main body of the program,
which will turn the light on and then off rapidly.
</div>
<div class="code">
```cpp
void loop() {

```
</div>
<div class="side-text">
We first read the tilt of the device and use it
to modify the default period.
</div>
<div class="code">
```cpp
  SpinWheel.readIMU();
  long delaytime = default_delay_time + SpinWheel.ax * max_correction;

```
</div>
<div class="side-text">
Set the lights on.
</div>
<div class="code">
```cpp
  SpinWheel.setLargeLEDsUniform(255, 255, 255);
  SpinWheel.drawLargeLEDFrame();

```
</div>
<div class="side-text">
Wait only a small fraction of the total period (3% in this case).
</div>
<div class="code">
```cpp
  delayMicroseconds(0.03*delaytime);

```
</div>
<div class="side-text">
Then turn the lights off and wait for the rest of the time.
</div>
<div class="code">
```cpp
  SpinWheel.setLargeLEDsUniform(0, 0, 0);
  SpinWheel.drawLargeLEDFrame();
  delayMicroseconds(0.97*delaytime);
}

```
</div>
<div class="side-text">
Notice we used `drawLargeLEDFrame()` instead of `drawFrame()`.
We did so because `drawFrame` also sets the small LEDs,
which used a much slower persistence-of-vision pattern
and can not work at more than 50 frames per second.
</div>
</div>