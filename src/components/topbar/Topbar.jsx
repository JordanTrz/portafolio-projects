import "./topbar.css";
import {
  Search,
  Person,
  Chat,
  Notifications,
  ArrowDropDown,
  ExitToApp,
  HelpOutline
} from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const contextAll = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [active, setActive] = useState(false);
  const history = useHistory();

  const handleSettings = (e) => {
    setActive(!active);
  };

  const handleLogOut = (e) => {
    contextAll.dispatch({type:"LOGIN_FINISH"});
    history.push("/login");
  }

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">HiSocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Buscar amigos, publicación o fotos/videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          {/* <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span> */}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="topbarImgSettings">
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
              className="topbarImg"
            />
          </Link>
          <div className="topbarSettings">
            <div className="topbarArrow"  onClick={handleSettings}>
              <ArrowDropDown/>
            </div>
            {active && (
              <div className="topbarSettingsDetail">
                <Link to={`/profile/${user.username}`} style={{textDecoration: "none", width:"80%"}}>
                  <div className="settingsImgName">
                    <Link to={`/profile/${user.username}`}>
                      <img
                        src={
                          user.profilePicture
                            ? PF + user.profilePicture
                            : PF + "person/noAvatar.png"
                        }
                        alt=""
                        className="topbarImg"
                      />
                    </Link>
                    <div>
                      <h4>{user.username}</h4>
                      <h5>Ver tu perfil</h5>
                    </div>
                  </div>
                </Link>
                <div className="settingsLogOut">
                  <div>
                    <HelpOutline/>
                  </div>
                  <span>soporte técnico</span>
                </div>
                <div className="settingsLogOut" onClick={handleLogOut}>
                  <div>
                    <ExitToApp />
                  </div>
                  <span>Cerrar sesión</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
