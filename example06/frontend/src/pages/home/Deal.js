import '../../assets/styles/deal.css';
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GET_ALL, GET_ID } from "../../api/apiService";

const Deal = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null); // Chỉ giữ một đối tượng category
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get('page')) || 1;
  const categoryId = queryParams.get('categoryId');
  const numItems = 5;

  const handlePageChange = (page) => {
    navigate(`/ListingGrid?page=${page}&categoryId=${categoryId}`);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <Link
            className="page-link"
            to={`/ListingGrid?page=${i}&categoryId=${categoryId}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </Link>
        </li>
      );
    }
    return pageNumbers;
  };

  useEffect(() => {
    setLoading(true);
    const params = {
      pageNumber: currentPage,
      pageSize: numItems,
      sortBy: 'productId',
      sortOrder: 'asc',
    };

    if (categoryId) {
      GET_ALL(`categories/${categoryId}/products`, params)
        .then((response) => {
          setProducts(response.content);
          setTotalPages(response.totalPages);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Failed to fetch products:', error);
          setLoading(false);
        });

      GET_ID('categories', categoryId)
        .then((item) => setCategory(item))
        .catch((error) => {
          console.error('Failed to fetch category:', error);
        });
    } else {
      GET_ALL('products', params)
        .then((response) => {
          setProducts(response.content);
          setTotalPages(response.totalPages);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Failed to fetch products:', error);
          setLoading(false);
        });
      setCategory({ categoryName: 'Tất cả sản phẩm' });
    }
  }, [categoryId, currentPage]);

  return (
    <section className="padding-bottom">
      <div className="card card-deal">
        <div className="col-heading content-body">
          <header className="section-heading">
            <h3 className="section-title">Deals and offers</h3>
            <p>Hygiene equipments</p>
          </header>
          <div className="timer">
            <div> <span className="num">04</span> <small>Days</small></div>
            <div> <span className="num">12</span> <small>Hours</small></div>
            <div> <span className="num">58</span> <small>Min</small></div>
            <div> <span className="num">02</span> <small>Sec</small></div>
          </div>
        </div>
        <div className="row no-gutters items-wrap">
          <div className="row">
            {!loading && products.length > 0 ? (
              products.slice(0, 4).map((row) => (
                <div className="col-md-3" key={row.productId}>
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <span className="badge badge-danger">Deal</span>
                      <Link to={`/DetailProducts?productId=${row.productId}`}>
                      <img
                        src={`http://localhost:8080/api/public/products/image/${row.image}`}
                        alt={row.productName}
                      />
                      </Link>
                    </div>
                    <figcaption className="info-wrap">
                      <a href="#" className="title mb-2">
                        {row.productName}
                      </a>
                      <div className="price-wrap">
                        <span className="price">{row.specialPrice}$</span>
                      </div>
                      <p className="text-muted">{row.category?.categoryName}</p>
                      <span className="badge badge-danger">-20%</span>
                      <hr />
                      <p className="mb-3">
                        <label className="custom-control mb-3 custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                        </label>
                      </p>

                    </figcaption>
                  </figure>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>{loading ? 'Loading...' : 'Không có sản phẩm nào.'}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

  );
}
export default Deal;
