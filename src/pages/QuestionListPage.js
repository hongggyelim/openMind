import UserProfileList from '../components/List/UserProfileList/UserProfileList';
import { Gnb } from '../components/List/Gnb/Gnb';

export function QuestionListPage() {
  const userInfo = JSON.parse(localStorage.getItem('info'));
  return (
    <div className="wrap-inner">
      <Gnb
        btnLink={userInfo.id ? `/post/${userInfo.id}/answer` : '/'}
        btnText="답변하러 가기"
        hasLogo={true}
      />
      <UserProfileList />
    </div>
  );
}
