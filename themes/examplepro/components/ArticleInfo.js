import Link from 'next/link'
import { useGlobal } from '@/lib/global'
import formatDate from '@/lib/formatDate'

export const ArticleInfo = (props) => {
  const { post } = props

  const { locale } = useGlobal()
  const date = formatDate(post?.date?.start_date || post?.createdTime, locale.LOCALE)

  return (
    <section className="flex-wrap flex mt-2 text-gray-400 dark:text-gray-400 font-light leading-8">
      <div className="flex-grow flex items-center justify-end">
        <span className='mx-2 text-gray-400 dark:text-gray-500'>
          {locale.COMMON.LAST_EDITED_TIME}: {post.lastEditedTime}
        </span>
        <span className='mr-2'>|</span>
        <span className="busuanzi_container_page_pv font-light">
          <i className='mr-1 fas fa-eye' />
          &nbsp;
          <span className="busuanzi_value_page_pv" />
        </span>
      </div>
    </section>
  )
}
