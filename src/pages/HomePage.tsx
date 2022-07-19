import React from 'react'
import { useSearchUsersQuery } from '../store/gh/gh.api'

export default function HomePage() {
  const {isLoading,isError,data} = useSearchUsersQuery('Musabiii');
  return (
    <div>HomePage</div>
  )
}
