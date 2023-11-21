import './Profile.scss'

import RoomRoundedIcon from '@mui/icons-material/RoomRounded'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import { Posts } from '../../components'

const Profile = () => {
  return (
    <div className="profile">
      <section className="images">
        <img
          src="https://yt3.googleusercontent.com/Jv_qPbZo8iNMT9W2v6ZQRb3chJJZDFMI2MiIbd57_zJcvcBYUusmJfdN5-3rdWZ95CsbJ7Ro=s900-c-k-c0x00ffffff-no-rj"
          alt=""
          className="cover"
        />
        <img
          src="https://im.rediff.com/movies/2023/oct/30chandler1.jpg?w=670&h=900"
          alt=""
          className="profilePic"
        />
      </section>

      <section className="profileContainer">
        <div className="userProfileInfo">
          <div className="left">
            <span>logo1</span>
            <span>logo2</span>
            <span>logo3</span>
          </div>
          <div className="center">
            <span>Joey Tribbiani</span>
            <div className="info">
              <button>Follow</button>
              <div className="item">
                <RoomRoundedIcon />
                USA
              </div>
            </div>
          </div>
          <div className="right">
            <MoreHorizRoundedIcon />
          </div>
        </div>
        <Posts />
      </section>
    </div>
  )
}
export default Profile
