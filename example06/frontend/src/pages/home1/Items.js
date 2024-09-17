import React, { useEffect, useState } from 'react';
import { GET_ALL } from '../../api/apiService';
import startActive from "../../assets/images/icons/stars-active.svg";
import startDisable from "../../assets/images/icons/starts-disable.svg";
import { Link } from 'react-router-dom';

const cardTextStyle = {
  maxWidth: "80%",
};
const productCardStyle = {
  margin: '23px',
};

const Items = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 10;

  // Fetch products on component mount
  useEffect(() => {
    const params = {
      pageNumber: 0,
      pageSize: 100,  // Assuming a maximum of 100 products are fetched
      sortBy: 'productId',
      sortOrder: 'asc'
    };

    GET_ALL('products', params).then(response => {
      setProducts(response.content);
      setTotalPages(Math.ceil(response.content.length / productsPerPage));
    }).catch(error => {
      console.log('Failed to fetch products:', error);
    });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  // Calculate the products to show on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <section className="padding-bottom-sm">
      <h1
        className="title-section text-uppercase"
        style={{
          textAlign: 'center',
          marginTop: '20px',
          marginBottom: '20px',
          color: 'red',
        }}
      >
        Tất Cả Sản Phẩm
      </h1>

      <div className="row row-sm">
        {currentProducts.length > 0 ? (
          currentProducts.map(row => (
            <div className="col-xl-2 col-lg-3 col-md-4 col-6" style={productCardStyle} key={row.productId}>
              <div className="card card-sm card-product-grid">
                <Link to={`/DetailProducts?productId=${row.productId}`} className="img-wrap">
                  <img
                    src={`http://localhost:8080/api/public/products/image/${row.image}`}
                    alt={row.productName}
                  />
                </Link>
                <figcaption className="info-wrap">
                  <ul className="rating-stars mb-1">
                    <li style={cardTextStyle} className="stars-active">
                      <img src={startActive} alt="" />
                    </li>
                    <li>
                      <img src={startDisable} alt="" />
                    </li>
                  </ul>
                  <div>
                    <Link to={`/DetailProducts?productId=${row.productId}`} className="title">
                      {row.productName}
                    </Link>
                  </div>
                  <div className="price h6 mt-2">${row.price}</div>
                </figcaption>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>Không có sản phẩm nào.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <nav style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <ul className="pagination">
          {renderPageNumbers()}
        </ul>
      </nav>
    </section>
  );
};

export default Items;
