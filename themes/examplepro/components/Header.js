import Link from 'next/link'

/**
 * 网站顶部
 * @returns
 */
export const Header = (props) => {
  const { siteInfo } = props

  return (
    <header className="w-full px-4  relative z-10">
      <div className="container mx-auto max-w-4xl md:flex justify-end items-center">
        <div className="flex justify-end items-center">
          <Link href="/search"py-4 no-underline flex items-center">
            <img src="https://loopsteam-1257780582.cos.ap-nanjing.myqcloud.com/img/202304151943481.png" className="w-20 h-20 mr-2" />
          </Link>
        </div>
        <div className="w-full md:w-auto text-center md:text-left">
          {/* 右侧文字 */}
        </div>
      </div>
    </header>
  )
}
