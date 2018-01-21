import React from 'react'
import moment from 'moment'

const Post = ({ id, title, body, author, category, timestamp, voteScore }) => (
	<div>
		<h4>{author}</h4>
		<h5>{category}</h5>
		<p>{moment(timestamp).fromNow()}</p>
		<h3>{title}</h3>
		<p className="App-intro">{body}</p>
		<p>Votes: {voteScore}</p>
		<hr />
	</div>
)

export default Post
