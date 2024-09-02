import { useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  return createPortal(
    <strong className={`${styles['toast']}`}>{text}</strong>,
    document.body,
  );
}

export default Toast;
