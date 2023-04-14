import CommonHead from '@/components/CommonHead'
import React, { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import JumpToTopButton from './components/JumpToTopButton'
import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'

/**
 * 基础布局 采用顶部导航栏和主体布局，主体部分居中显示，左右留有一定的空白
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = props => {
  const { children, meta } = props
  const { onLoading } = useGlobal()
  const [navFixed, setNavFixed] = useState(false)

  const LoadingCover = <div id='cover-loading' className={`${onLoading ? 'z-50 opacity-50' : '-z-10 opacity-0'} pointer-events-none transition-all duration-300`}>
    <div className='w-full h-screen flex justify-center items-center'>
      <i className="fa-solid fa-spinner text-2xl text-black dark:text-white animate-spin">  </i>
    </div>
  </div>

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavFixed(true)
      } else {
        setNavFixed(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div id='theme-example' className='dark:text-gray-300 bg-white dark:bg-black'>
      <CommonHead meta={meta} />
      {/* 顶栏LOGO */}
      <Header {...props} />

      {/* 菜单 */}
      <div className={`flex flex-col md:flex-row md:justify-center md:items-center ${navFixed ? 'fixed top-0 z-50' : 'relative'} bg-white dark:bg-black transition-all duration-300 ${navFixed ? 'shadow-md' : ''}`}>
        <Nav {...props} />
        <div className="md:mx-4 w-full md:w-auto md:block"></div>
      </div>

      {/* 主体 */}
      <div className="w-full max-w-3xl px-4 py-8 mx-auto">
        {onLoading ? LoadingCover : children}
      </div>

      <Footer {...props} />

      <div className='fixed right-4 bottom-4 z-10'>
        <JumpToTopButton />
      </div>
    </div>
  )
}

export default LayoutBase
