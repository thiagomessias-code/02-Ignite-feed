import { Trash,ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false}src="https://github.com/thiagomessias-code.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Messias</strong>
                        <time title="11 de Maio as 08:13" dateTime="2022-05-17">Publicado há 1h</time>

                        </div>
                        <button title='Deletar Comentrio'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima.</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir 
                        <span>20</span>
                        </button>
                </footer>

            </div>
        </div>
    )
}