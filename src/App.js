import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.components';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

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
          <Route path='auth' element= { <Authentication/> }/>
        </Route>
      </Routes>
    );
} 

export default App;