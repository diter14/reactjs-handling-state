import React from 'react'
import useFetch from './../Hooks/useFetch'

const Placeholder = () => {

    const posts = useFetch('https://jsonplaceholder.typicode.com/posts')
    const comments = useFetch('https://jsonplaceholder.typicode.com/comments')

    return (
        <div className="ed-grid m-grid-2">
            { posts.loading && <p>Loading Posts</p> }
            { comments.loading && <p>Loading Comments</p> }
            <ul>
                <li><h2>Posts</h2></li>
                { posts.data && posts.data.map(post => <li key={post.id}>{post.body}</li>) }
            </ul>
            <ul>
                <li><h2>Comments</h2></li>
                { comments.data && comments.data.map(comment => <li key={comment.id}>{comment.body}</li>) }
            </ul>
        </div>
    )
}

export default Placeholder