'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './index.module.css'

const links = [
  ['https://github.com/stonekite/azalia-challenge', 'github'],
  ['/messages', 'messages'],
  ['/numbers', 'numbers']
]

const Navigation = () => {
  const pathname = usePathname()
  return (
    <nav className={ styles.nav }>
      {
        links
        .filter(([href]) => href !== pathname)
        .map(([href, name]) =>
          <Link href={ href } key={ href } className={ styles.link }>
            {name}
          </Link>
        )
      }
    </nav>
  )
}

export default Navigation
