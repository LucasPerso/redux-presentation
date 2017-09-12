import cx from 'classnames';
import Prism from 'react-prism';
import { withStyles } from 'vitaminjs';

import s from '../style.css';

const Code = ({ children, className }) => (
    <Prism className={['language-jsx', s.code, className].join(' ')}>
        {children}
    </Prism>
);

export default withStyles(s)(Code);
