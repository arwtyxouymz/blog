import React from 'react'
import Link from 'next/link'

type Props = {
  url: string
}

const IconLink: React.FC<Props> = ({ url, children }) => {
  return (
    <Link href={url}>
      <a>{children}</a>
    </Link>
  )
}

export default IconLink
