import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const AddCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedItems, setSelectedItems] = useState({}); // Trạng thái checkbox

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(items);
        const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(total);
    }, []);

    const handleCheckboxChange = (id) => {
        setSelectedItems((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Đảo ngược trạng thái checkbox cụ thể
        }));
    };

    const handleRemoveSelectedItems = () => {
        const updatedCartItems = cartItems.filter(item => !selectedItems[item.productId]);
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        setSelectedItems({}); // Đặt lại trạng thái checkbox
    };
    // const handleAddToCart = (productId) => {
    //     const updatedCartItems = cartItems.map(item => {
    //         if (item.productId === productId) {
    //             return {
    //                 ...item,
    //                 quantity: item.quantity + 1 // Tăng số lượng lên 1
    //             };
    //         }
    //         return item;
    //     });

    //     setCartItems(updatedCartItems);
    //     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    // };
    return (
        <div className="cart-container">
            <br></br>
            <h2 style={{ color: 'red', marginLeft: '80%' }}>Giỏ Hàng:({cartItems.length})</h2>

            {cartItems.length > 0 ? (
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Chọn</th>
                                <th>Sửa</th>
                                <th>ID</th>
                                <th>Hình Ảnh</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Số Lượng</th>
                                <th>Giá</th>
                                <th>Tổng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.productId}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={!!selectedItems[item.productId]} // Trạng thái checkbox độc lập
                                            onChange={() => handleCheckboxChange(item.productId)}
                                        />
                                    </td>
                                    <td>Edit</td>
                                    <td>{item.productId}</td>
                                    <td>
                                        <img
                                            src={`http://localhost:8080/api/public/products/image/${item.image}`}
                                            alt={item.name}
                                            style={{ width: '90px' }}
                                        />
                                    </td>
                                    <td style={{ color: 'coral' }}><h6>{item.name}</h6></td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}

                            <tr>
                                <td><input
                                    type="checkbox"
                                    checked={Object.keys(selectedItems).length === cartItems.length}
                                    onChange={() => {
                                        const allSelected = Object.keys(selectedItems).length === cartItems.length;
                                        const newSelectedItems = {};

                                        if (!allSelected) {
                                            cartItems.forEach(item => {
                                                newSelectedItems[item.productId] = true;
                                            });
                                        }

                                        setSelectedItems(newSelectedItems);
                                    }}
                                />
                                    <label style={{ color: 'red' }}><h6>Chọn tất cả</h6></label></td>
                                <td colSpan="4" className="text-right"><strong>Tổng Tiền:</strong></td>
                                <td style={{ color: 'red' }}> <h6>${totalPrice.toFixed(2)}</h6></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        onClick={handleRemoveSelectedItems}
                        className="btn btn-danger"
                        disabled={!Object.values(selectedItems).some(Boolean)} // Vô hiệu hóa nếu không có sản phẩm nào được chọn
                    >
                        Xóa Sản Phẩm Đã Chọn
                    </button>
                </>
            ) : (
                <div className="empty-cart">
                    <p>Không có sản phẩm trong giỏ hàng!</p>
                    <Link to="/Home1" className="btn btn-primary">
                        Tiếp Tục Mua Sắm
                    </Link>
                </div>
            )}
            {cartItems.length > 0 && (
                <div className="cart-actions checkout-right" style={{ marginLeft: '80%', marginTop: '-45px', marginBottom: '20px' }}>
                    <Link to="/checkout" className="btn btn-primary checkout-btn">
                        Thanh Toán
                    </Link>
                </div>
            )}
        </div>
    );
};

export default AddCart;