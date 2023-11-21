import './comments.scss'

import { useAuthContext, AuthContext } from '../../context/authContext'

const Comments = () => {
  const { currentUser } = useAuthContext({ AuthContext })

  const comments = [
    {
      id: 1,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam sint deleniti? Delectus atque quaerat quae distinctio blanditiis odit nam quisquam. Ex id recusandae delectus aliquid, ad adipisci autem quis.',
      name: 'Jim Halpert',
      userId: 1,
      profilePic:
        'https://media.licdn.com/dms/image/C4D03AQGI_44TpUUmtQ/profile-displayphoto-shrink_400_400/0/1609428595199?e=2147483647&v=beta&t=qEda4maYBwcYQeoAaHOa8JOte8zPdIL7fkV5_nPWRnM',
    },
    {
      id: 2,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam sint deleniti? Delectus atque quaerat quae distinctio blanditiis odit nam quisquam. Ex id recusandae delectus aliquid, ad adipisci autem quis.',
      name: 'Jim Halpert',
      userId: 2,
      profilePic:
        'https://media.licdn.com/dms/image/C4D03AQGI_44TpUUmtQ/profile-displayphoto-shrink_400_400/0/1609428595199?e=2147483647&v=beta&t=qEda4maYBwcYQeoAaHOa8JOte8zPdIL7fkV5_nPWRnM',
    },
  ]
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt={currentUser.name} />
        <div className="text">
          <input type="text" placeholder="Write a comment" />
          <button>send</button>
        </div>
      </div>
      {comments.map((comment) => {
        const { desc, name, profilePic } = comment
        return (
          <div className="comment">
            <img src={profilePic} alt={name} />
            <div className="info">
              <span>{name}</span>
              <p>{desc}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        )
      })}
    </div>
  )
}
export default Comments
