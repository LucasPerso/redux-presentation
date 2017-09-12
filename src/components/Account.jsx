import { withStyles } from 'vitaminjs';

import s from '../example.css';

const Account = ({
    balance,
    depositAction,
    withdrawAction,
}) => (
    <div>
        <button className={s.red} onClick={depositAction}>
            deposit
        </button>
        <button className={s.blue} onClick={withdrawAction}>
            withdraw
        </button>
        <div>Balance: {balance}</div>
    </div>
);

export default withStyles(s)(Account);
