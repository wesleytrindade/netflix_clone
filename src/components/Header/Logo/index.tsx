import styles from './Logo.module.scss';
import { ImageLogo } from './ImageLogo';

export function Logo(){
    return(
        <div className={styles.logo_container}>
            <ImageLogo/>
        </div>
    )
}