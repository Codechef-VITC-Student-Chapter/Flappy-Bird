const PipeBottom = ({ pipeImg, x, height, pipeWidth }) => {
  return (
    <img
      src={pipeImg}
      alt="pipe"
      className="pipe"
      style={{
        position: 'absolute',
        left: x,
        bottom: 70,
        width: pipeWidth,
        //border:"2px solid black"
      }}
      draggable={false}
    />
  );
};
export default PipeBottom;
