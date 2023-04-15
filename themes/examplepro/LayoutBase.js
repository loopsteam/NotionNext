import CommonHead from '@/components/CommonHead'
import React from 'react'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import JumpToTopButton from './components/JumpToTopButton'
import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'
import { useTheme } from 'next-themes'

const LayoutBase = props => {
  const { children, meta } = props
  const { onLoading } = useGlobal()

  const { theme } = useTheme()

  const LoadingCover = <div id='cover-loading' className={`${onLoading ? 'z-50 opacity-50' : '-z-10 opacity-0'} pointer-events-none transition-all duration-300`}>
    <div className='w-full h-screen flex justify-center items-center'>
      <i className={`fa-solid fa-spinner text-2xl ${theme === 'light' ? 'text-black' : 'text-white'} animate-spin`}>  </i>
    </div>
  </div>

  return (
    <div style={{ backgroundColor: '#E3EDCD', minHeight: '100vh' }}>
      <CommonHead meta={meta} />
      {/* 顶栏LOGO */}
      <Header {...props} />

      {/* 菜单 */}
      <div className={`flex flex-col md:flex-row md:justify-center md:items-center ${theme === 'light' ? 'border-t-2 border-gray-300' : 'border-t-2 border-gray-700'}`}>
        <Nav {...props} />
        <div className={`md:mx-4 w-full md:w-auto md:block ${theme === 'light' ? 'border-l-2 border-gray-300' : 'border-l-2 border-gray-700'}`}></div>
      </div>


      {/* 主体 */}
      <div style={{ marginTop: '50px', backgroundColor: '#E3EDCD', minHeight: 'calc(100vh - 50px)', height: 'auto', paddingBottom: '50px', boxSizing: 'border-box', width: '100%' }}>
      <div className={`container mx-auto max-w-4xl md:flex justify-between justify-start w-full text-center md:text-left ${theme === 'light' ? 'bg-white shadow-md border-gray-300' : 'bg-gray-800 shadow-xl border-gray-700'}`} style={{ display: 'flex', justifyContent: 'center', padding: '0 0px', borderRadius: '10px', width: '100%' }}>
          <div className="flex-grow" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 0 0px rgba(0, 0, 0, 0.2)', borderRadius: '10px', padding: '30px 20px 10px', margin: '0' }}>
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
