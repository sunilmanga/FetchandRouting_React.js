import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {e} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = e
  return (
    <li>
      <Link to={`blogs/${id}`}>
        <div className="m">
          <div>
            <img className="im" src={imageUrl} alt={title} />
          </div>
          <h1>{title}</h1>
          <p>{author}</p>
          <img className="im" src={avatarUrl} alt={author} />
          <p>{topic}</p>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
