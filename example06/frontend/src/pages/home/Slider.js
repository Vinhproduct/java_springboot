import React, { useEffect, useState } from "react";
import { GET_ALL } from "../../api/apiService";
import { Link } from "react-router-dom";

function Slider() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const params = {
      pageNumber: 0,
      pageSize: 5,
      sortBy: 'categoryId',
      sortOrder: 'asc',
    };
    GET_ALL('categories', params) // Pass the query parameters here
      .then(response => {
        // Assuming the response structure has the data inside 'data'
        setCategories(response.content); // Update the state with the fetched data
        console.log("response", response.content);
      })
      .catch(error => {
        console.error('Failed to fetch categories:', error); // Handle any errors
      });
  }, []);
  return (
    <section className="section-main padding-y">
      <main className="card">
        <div className="card-body">
          <div className="row">
            <aside className="col-lg col-md-3 flex-lg-grow-0">
              <nav className="nav-home-aside">
                <h6 className="title-category">DANH MỤC SẢN PHẨM <i className="d-md-none icon fa fa-chevron-down"></i></h6>
                <ul className="menu-category">
                  {categories.length > 0 ? (
                    categories.map(category => (
                      <li key={category.categoryId} className="nav-item">
                        <Link
                          className="nav-link"
                          to={`/ListingGrid?categoryId=${category.categoryId}`}
                        >
                          {category.categoryName}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="nav-item">
                      <span className="nav-link">Không có danh mục</span>
                    </li>

                  )}

                  {/* <li className="has-submenu"><a href="#">More items</a>
                  <ul className="submenu">
                    <li><a href="#">Submenu name</a></li>
                    <li><a href="#">Great submenu</a></li>
                    <li><a href="#">Another menu</a></li>
                    <li><a href="#">Some others</a></li>
                  </ul>
                </li> */}
                  <li class="nav-item">
                    <Link
                      className="nav-link"
                      to={'/Home1'}>
                      Tất Cả Sản phẩm
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>
            <div className="col-md-9 col-xl-7 col-lg-7">
              {/* Slider Component */}
              <div id="carousel1_indicator" className="slider-home-banner carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel1_indicator" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel1_indicator" data-slide-to="1"></li>
                  <li data-target="#carousel1_indicator" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={require("../../assets/images/banners/slide1.jpg")} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img src={require("../../assets/images/banners/slide2.jpg")} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img src={require("../../assets/images/banners/slide3.jpg")} alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-md d-none d-lg-block flex-grow-1">
              <aside className="special-home-right">
                <h6 className="bg-blue text-center text-white mb-0 p-2">Popular category</h6>
                <div className="card-banner border-bottom">
                  <div className="py-3" style={{ width: '80%' }}>
                    <h6 className="card-title">Men clothing</h6>
                    <a href="#" className="btn btn-secondary btn-sm">Source now</a>
                  </div>
                  <img src={require("../../assets/images/items/1.jpg")} height="80" className="img-bg" />
                </div>
                <div className="card-banner border-bottom">
                  <div className="py-3" style={{ width: '80%' }}>
                    <h6 className="card-title">Winter clothing</h6>
                    <a href="#" className="btn btn-secondary btn-sm">Source now</a>
                  </div>
                  <img src={require("../../assets/images/items/2.jpg")} height="80" className="img-bg" />
                </div>
                <div className="card-banner border-bottom">
                  <div className="py-3" style={{ width: '80%' }}>
                    <h6 className="card-title">Home inventory</h6>
                    <a href="#" className="btn btn-secondary btn-sm">Source now</a>
                  </div>
                  <img src={require("../../assets/images/items/6.jpg")} height="80" className="img-bg" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
export default Slider;
