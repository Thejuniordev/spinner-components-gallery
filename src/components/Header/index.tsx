import Image from 'next/image';

import styles  from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.content}>
            <nav className={styles.content__nav}>
                <ul className={styles.content__navList}>
                    <li className={styles.content__navPerfil}>
                        <figure className={styles.content__navAvatar}>
                            <Image 
                                src="u/12980509?v=4" 
                                alt="Avatar" 
                                width={500}
                                height={500}
                            />
                        </figure>
                        <strong className={styles.content__perfilName}>Olá Junior</strong>
                    </li>
                    <li className={styles.content__navItem}>
                        <span className={styles.content__navName}>Dashboard</span>
                    </li>
                    <li className={styles.content__navItem}>
                        <span className={styles.content__navName}>Perfil</span>
                    </li>
                    <li className={styles.content__navItem}>
                        <span className={styles.content__navName}>Plugins</span>
                    </li>
                    <li className={styles.content__navItem}>
                        <span className={styles.content__navName}>Categoria</span>
                    </li>
                    <li className={styles.content__navItem}>
                        <span className={styles.content__navName}>Modelos</span>
                    </li>
                    <li className={styles.content__navItem}>
                        <span className={styles.content__navName}>Configuração</span>
                    </li>
                    <li className={styles.content__navItem}>
                        <span className={styles.content__navName}>Log Out</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}