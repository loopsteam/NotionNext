import BLOG from '@/blog.config'
import Link from 'next/link'
import LayoutBase from './LayoutBase'

export const LayoutArchive = props => {
  const { archivePosts } = props

  // 将 archivePosts 对象按年份进行分组
  const postsByYear = Object.values(archivePosts).reduce((accumulator, post) => {
    const year = new Date(post.date.start_date).getFullYear()
    accumulator[year] = accumulator[year] || []
    accumulator[year].push(post)
    return accumulator
  }, {})

  return (
    <LayoutBase {...props}>
      <div className="mb-10 pb-20 md:py-12 p-3 min-h-screen w-full">
        {Object.entries(postsByYear).map(([year, posts]) => (
          <div key={year} className="mb-10">
            <h2 className="text-lg font-bold text-center mb-2">{`- ${year} -`}</h2>
            <ul>
              {posts.map(post => (
                <li
                  key={post.id}
                  className="border-l-2 p-1 text-sm md:text-base items-center hover:scale-x-105 hover:border-gray-500 dark:hover:border-gray-300 dark:border-gray-400 transform duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="text-gray-400">{post.date.start_date}</span>
                    <span className="mx-2">
                    ✨
                    </span>
                    <Link
                      href={`${BLOG.SUB_PATH}/${post.slug}`}
                      passHref
                      className="dark:text-gray-400 dark:hover:text-gray-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600 font-medium"
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
