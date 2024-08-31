import style from './ScrollTop.module.css';
export const ScrollTop = ({ children }) => {
  return (
    <>
      <a href="" className={style['scroll-top']}>
        {children}
        <span className={style['blind']}>맨 위로 이동</span>
      </a>
    </>
  );
};
