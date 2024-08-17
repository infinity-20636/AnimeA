import { type FC } from 'react';
import './Account.scss';
import accountImg from "@/assets/image/account.svg"

export interface IAccountProps {

}
const Account: FC<IAccountProps> = ({})=> {
return (
        <>
            <section className='section'>
                <img src={accountImg} alt="" />
                <h2 className='account'>Имя: admin</h2>
                <h2 className="account">Пароль: **************</h2>
</section>
        </>
    )
}
export default Account