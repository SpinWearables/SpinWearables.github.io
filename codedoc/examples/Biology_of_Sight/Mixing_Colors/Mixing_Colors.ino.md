<div class="flex-container"><div class="wide-text">
# Biology of Sight: Mixing Colors
Turning all of the large LEDs to a custom color.
</div>
<div class="side-text">
</div>
<div class="code">
```cpp

#include "SpinWearables.h"
using namespace SpinWearables;

void setup() {
  // Initialize all of the hardware on the SpinWheel.
  SpinWheel.begin();
}

void loop() {
  // Ask the SpinWheel to prepare all large LEDs to
  // show a particular color.
  // **Change the three numbers to a new random color.
  SpinWheel.setLargeLEDsUniform(195, 0, 255);
  // Make the SpinWheel show the registered color.
  SpinWheel.drawFrame();
}
```
</div>
</div>