import { Title, EvaneosLogo } from 'evaneos-react-components';
import { withStyles } from 'vitaminjs';

import s from '../style.css';
const Slide = ({ content, title}) => {
    return (
        <div className={s.slideContainer}>
            {title && <div className={s.titleContainer}>
                <Title
                    size="display"
                >
                    {title}
                </Title>
                <EvaneosLogo className={s.logo} />
            </div>}
            <div className={s.contentContainer}>
                {content}
            </div>
        </div>
    );
};

export default withStyles(s)(Slide);
