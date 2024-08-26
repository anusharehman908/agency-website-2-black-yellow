

import React from 'react';
import '../../Style/Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Post One',
      description: 'This is the first blog post.',
      image: 'https://th.bing.com/th/id/R.fe5eb9e42a3c8918cd9d6091dc6d97ed?rik=%2fDqB1S%2fUhwillg&pid=ImgRaw&r=0'
    },
    {
      id: 2,
      title: 'Post Two',
      description: 'This is the second blog post.',
      image: 'https://th.bing.com/th/id/OIP.LepJh2tzQmb1g7RxFS6CegHaE8?rs=1&pid=ImgDetMain'
    },
    {
      id: 3,
      title: 'Post Three',
      description: 'This is the third blog post.',
      image: 'https://live.staticflickr.com/5033/14352466952_cce19d9eb9.jpg'
    }
  ];

  return (
    <div className='a' id="portfolio">
      <h1>Blog</h1>
   
    <div className="blog-container">
      {blogPosts.map(post => (
        <div key={post.id} className="blog-card">
          <div className="blog-image">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-content">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        </div>
        
      ))}
    </div>
    </div>
  );
};

export default Blog;
