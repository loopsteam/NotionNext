import BLOG from '@/blog.config'
import Link from 'next/link'
import LayoutBase from './LayoutBase'

export const LayoutArchive = props => {
  const { archivePosts } = props

  return (
    <LayoutBase {...props}>
      <div className="mb-10 pb-20 md:py-12 p-3  min-h-screen w-full">
        {Object.keys(archivePosts).map((archiveTitle, index) => (
          <div key={archiveTitle}>
            <div className={`py-4 border-t-2 border-b-2 border-gray-300`} />

            <ul>
              {archivePosts[archiveTitle].map(post => (
                <li
                  key={post.id}
                  className="border-l-2 p-1 text-sm md:text-base items-center  hover:scale-x-105 hover:border-gray-500 dark:hover:border-gray-300 dark:border-gray-400 transform duration-500"
                >
                  <div className="relative" id={post?.date?.start_date}>
                    <span className="text-gray-400">
                      {post.date?.start_date}
                    </span>
                    <span className="mx-2">
                      ✨
                    </span>
                    <Link
                      href={`${BLOG.SUB_PATH}/${post.slug}`}
                      passHref
                      className="dark:text-gray-400  dark:hover:text-gray-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600">
                      <a className="text-left">
                        {post.title}
                      </a>
                    </Link>
                    <div className="absolute top-1/2 left-0 w-full border-t-2 border-gray-300"></div>
                    <div className="absolute bottom-1/2 left-0 w-full border-t-2 border-gray-300"></div>
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
