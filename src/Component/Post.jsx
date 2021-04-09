import React from 'react';
import axios from 'axios';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        // Don't do this!
        this.state ={
            posts: []
        }
       }

  componentDidMount() {
    axios.get(`http://wp.wdnexus.com/wp-json/wp/v2/posts`)
      .then(res => {
        this.setState({ 
            posts: [res, ...this.state.posts]
        });
      })
     
  }

  render() {
    return (
      <ul>{ this.state.posts.map (post => <>
        {console.log(post)}<div key={post.id}></div></>)}<br />
            
        </ul>
        )
      }
      }; 
