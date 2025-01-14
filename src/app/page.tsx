'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Clock, Shield, Bell, Facebook, Instagram, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-neutral-dark to-neutral-mid py-32">
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
              <Image
                src="/ticket-3d.png"
                alt="Concert Ticket"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
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