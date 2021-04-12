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
            posts: res.data
        });
      })
     
  }

  render() {
    const data = this.state.posts;
    return (
      <ul>{ data.map((value,key) => <>
        <div key={value.ID}>
        <img src={value.featured_image_src.full} alt="" />
        <h2>{value.title.rendered}</h2>

        { value.acf.content.map((subValue,subKey) => <> 
          <div key={subKey} dangerouslySetInnerHTML={{__html: subValue.acf_fc_layout == 'single_paragraphs' ? subValue.copies : ''}}></div>
        </> 
        )}
        </div>
        </>)}<br />
        </ul>
        )
      }
}; 
        
