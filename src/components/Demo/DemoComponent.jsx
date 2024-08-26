import styles from './Demo.module.css';

export function Demo() {
  return (
    <div>
      <h1 className={styles.demoComponent}>데모 컴포넌트 입니다</h1>
      <h2 className={styles.demoComponent2}>style test</h2>
      <div className={styles['box-content']}>box</div>
    </div>
  );
}
