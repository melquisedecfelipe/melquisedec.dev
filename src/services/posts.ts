import Cosmic from 'cosmicjs'
import { Params, Post } from '@/types'

const bucket = Cosmic().bucket({
  slug: process.env.COSMIC_SLUG,
  read_key: process.env.COSMIC_KEY
})

const formatPost = ({ created_at: createdAt, metadata, slug, title }) => {
  const { author, content, cover_image: image, excerpt } = metadata
  const { title: authorName, thumbnail: authorImage } = author
  const { url: imageUrl } = image

  return {
    authorName,
    authorImage,
    createdAt,
    content,
    excerpt,
    imageUrl,
    slug,
    title
  }
}

const getPostDetail = async (slug: string) => {
  const postParams = {
    slug,
    status: 'published',
    props: 'slug,title,metadata,created_at'
  }

  const morePostsParams = {
    type: 'posts',
    limit: 3,
    status: 'published',
    props: 'slug,title,metadata,created_at',
    sort: '-created_at'
  }

  const { object: responsePost } = await bucket.getObject(postParams)

  const { objects: responseMorePosts } = await bucket.getObjects(
    morePostsParams
  )

  const morePosts: Post[] = responseMorePosts
    .filter(({ slug: postSlug }) => postSlug !== slug)
    .slice(0, 2)
    .map((post: any) => formatPost(post))

  return { post: formatPost(responsePost), morePosts }
}

const getPosts = async ({ page, limit }: Params) => {
  const params = {
    type: 'posts',
    limit,
    skip: page,
    status: 'published',
    props: 'slug,title,metadata,created_at',
    sort: '-created_at'
  }

  const { objects, total } = await bucket.getObjects(params)

  const posts: Post[] = objects.map((post: any) => formatPost(post))

  return { posts, total }
}

const getPostsForHome = async () => {
  const params = {
    type: 'posts',
    limit: 6,
    status: 'published',
    props: 'slug,title,metadata,created_at',
    sort: '-created_at'
  }

  const { objects } = await bucket.getObjects(params)

  const posts: Post[] = objects.map((post: any) => formatPost(post))

  return { posts }
}

export { formatPost, getPostDetail, getPosts, getPostsForHome }
