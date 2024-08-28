import { useEffect } from 'react';
import styles from './Toast.module.css';

function Toast({ setToast, text }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return <strong className={`${styles['toast']}`}>{text}</strong>;
}

export default Toast;
