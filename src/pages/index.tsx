import React from 'react'
import { GetStaticProps } from 'next'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { getPostsForHome } from '@/services/posts'

import { Post } from '@/types'

import { About, Blog, HomeContainer } from '@/styles/pages/Home'

import PostCard from '@/components/PostCard'
import Template from '@/components/Template'
import SEO from '@/components/SEO'

interface HomeProps {
  posts: Post[]
}

export default function Films({ posts }: HomeProps) {
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
      </HomeContainer>
    </Template>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await getPostsForHome()

  return {
    props: { ...response },
    revalidate: 60
  }
}
