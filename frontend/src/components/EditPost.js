import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPostRequest } from '../actions'
import {
	Flex,
	Box,
	Heading,
	Label,
	Input,
	Textarea,
	Button,
	Group,
} from 'rebass'
import { BG_TOP } from '../utils/colors'

class EditPost extends Component {
	state = {
		postTitle: '',
		authorName: '',
		postBody: '',
	}

	onChange = event => {
		this.setState({
			[event.target.id]: event.target.value,
		})
	}

	render() {
		const { addPostRequest } = this.props
		return (
			<Flex>
				<Box w={1} p={3} bg={BG_TOP}>
					<Heading my={3} pb={3}>
						Add a post
					</Heading>
					<Group width={[1, 3 / 4, 1 / 2]}>
						{/* <Label mt={2}>Category</Label>
						 TODO: Use react-select and load in the list of categories here */}
						<Label mt={2}>Title</Label>
						<Input
							id="postTitle"
							value={this.state.postTitle}
							onChange={this.onChange}
							mt={2}
							mb={4}
							p={3}
							placeholder="This is the title of your post"
						/>
						<Label mt={2}>Your Name</Label>
						<Input
							id="authorName"
							value={this.state.authorName}
							onChange={this.onChange}
							mt={2}
							mb={4}
							p={3}
							placeholder="John Appleseed"
						/>
						<Label mt={2}>Body</Label>
						<Textarea
							id="postBody"
							value={this.state.postBody}
							onChange={this.onChange}
							mt={2}
							mb={3}
							p={3}
							rows={4}
							placeholder="Say something nice or wicked"
						/>
					</Group>
					<Button
						my={3}
						onClick={() => {
							addPostRequest({
								id: Math.random(), // TODO: UDID
								timestamp: Date.now(),
								title: this.state.postTitle,
								body: this.state.postBody,
								author: this.state.authorName,
								category: 'cryptocurrency',
								voteScore: 0,
								deleted: false,
								commentCount: 0,
							})
						}}
					>
						Add Post
					</Button>
				</Box>
			</Flex>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addPostRequest }, dispatch)
}

const mapStateToProps = ({ posts }) => {
	const postsArray = Object.keys(posts).map(key => {
		return posts[key]
	})
	return { posts: postsArray }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
