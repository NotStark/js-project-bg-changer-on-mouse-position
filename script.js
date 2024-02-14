// Selecting the rectangle element from the DOM
const rect = document.querySelector(".rect");

// Adding a mousemove event listener to track mouse movement over the rectangle
rect.addEventListener("mousemove", (details) => {
  // details - contains information about the mouse event, such as mouse position

  // Getting the position of the rectangle element relative to the viewport
  const rectPosition = rect.getBoundingClientRect();

  // Calculating the horizontal position of the mouse relative to the left edge of the rectangle
  const xMousePosition = details.clientX - rectPosition.left;

  // Initializing the background color variable
  let bgColor;

  // Checking if the mouse is on the left or right side of the rectangle
  if (xMousePosition < rectPosition.width / 2) {
    // If the mouse is on the left side of the rectangle

    // Mapping the xMousePosition value to a range from 0 to 255 to determine the red color intensity
    let op = gsap.utils.mapRange(
      0,
      rectPosition.width / 2,
      0,
      255,
      xMousePosition
    );

    // Setting the background color to a shade of red based on the mouse position
    bgColor = `rgb(${op}, 0, 0)`;
  } else {
    // If the mouse is on the right side of the rectangle

    // Mapping the xMousePosition value to a range from 0 to 255 to determine the blue color intensity
    let op = gsap.utils.mapRange(
      rectPosition.width / 2,
      rectPosition.width,
      0,
      255,
      xMousePosition
    );

    // Setting the background color to a shade of blue based on the mouse position
    bgColor = `rgb(0, 0, ${op})`;
  }

  // Using GSAP animation library to change the backgroundColor of the rectangle smoothly
  gsap.to(rect, {
    backgroundColor: bgColor,
    ease: Power4,
  });
});

// Adding a mouseleave event listener to revert the background color to transparent when the mouse leaves the rectangle area
rect.addEventListener("mouseleave", () => {
  gsap.to(rect, { backgroundColor: "transparent" });
});
