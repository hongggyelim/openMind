import UserProfileList from '../components/List/UserProfileList/UserProfileList';
import { Gnb } from '../components/List/Gnb/Gnb';

const feedId = window.localStorage.getItem('id');

export function QuestionListPage() {
  return (
    <div className="wrap-inner">
      <Gnb
        btnLink={feedId ? `/post/${feedId}/answer` : '/'}
        btnText="답변하러 가기"
        hasLogo={true}
      />
      <UserProfileList />
    </div>
  );
}
