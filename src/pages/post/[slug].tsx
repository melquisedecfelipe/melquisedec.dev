import React, { useEffect, useRef, useState } from 'react'
import ErrorPage from 'next/error'
import ReactMarkdown from 'react-markdown'

import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi'

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share'

import { useRouter } from 'next/router'

import {
  MorePosts,
  PostDetail,
  PostArticle,
  PostGrid,
  ReadContainer,
  ReadProgress,
  SharedButtons
} from '../../styles/pages/Post'

import { getPostDetail, getPosts } from '../../services/posts'

import Template from '../../components/Template'
import { GetStaticPaths, GetStaticProps } from 'next'

import PostCard from '../../components/PostCard'
import SEO from '../../components/SEO'

interface Post {
  authorImage: string
  authorName: string
  content: string
  createdAt: string
  excerpt: string
  imageUrl: string
  slug: string
  title: string
}

interface PostProps {
  post: Post
  morePosts: Post[]
}

export default function Post({ post, morePosts }: PostProps) {
  const router = useRouter()

  const articleRef = useRef(null)
  const [articleRead, setArticleRead] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (articleRef !== null) {
        const textHeight = articleRef.current.offsetHeight
        const positionY = window.pageYOffset
        const pagePosition = (positionY * 100) / textHeight

        setArticleRead(pagePosition)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Template image={post.imageUrl} loading={router.isFallback} post={post}>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.imageUrl}
      />

      <PostDetail>
        <PostGrid>
          <PostArticle ref={articleRef}>
            <SharedButtons>
              <h4>Compartilhe</h4>
              <FacebookShareButton
                url={`${process.env.SITE_URL}/post/${post.slug}`}
              >
                <FiFacebook />
              </FacebookShareButton>
              <LinkedinShareButton
                url={`${process.env.SITE_URL}/post/${post.slug}`}
              >
                <FiLinkedin />
              </LinkedinShareButton>
              <TwitterShareButton
                url={`${process.env.SITE_URL}/post/${post.slug}`}
              >
                <FiTwitter />
              </TwitterShareButton>
            </SharedButtons>

            <hr />

            <ReactMarkdown allowDangerousHtml={true} source={post.content} />
          </PostArticle>

          <ReadContainer>
            <ReadProgress height={articleRead + '%'} />
          </ReadContainer>
        </PostGrid>

        <hr />
      </PostDetail>

      {morePosts.length > 0 && (
        <MorePosts>
          <div>
            {morePosts.map((post: Post) => (
              <PostCard key={post.slug} isSimple post={post} />
            ))}
          </div>
        </MorePosts>
      )}
    </Template>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await getPosts({})

  const paths = posts.map((post: Post) => ({ params: { slug: post.slug } }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<PostProps> = async context => {
  const { slug } = context.params

  const response = await getPostDetail(Array.isArray(slug) ? slug[0] : slug)

  return {
    props: { ...response },
    revalidate: 60
  }
}
