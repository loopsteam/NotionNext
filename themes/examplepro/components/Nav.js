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
    { name: '探寻.', to: '/search', show: CONFIG_EXAMPLE.MENU_SEARCH },
    { name: '存籍.', to: '/archive', show: CONFIG_EXAMPLE.MENU_ARCHIVE },
    { name: '品读.', to: 'https://connerblog.top/article/Indulge', show: true },
    { name: '关于.', to: 'https://connerblog.top/article/aboutme', show: true }
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
  <nav className="w-full bg-transparent md:pt-0 px-16 relative z-20 dark:bg-black">
    <div className="container mx-auto max-w-4xl md:flex justify-between items-center text-lg md:text-xl md:justify-start">
      <ul className="w-full text-center md:text-left flex flex-row md:flex-row  md:items-center">
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
