const clone = require('clone')
const posts = require('./posts')

let db = {}

const defaultData = {
	'894tuq4ut84ut8v4t8wun89g': {
		id: '894tuq4ut84ut8v4t8wun89g',
		parentId: '8xf0y6ziyjabvozdd253nd',
		timestamp: 1516166872634,
		body: `Cool! I think people need to really realize that unlike many other tokens, BAT is actually already in use. Publishers are already receiving user contributions. They're seeing them in their accounts. They're being moved around and transferred. This is real utility. And this early. NOW. Adoption is also growing like crazy. Did you see the big YouTubers and sites this week, as well as the numbers Brendan just disclosed?!

    I would mention that there still will be "ad matching", except that it's all done locally with machine learning. You can achieve matching without ever exposing your personal data to third parties, which is the brilliant idea behind BAT. Plus, the matching is superior to the existing system because your browser has the full corpus of user data. It has a much richer understanding and set of data about your browsing experience and history.

    Despite the fact that your browser already has this rich data, the current system lets this go to waste since ads are delivered by external servers instead of your own browser in the status quo. Quite amazing what a shift in perspective can do.`,
		author: 'CryptoJennie',
		voteScore: 18,
		deleted: false,
		parentDeleted: false,
	},
	'7tt4bsun805n8un48ve89': {
		id: '7tt4bsun805n8un48ve89',
		parentId: '8xf0y6ziyjabvozdd253nd',
		timestamp: 1469469767190,
		body: `Me bullish

    Media agency Magna forecasts that digital media will take 44 percent, or $237 billion, of all ad money spent globally in 2018, with that figure reaching 50 percent, or $291 billion, by 2020.

    Now imagine brave taking 10% of that total i.e. $23.7 billion/1,500,000,000 BAT = $15.8 per BAT

    Brave extensions on various browsers, paying for Premium content with the BAT, subscriptions and the like, possibly gaming, being paid to view relevant adverts, you don't even have to buy BAT, you hear all the buzz about the super-fast, battery saving add blocking privacy focused wonderful brave browser or an extension in your favourite browser, and get paid in BAT and now you're in the system, you’re in crypto, you never had to buy any BAT.

    Metcalfe's law states that the value of a telecommunications network is proportional to the square of the number of connected users of the system (n2).

    I don't know how probable it is but it's possible that BAT becomes the most ubiquitous form of in browser payment. It is clear to me that the Basic Attention Token has the potential to be the most utilized of any of the cryptos given its unrivaled public exposure through socially media and the network effect this creates. The BAT and Brave platform clearly create a win win win. Everyone’s a winner baby.

    This project is Huge and as yet relatively undiscovered.

    Thankyou Brendan Eich, for you vision, and thanks to all the BAT TEAM.`,
		author: '2bunfubarah',
		voteScore: 5,
		deleted: false,
		parentDeleted: false,
	},
	'8tu4bsun805n8un48ve89': {
		id: '8tu4bsun805n8un48ve89',
		parentId: '0ng4ok6yf7781p34ldez',
		timestamp: 1469469767190,
		body: `Epic trolling`,
		author: 'bigodiel',
		voteScore: -5,
		deleted: false,
		parentDeleted: false,
	},
}

function getData(token) {
	let data = db[token]
	if (data == null) {
		data = db[token] = clone(defaultData)
	}
	return data
}

function getByParent(token, parentId) {
	return new Promise(res => {
		let comments = getData(token)
		let keys = Object.keys(comments)
		filtered_keys = keys.filter(
			key => comments[key].parentId === parentId && !comments[key].deleted
		)
		res(filtered_keys.map(key => comments[key]))
	})
}

function get(token, id) {
	return new Promise(res => {
		const comments = getData(token)
		res(comments[id].deleted || comments[id].parentDeleted ? {} : comments[id])
	})
}

function add(token, comment) {
	return new Promise(res => {
		let comments = getData(token)

		comments[comment.id] = {
			id: comment.id,
			timestamp: comment.timestamp,
			body: comment.body,
			author: comment.author,
			parentId: comment.parentId,
			voteScore: 1,
			deleted: false,
			parentDeleted: false,
		}

		posts.incrementCommentCounter(token, comment.parentId, 1)
		res(comments[comment.id])
	})
}

function vote(token, id, option) {
	return new Promise(res => {
		let comments = getData(token)
		comment = comments[id]
		switch (option) {
			case 'upVote':
				comment.voteScore = comment.voteScore + 1
				break
			case 'downVote':
				comment.voteScore = comment.voteScore - 1
				break
			default:
				console.log(`comments.vote received incorrect parameter: ${option}`)
		}
		res(comment)
	})
}

function disableByParent(token, post) {
	return new Promise(res => {
		let comments = getData(token)
		keys = Object.keys(comments)
		filtered_keys = keys.filter(key => comments[key].parentId === post.id)
		filtered_keys.forEach(key => (comments[key].parentDeleted = true))
		res(post)
	})
}

function disable(token, id) {
	return new Promise(res => {
		let comments = getData(token)
		comments[id].deleted = true
		posts.incrementCommentCounter(token, comments[id].parentId, -1)
		res(comments[id])
	})
}

function edit(token, id, comment) {
	return new Promise(res => {
		let comments = getData(token)
		for (prop in comment) {
			comments[id][prop] = comment[prop]
		}
		res(comments[id])
	})
}

module.exports = {
	get,
	getByParent,
	add,
	vote,
	disableByParent,
	disable,
	edit,
}
