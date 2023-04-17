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
    <div style={{ backgroundColor: '#a9ac99', minHeight: '100vh' }}>
      <CommonHead meta={meta} />
      {/* 顶栏LOGO */}
      <div className="flex flex-col md:flex-row md:justify-center md:items-center" style={{ borderTop: '2px solid #A16B42' }}>
      <Header {...props} />
      <div className="md:mx-4 w-full md:w-auto md:block border-l-2 border-gray-200 dark:border-gray-800"></div>
      </div>

      {/* 菜单 */}
      <div className="flex flex-row md:justify-center md:items-center" style={{ borderTop: '2px solid #A16B42' }}>
        <Nav {...props} />
        <div className="md:mx-4 w-full md:w-auto md:block border-l-2 border-gray-200 "></div>  
      </div>


      {/* 主体 */}
      <div style={{ marginTop: '50px', backgroundColor: '#a9ac99', minHeight: 'calc(100vh - 50px)', height: 'auto', paddingBottom: '50px', boxSizing: 'border-box', width: '100%' }}>
      <div className="container mx-auto max-w-4xl md:flex justify-between justify-start w-full " style={{ display: 'flex', justifyContent: 'center', padding: '0 0px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px', border: '2px solid #A16B42', width: '100%' }}>
          <div className="flex-grow" style={{ backgroundColor: '#fdfdfa', boxShadow: '0 0 0px rgba(0, 0, 0, 0.2)', borderRadius: '10px', padding: '50px 20px 5px', margin: '0' }}>
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
