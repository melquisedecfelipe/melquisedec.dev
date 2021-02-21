import React from 'react'
import { GetStaticProps } from 'next'

import { getPosts } from '@/services/posts'

import { Post } from '@/types'

import { Blog, PostsContainer } from '@/styles/pages/Posts'

import PostCard from '@/components/PostCard'
import Template from '@/components/Template'
import SEO from '@/components/SEO'

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <Template loading={posts.length === 0}>
      <SEO title="Posts" shouldExcludeTitleSuffix />

      <PostsContainer>
        <Blog>
          <h4>Posts</h4>

          {posts.length === 0 ? (
            <h3>Carregando...</h3>
          ) : (
            posts.map((post: Post) => (
              <PostCard key={post.slug} isSimple post={post} />
            ))
          )}
        </Blog>
      </PostsContainer>
    </Template>
  )
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const posts = await getPosts({ page: 0 })

  return {
    props: { ...posts },
    revalidate: 60
  }
}
