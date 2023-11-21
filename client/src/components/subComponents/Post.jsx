import './post.scss'

import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import ChatRoundedIcon from '@mui/icons-material/ChatRounded'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import { Link } from 'react-router-dom'
import Comments from '../comments/Comments'
import { useState } from 'react'

const Post = ({ post }) => {
  const { id, name, userId, profilePic, desc, img } = post

  const [commentOpen, setCommentOpen] = useState(false)

  const liked = false

  return (
    <div className="post">
      <section className="container">
        <section className="user">
          <div className="userInfo">
            <img src={profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${userId}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="name">{name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizRoundedIcon />
        </section>
        <section className="content">
          <p>{desc}</p>
          <img src={img} alt="" />
        </section>
        <section className="info">
          <div className="item">
            {liked ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
            12 Likes
          </div>
          <div className="item cmnts" onClick={() => setCommentOpen(!commentOpen)}>
            <ChatRoundedIcon />
            14 comments
          </div>
          <div className="item">
            <SendRoundedIcon />
            Share
          </div>
        </section>
        {commentOpen && <Comments />}
      </section>
    </div>
  )
}
export default Post
