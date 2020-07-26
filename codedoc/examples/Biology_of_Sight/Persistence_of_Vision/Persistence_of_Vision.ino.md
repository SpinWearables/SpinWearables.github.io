<div class="flex-container"><div class="wide-text">
# Biology of Sight: Persistence of Vision
Rapidly switch between two colors and observe how the human eye can be too
slow to distinguish them.
**BE CAREFUL IF YOU HAVE EPILEPSY AS THIS WILL CAUSE FLASHING COLORS!!!**
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

```
</div>
<div class="side-text">
CHANGE THIS VALUE! EXPERIMENT!
</div>
<div class="code">
```cpp
int delay_time_in_milliseconds = 500;

void loop() {
  // Show red...
  SpinWheel.setLargeLEDsUniform(255, 0, 0);
  SpinWheel.drawFrame();
  // Wait...
  delay(delay_time_in_milliseconds);
  // Show blue...
  SpinWheel.setLargeLEDsUniform(0, 0, 255);
  SpinWheel.drawFrame();
  // Wait...
  delay(delay_time_in_milliseconds);  
}
```
</div>
</div>