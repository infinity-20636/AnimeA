import { type FC } from "react";
import "./Users.scss";
import accountImg from '@/assets/image/account.svg'

export interface IUsersProps {}
const Users: FC<IUsersProps> = ({}) => {

  return (
 
      <section className="section">
          <img src={accountImg} alt="" />
                <h2 className='account'>Имя: admin</h2>
                <h2 className="account">Пароль: **************</h2>
      </section>
  );
};
export default Users;
