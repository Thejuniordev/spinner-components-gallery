import styles from './Card.module.scss'

export default function Card() {
    return (
        <div className={styles.card}>
            <header className={styles.card__header}>
                <strong className={styles.card__title}> Spinner 1</strong>
            </header>

            <button className={styles.card__btn}>

            </button>
        </div>
    )
}