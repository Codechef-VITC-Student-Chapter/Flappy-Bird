// Pipe component renders an image of a pipe that represents an obstacle in the game
const Pipe = ({ x, height, pipeImg }) => {
  return (
    <img
      src={pipeImg}  // Source of the image to be used for the pipe
      alt="pipe"     // Alt text for the image, used for accessibility
      className="pipe"  // CSS class applied to the image for additional styling
      style={{
        position: 'absolute',  // Position the image absolutely within its container
        left: x,               // Horizontal position of the pipe, determined by the `x` prop
        top: -5,               // Vertical position of the pipe, adjusted by a small amount (-5) for alignment
        height: height,        // Height of the pipe, determined by the `height` prop
        transform: 'rotate(180deg)',  // Rotate the pipe 180 degrees to display the pipe upside down
      }}
      draggable={false}  // Prevents the image from being dragged
    />
  );
};

export default Pipe;  // Export the component for use in other parts of the application
