import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

export const BlogListPage = props => {
  const { page = 1, posts, postCount } = props
  const { locale } = useGlobal()
  const router = useRouter()
  const totalPage = Math.ceil(postCount / BLOG.POSTS_PER_PAGE)
  const currentPage = +page

  const showPrev = currentPage > 1
  const showNext = page < totalPage
  const pagePrefix = router.asPath.replace(/\/page\/[1-9]\d*/, '').replace(/\/$/, '')
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <div className="flex-grow md:pr-12 mb-12">
      {posts?.map(p => (
        <article
          key={p.id}
          className={`mb-12 cursor-pointer transition-all duration-300 ${
            selectedPost === p.id ? '' : 'shadow-lg'
          }`}
          onMouseEnter={() => setSelectedPost(p.id)}
          onMouseLeave={() => setSelectedPost(null)}
        >
          <h2 className="mb-4">
            <div className="flex flex-row items-center justify-start mb-4 text-base text-gray-700 dark:text-gray-300">
              <span className="mr-2 text-gray-700 dark:text-gray-300">{/*小圆点*/}💫</span>
              <span className="mr-2">{p.date?.start_date || p.createdTime}</span>
              <span className="text-right">{/*去掉原来的"."*/}</span>
              <Link
                href={`/${p.slug}`}
                passHref
                className="text-black dark:text-gray-100 hover:underline mr-2 transition-all duration-200 hover:border-gray-500">
                {p.title}
              </Link>
            </div>
          </h2>
          {/* 搜索结果 */}
          {p.results && (
            <p className="p-4-lines mt-4 text-gray-700 dark:text-gray-300 text-base leading-7">
              {p.results.map(r => (
                <span key={r}>{r}</span>
              ))}
            </p>
          )}
        </article>
      ))}
      <div className="flex justify-between text-base">
        <Link
          href={{ pathname: currentPage - 1 === 1 ? `${pagePrefix}/` : `${pagePrefix}/page/${currentPage - 1}`, query: router.query.s ? { s: router.query.s } : {} }}
          className={`${showPrev ? 'bg-black ' : 'bg-gray pointer-events-none '} text-white no-underline py-2 px-3 rounded`}>
          {locale.PAGINATION.PREV}
        </Link>
        <Link
          href={{ pathname: `${pagePrefix}/page/${currentPage + 1}`, query: router.query.s ? { s: router.query.s } : {} }}
          className={`${showNext ? 'bg-black ' : 'bg-gray pointer-events-none '} text-white no-underline py-2 px-3 rounded`}>
          {locale.PAGINATION.NEXT}
        </Link>
      </div>
    </div>
  )
}
