import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();

  }

  loadPosts = async () => {

    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsJson = await postsResponse.json();
    const photosJson = await photosResponse.json();
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all(
      [postsResponse, photosResponse]
    );

    this.setState({ posts: postsJson });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <div className="post">
              <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    );
  }
}

export default App;
