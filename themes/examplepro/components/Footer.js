import BLOG from '@/blog.config'
import DarkModeButton from '@/components/DarkModeButton'

export const Footer = (props) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
    <footer className="z-50 fixed bottom-0 left-0 w-full bg-transparent px-2 border-style:dotted dark:border-hexo-black-gray dark:bg-transparent">
      <div className="container mx-auto max-w-4xl py-4 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-sm">
        <div className='text-center'>
          © Conner Stars⭐ | since 2023
        </div>
        <div className="md:p-0 text-center md:text-right text-xs flex items-center">
          
          {/* DarkModeButton 放在这里 */}
          //<DarkModeButton className='text-center pt-4 ml-auto' />
          {BLOG.BEI_AN && (
            <a
              href="https://beian.miit.gov.cn/"
              className="text-black dark:text-gray-200 no-underline hover:underline ml-4"
            >
              {BLOG.BEI_AN}
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
