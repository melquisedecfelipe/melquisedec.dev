import React, { createContext, useCallback, useContext, useState } from 'react'
import {
  getPostDetail as getPostDetailService,
  getPosts as getPostsService,
  getPostsForHome as getPostsForHomeService
} from '../services/posts'

import { Params, Post } from '@/types'

interface PostContextData {
  error: string
  loading: boolean
  morePosts: Post[]
  post: Post
  posts: Post[]
  total: number
  getPostDetail(slug: string): Promise<void>
  getPosts(params: Params): Promise<void>
  getPostsForHome(): Promise<void>
}

const PostContext = createContext<PostContextData>({} as PostContextData)

const PostProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({
    error: '',
    loading: false,
    morePosts: [] as Post[],
    post: {} as Post,
    posts: [] as Post[],
    total: 0
  })

  const getPostDetail = useCallback(async (slug: string) => {
    const response = await getPostDetailService(slug)

    setData(oldData => ({ ...oldData, ...response }))
  }, [])

  const getPosts = useCallback(async (params: Params) => {
    const response = await getPostsService(params)

    setData(oldData => ({ ...oldData, ...response }))
  }, [])

  const getPostsForHome = useCallback(async () => {
    const response = await getPostsForHomeService()

    setData(oldData => ({ ...oldData, ...response }))
  }, [])

  return (
    <PostContext.Provider
      value={{
        error: data.error,
        loading: data.loading,
        morePosts: data.morePosts,
        post: data.post,
        posts: data.posts,
        total: data.total,
        getPostDetail,
        getPosts,
        getPostsForHome
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

function usePost(): PostContextData {
  const context = useContext(PostContext)

  if (!context) {
    throw new Error('usePost must be used within an PostProvider')
  }

  return context
}

export { PostProvider, usePost }
