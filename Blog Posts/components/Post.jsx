import React from 'react';
function PostAuthor({ author }) {
    return <p>Author: {author}</p>; 
}
function PostContent({ content }) {
    return <p>{content}</p>;
}
function PostTitle({ title }) {
    return <h2>{title}</h2>;
}
function BlogPost({ title, content, author }) {
    return (
    <div className="blog-post">
        <PostTitle title={title} />
        <PostContent content={content} />
        <PostAuthor author={author} />
    </div>
    );
}
export default BlogPost;