import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import videoPrueba from "../../static/Bootcamp Desarrollo web - G11 - FrontEnd - Sebastian Yabiku-20211202 0035-1.mp4"

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={videoPrueba}
      />
    </div>
  );
};

export default Watch;
