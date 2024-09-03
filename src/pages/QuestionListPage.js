import UserProfileList from '../components/List/UserProfileList/UserProfileList';
import { Gnb } from '../components/List/Gnb/Gnb';
import { USER_KEY } from '../constants/localstorage';
import { getLocalstoage } from '../utils/localstorageFunc';

export function QuestionListPage() {
  const userInfo = getLocalstoage(USER_KEY);
  return (
    <div className="wrap-inner">
      <Gnb
        btnLink={userInfo?.id ? `/post/${userInfo.id}/answer` : '/'}
        btnText="답변하러 가기"
        hasLogo={true}
      />
      <UserProfileList />
    </div>
  );
}
