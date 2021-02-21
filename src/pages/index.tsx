import React from 'react'
import { GetStaticProps } from 'next'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { getRepositories } from '@/services/api'
import { getPostsForHome } from '@/services/posts'

import { Post, Repository } from '@/types'

import { About, Blog, HomeContainer, Project } from '@/styles/pages/Home'

import PostCard from '@/components/PostCard'
import Template from '@/components/Template'
import SEO from '@/components/SEO'
import RepositoryCard from '@/components/RepositoryCard'

interface HomeProps {
  posts: Post[]
  repositories: Repository[]
}

export default function Home({ posts, repositories }: HomeProps) {
  return (
    <Template loading={posts.length === 0}>
      <SEO title="Home" shouldExcludeTitleSuffix />

      <HomeContainer>
        <About>
          <p>
            Oi, meu nome é Melquisedec, tenho 23 anos. Sou apaixonado por
            tecnologia, jogos e música.
          </p>
          <br />
          <p>
            Atualmente trabalho como Front, mas vez ou outra atuo no Back
            também. Gosto de aprender e ensinar (sempre que possível), buscando
            sempre evoluir tanto tecnicamente quanto pessoalmente.
          </p>
          <br />
          <p>
            Uso a tecnologia para impactar a vida das pessoas de forma positiva.
          </p>
        </About>

        <Blog>
          <h4>Útilmos Posts</h4>

          {posts.length === 0 ? (
            <h3>Carregando...</h3>
          ) : (
            <ResponsiveMasonry columnsCountBreakPoints={{ 767: 2, 1023: 3 }}>
              <Masonry gutter="18px">
                {posts.map((post: Post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </Blog>

        <Project>
          <h4>Útilmos Commits</h4>

          {repositories.length === 0 ? (
            <h3>Carregando...</h3>
          ) : (
            <div>
              {repositories.map((repository: Repository) => (
                <RepositoryCard key={repository.name} repository={repository} />
              ))}
            </div>
          )}
        </Project>
      </HomeContainer>
    </Template>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await getPostsForHome()
  const repositories = await getRepositories()

  return {
    props: { ...posts, ...repositories },
    revalidate: 60
  }
}
