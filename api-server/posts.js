const clone = require('clone')

let db = {}

const defaultData = {
	'8xf0y6ziyjabvozdd253nd': {
		id: '8xf0y6ziyjabvozdd253nd',
		timestamp: 1467166872634,
		title: 'Why I’m bullish on BAT and the Brave Browser in 2018',
		body:
			'The Basic Attention Token ($BAT) is the first coin I’ve found that I truly believe provides value, and this article explains why I’m bullish on BAT in 2018.',
		author: 'UA6RBP',
		category: 'altcoins',
		voteScore: 6,
		deleted: false,
		commentCount: 2,
	},
	'6ni6ok3ym7mf1p33lnez': {
		id: '6ni6ok3ym7mf1p33lnez',
		timestamp: 1468479767190,
		title: 'Adding to portfolio, what are your top picks?',
		body:
			'I’m already invested in crypto as it is but I seem to have acquired a small fortune of $4000 recently and I have decided to add it to my portfolio. I basically want to gain some insight on coins I don’t have and coins that people think have potential, with good reasoning that is. as of right now I own raiblocks, vechain, stellar, ripple, iota, req, quantstamp, agrello, dragon, and cardano. here are some of my contenders to split the cash amongst: more vechain, ark, kyber, and icon. what are your picks?',
		author: 'callmerudolph',
		category: 'cryptomarkets',
		voteScore: -5,
		deleted: false,
		commentCount: 0,
	},
}

function getData (token) {
  let data = db[token]
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getByCategory (token, category) {
  return new Promise((res) => {
    let posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => posts[key].category === category && !posts[key].deleted)
    res(filtered_keys.map(key => posts[key]))
  })
}

function get (token, id) {
  return new Promise((res) => {
    const posts = getData(token)
    res(
      posts[id].deleted
        ? {}
        : posts[id]
    )
  })
}

function getAll (token) {
  return new Promise((res) => {
    const posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => !posts[key].deleted)
    res(filtered_keys.map(key => posts[key]))
  })
}

function add (token, post) {
  return new Promise((res) => {
    let posts = getData(token)

    posts[post.id] = {
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      voteScore: 1,
      deleted: false,
      commentCount: 0
    }

    res(posts[post.id])
  })
}

function vote (token, id, option) {
  return new Promise((res) => {
    let posts = getData(token)
    post = posts[id]
    switch(option) {
        case "upVote":
            post.voteScore = post.voteScore + 1
            break
        case "downVote":
            post.voteScore = post.voteScore - 1
            break
        default:
            console.log(`posts.vote received incorrect parameter: ${option}`)
    }
    res(post)
  })
}

function disable (token, id) {
    return new Promise((res) => {
      let posts = getData(token)
      posts[id].deleted = true
      res(posts[id])
    })
}

function edit (token, id, post) {
    return new Promise((res) => {
        let posts = getData(token)
        for (prop in post) {
            posts[id][prop] = post[prop]
        }
        res(posts[id])
    })
}

function incrementCommentCounter(token, id, count) {
  const data = getData(token)
  if (data[id]) {
    data[id].commentCount += count
  }
}

module.exports = {
  get,
  getAll,
  getByCategory,
  add,
  vote,
  disable,
  edit,
  getAll,
  incrementCommentCounter
}
