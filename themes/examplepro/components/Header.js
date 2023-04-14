import Link from 'next/link'

/**
 * 网站顶部
 * @returns
 */
export const Header = (props) => {
  const { siteInfo } = props

  return (
      <header className="w-full px-6 bg-black  text-white relative z-10">
            <div className="container mx-auto max-w-4xl md:flex justify-between items-center">
                <Link
                    href='/'
                    className="py-6 w-full text-left md:text-left md:w-auto no-underline flex justify-center items-center">
                    
                    <span className="text-3xl relative">
                      Conner Stars⭐
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform transition-transform origin-left hover:scale-x-100"></span>
                    </span>
                    <span className="text-lg font-medium ml-2">哈喽呀</span>
                    
                </Link>
                <div className="w-full md:w-auto text-center md:text-right">
                    {/* 右侧文字 */}
                </div>
            </div>
        </header>
  )
}
