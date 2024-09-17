import React, { useEffect, useState } from "react";
import { GET_ALL } from "../api/apiService";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

function Header() {
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
        <header className="section-header">
            <section className="header-main border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-3 col-md-12">
                            <Link to="/Home" className="brand-wrap">
                                <img className="logo" src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="col-xl-6 col-lg-5 col-md-6">
                            <form action="#" className="search-header">
                                <div className="input-group w-100">
                                    <select className="custom-select border-right" name="category_name">
                                        <option value="">All type</option>
                                        <option value="codex">Special</option>
                                        <option value="comments">Only best</option>
                                        <option value="content">Latest</option>
                                    </select>
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="submit">
                                            <i className="fa fa-search"></i> Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="widgets-wrap float-md-right">
                                <div className="widget-header mr-3">
                                    <a href="/Login" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-user"></i>
                                            <span className="notify">3</span>
                                        </div>
                                        <small className="text">Đăng Nhập</small>
                                    </a>
                                </div>
                                <div className="widget-header mr-3">
                                    <a href="#" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-comment-dots"></i>
                                            <span className="notify">1</span>
                                        </div>
                                        <small className="text">Message</small>
                                    </a>
                                </div>
                                <div className="widget-header mr-3">
                                    <a href="#" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-store"></i>
                                        </div>
                                        <small className="text">Orders</small>
                                    </a>
                                </div>
                                <div className="widget-header">
                                    <Link to="/AddProductCart" className="widget-view">
                                        <div className="icon-area">
                                            
                                            <i className="fa fa-shopping-cart"></i>
                                        </div>
                                        <small className="text">Cart</small>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <nav className="navbar navbar-main navbar-expand-lg border-bottom">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#main_nav"
                        aria-controls="main_nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i className="fa fa-bars text-muted mr-2"></i> All pages
                                </a>
                                <div className="dropdown-menu dropdown-large">
                                    <nav className="row">
                                        <div className="col-6">
                                            <a href="home">Home page </a>
                                            <a href="home1">Home page 1</a>
                                            <a href="page-category.html">All category</a>
                                            <a href="listinggird">Listing list</a>
                                            <a href="listingrid">Listing grid</a>
                                            <a href="page-shopping-cart.html">Shopping cart</a>
                                            <a href="page-detail-product.html">Product detail</a>
                                            <a href="page-content.html">Page content</a>
                                            <a href="login">Page login</a>
                                            <a href="register">Page register</a>
                                        </div>
                                        <div className="col-6">
                                            <a href="page-profile-main.html">Profile main</a>
                                            <a href="page-profile-orders.html">Profile orders</a>
                                            <a href="page-profile-seller.html">Profile seller</a>
                                            <a href="page-profile-wishlist.html">Profile wishlist</a>
                                            <a href="page-profile-setting.html">Profile setting</a>
                                            <a href="page-profile-address.html">Profile address</a>
                                            <a href="rtl-page-index-1.html">RTL home page</a>
                                            <a href="page-components.html" target="_blank">More components</a>
                                        </div>
                                    </nav>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Home">
                                    Home
                                </Link>

                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    List Category
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
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
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/Home1">
                                        All Products
                                    </a>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Ready to ship
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Trade shows
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Home1">
                                    Tất Cả Sản Phẩm
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-md-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Get the app
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com" data-toggle="dropdown">
                                    English
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">
                                        Russian
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        French
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Spanish
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Chinese
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>

    );
}
export default Header;