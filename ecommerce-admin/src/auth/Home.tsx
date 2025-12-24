import React, { useState } from 'react';
import { ShoppingBag, User, Lock, Mail, Phone, MapPin } from 'lucide-react';
const Home = ({ onNavigate }) => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-800">Fashion Shop</h1>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => onNavigate('login')}
                className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition"
              >
                Đăng nhập
              </button>
              <button
                onClick={() => onNavigate('register')}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-md"
              >
                Đăng ký
              </button>
            </div>
          </div>
        </header>
  
        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Thời Trang Hiện Đại
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Khám phá bộ sưu tập quần áo mới nhất dành cho bạn
            </p>
            <button
              onClick={() => onNavigate('register')}
              className="px-8 py-4 bg-purple-600 text-white text-lg rounded-lg hover:bg-purple-700 transition shadow-lg"
            >
              Bắt đầu mua sắm
            </button>
          </div>
  
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Đa dạng sản phẩm</h3>
              <p className="text-gray-600">Hàng ngàn mẫu quần áo trendy cho mọi phong cách</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dễ dàng đăng ký</h3>
              <p className="text-gray-600">Tạo tài khoản nhanh chóng và nhận ưu đãi ngay</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bảo mật tuyệt đối</h3>
              <p className="text-gray-600">Thông tin của bạn được bảo vệ an toàn</p>
            </div>
          </div>
        </main>
      </div>
    );
  };