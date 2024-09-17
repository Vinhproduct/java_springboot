import React, { useState } from "react";
import { REGISTER } from "../../api/apiService";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState(""); // Thêm state cho số điện thoại
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            window.alert("Passwords do not match!");
            return;
        }

        const body = {
            email,
            password,
            mobileNumber, // Bổ sung số điện thoại vào body
        };

        try {
            const response = await REGISTER(body);
            if (response && response.data) {
                window.alert("Registration successful!");
                navigate("/login");
            } else {
                window.alert("Registration response is missing data");
            }
        } catch (error) {
            window.alert("Registration failed: " + error.message);
        }
    };

    return (
        <section className="section-content padding-y" style={{ minHeight: "84vh" }}>
            {/*= COMPONENT REGISTER---------------------*/}
            <div className="card mx-auto" style={{ maxWidth: "380px", marginTop: "100px" }}>
                <div className="card-body">
                    <h4 className="card-title mb-4">Sign up</h4>
                    <form onSubmit={handleSubmit}>
                        {/* Form fields */}
                        <div className="form-group">
                            <input
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Confirm Password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="mobileNumber"
                                className="form-control"
                                placeholder="Mobile Number"
                                type="text"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">
                                Đăng Ký Tài Khoản
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <p className="text-center mt-4">
              <a href="/login">Trở Lại Đăng Nhập</a>
            </p>
            <br/>
            <br/>
            {/*====================== COMPONENT REGISTER END.//==================== */}
        </section>
    );
};

export default Register;