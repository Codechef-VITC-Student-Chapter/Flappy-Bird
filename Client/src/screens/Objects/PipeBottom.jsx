const PipeBottom = ({ pipeImg, x, height }) => {
  return (
    <img
      src={pipeImg}
      alt="pipe"
      className="pipe"
      style={{
        position: 'absolute',
        left: x,
        bottom: 70,
        height: height,
        //border:"2px solid black"
      }}
      draggable={false}
    />
  );
};
export default PipeBottom;
