<div class="flex-container"><div class="wide-text">
# A Simple Example Sketch for the SpinWheel
Part of the [Initial Setup](https://spinwearables.com/quickstart/)
</div>
<div class="side-text">
</div>
<div class="code">
```cpp

```
</div>
<div class="side-text">
These few lines instruct the software to preload
all the extra tools we have created specifically
for the SpinWheel.
</div>
<div class="code">
```cpp
#include "SpinWearables.h"
using namespace SpinWearables;

```
</div>
<div class="side-text">
The `setup` function is executed only once,
when the SpinWheel turns on. As the name suggests,
it serves as a place where any initial functionality
can be set up. We simply instruct the SpinWheel
to begin accepting commands.
</div>
<div class="code">
```cpp
void setup() {
  SpinWheel.begin();
}

```
</div>
<div class="side-text">
The `loop` function is executed repeatedly,
as fast as possible, in a loop.
It serves as the main "logic" that drives
the behavior of the SpinWheel.
</div>
<div class="code">
```cpp
void loop() {
```
</div>
<div class="side-text">
Typically, the loop function will first
measure the current time and motion readings,
and then create colorful pattern depending on
the measurement values.
</div>
<div class="code">
```cpp
  int t = millis();
  int t_repeating = t % 2500;
  int b = triangularWave(t_repeating / 10);
```
</div>
<div class="side-text">
The colors of the LEDs are set with commands
like this one.
</div>
<div class="code">
```cpp
  SpinWheel.setLargeLEDsUniform(b, 0, b);
```
</div>
<div class="side-text">
And typically the `loop` function ends with
a call to the `drawFrame` function, which
ensures that all LEDs are on with the previously
set color.
</div>
<div class="code">
```cpp
  SpinWheel.drawFrame();
}
```
</div>
</div>