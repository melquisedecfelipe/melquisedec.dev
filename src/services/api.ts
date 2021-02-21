import axios from 'axios'

import { Repository } from '@/types'

const api = axios.create({
  baseURL: 'https://api.github.com/'
})

const formatRepository = (repository: any) => {
  const {
    name,
    description,
    html_url: htmlUrl,
    updated_at: updatedAt
  } = repository

  return {
    name,
    description,
    htmlUrl,
    updatedAt
  }
}

const getRepositories = async () => {
  const { data } = await api.get('users/melquisedecfelipe/repos?sort=updated')

  const repositories: Repository[] = data
    .slice(0, 6)
    .map((repository: any) => formatRepository(repository))

  return { repositories }
}

export { api, formatRepository, getRepositories }
