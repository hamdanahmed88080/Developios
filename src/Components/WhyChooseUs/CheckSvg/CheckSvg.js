import CheckLottie from "../../../images/CheckLottie.webm";

const CheckSvg = () => {
  return (
    <div>
      <video autoPlay muted loop width="100px" height="100px">
        <source src={CheckLottie} type="video/webm"></source>
      </video>
    </div>
  );
};

export default CheckSvg;
