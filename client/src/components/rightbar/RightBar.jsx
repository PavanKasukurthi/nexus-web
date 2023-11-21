import './rightBar.scss'

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span className="suggestions">Suggestions for you</span>

          <section className="user">
            <div className="userInfo">
              <img
                src="https://im.rediff.com/movies/2023/oct/30chandler1.jpg?w=670&h=900"
                alt=""
              />
              <span>Jim Halpert</span>
            </div>

            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </section>

          <section className="user">
            <div className="userInfo">
              <img
                src="https://im.rediff.com/movies/2023/oct/30chandler1.jpg?w=670&h=900"
                alt=""
              />
              <span>Jim Halpert</span>
            </div>

            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </section>
        </div>

        <div className="item activities">
          <span>Latest Activites</span>

          <section className="user">
            <div className="userInfo">
              <img
                src="https://im.rediff.com/movies/2023/oct/30chandler1.jpg?w=670&h=900"
                alt=""
              />
              <p className="activity">
                <span class="user-name">Jim Halpert</span> &nbsp;
                <span>uploaded a new post</span>
              </p>
            </div>

            <span>1 min ago</span>
          </section>
        </div>

        <div className="item">
          <span>Online Friends</span>

          <section className="user">
            <div className="userInfo">
              <img
                src="https://im.rediff.com/movies/2023/oct/30chandler1.jpg?w=670&h=900"
                alt=""
              />
              <div className="online" />
              <span class="user-name">Jim Halpert</span>
            </div>
          </section>
          <section className="user">
            <div className="userInfo">
              <img
                src="https://im.rediff.com/movies/2023/oct/30chandler1.jpg?w=670&h=900"
                alt=""
              />
              <div className="online" />
              <span class="user-name">Jim Halpert</span>
            </div>
          </section>
          <section className="user">
            <div className="userInfo">
              <img
                src="https://im.rediff.com/movies/2023/oct/30chandler1.jpg?w=670&h=900"
                alt=""
              />
              <div className="online" />
              <span class="user-name">Jim Halpert</span>
            </div>
          </section>
          <section className="user">
            <div className="userInfo">
              <img
                src="https://im.rediff.com/movies/2023/oct/30chandler1.jpg?w=670&h=900"
                alt=""
              />
              <div className="online" />
              <span class="user-name">Jim Halpert</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
export default RightBar
