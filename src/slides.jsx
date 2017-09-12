import { Title } from 'evaneos-react-components';
import { withStyles } from 'vitaminjs';

import s from './style.css';

import reduxSideEffectsGifs from '../assets/redux_side_effect.gif';
import reduxStore from '../assets/redux_store.png';
import reduxSimple from '../assets/redux_simple.gif';
import reduxAction from '../assets/redux_action.png';
import reduxMiddlewares from '../assets/redux_middleware.png';
import reduxView from '../assets/redux_view.png';
import reduxReducers from '../assets/redux_reducers.png';

import connectedComponents from '../assets/stateTreeRedux.svg';

import AccountContainer from './containers/AccountContainer';
import AccountCat from './containers/AccountCat';
import Code from './components/Code';

export default withStyles(s)([
    {
        content: (
            <Title size="display">Redux & friends</Title>
        )
    },
    {
        title: 'Sommaire',
        content: (
            <div>
                <p>1. Redux in a nutshell</p>
                <p>2. Smart vs Dumb</p>
                <p>3. Data Flow</p>
                <p>4. Middleware</p>
                <p>5. Side Effects</p>
                <p>6. Time-Travel Debugging with Redux DevTools</p>
            </div>
        )
    },
    {
        content: <Title size="display">Redux in a nutshell</Title>
    },
    {
        title: 'Redux in a nutshell',
        content: (
            <div>
                {'Redux is a predictable state container for JavaScript apps.'}
            </div>
        ),
    },
    {
        title: 'Redux in a nutshell - why ?',
        content: (
            <div>
                <div style={{ marginBottom: '50px' }}>
                    <Title style={{ marginBottom: '20px' }} size="display">Single source of truth</Title>
                    <Title style={{ marginBottom: '20px' }} size="display">Read-only</Title>
                    <Title style={{ marginBottom: '20px' }} size="display">Predictable and reliable (because of pure functions)</Title>
                </div>
            </div>
        )
    },
    {
        title: 'Redux in a nutshell - some usages',
        content: (
            <div>
                <Title style={{ marginBottom: '20px' }} size="page">Persist state to a local storage</Title>
                <Title style={{ marginBottom: '20px' }} size="page">Pre-fill state on the server</Title>
                <Title style={{ marginBottom: '20px' }} size="page">Take a state snapshot, to automated bug reports and ease bug reproductibility</Title>
                <p>...</p>
            </div>
        )
    },
    {
        title: 'Redux in a nutshell - From MVC to RVA',
        content: (
            <img style={{ height: '80%' }} src={reduxSimple} />
        ),
    },
    {
        title: 'Redux in a nutshell - View',
        content: (
            <div className={s.sideBySide}>
                <div>
                    <Code>
                        {`const Account = ({
 balance,
 depositAction,
 withdrawAction,
}) => {
  <div>
      <button onClick={depositAction}>
          deposit
      </button>
      <button onClick={withdrawAction}>
          withdraw
      </button>
      <div>Balance: {balance}</div>
  </div>
}`}
                    </Code>
                </div>
                <div>
                    <img className={s.img} src={reduxView} />
                </div>
            </div>
        )
    },
    {
        title: 'Redux in a nutshell - Action',
        content: (
            <div className={s.sideBySide}>
                <div>
                    <Title size="page">Deposit Action</Title>
                    <Code>
                        {`{
    type: 'DEPOSIT',
    value: 10,\n}`}
                    </Code>
                </div>
                <div>
                    <img className={s.img} src={reduxAction} />
                </div>
            </div>
        )
    },
    {
        title: 'Redux in a nutshell - Reducer',
        content: (
            <div className={s.sideBySide}>
                <div>
                    <Title size="page">Account reducer</Title>
                    <Code>
                        {`function account(state = 0, action) {
  switch (action.type) {
  case 'DEPOSIT':
    return state + action.value
  case 'WITHDRAW':
    return state - action.value
  default:
    return state
  }
}`}
                    </Code>
                    <div>Changes are pure functions</div>
                </div>
                <div>
                    <img className={s.img} src={reduxReducers} />
                </div>
            </div>
        )
    },
    {
        title: 'Redux in a nutshell - Store',
        content: (
            <div className={s.sideBySide}>
                <div>
                    <p>Holds application state</p>
                    <p>Allow access to state with <i>getState()</i> function</p>
                    <p>Allow state to be updated via <i>dispatch()</i> actions</p>
                </div>
                <div>
                    <img className={s.img} src={reduxStore}/>
                </div>
            </div>
        ),
    },
    {
        title: 'Redux in a nutshell - Connecting the state and the view',
        content: (
            <div>
                <Title size="page">React-Redux</Title>
                <Code>
                    {`connect(mapStateToProps, mapDispatchToProps)(Account)`}
                </Code>
                <Code>
                    {`function mapStateToProps(state, ownProps) {
  return { balance: state.account }
}

function mapDispatchToProps(dispatch) {
  return {
    depositAction: () => dispatch(deposit()),
  }
}`}
                </Code>
            </div>
        )
    },
    {
        content: <Title size="display">Smart vs Dumb</Title>
    },
    {
        title: 'Smart vs Dumb',
        content: (
            <div>
                <div className={s.sideBySide}>
                    <Code className={s.codeSmall}>
                        {`const Account = ({
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
)`}
                    </Code>
                    <div>
                        <Title size="page" style={{ marginBottom: '30px' }}>Dumb presentational component</Title>
                        <p>Real view</p>
                        <p>Uses only Props</p>
                        <p>Functional Components</p>
                        <p>DOM Markup and styles</p>
                        <p>Reusable</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Smart vs Dumb',
        content: (
            <div>
                <div className={s.sideBySide}>
                    <Code>
                        {`const mapStateToProps = (state, ownProps) => ({ balance: state.account});

const mapDispatchToProps = (dispatch) => ({
    depositAction: () => dispatch(deposit()),
    withdrawAction: () => dispatch(withdraw())
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);`}
                    </Code>
                    <div>
                        <Title style={{ marginBottom: '30px' }}>Smart container</Title>
                        <p>Has logic in it</p>
                        <p>Connected to Redux store</p>
                        <p>Binds callback for dumb components</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        content: <Title size="display">Data flow example</Title>,
    },
    {
        title: 'Data flow example',
        content: (
            <div className={s.sideBySide}>
                <div>
                    <Title size="page">Dumb view</Title>
                    <Code className={s.codeSmall}>
                        {`const Account = ({
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
)`}
                    </Code>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '250px' }}>
                    <p>{' => '}</p>
                    <i style={{ fontSize: '25px' }}>depositAction()</i>
                </div>
                <div>
                    <Title>Smart container</Title>
                    <Code className={s.codeSmall}>
                        {`const mapStateToProps = (state, ownProps) => ({ balance: state.account});

const mapDispatchToProps = (dispatch) => ({
    depositAction: () => dispatch(deposit()),
    withdrawAction: () => dispatch(withdraw())
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);`}
                    </Code>
                </div>
            </div>
        ),
    },
    {
        title: 'Data flow example',
        content: (
            <div className={s.sideBySide}>
                <div>
                    <Title>Smart container</Title>
                    <Code className={s.codeSmall}>
                        {`const mapStateToProps = (state, ownProps) => ({ balance: state.account});

const mapDispatchToProps = (dispatch) => ({
    depositAction: () => dispatch(deposit()),
    withdrawAction: () => dispatch(withdraw())
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);`}
                    </Code>
                </div>
                <div style={{ maxWidth: '250px' }}>
                    <p>=></p>
                    <i style={{ fontSize: '25px' }}>dispatch(deposit())</i>
                </div>
                <div>
                    <Title>Action</Title>
                    <Code className={s.codeSmall}>
                        {`export const deposit = () => ({
    type: 'DEPOSIT',
    value: 10,
});`}
                    </Code>
                </div>
            </div>
        ),
    },
    {
        title: 'Data flow example',
        content: (
            <div className={s.sideBySide}>
                <div>
                    <Title>Action</Title>
                    <Code className={s.codeSmall}>
                        {`export const deposit = () => ({
    type: 'DEPOSIT',
    value: 10,
});`}
                    </Code>
                </div>
                <div style={{ maxWidth: '250px' }}>
                    <p>=></p>
                </div>
                <div>
                    <Title size="page">Reducer</Title>
                    <Code className={s.codeSmall}>
                        {`function account(state = 0, action) {
  switch (action.type) {
  case 'DEPOSIT':
    return state + action.value
  case 'WITHDRAW':
    return state - action.value
  default:
    return state
  }
}`}
                    </Code>
                </div>
                <div style={{ maxWidth: '250px' }}>
                    <p>=></p>
                    <i style={{ fontSize: '25px' }}>update state</i>
                </div>
                <div>
                    <Title size="page">State</Title>
                    <Code>
                        {`{
    account: 10,
}`}
                    </Code>
                </div>
            </div>
        ),
    },
    {
        title: 'Data flow example',
        content: (
            <div className={s.sideBySide}>
                <div>
                    <Title size="page">State</Title>
                    <Code>
                        {`{
    account: 10,
}`}
                    </Code>
                </div>
                <div style={{ maxWidth: '150px' }}>
                    <p>=></p>
                    <i style={{ fontSize: '25px' }}>state updated</i>
                </div>
                <div>
                    <Title size="page">Container</Title>
                    <Code className={s.codeSmall}>
                        {`const mapStateToProps = (state, ownProps) => ({ balance: state.account});

export default connect(mapStateToProps, mapDispatchToProps)(Account);`}
                    </Code>
                </div>
                <div style={{ maxWidth: '150px' }}>
                    <p>=></p>
                    <i style={{ fontSize: '25px' }}>state updated</i>
                </div>
                <div>
                    <Title size="page">Dumb view</Title>
                    <Code className={s.codeSmall}>
                        {`const Account = ({
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
)`}
                    </Code>
                </div>
            </div>
        ),
    },
    {
        title: 'Data flow example',
        content: (
            <AccountContainer />
        ),
    },
    {
        content: <Title size="display">Middleware</Title>
    },
    {
        title: 'Middleware - Definition',
        content: (
            <div>
                <p>A middleware provides an extension point</p><p>between dispatching an action, and the moment it reaches the reducer.</p>
                <img src={reduxMiddlewares} width={"100%"} />
                <p>It returns an action</p>
            </div>
        )
    },
    {
        title: 'Middleware - Some examples',
        content: (
            <div>
                <p>Logging: send data to a service (Logmatic, Sentry, etc.)</p>
                <p>Analytics: send user interactions to GTM</p>
                <p>...</p>
            </div>
        )
    },
    {
        content: (
            <div>
                <Title size="display">Side Effects</Title>
                <Title size="page">We have to go deeper</Title>
            </div>
        )
    },
    {
        title: 'Side effects',
        content: (
            <img src={reduxSideEffectsGifs} style={{ height: '80%' }} />
        )
    },
    {
        title: 'Side effects - complex action creator',
        content: (
            <div className={s.sideBySide}>
                <div>
                    <Code>
                        {`const getCat = () => (dispatch, getState) => {
   dispatch(requestCat());
   return fetch('/cat-api')
       .then(res => res.json())
       .then(cat => dispatch(receiveCat(cat)))
       .catch(error => dispatch(failureCat(error)));
};`}
                    </Code>
                </div>
                <div>
                    <Code>
                        {`const requestCat = () => ({
    type: 'FETCH_CAT_REQUEST',
})`}
                    </Code>
                    <Code>
                        {`const receiveCat = cat => ({
    type: 'FETCH_CAT_RECEIVE',
    cat,
})`}
                    </Code>
                    <Code>
                        {`const failureCat = error => ({
    type: 'FETCH_CAT_ERROR',
    error,
})`}
                    </Code>
                </div>
            </div>
        )
    },
    {
        title: 'Side effects - reducer',
        content: (
            <div className={s.sideBySide}>
                <Code className={s.codeSmall}>
                    {`const cats = (state = { images: [], isFetching: false }, action) => {
switch (action.type) {
    case 'FETCH_CAT_REQUEST':
        return {
            ...state,
            isFetching: true,
        };
    case 'FETCH_CAT_SUCCESS':
        return {
            ...state,
            isFetching: false,
            images: state.images.concat([action.cat.url]),
        };
    case 'FETCH_CAT_ERROR':
        return {
            ...state,
            isFetching: false,
            error: action.error,
        };
    default:
        return state;
}};`}
                </Code>
            </div>
        )
    },
    {
        title: 'Side effects - example',
        content: (
            <div className={s.sideBySide}>
                <Code className={s.codeSmall}>
                    {`class AccountContainer extends Component {
    render() {
        return (
            <div>
                <CatDisplayer
                   cats={this.props.cats}
                   getCat={() => this.props.getCatAction()}
                   isFetching={this.props.isFetching}
                />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    cats: state.cats.images,
    isFetching: state.cats.isFetching,
});
const mapDispatchToProps = (dispatch) => ({
    getCatAction: () => dispatch(getCat()),
});`}
                </Code>
                <Code className={s.codeSmall}>
                    {`const CatDisplayer = ({ cats, isFetching, getCat }) => (
    <div>
        <div className={s.cats}>
            {cats.map(cat => <img key={cat} src={\`http://localhost:1212\${cat}\`} />)}
        </div>
        {isFetching && <Loader />}
        <button onClick={getCat}>Get cat!</button>
    </div>
);`}
                </Code>
            </div>
        )
    },
    {
        title: 'Side effects - example',
        content: (
            <AccountCat />
        )
    },
    {
        content: 'Time-travel Debugging with Redux DevTools',
    },
    {
        title: 'Time-travel Debugging with Redux DevTools',
        content: (
            <AccountCat />
        )
    }
]);
