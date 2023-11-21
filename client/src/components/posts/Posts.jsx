import Post from '../subComponents/Post'
import './posts.scss'

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: 'Michael Scott',
      userId: 1,
      profilePic:
        'https://miro.medium.com/v2/resize:fit:1396/1*njwXqsShWvK81ANQCMBevw.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid error et! Adipisci dignissimos sequi earum, quam sit deserunt dolores nam vero in fugiat soluta doloremque eum aperiam expedita ipsam?',
      img: 'https://images.pexels.com/photos/259239/pexels-photo-259239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 1,
      name: 'Michael Scott',
      userId: 2,
      profilePic:
        'https://miro.medium.com/v2/resize:fit:1396/1*njwXqsShWvK81ANQCMBevw.jpeg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid error et! Adipisci dignissimos sequi earum, quam sit deserunt dolores nam vero in fugiat soluta doloremque eum aperiam expedita ipsam?',
    },
  ]
  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />
      })}
    </div>
  )
}
export default Posts
