import UserProfileList from '../components/List/UserProfileList/UserProfileList';
import { Gnb } from '../components/List/Gnb/Gnb';

export function QuestionListPage() {
  return (
    <div className="wrap-inner">
      <Gnb
        // btnLink={userId ? `/post/${userId}/answer` : '/'}
        btnLink={'/'}
        btnText="답변하러 가기"
        hasLogo={true}
      />
      <UserProfileList />
    </div>
  );
}
