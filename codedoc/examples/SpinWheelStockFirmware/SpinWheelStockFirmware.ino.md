<div class="flex-container"><div class="wide-text">
# The Default SpinWheel firmware.
This includes a few preloaded animations that can be changed by pressing
the button.
</div>
<div class="side-text">
</div>
<div class="code">
```cpp

#include "SpinWearables.h"
using namespace SpinWearables;

void setup() {
  SpinWheel.begin();
  SpinWheel.largeLEDs.setBrightness(20);
  bootAnimation();
  SpinWheel.addAnimationRoutine(largeRainbow);
  SpinWheel.addAnimationRoutine(smallWhiteRotating);
  SpinWheel.addAnimationRoutine(allBreathing);
  SpinWheel.addAnimationRoutine(tiltSensor3);
  SpinWheel.addAnimationRoutine(tealLight);
}

void loop() {
  SpinWheel.readIMU();
  SpinWheel.runAnimationRoutine();
  SpinWheel.drawFrame();
}
```
</div>
</div>