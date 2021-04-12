import React from "react";
import axios from "axios";
import Menu from "../../Menu";
import Footer from "../Footer/Footer";

export class Blog extends React.Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get(`http://wp.wdnexus.com/wp-json/wp/v2/posts`).then((res) => {
      this.setState({
        posts: res.data,
      });
    });
  }

  render() {
    const data = this.state.posts;
    return (
      <>
        <Menu />
        <section className="blog-wrapper">
          <div className="container">
            <div className="row">
              {console.log(data)}
              {data.map((value, key) => (
                <>
                  <div className="col-md-4" key={key}>
                    <div className="mt-5">
                      <img src={value.featured_image_src.full} alt="" />
                      <a href={"/blog/" + value.slug}>{value.title.rendered}</a>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
