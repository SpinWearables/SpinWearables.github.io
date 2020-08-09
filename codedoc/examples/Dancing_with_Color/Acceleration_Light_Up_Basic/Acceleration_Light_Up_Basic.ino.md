<div class="flex-container"><div class="wide-text">
# Dancing with Color: Color changes based on acceleration of the device.
In this example, we will step through the code used
to make the SpinWheel change color based on the acceleration in 
the x and y direction. For more information and previous examples,
refer to the [dancing companion page](https://spinwearables.com/dancing/).
</div>
<div class="side-text">
</div>
<div class="code">
```cpp

```
</div>
<div class="side-text">
The include statement allows this code to use all the information and code in SpinWearables.h
</div>
<div class="code">
```cpp
#include "SpinWearables.h"
using namespace SpinWearables;

```
</div>
<div class="side-text">
The Setup function runs one time to make sure the SpinWheel is ready to execute the main code in the loop function
</div>
<div class="code">
```cpp
void setup() {
  // put your setup code here, to run once:
```
</div>
<div class="side-text">
This function makes sure that the LEDs are ready to be lit up
</div>
<div class="code">
```cpp
  SpinWheel.begin();
}

```
</div>
<div class="side-text">
The loop function contains the main code of this sketch, which runs repeatedly. This code makes the SpinWheel light up whenever it accelerates in the x or y direction. 
</div>
<div class="code">
```cpp
void loop() {
```
</div>
<div class="side-text">
ReadIMU first makes sure that the SpinWheel's sensor is working, and then stores the sensor's data.
</div>
<div class="code">
```cpp
  SpinWheel.readIMU();

```
</div>
<div class="side-text">
These lines initialize the variables ax and ay, acceleration in the x and y direction.
These variables are set equal to the absolute value of the acceleration read by the sensor, times 100. This ensures that ax and ay are always postiive and are on the scale of 100s, so that we can use these numbers to set the LEDs of the SpinWheel. 
</div>
<div class="code">
```cpp
  float ax = abs(SpinWheel.ax)*100;
  float ay = abs(SpinWheel.ay)*100;
```
</div>
<div class="side-text">
The setLargeLEDsUniform function sets the color of the large LEDs on the SpinWheel. The number set in ax and ay will determine the exact color the SpinWheel light up. The color of the SpinWheel will change depending on how much it is accelerating. Try moving the SpinWheel around and see how the color changes.  
</div>
<div class="code">
```cpp
  SpinWheel.setLargeLEDsUniform(ax, ay, 0);
  SpinWheel.drawFrame();
}
```
</div>
</div>