<div class="flex-container"><div class="code">
```cpp
#include "SpinWearables.h"
using namespace SpinWearables;

void setup() {
  SpinWheel.begin();
  Serial.begin(9600);

}

```
</div>
<div class="side-text">
Variable to specify which LED to light up.
</div>
<div class="code">
```cpp
int which_LED = 0; 

void loop() {
  // Light up the specified LED.
  SpinWheel.setLargeLED(which_LED, 255, 0, 0); 
  SpinWheel.drawFrame();
  // Use serial to monitor the value of which_LED.
  Serial.println(which_LED);
  // Add in a delay to make the LEDs change at a reasonable speed.
  delay(500);
  // Increase the value of which_LED by 1.
  which_LED = which_LED + 1; 
}
```
</div>
</div>