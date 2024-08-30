import { forwardRef } from 'react';
import { QuestionForm } from '../QuestionForm/QuestionForm';
import styles from './ModalWrapper.module.css';
import { ReactComponent as Message } from '../../../assets/icon/ic-messages.svg';

export const ModalWrapper = forwardRef(
  ({ onClick, onSubmit, onChange, placehorder, btnText }, ref) => {
    return (
      <>
        <div className={styles['modal-layer']} onClick={onClick}></div>

        <div className={styles['modal-spacer']}>
          <div className={styles['modal-wrapper']}>
            <div className={styles['modal-header']}>
              <div className={styles['modal-title']}>
                <Message fill={'#000'} />
                질문을 작성하세요
              </div>
            </div>

            <div className={styles['modal-receiver']}>
              <span className={styles['modal-to']}>To.</span>
              <span className={styles['modal-profile']}></span>
              아초는 고양이
            </div>
            <QuestionForm
              ref={ref}
              onSubmit={onSubmit}
              onChange={onChange}
              placehorder={placehorder}
              btnText={btnText}
            />
            <button
              type="button"
              className={styles['modal-exit-btn']}
              onClick={onClick}
            >
              <span className={styles['blind']}>질문 등록창 닫기</span>
            </button>
          </div>
        </div>
      </>
    );
  },
);
