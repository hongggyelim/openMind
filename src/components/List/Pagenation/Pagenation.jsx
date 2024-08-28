import styles from './Pagenation.module.css';

function Pagenation({ offset, totalPage, onChange, limit }) {
  const maxPage = 5;
  let startPage;
  const offsetPage = offset / limit + 1;
  let calNum;

  if (offsetPage <= maxPage) startPage = 1;
  else {
    calNum = Math.ceil(offsetPage / maxPage);
    startPage = (calNum - 1) * maxPage + 1;
  }

  const pageArr = Array.from(
    { length: Math.min(maxPage, totalPage - startPage + 1) },
    (_, i) => startPage + i,
  );

  return (
    <div className={styles['btn-box']}>
      <button
        disabled={offsetPage === 1}
        className={`${styles['pagenation-btn']} ${styles['left-arrow']}`}
        onClick={() => onChange(offset - limit)}
      ></button>
      {pageArr.map(page => (
        <button
          key={page}
          className={`${styles['pagenation-btn']} ${offsetPage === page ? styles['selected'] : styles['']}`}
          onClick={() => onChange((page - 1) * limit)}
        >
          {page}
        </button>
      ))}
      <button
        disabled={offsetPage === totalPage}
        className={`${styles['pagenation-btn']} ${styles['right-arrow']}`}
        onClick={() => onChange(offset + limit)}
      ></button>
    </div>
  );
}

export default Pagenation;
