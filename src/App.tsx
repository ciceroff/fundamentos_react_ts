import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import './global.css'
import styles from './App.module.css'

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Posts {
  id: number
  author: Author
  content: Content[]
  publishedAt: Date
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ciceroff.png',
      name: 'Cicero Fernandes',
      role: 'Estudante',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW return, evento da rocket seat',
      },
      { type: 'link', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/chfleury.png',
      name: 'Christian Fleury',
      role: 'Estudante',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW return, evento da rocket seat',
      },
      { type: 'link', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
]
function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post key={post.id} author={post.author} content={post.content} />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
