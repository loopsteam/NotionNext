import CommonHead from '@/components/CommonHead'
import React from 'react'
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

  const LoadingCover = <div id='cover-loading' className={`${onLoading ? 'z-50 opacity-50' : '-z-10 opacity-0'} pointer-events-none transition-all duration-300`}>
    <div className='w-full h-screen flex justify-center items-center'>
      <i className="fa-solid fa-spinner text-2xl text-black dark:text-white animate-spin">  </i>
    </div>
  </div>

  return (
<div style={{ 
  minHeight: '100vh',
  backgroundColor: '#E3EDCD',
  '--bg-color': '#E3EDCD', // 定义 CSS 变量
  '--border-color': '#A16B42'
}}>
  <CommonHead meta={meta} />
  {/* 顶栏LOGO */}
  <Header {...props} />

  {/* 菜单 */}
  <div className="flex flex-col md:flex-row md:justify-center md:items-center" style={{ borderTop: `2px solid var(--border-color)` }}>
    <Nav {...props} />
    <div className="md:mx-4 w-full md:w-auto md:block border-l-2 border-gray-200 dark:border-gray-800"></div>
  </div>


  {/* 主体 */}
  <div style={{ 
    marginTop: '50px',
    backgroundColor: '#E3EDCD',
    minHeight: 'calc(100vh - 50px)',
    height: 'auto',
    paddingBottom: '50px',
    boxSizing: 'border-box',
    width: '100%',
    '--box-shadow': '0 0 10px rgba(0, 0, 0, 0.2)',
    '--border-radius': '10px',
    '--container-bg-color': '#FFFFFF',
    '--container-padding': '30px 20px 10px',
    '--container-margin': '0'
  }}>
    <div className="container mx-auto max-w-4xl md:flex justify-between justify-start w-full text-center md:text-left" style={{ 
      display: 'flex',
      justifyContent: 'center',
      padding: '0 0px',
      boxShadow: `var(--box-shadow)`,
      borderRadius: `var(--border-radius)`,
      border: `2px solid var(--border-color)`,
      width: '100%',
      backgroundColor: `var(--container-bg-color)`,
      padding: `var(--container-padding)`,
      margin: `var(--container-margin)`
    }}>
      {onLoading ? LoadingCover : children}
    </div>
  </div>
</div>

      <Footer {...props} />

      <div className='fixed right-4 bottom-4 z-10'>
        <JumpToTopButton />
      </div>
    </div>
  )
}

export default LayoutBase
