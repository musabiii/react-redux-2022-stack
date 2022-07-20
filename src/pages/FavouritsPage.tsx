import React from 'react'
import { useAppSelector } from '../hooks/redux'

export default function FavouritsPage() {

  const {favourits} = useAppSelector(state=>state.github)


  if (favourits.length===0 ) return <p className='text-center'>no items</p>
  return (
    <ul className='list-none'>
      {favourits.map(f=>(
        <li className='' key={f}>
          <a href={f} target='_blank'>
            {f}
          </a>
        </li>
      ))}
    </ul>
  )
}
