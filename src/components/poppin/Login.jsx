import React, { useState } from 'react';
import { X, EyeOff, Eye, ChevronLeft } from 'lucide-react';
import httpRequest from '../../axios/htttpRequest';

export default function Login({ toggleModal }) {
    const [showLoginOptions, setShowLoginOptions] = useState(true);

    const toggleLoginSection = () => {
        setShowLoginOptions(prev => !prev);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-black text-white rounded-lg w-full max-w-md p-6 relative">
                <button className="absolute top-4 right-4 text-white" onClick={() => toggleModal(false)}>
                    <X size={24} />
                </button>

                {showLoginOptions && (
                    <>
                        <h1 className="text-center text-2xl font-bold mb-6">Đăng nhập vào TikTok</h1>
                        <div className="space-y-3">
                            <button
                                onClick={toggleLoginSection}
                                className="flex items-center justify-center w-full bg-zinc-800 hover:bg-zinc-700 py-3 px-4 rounded-lg"
                            >
                                <div className="mr-3">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </div>
                                <span>Sử dụng số điện thoại/email/tên người dùng</span>
                            </button>
                        </div>
                    </>
                )}

                {!showLoginOptions && <LoginSection toggleLoginSection={toggleLoginSection} />}

                <div className="mt-6 text-xs text-gray-400 text-center">
                    <p>
                        Bằng việc tiếp tục với tài khoản có vị trí tại <span className="text-white font-medium">Việt Nam</span>, bạn đồng ý với <a href="#" className="text-white underline">Điều khoản dịch vụ</a>, đồng thời xác nhận rằng bạn đã đọc <a href="#" className="text-white underline">Chính sách quyền riêng tư</a> của chúng tôi.
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <p>Bạn không có tài khoản? <a href="#" className="text-rose-500 font-medium">Đăng ký</a></p>
                </div>
            </div>
        </div>
    );
}

const LoginSection = ({ toggleLoginSection }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({
        identifier: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await httpRequest.post("/api/auth/login",
            {
                email: credentials.identifier,
                password: credentials.password,
            }
        )

    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="bg-black text-white p-6 rounded-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-6">Đăng nhập</h1>

            <button
                onClick={toggleLoginSection}
                className="absolute top-4 left-4 text-white text-sm"
            >
                <ChevronLeft size={24} ></ChevronLeft>
            </button>

            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <input
                        type="text"
                        name="identifier"
                        value={credentials.identifier}
                        onChange={handleChange}
                        placeholder="Email hoặc TikTok ID"
                        className="w-full bg-zinc-800 text-white p-3 rounded-md focus:outline-none"
                    />

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Mật khẩu"
                            className="w-full bg-zinc-800 text-white p-3 rounded-md focus:outline-none"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <div className="text-left">
                        <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Quên mật khẩu?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-3 rounded-md transition duration-200"
                    >
                        Đăng nhập
                    </button>
                </div>
            </form>
        </div>
    );
}
