import Footer from '@/components/Footer';
import React from 'react'


export default function LayoutPage({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        {children}

    </div>
  )
}

