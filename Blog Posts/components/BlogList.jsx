import React, { useState } from 'react';
import BlogPost from './Post';
const blogPosts = [
{
    title:'Truth About World',
    content:"In this world, wherever there is light, there are always shadows. As long as there is a concept of victors, the vanquished will also exist. The selfish desire for peace gives rise to war. And hatred is born in order to protect love.",
    author:'Mahesh'
},
{
    title:'Life',
    content:'If you don’t like the hand that fate’s dealt you with, fight for a new one.',
    author:'Ajay',
},
{
    title:'Perfrction',
    content:'I hate perfection. To be perfect is to be unable to improve any further.',
    author:'Kelvin'
},
{
    title:'Truth',
    content:'Hurt me with the truth. But never comfort me with a lie.',
    author:'Monish'
}
];
function BlogList() {
    const [selectedPost, setSelectedPost] = useState(null);
    const handlePostClick = (index) => {
        setSelectedPost(blogPosts[index]);
    };
    return (
    <div>
        <h1>Blog Posts</h1>
        <ul>
            {blogPosts.map((post, index) => (
            <li key={index} onClick={() => handlePostClick(index)}>
                <div className='button'>
                <button>{post.title}</button> 
                </div>
            </li>
            ))}
        </ul>
        {selectedPost && (
        <BlogPost
        title={selectedPost.title}
        content={`${selectedPost.content} `}
        author={selectedPost.author}
        />)}
    </div>
    );
}
export default BlogList;