const Pipe = ({ x, height, pipeWidth, pipeImg }) => {
  return (
    <img
      src={pipeImg}
      alt="pipe"
      className="pipe"
      style={{
        position: 'absolute',
        left: x,
        top: -5,
        width: pipeWidth,
        //border:"2px solid black",
        transform: 'rotate(180deg)',
      }}
      draggable={false}
    />
  );
};
export default Pipe;
