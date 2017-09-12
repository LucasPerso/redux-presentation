import KeyHandler from 'react-key-handler';
import Helmet from 'vitaminjs/react-helmet';
import { connect } from 'vitaminjs/react-redux';
import { compose } from 'vitaminjs/redux';
import { withStyles } from 'vitaminjs';

import { previousSlide, nextSlide } from '../actions/slides'
import { getCurrentSlide } from '../selectors';

import s from '../style.css'
import globalStyle from '../style.global.css';

import slides from '../slides';

import Slide from '../components/Slide';


const App = ({ currentSlide, nextSlide, previousSlide }) => {
    return (
        <div>
            <Helmet
                link={[
                    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism-twilight.min.css' },
                ]}
                script={[
                    { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/prism.min.js' },
                    { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/components/prism-jsx.min.js' },
                ]}
            />
            <KeyHandler keyValue="ArrowRight" onKeyHandle={() => nextSlide()} />
            <KeyHandler keyValue="ArrowLeft" onKeyHandle={() => previousSlide()} />
            <div className={s.presentationContainer}>
                <Slide {...slides[currentSlide]} />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    currentSlide: getCurrentSlide(state),
});

export default compose(
    connect(
        mapStateToProps,
        { previousSlide, nextSlide }
    ),
    withStyles(s),
    withStyles(globalStyle),
)(App);
