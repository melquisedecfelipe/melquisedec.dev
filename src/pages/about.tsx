import React, { useCallback } from 'react'

import { AboutContainer, Academic, Experience } from '@/styles/pages/About'

import Template from '@/components/Template'
import SEO from '@/components/SEO'

import { dateFormated } from '@/utils/dateFormated'

const experiences = [
  {
    company: 'Ambev Tech',
    description:
      'Ser responsável por desenvolver sistemas de software, aplicando as melhores tecnologias e garantindo a qualidade do código, bem como, entregando produtividade e qualidade, para atender as necessidades e a satisfação do cliente.',
    endDate: 'Atual',
    image: '/static/ambevTech.jpg',
    office: 'Analista Desenvolvedor',
    startDate: '01/01/2021',
    vacancy: 'https://ambevtech.gupy.io/'
  },
  {
    company: '4all',
    description:
      'Ser capaz de transmitir e absorver o conhecimento dos seus colegas, desenvolver componentes reutilizáveis, transformar incríveis layouts em código de alta qualidade (pixel perfect), produzir código limpo/eficiente e testes baseados em especificações, ter capacidade de compreender histórias de usuários ágeis e traduzi-las em requisitos técnicos e criar documentação técnica do seu trabalho e código.',
    endDate: '01/01/2021',
    image: '/static/4all.jpg',
    office: 'Desenvolvedor Front-End',
    startDate: '01/08/2020',
    vacancy: 'https://4all.gupy.io/'
  },
  {
    company: 'Finch Soluções',
    description:
      'Desenvolver soluções responsivas para produtos, projetos e provas de conceito, assegurar a compatibilidade cross-browser e cross-plataform, criar soluções que sejam rápidas e dentro da proposta da interface desenvolvida, produzir um código limpo, documentado, componentizado e estruturado.',
    endDate: '01/08/2020',
    image: '/static/finchSolucoes.png',
    office: 'Analista Desenvolvedor',
    startDate: '01/07/2019',
    vacancy: 'https://finchsolucoes.compleo.com.br/'
  }
]

const academics = [
  {
    course: 'Pós Graduação – Engenharia de Software',
    endYear: '2022',
    image: '/static/pucMinas.png',
    institution: 'Pontifícia Universidade Católica de Minas Gerais',
    startYear: '2021'
  },
  {
    course: 'Bacharelado  – Ciência da Computação',
    endYear: '2020',
    image: '/static/unip.jpg',
    institution: 'Universidade Paulista',
    startYear: '2016'
  }
]

const pages: React.FC = () => {
  const getDate = useCallback(experience => {
    const { endDate, startDate } = experience

    const formatedStartDate = dateFormated(startDate)

    if (endDate === 'Atual') {
      return `${formatedStartDate} – ${endDate}`
    }

    const formatedEndDate = dateFormated(endDate)

    return `${formatedStartDate} – ${formatedEndDate}`
  }, [])

  return (
    <Template>
      <SEO title="Experiência" shouldExcludeTitleSuffix />

      <AboutContainer>
        <Experience>
          <h4>Experiência</h4>

          <ul>
            {experiences.map(experience => (
              <li key={experience.company}>
                <img src={experience.image} alt={experience.company} />
                <span>
                  <h3>
                    {experience.company} – {experience.office}
                  </h3>
                  <small>{getDate(experience)}</small>
                  <p>{experience.description}</p>
                  <a href={experience.vacancy}>Vagas &#10141;</a>
                </span>
              </li>
            ))}
          </ul>
        </Experience>

        <Academic>
          <h4>Formação Acadêmica</h4>

          <ul>
            {academics.map(academic => (
              <li key={academic.institution}>
                <img src={academic.image} alt={academic.institution} />
                <span>
                  <h3>{academic.course}</h3>
                  <p>{academic.institution}</p>
                  <small>
                    {academic.startYear} – {academic.endYear}
                  </small>
                </span>
              </li>
            ))}
          </ul>
        </Academic>
      </AboutContainer>
    </Template>
  )
}

export default pages
