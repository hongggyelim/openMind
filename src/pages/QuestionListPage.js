import UserProfileList from '../components/UserProfileList/UserProfileList';
import { Gnb } from '../components/Gnb/Gnb';

export function QuestionListPage() {
  return (
    <div className="wrap-inner">
      <Gnb />
      <UserProfileList />
    </div>
  );
}
