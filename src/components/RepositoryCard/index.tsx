import React from 'react'
import { Emojione } from 'react-emoji-render'

import { RepositoryCardContainer } from './styles'

import { Repository } from '@/types'
import { dateFormated } from '@/utils/dateFormated'

interface RepositoryCardProps {
  repository: Repository
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  return (
    <RepositoryCardContainer href={repository.htmlUrl}>
      <div>
        <h4>{repository.name}</h4>
        <Emojione text={repository.description} />
        <div>
          <small>{dateFormated(repository.updatedAt, true)}</small>
          <a href={repository.updatedAt}>Ver ➝</a>
        </div>
      </div>
    </RepositoryCardContainer>
  )
}

export default RepositoryCard