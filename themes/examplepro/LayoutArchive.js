import BLOG from '@/blog.config'
import Link from 'next/link'
import LayoutBase from './LayoutBase'

export const LayoutArchive = props => {
  const { archivePosts } = props

  const groupByYear = Object.entries(archivePosts).reduce((acc, [date, posts]) => {
    const year = new Date(date).getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(...posts)
    return acc
  }, {})

  return (
    <LayoutBase {...props}>
      <div className="mb-10 pb-20 md:py-12 p-3 min-h-screen w-full">
        {Object.entries(groupByYear).map(([year, posts]) => (
          <div key={year}>
            <div className="pt-16 pb-4 text-lg font-bold text-center dark:text-gray-300">
              - {year} -
            </div>
            <ul>
              {posts.map(post => (
                <li
                  key={post.id}
                  className="border-l-2 p-1 text-sm md:text-base items-center  hover:scale-x-105 hover:border-gray-500 dark:hover:border-gray-300 dark:border-gray-400 transform duration-500"
                >
                  <div>
                    <span className="text-gray-400">
                      {post.date.start_date}
                    </span>
                    <span className="mx-2">
                    ✨
                    </span>
                    <Link
                      href={`${BLOG.SUB_PATH}/${post.slug}`}
                      passHref
                      className="dark:text-gray-400  dark:hover:text-gray-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600"
                    >
                      {post.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LayoutBase>
  )
}
