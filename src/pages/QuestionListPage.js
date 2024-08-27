import UserProfileList from '../components/List/UserProfileList/UserProfileList';
import { Gnb } from '../components/List/Gnb/Gnb';

export function QuestionListPage() {
  return (
    <div className="wrap-inner">
      <Gnb />
      <UserProfileList />
    </div>
  );
}
