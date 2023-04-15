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
          <Link href="/" className="py-4 no-underline flex items-center">
            <img src="themes/examplepro/components/feather.png" alt="Logo" className="w-128 h-128 mr-2" />
          </Link>
        </div>
        <div className="w-full md:w-auto text-center md:text-left">
          {/* 右侧文字 */}
        </div>
      </div>
    </header>
  )
}
