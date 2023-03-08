import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

export default class BlogList extends Component {
  state = {blog: [], t: true}

  componentDidMount() {
    this.fun()
  }

  fun = async () => {
    const a = await fetch('https://apis.ccbp.in/blogs')
    const b = await a.json()
    const c = b.map(ee => ({
      id: ee.id,
      title: ee.title,
      author: ee.author,
      imageUrl: ee.image_url,
      avatarUrl: ee.avatar_url,
    }))
    this.setState({blog: c, t: false})
  }

  render() {
    const {blog, t} = this.state
    return (
      <div>
        <ul>
          {t ? (
            <div data-testid="loder">
              <Loader type="TailSpin" />
            </div>
          ) : (
            blog.map(e => <BlogItem e={e} key={e.id} />)
          )}
        </ul>
      </div>
    )
  }
}
