import style from './ScrollTop.module.css';
export const ScrollTop = ({ children, onClick }) => {
  return (
    <>
      <button type="button" className={style['scroll-top']} onClick={onClick}>
        {children}
        <span className={style['blind']}>맨 위로 이동</span>
      </button>
    </>
  );
};
