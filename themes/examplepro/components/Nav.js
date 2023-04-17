import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'
import CONFIG_EXAMPLE from '../config_example'
import { MenuItemDrop } from './MenuItemDrop'
import Link from 'next/link'

/**
 * 菜单导航
 * @param {*} props
 * @returns
 */
export const Nav = (props) => {
  const { customNav, customMenu } = props
  const { locale } = useGlobal()

  let links = [
    { name: '闲文.', to: '/article/tell', show: true },
    { name: '妙笔.', to: '/', show: true },
    { name: '品读.', to: '/article/Indulge', show: true },
    //{ name: '探寻.', to: '/search', show: CONFIG_EXAMPLE.MENU_SEARCH },
    { name: '存籍.', to: '/archive', show: CONFIG_EXAMPLE.MENU_ARCHIVE },
    { name: '关于.', to: '/article/aboutme', show: true }
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
  <nav className="w-full bg-transparent md:pt-0 px-2 md:px-8 relative z-20">
    <div className="container mx-auto max-w-4xl md:flex justify-between items-center text-lg md:text-xl md:justify-start">
      <ul className="w-full text-center md:text-left flex flex-row md:flex-row overflow-x-auto md:overflow-visible">
        {links.map((link) => ( 
          <li className="w-full md:w-auto" style={{ fontSize: '0.8rem', overflow: 'hidden' }}>
            <MenuItemDrop key={link.id} link={link}>
              {link.name} 
            </MenuItemDrop>
          </li>
        ))}
      </ul>
    </div>
  </nav>
  )
}
