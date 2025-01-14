'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import { Clock, Shield, Bell, Facebook, Instagram, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-dark/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-12">
              {/* Logo */}
              <Image
                src="/logo.png"
                alt="Sunday Rock"
                width={180/2}
                height={60/2}
                className="m-2"
              />
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-white hover:text-primary transition-colors">หน้าแรก</a>
                <a href="#" className="text-white hover:text-primary transition-colors">ค้นหาคอนเสิร์ต</a>
                <a href="#" className="text-white hover:text-primary transition-colors">วิธีการจอง</a>
                <a href="#" className="text-white hover:text-primary transition-colors">ติดต่อเรา</a>
              </div>
            </div>
            {/* Placeholder for future additions */}
            <div className="hidden md:flex items-center space-x-4">
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block text-white hover:text-primary transition-colors py-2">หน้าแรก</a>
                <a href="#" className="block text-white hover:text-primary transition-colors py-2">ค้นหาคอนเสิร์ต</a>
                <a href="#" className="block text-white hover:text-primary transition-colors py-2">วิธีการจอง</a>
                <a href="#" className="block text-white hover:text-primary transition-colors py-2">ติดต่อเรา</a>

              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-neutral-dark to-neutral-mid py-32 mt-20">
        <div className="absolute inset-0 opacity-10 pattern-music"></div>
        <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 text-white">
            <motion.h1 
              className="font-heading text-h1 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ระบบจองบัตรอัจฉริยะ สำหรับคนรักดนตรี
            </motion.h1>
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ระบบจองบัตรที่ปลอดภัย รวดเร็ว พร้อมฟีเจอร์ครบครัน
            </motion.p>
            <div className="space-x-4">
              <button className="bg-primary text-white px-8 py-3 rounded-button hover:bg-red-600 transition-colors">
                ค้นหาคอนเสิร์ต
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-button hover:bg-white hover:text-neutral-dark transition-colors">
                สำหรับผู้จัดงาน
              </button>
            </div>
          </div>
          <div className="lg:col-span-2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-heading mb-4">ระบบที่ดีที่สุด</div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p>ระบบความปลอดภัยระดับสากล</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p>รองรับการชำระเงินทุกรูปแบบ</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p>ระบบแจ้งเตือนอัตโนมัติ</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-h2 text-center mb-16">
            จองง่าย สบายใจ ด้วยระบบอัจฉริยะ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-12 h-12 text-primary" />,
                title: 'จองบัตรได้ตลอด 24 ชั่วโมง',
                description: 'ไม่พลาดทุกคอนเสิร์ต จองได้ทุกที่ทุกเวลา'
              },
              {
                icon: <Shield className="w-12 h-12 text-primary" />,
                title: 'ระบบชำระเงินที่ปลอดภัย',
                description: 'รองรับทุกช่องทางการชำระเงิน พร้อมระบบความปลอดภัยระดับสากล'
              },
              {
                icon: <Bell className="w-12 h-12 text-primary" />,
                title: 'แจ้งเตือนก่อนคอนเสิร์ตเริ่ม',
                description: 'รับการแจ้งเตือนล่วงหน้า พร้อมข้อมูลสำคัญของงาน'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-neutral-light p-8 rounded-card shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="font-heading text-h4 mb-4">{feature.title}</h3>
                <p className="text-neutral-mid">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1,000+', label: 'Events' },
              { number: '100,000+', label: 'Users' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="font-heading text-h2 text-primary mb-2">{stat.number}</div>
                <div className="text-neutral-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-dark text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Image
                src="/logo.png"
                alt="Sunday Rock"
                width={180}
                height={60}
                className="mb-4"
              />
              <p className="text-neutral-light">
                ระบบจองบัตรคอนเสิร์ตที่คุณไว้ใจได้
              </p>
            </div>
            <div>
              <h4 className="font-heading text-h4 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary transition-colors">ค้นหาคอนเสิร์ต</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">วิธีการจอง</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">สำหรับผู้จัดงาน</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-h4 mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary transition-colors">ช่วยเหลือ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">นโยบาย</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ติดต่อเรา</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-h4 mb-4">Contact</h4>
              <p className="text-neutral-light mb-4">
                149/31 หมู่ 9 ต.บางโฉลง อ.บางพลี จ.สมุทรปราการ 10540
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-mid pt-8 text-center text-neutral-light">
            <p>&copy; 2024 Sunday Rock. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}