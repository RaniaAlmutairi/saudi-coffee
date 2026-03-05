import { Link, useLocation } from 'react-router';
import { ShoppingCart, Search, Menu, Phone } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { Button } from './ui/button';
import { useState } from 'react';

export function Navbar() {
  const { cartCount } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#2B1D17]/95 backdrop-blur-md border-b border-[#6D4C41]/20 shadow-lg" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6D4C41] to-[#D4A574] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-xl font-['Cairo']">ق</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-[#F5E6D3] font-bold text-xl font-['Cairo']">قهوة سعودية</h1>
              <p className="text-[#D4A574] text-xs font-['Cairo']">Saudi Specialty Coffee</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-['Cairo'] transition-colors ${
                isActive('/') ? 'text-[#D4A574]' : 'text-[#F5E6D3] hover:text-[#D4A574]'
              }`}
            >
              الرئيسية
            </Link>
            <Link
              to="/products"
              className={`text-sm font-['Cairo'] transition-colors ${
                isActive('/products') ? 'text-[#D4A574]' : 'text-[#F5E6D3] hover:text-[#D4A574]'
              }`}
            >
              المنتجات
            </Link>
            <a
              href="#about"
              className="text-sm font-['Cairo'] text-[#F5E6D3] hover:text-[#D4A574] transition-colors"
            >
              من نحن
            </a>
            <a
              href="#contact"
              className="text-sm font-['Cairo'] text-[#F5E6D3] hover:text-[#D4A574] transition-colors"
            >
              تواصل معنا
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="text-[#F5E6D3] hover:text-[#D4A574] transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
            
            <Link to="/cart" className="relative">
              <button className="text-[#F5E6D3] hover:text-[#D4A574] transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D4A574] text-[#2B1D17] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-in zoom-in-50">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#F5E6D3] hover:text-[#D4A574] transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#6D4C41]/20">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-[#F5E6D3] hover:text-[#D4A574] transition-colors font-['Cairo']"
                onClick={() => setMobileMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                to="/products"
                className="text-[#F5E6D3] hover:text-[#D4A574] transition-colors font-['Cairo']"
                onClick={() => setMobileMenuOpen(false)}
              >
                المنتجات
              </Link>
              <a
                href="#about"
                className="text-[#F5E6D3] hover:text-[#D4A574] transition-colors font-['Cairo']"
                onClick={() => setMobileMenuOpen(false)}
              >
                من نحن
              </a>
              <a
                href="#contact"
                className="text-[#F5E6D3] hover:text-[#D4A574] transition-colors font-['Cairo']"
                onClick={() => setMobileMenuOpen(false)}
              >
                تواصل معنا
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
