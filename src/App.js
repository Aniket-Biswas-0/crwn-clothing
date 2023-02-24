import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.components';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

/*import { Form } from 'react-router-dom';*/

const Shop = () => {
  return <h1>I am shop page</h1>;
}

const App = () => {
  return (
      <Routes>
        <Route path='/' element= { <Navigation/> }>
          <Route index element= { <Home/> }/>
          <Route path='shop' element= { <Shop/> }/>
          <Route path='sign-in' element= { <SignIn/> }/>
        </Route>
      </Routes>
    );
} 

export default App;