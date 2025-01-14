import type { Metadata } from 'next'
import '~/styles/globals.css';

export const metadata: Metadata = {
  title: 'Sunday Rock - ระบบจองบัตรคอนเสิร์ตที่คุณไว้ใจได้',
  description: 'ระบบจองบัตรคอนเสิร์ตออนไลน์ที่ปลอดภัย รวดเร็ว ใช้งานง่าย รองรับทุกการแสดงดนตรีทั่วประเทศ',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}