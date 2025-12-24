
import React, { useState } from 'react';
import { ShoppingBag, User, Lock, Mail, Phone, MapPin } from 'lucide-react';
const Login = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const handleSubmit = () => {
      alert('Đăng nhập thành công!');
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <ShoppingBag className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Đăng nhập</h2>
            <p className="text-gray-600 mt-2">Chào mừng bạn quay trở lại</p>
          </div>
  
          <div className="space-y-5">
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
  
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
                <span className="ml-2 text-sm text-gray-600">Ghi nhớ đăng nhập</span>
              </label>
              <button type="button" className="text-sm text-purple-600 hover:text-purple-700">
                Quên mật khẩu?
              </button>
            </div>
  
            <button
              onClick={handleSubmit}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-medium"
            >
              Đăng nhập
            </button>
          </div>
  
          <p className="text-center text-gray-600 mt-6">
            Chưa có tài khoản?{' '}
            <button
              onClick={() => onNavigate('register')}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Đăng ký ngay
            </button>
          </p>
        </div>
      </div>
    );
  };