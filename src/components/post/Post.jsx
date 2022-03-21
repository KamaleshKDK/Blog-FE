import './Post.css';
import { Link } from 'react-router-dom';

function Post({ post }) {
  const PF = "http://localhost:5000/images/"
  return (
    <>
      {/* <main class="my-5">
        <div class="container">
          <section class="text-center">
            <h4 class="mb-5"><strong>Latest posts</strong></h4>
            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4">
                <div class="card">
                  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" class="img-fluid" />
                    <a href="#!">
                      <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15);" }}></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Post title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Read</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main> */}


        <section class="text-center">
          <div className="col-lg-4 col-md-12 mb-6 card post">
            {post.photo && <Link to={`/post/${post._id}`} className="link"> <img className="postImg" src={PF + post.photo} alt="" /> </Link>}
            <div className="postInfo">
              <div className="postCats">
                {post.categories.map((c) => (
                  <span className="postCat">{c.name}</span>
                ))}
              </div>
              <Link to={`/post/${post._id}`} className="link">
                <span className="postTitle">{post.title}</span>
              </Link>

              <span className="postDate">
                {new Date(post.createdAt).toDateString()}
              </span>
            </div>
            <p className="postDesc">{post.desc}</p>
          </div>
        </section>
    
    </>
  )
}

export default Post