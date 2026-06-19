'use client'

import { useState } from 'react'
import Link from 'next/link'
import LoginModal from './LoginModal.js'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  // เมนูหลักสำหรับการลิงก์หน้าเพจปกติ
  const mainNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Service', href: '/service' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/70 backdrop-blur-xl transition-all duration-300">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-transform duration-200 active:scale-95"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-white font-bold shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:rotate-3">
                M
              </div>
              <div>
                <h1 className="text-base font-bold tracking-tight text-gray-900 transition-colors group-hover:text-blue-600">
                  My Website
                </h1>
                <p className="text-[10px] font-medium tracking-wider uppercase text-gray-400">
                  Next.js + Tailwind
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {/* Main Links */}
              <div className="flex items-center gap-6">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-blue-600 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Vertical Divider */}
              <div className="h-4 w-px bg-gray-200" />

              {/* Auth Button (Desktop) */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="text-sm font-medium transition-all duration-200 rounded-full bg-blue-600 px-5 py-2 text-white shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-95"
                >
                  Sign In
                </button>
              </div>
            </div>

            {/* Mobile Hamburg Button */}
            <button
              
                
              className="relative md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-white/50 text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 active:scale-95"
              aria-label="Toggle Menu"
            >
              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 bg-gray-900 transition-all duration-300 origin-center ${
                    isOpen ? 'translate-y-[6px] rotate-45 bg-blue-600' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-3.5 bg-gray-900 transition-all duration-200 ${
                    isOpen ? 'w-0 opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-gray-900 transition-all duration-300 origin-center ${
                    isOpen ? '-translate-y-[6px] -rotate-45 bg-blue-600' : ''
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`grid transition-all duration-300 ease-in-out md:hidden ${
              isOpen 
                ? 'grid-rows-[1fr] opacity-100 pb-6 pointer-events-auto' 
                : 'grid-rows-[0fr] opacity-0 pointer-events-none'
            }`}
          >
            <div className="overflow-hidden">
              <div className={`flex flex-col gap-1.5 pt-2 transition-all duration-300 transform ${
                isOpen ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-2'
              }`}>
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Auth Button (Mobile) */}
                <button
                  onClick={() => {
                    setIsOpen(false);      // ปิดเมนูมือถือเบื้องหลังก่อน
                    setIsLoginOpen(true);  // เปิด Modal Login
                  }}
                  className="mt-4 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 bg-blue-600 text-white text-center shadow-sm hover:bg-blue-700 active:scale-[0.98]"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* เรียกใช้งาน LoginModal โดยส่ง State เข้าไปควบคุม */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  )
}