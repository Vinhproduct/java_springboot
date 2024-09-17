import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GET_ID } from "../../api/apiService";

const DetailPro = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get('productId');
  const navigate = useNavigate();
  const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const handleAddToCart = () => {
    const existingCartItemIndex = existingCartItems.findIndex((item) => item.productId === product.productId);
    let updatedCartItems;

    if (existingCartItemIndex !== -1) {
      updatedCartItems = existingCartItems.map((item, index) => {
        if (index === existingCartItemIndex) {
          return {
            ...item,
            quantity: item.quantity + quantity
          };
        }
        return item;
      });
    } else {
      const newCartItem = {
        productId: product.productId,
        name: product.productName,
        price: product.price,
        quantity,
        image: product.image
      };

      updatedCartItems = [...existingCartItems, newCartItem];
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 3000);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  useEffect(() => {
    if (productId) {
      GET_ID('products', productId)
        .then((response) => setProduct(response))
        .catch((error) => {
          console.error('Failed to fetch product:', error);
        });
    }
  }, [productId]);

  return (
    <section className="section-content bg-white padding-y">
      <div className="container">
        <h3 style={{ color: 'red', textAlign: "center", marginTop: "-15px", marginBottom: "2%" }}>Chi Tiết Sản Phẩm</h3>
        <div className="row">
          <aside className="col-md-6">
            <div className="card">
              <article className="gallery-wrap">
                <div className="img-big-wrap">
                  <div>
                    <a href="#">
                      <img src={`http://localhost:8080/api/public/products/image/${product?.image || 'placeholder.jpg'}`} alt={product?.name} />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </aside>
          <main className="col-md-6">
            <article className="product-info-aside">
              <h2 style={{ color: 'tomato' }}>{product?.productName}</h2>
              <div className="rating-wrap my-3">
                <ul className="rating-stars">
                  <li style={{ width: '80%' }} className="stars-active">
                    {[...Array(5)].map((_, i) => (
                      <i className="fa fa-star" key={i}></i>
                    ))}
                  </li>
                  <li>
                    {[...Array(5)].map((_, i) => (
                      <i className="fa fa-star" key={i}></i>
                    ))}
                  </li>
                </ul>
                <small className="label-rating text-muted">132 reviews</small>
                <small className="label-rating text-success">
                  <i className="fa fa-clipboard-check"></i> 154 orders
                </small>
              </div>
              <div className="mb-3">
                <var className="price h4">{`USD: ${product?.price}`}</var>
                <span className="text-muted">{`USD ${product?.priceInclVAT} incl. VAT`}</span>
              </div>
              <p>{product?.description}</p>
              <dl className="row">
                <dt className="col-sm-3">Manufacturer</dt>
                <dd className="col-sm-9"><a href="#">{product?.manufacturer}</a></dd>
                <dt className="col-sm-3">Article number</dt>
                <dd className="col-sm-9">{product?.articleNumber}</dd>
                <dt className="col-sm-3">Guarantee</dt>
                <dd className="col-sm-9">2 years</dd>
                <dt className="col-sm-3">Delivery time</dt>
                <dd className="col-sm-9">{product?.deliveryTime} days</dd>
                <dt className="col-sm-3">Availability</dt>
                <dd className="col-sm-9">In Stock</dd>
              </dl>
              <div className="form-row mt-4">
                <div className="form-group col-md flex-grow-0">
                  <div className="input-group mb-3 input-spinner">
                    <input
                      type="number"
                      className="form"
                      value={quantity}
                      onChange={handleQuantityChange}
                      min={1}
                    />
                  </div>
                </div>
                <div className="form-group col-md">
                  {isAddedToCart && (
                    <div className="alert alert-success" role="alert">
                      Sản phẩm đã được thêm vào giỏ hàng!
                    </div>
                  )}
                  <Link className="btn btn-primary" onClick={handleAddToCart}>
                    <i className="fas fa-shopping-cart"></i> <span className="text">Thêm Vào Giỏ Hàng</span>
                  </Link>
                  <a href="https://www.facebook.com/" className="btn btn-light">
                    <i className="fas fa-envelope"></i> <span className="text">Contact supplier</span>
                  </a>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </section>
  );
};

export default DetailPro;