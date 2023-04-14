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
    { name: locale.NAV.SEARCH, to: '/search', show: CONFIG_EXAMPLE.MENU_SEARCH },
    { name: locale.NAV.ARCHIVE, to: '/archive', show: CONFIG_EXAMPLE.MENU_ARCHIVE },
    { name: locale.COMMON.CATEGORY, to: '/category', show: CONFIG_EXAMPLE.MENU_CATEGORY }
  ]

  if (customNav) {
    links = links.concat(customNav)
  }

  // 如果 开启自定义菜单，则不再使用 Page生成菜单。
  if (BLOG.CUSTOM_MENU) {
    links = customMenu
  }

  if (!links || links.length === 0) {
    return null
  }

  return (
    <nav className="w-full bg-transparent md:pt-0 px-6 relative z-20 dark:bg-black">
      <div className="container mx-auto max-w-4xl md:flex justify-between items-center text-lg md:text-xl md:justify-start">
        <ul className="w-full text-center md:text-left flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:items-center">
          {links.map((link) => (
            link.show && (
              <MenuItemDrop key={link.id} link={link}>
                {link.name}
              </MenuItemDrop>
            )
          ))}
        </ul>
      </div>
    </nav>
  )
}
