import React, { useMemo } from 'react'
import NextLink from 'next/link'

import { FiInstagram, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

import {
  About,
  Footer,
  Hero,
  Navbar,
  PostInfo,
  TemplateContainer
} from './styles'

import { Post } from '@/types'

import Loading from '@/components/Loading'

import { dateFormated } from '@/utils/dateFormated'

interface TemplateProps {
  image?: string
  loading?: boolean
  post?: Post
}

const Template: React.FC<TemplateProps> = ({
  image = '/static/background.jpg',
  loading,
  post,
  children
}) => {
  const postInfo = useMemo(() => {
    if (post?.createdAt) {
      const formtatedDate = dateFormated(post.createdAt, true)

      return `${post.authorName} – ${formtatedDate}`
    }
  }, [post])

  return (
    <TemplateContainer>
      <Loading loading={loading} />

      <Hero image={image}>
        <Navbar>
          <h4>melquisedec.dev</h4>
          <ul>
            <li>
              <NextLink href="/">
                <a>Home</a>
              </NextLink>
            </li>
            <li>
              <NextLink href="/about">
                <a>Sobre</a>
              </NextLink>
            </li>
          </ul>
        </Navbar>

        {post ? (
          <PostInfo>
            <h1>{post.title}</h1>
            <span>
              <small>{postInfo}</small>
            </span>
          </PostInfo>
        ) : (
          <About>
            <code>console.log(&#34;Hello Word&#34;)</code>
            <h1>Desenvolvedor FullStack</h1>
          </About>
        )}
      </Hero>

      <main>{children}</main>

      <Footer>
        <div>
          <section>
            <div>
              <h4>Contato</h4>
              <a href="mailto:melquisedecfelipe@gmail.com">
                <FiMail />
              </a>
            </div>
            <div>
              <h4>Social</h4>
              <ul>
                <li>
                  <a href="https://www.instagram.com/httpsmelqui/">
                    <FiInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/melquisedecfelipe/">
                    <FiLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/httpsmelqui">
                    <FiTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <small>Melquisedec Felipe 2021 &#xa9; All rights reserved</small>
        </div>
      </Footer>
    </TemplateContainer>
  )
}

export default Template
