import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'
import CONFIG_EXAMPLE from '../config_example'
import { MenuItemDrop } from './MenuItemDrop'

/**
 * 菜单导航
 * @param {*} props
 * @returns
 */
export const Nav = (props) => {
  const { customNav, customMenu } = props
  const { locale } = useGlobal()

  let links = [
    { name: '探寻', to: '/search', show: CONFIG_EXAMPLE.MENU_SEARCH },
    { name: '存籍', to: '/archive', show: CONFIG_EXAMPLE.MENU_ARCHIVE },
    { name: '篇目', to: '/category', show: CONFIG_EXAMPLE.MENU_CATEGORY },
    { name: '关于', to: 'https://connerblog.top/article/aboutme', show: true }
  ]

  if (customNav) {
    links = links.concat(customNav)
  }

  // 如果开启自定义菜单，则不再使用 Page 生成菜单。
  if (BLOG.CUSTOM_MENU) {
    links = customMenu
  }

  if (!links || links.length === 0) {
    return null
  }

  return (
    <nav className="w-full bg-transparent md:pt-0 px-16 relative z-20 dark:bg-black">
      <div className="container mx-auto max-w-4xl md:flex justify-between items-center text-lg md:text-xl md:justify-start">
        {/* 移动端下拉菜单 */}
        <div className="md:hidden absolute top-0 left-0 right-0 bg-white dark:bg-gray-900 z-20">
          <select className="w-full py-2 px-4 text-gray-900 dark:text-gray-100 font-medium" onChange={(e) => { window.location.href = e.target.value }}>
            <option value="">选择一个选项...</option>
            {links.map((link) => (
              link.show && (
                <option key={link.id} value={link.to}>
                  {link.name}
                </option>
              )
            ))}
          </select>
        </div>

        <ul className="hidden md:flex md:items-center md:space-x-4">
          {links.map((link, index) => (
            link.show && (
              <React.Fragment key={link.id}>
                {/* 添加·分隔符 */}
                {index !== 0 && <li className="hidden md:block text-gray-400 dark:text-gray-600">·</li>}
                <MenuItemDrop link={link} style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                  {link.name}
                </MenuItemDrop>
              </React.Fragment>
            )
          ))}
        </ul>
      </div>
    </nav>
  )
}

