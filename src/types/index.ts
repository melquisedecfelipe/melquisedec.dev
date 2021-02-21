export interface Params {
  page?: number
  limit?: number
  slug?: string
}

export interface Post {
  authorImage: string
  authorName: string
  content: string
  createdAt: string
  excerpt: string
  imageUrl: string
  slug: string
  title: string
}

export interface Repository {
  name: string
  description: string
  htmlUrl: string
  updatedAt: string
}
