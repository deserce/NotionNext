import React from 'react'
import BLOG from '@/blog.config'
import SocialButton from './SocialButton'
// import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function () {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
        <footer
            className='relative z-10 flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm'
        >

            {/* 颜色过度区 */}
            <div id='color-transition' className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white  dark:bg-[#1a191d] dark:from-inherit dark:to-inherit'>

            </div>

            {/* 社交按钮 */}
            <div className='w-full h-24'>
                <SocialButton />
            </div>

            <br />

            {/* 底部页面信息 */}
            <div id='footer-bottom' className='w-full h-20 flex flex-col p-3 lg:flex-row justify-between px-6 items-center bg-[#f1f3f7] dark:bg-[#30343f]'>

                <div id='footer-bottom-left'>
                   NotionNext {BLOG.VERSION} <i className='fas fa-copyright' /> {`${copyrightDate}`} <i className='mx-1 animate-pulse fas fa-heart' /> <a href={BLOG.LINK} className='underline font-bold  dark:text-gray-300 '>{BLOG.AUTHOR}</a>.
                </div>

            <div id='footer-bottom-right'>
                {BLOG.BEI_AN && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{BLOG.BEI_AN}</a></>}

                <span className='hidden busuanzi_container_site_pv'>
                    <i className='fas fa-eye' /><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
                <span className='pl-2 hidden busuanzi_container_site_uv'>
                    <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span> </span>

                {/* <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {BLOG.BIO && <>|</>} {BLOG.BIO}</h1> */}

            </div>
  <div id="tcomment"></div>
<script src="https://cdn.staticfile.org/twikoo/1.6.31/twikoo.all.min.js"></script>
<script>
twikoo.init({
  envId: 'https://twikoomcy.netlify.app/',
  el: '#tcomment', // 容器元素
  // path: location.pathname, // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数
  lang: 'zh-CN', // 用于手动设定评论区语言，支持的语言列表 https://github.com/twikoojs/twikoo/blob/main/src/client/utils/i18n/index.js
})
  PUSHOO_CHANNEL: telegram
  PUSHOO_TOKEN: '6986385555:AAGdrLTt6Wo5TrI_RPlmHoTkM_Ph2QQ3Y6o'
</script>
        </div>
  
        </footer >
  )
}

export default Footer
