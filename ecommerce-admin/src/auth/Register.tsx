
import React, { useState } from 'react';
import { ShoppingBag, User, Lock, Mail, Phone, MapPin } from 'lucide-react';
const Register = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      confirmPassword: ''
    });
  
    const handleSubmit = () => {
      if (formData.password !== formData.confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
      }
      alert('Đăng ký thành công!');
      onNavigate('login');
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <ShoppingBag className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Đăng ký tài khoản</h2>
            <p className="text-gray-600 mt-2">Tạo tài khoản để bắt đầu mua sắm</p>
          </div>
  
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Họ và tên
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Nguyễn Văn A"
                />
              </div>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="email@example.com"
                />
              </div>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Số điện thoại
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="0123456789"
                />
              </div>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Địa chỉ
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Địa chỉ của bạn"
                />
              </div>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mật khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Xác nhận mật khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>
  
            <button
              onClick={handleSubmit}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-medium"
            >
              Đăng ký
            </button>
          </div>
  
          <p className="text-center text-gray-600 mt-6">
            Đã có tài khoản?{' '}
            <button
              onClick={() => onNavigate('login')}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Đăng nhập ngay
            </button>
          </p>
        </div>
      </div>
    );
  };