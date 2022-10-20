import styles from './Header.module.css';

import igniteLogo from '../assets/Ignite-logo.svg';
import heading from '../assets/heading.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <>
        <img src={igniteLogo} alt={'logotipo do ignite'} />
        <img src={heading} alt={'Ignite feed'} />
      </>
    </header>
  );
}
