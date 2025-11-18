import ClockLottie from "../../../images/ClockLottie.webm";

const ClockSvg = () => {
  return (
    <div>
      <video autoPlay muted loop width="100px" height="100px">
        <source src={ClockLottie} type="video/webm"></source>
      </video>
    </div>
  );
};

export default ClockSvg;
