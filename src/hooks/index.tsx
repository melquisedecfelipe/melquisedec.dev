import React from 'react'

import { PostProvider } from './posts'

const AppProvider: React.FC = ({ children }) => (
  <PostProvider>{children}</PostProvider>
)

export default AppProvider
