import {Component} from 'react'

export default class BlogItemDetails extends Component {
  state = {bb: {}}

  componentDidMount() {
    this.se()
  }

  se = async () => {
    const {match} = this.props
    const {params} = match

    const {id} = params
    const a = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const b = await a.json()
    const c = {
      id: b.id,
      imageUrl: b.image_url,
      topic: b.topic,
      title: b.title,
      avatarUrl: b.avatar_url,
      author: b.author,
    }
    this.setState({bb: c})
  }

  render() {
    const {bb} = this.state
    console.log(bb)
    return (
      <div>
        <img src={bb.imageUrl} alt="ava" />
        <h1>{bb.title}</h1>
        <p>{bb.topic}</p>
      </div>
    )
  }
}
