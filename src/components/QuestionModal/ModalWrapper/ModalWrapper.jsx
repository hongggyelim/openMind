import { QuestionForm } from '../QuestionForm/QuestionForm';

export function ModalWrapper() {
  return (
    <div>
      <div>
        <div>bg</div>
        질문을 작성하세요
      </div>
      {/* 나중에 유저 프로필 이미지, 이름 prop으로 받아오기 */}
      <div>To.아초는 고양이</div>
      <QuestionForm />
    </div>
  );
}
