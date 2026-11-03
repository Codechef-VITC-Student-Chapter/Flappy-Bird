const Pipe = ({x,height,pipeWidth,pipeImg}) => {
    return (
      <img
        src={pipeImg}
        alt="pipe"
        className="pipe"
        style={{
          position: "absolute",
          left: x,
          top: -70,
          height: height,
          width: pipeWidth,
          //border:"2px solid black",
          transform: "rotate(180deg)",
        }}
        draggable={false}
      />
    );
  };
export default Pipe;