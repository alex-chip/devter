import Link from 'next/link'
import AppLayout from '../AppLayout'

export default function Timeline ({ children }) {
  return (
    <>
      <AppLayout>
        <h1>This is the timeline of {userName}</h1>
        <Link href='/'>
          <a>Go Home</a>
        </Link>
      </AppLayout>
      <style jsx>{`
        h1 {
          font-size: 36px;
          color: red;
        }
      `}</style>
    </>
  )
}
