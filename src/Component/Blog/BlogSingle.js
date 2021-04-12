import React from "react";
import axios from "axios";
import Menu from "../../Menu";
import Footer from "../Footer/Footer";
export class BlogSingle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    var slug = this.props.match.params.slug;
    var getId = 0;
    axios.get(`http://wp.wdnexus.com/wp-json/wp/v2/posts`).then((res) => {
      var data = res.data;
      var i;
      for (i = 0; i < data.length; i++) {
        if (data[i].slug === slug) {
          this.getSingleBlog(data[i].id);
        }
      }
    });
  }

  getSingleBlog(versionID) {
    axios
      .get(`http://wp.wdnexus.com/wp-json/wp/v2/posts/${versionID}`)
      .then((res) => {
        // console.log(res);
        this.setState((currentState) => {
          return { posts: { data: res.data }, isLoaded: true };
        });
      })
      .catch((error) => {
        if (error.response) {
          var Error = error.response.status;
          console.log(error.response);
          this.setState({
            isLoaded: Error === 404 ? "404" : false,
          });
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  }

  render() {
    const getData = this.state.posts;
    return (
      <>
        <Menu />
        <section className="blog-wrapper">
          <div className="container">
            <div className="row">
              {Object.keys(getData).map((value, key) => (
                <>
                  <div key={key}>
                    <img src={getData.data.featured_image_src.full} alt="" />
                    <h2>{getData.data.title.rendered}</h2>

                    {getData.data.acf.content.map((subValue, subKey) => (
                      <>
                        <div
                          key={subKey}
                          dangerouslySetInnerHTML={{
                            __html:
                              subValue.acf_fc_layout == "single_paragraphs"
                                ? subValue.copies
                                : "",
                          }}
                        ></div>
                      </>
                    ))}
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
export default BlogSingle;
