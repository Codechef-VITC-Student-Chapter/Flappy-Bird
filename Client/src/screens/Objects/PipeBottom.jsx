// PipeBottom component renders an image of the bottom part of a pipe obstacle
const PipeBottom = ({ pipeImg, x, height }) => {
  return (
    <img
      src={pipeImg}  // Source of the image to be used for the bottom part of the pipe
      alt="pipe"     // Alt text for the image, used for accessibility
      className="pipe"  // CSS class applied to the image for additional styling
      style={{
        position: 'absolute',  // Position the image absolutely within its container
        left: x,               // Horizontal position of the image, determined by the `x` prop
        bottom: 70,            // Vertical position of the image from the bottom of the container
        height: height,        // Height of the image, determined by the `height` prop
        // border: "2px solid black" // Optional: Uncomment to add a black border for debugging or styling purposes
      }}
      draggable={false}  // Prevents the image from being dragged
    />
  );
};

export default PipeBottom;  // Export the component for use in other parts of the application
