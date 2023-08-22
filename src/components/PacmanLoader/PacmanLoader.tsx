import styles from './PacmanLoader.module.scss';

const PacmanLoader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.pacman} />
    </div>
  );
};

export default PacmanLoader;