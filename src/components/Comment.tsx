import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import style from './Comment.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}
export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleApplauseClick() {
    setLikeCount(likeCount + 1)
  }
  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} url="https://github.com/ciceroff.png" />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Nome</strong>
              <time title="11 de maio" dateTime="2023-02-17">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          {' '}
          <button onClick={handleApplauseClick}>
            {' '}
            <ThumbsUp /> Aplaudir{' '}
            <span defaultValue={likeCount}>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
