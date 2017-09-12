import { withStyles } from 'vitaminjs';

import s from '../example.css';

import Loader from './CoolLoader';

const CatDisplayer = ({ cats, isFetching, getCat }) => (
    <div>
        <div className={s.cats}>
            {cats.map((cat) => <img key={cat+Math.random()} src={`http://localhost:1212${cat}`} />)}
            {isFetching && <Loader />}
        </div>

        <button onClick={getCat}>Get cat!</button>
    </div>
);

export default withStyles(s)(CatDisplayer);
