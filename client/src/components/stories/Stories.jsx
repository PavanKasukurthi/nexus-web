import { useAuthContext, AuthContext } from '../../context/authContext'
import './stories.scss'

const Stories = () => {
  const { currentUser } = useAuthContext({ AuthContext })

  const stories = [
    {
      id: 1,
      name: 'Michael Scott',
      img: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Michael Scott',
      img: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Michael Scott',
      img: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'Michael Scott',
      img: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]
  return (
    <div className="stories">
      <div className="story ">
        <img
          src={currentUser.profilePic}
          alt={currentUser.name}
          className="self"
        />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        )
      })}
    </div>
  )
}
export default Stories
