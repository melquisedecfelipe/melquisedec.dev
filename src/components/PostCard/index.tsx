import React, { useMemo } from 'react'
import NextLink from 'next/link'

import { PostCardContainer, PostCardSimpleContainer } from './styles'

import { Post } from '@/types'
import { dateFormated } from '@/utils/dateFormated'

interface PostProps {
  isSimple?: boolean
  post: Post
}

const PostCard: React.FC<PostProps> = ({ isSimple = false, post }) => {
  const postInfo = useMemo(() => {
    if (post?.createdAt) {
      const formtatedDate = dateFormated(post.createdAt, true)

      return `${post.authorName} – ${formtatedDate}`
    }
  }, [post])

  return isSimple ? (
    <NextLink as={`/post/${post.slug}`} href="/post/[slug]">
      <PostCardSimpleContainer>
        <h4>{post.title}</h4>
        <p>{post.excerpt}</p>
        <small>{postInfo}</small>
        <br />
        <hr />
      </PostCardSimpleContainer>
    </NextLink>
  ) : (
    <NextLink as={`/post/${post.slug}`} href="/post/[slug]">
      <PostCardContainer>
        <img src={post.imageUrl} alt={post.title} />
        <small>{dateFormated(post.createdAt, true)}</small>
        <h4>{post.title}</h4>
      </PostCardContainer>
    </NextLink>
  )
}

export default PostCard
