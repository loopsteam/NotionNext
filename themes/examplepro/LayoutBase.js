import CommonHead from '@/components/CommonHead'
import React from 'react'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import JumpToTopButton from './components/JumpToTopButton'
import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'

/**
 * 基础布局 采用左右两侧布局，左侧占四分之一，右侧占四分之三，左侧由上到下依次为顶栏logo，菜单，左右使用粗线隔开，菜单使用竖导航栏
 *
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = props => {
  const { children, meta } = props
  const { onLoading } = useGlobal()

  const LoadingCover = (
    <div
      id="cover-loading"
      className={`${onLoading ? 'z-50 opacity-50' : '-z-10 opacity-0'} pointer-events-none transition-all duration-300`}
    >
      <div className="w-full h-screen flex justify-center items-center">
        <i className="fa-solid fa-spinner text-2xl text-black dark:text-white animate-spin"> </i>
      </div>
    </div>
  )

  return (
    <div id="theme-example" className="dark:text-gray-300 bg-white dark:bg-black">
      <CommonHead meta={meta} />

      {/* 左侧 */}
      <div className="flex flex-col w-1/4 h-screen border-r-4 border-gray-400 dark:border-gray-600">
        <Header {...props} />
        <div className="flex-1 overflow-auto mt-4">
          <Nav {...props} />
        </div>
      </div>

      {/* 右侧 */}
      <div className="flex-1 px-8 py-8 overflow-auto">
        {/* 菜单和主体之间的粗线 */}
        <div className="border-l-4 border-gray-400 dark:border-gray-600 h-full"></div>
        <div className="max-w-3xl mx-auto mt-4">
          {onLoading ? LoadingCover : children}
        </div>
      </div>

      <Footer {...props} />

      <div className="fixed right-4 bottom-4 z-10">
        <JumpToTopButton />
      </div>
    </div>
  )
}

export default LayoutBase
