import React, { useEffect, useState } from "react";
import { GET_ALL } from "../../api/apiService";
import startsActive from "../../assets/images/icons/stars-active.svg";
import startsDisable from "../../assets/images/icons/starts-disable.svg";
import { Link } from "react-router-dom";

const cardTextStyle = {
    maxWidth: "80%",
};
const Section1 = (category) => {
    const { categoryName, categoryId } = category;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const params = {
            pageNumber: 0,
            pageSize: 5,
            sortBy: 'productId',
            sortOrder: 'asc',
        };
        GET_ALL(`categories/${categoryId}/products`, params)
            .then(response => {

                console.log("response", response.content);
                setProducts(response.content); // Set the products state
            })
            .catch(error => {
                console.error('Failed to fetch products:', error); // Handle errors
            });
    }, [categoryId]);

    return (
        <section class="padding-bottom">
            <header class="section-heading mb-4">
                <h3 class="title-section">{categoryName}</h3>
            </header>
            <div class="row">
                {products.length > 0 &&
                    products.map((row) => (
                        <div class="col-x1-3 col-1g-3 col-md-4 col-6" key={row.id}>
                            <div class="card card-product-grid">
                                <Link to={`/Detail?productId=${row.id}`} class="img-wrap">
                                    <img src={`http://localhost:8080/api/public/products/image/${row.image}`} />{" "}
                                </Link>
                                <figcaption class="info-wrap">
                                    <ul class="rating-stars mb-1">
                                        <li style={{ cardTextStyle }} class="stars-active">
                                            <img src={startsActive} alt="" />
                                        </li>
                                        <li>
                                            <img src={startsDisable} alt="" />
                                        </li>
                                    </ul>
                                    <div>
                                        <Link to={`/Detail?productId=${row.id}`} class="title">
                                            {row.productName}
                                        </Link>
                                    </div>
                                    <div class="price h5 mt-2">${row.price}</div>
                                </figcaption>
                            </div>
                        </div>
                    ))}
            </div>
        </section>

    );
};
export default Section1;