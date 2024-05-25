import React from 'react'
import Link from 'next/link'

const NewsPage = () => {
  return (
    <div>
      <h1>this is home page</h1>
      <ul>
        <li>
          <Link href='news/nextjs-is-great'>
            nextjs is a great framework
          </Link>
        </li>
        <li>Something else</li>
      </ul>
    </div>
  )
}

export default NewsPage
