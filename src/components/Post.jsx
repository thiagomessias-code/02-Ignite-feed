import {Avatar} from './Avatar'
import {Comment} from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/thiagomessias-code.png" alt=""/>
                    <div className={styles.authorInfo}>
                        <strong>Thiago Messias</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio as 08:13" dateTime="2022-05-17">Publicado hรก 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa ๐</p>
                <p>Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW
                    Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐</p>

                <p>๐
                    <a href="">jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="">#novoprojeto #nlw #rocketseat</a>
                </p>
            </div>
            <form className={styles.comentForm}>
                <strong>Deixe seu Cometario</strong>
                <textarea placeholder='Deixe um Comentario'></textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}