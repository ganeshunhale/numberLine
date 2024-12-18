
# Interactive Number Line

## Description
This project implements an interactive number line using **p5.js**. Users can drag a point along the number line and snap it to the nearest integer when released. The nearest integer value is displayed above the line. A reset button allows users to reset the point to zero.

## Features
- A number line from -10 to +10 with integer labels and tick marks.
- Draggable point that snaps to the nearest integer.
- Display of the snapped integer value.
- Reset button to bring the point back to 0.

## How to Use
1. Open `index.html` in any modern browser.
2. Drag the blue point along the number line.
3. Release the mouse to snap the point to the nearest integer.
4. Click the "Reset" button to reset the point to 0.

## Code Explanation
### `index.html`
- Sets up the basic structure and imports the **p5.js** library.
- Includes a reset button for resetting the point.

### `sketch.js`
- Draws the number line with ticks and labels.
- Implements the draggable point with snapping functionality.
- Handles user interactions like dragging and resetting.

## Dependencies
- [p5.js](https://p5js.org/): A JavaScript library for creative coding.

## Credits
Designed and implemented by [Ganesh].
