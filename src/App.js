import React, {Fragment} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/githubState'
import AlertState from './context/alert/alertState';

const App = () => {
  
  // const [alert, setAlert] = useState(null); using useState in functional components for state management (another way is use context) 

  // async componentDidMount() {
  //   this.setState({loading: true});
    
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
  //   this.setState({ users: res.data, loading: false});
    
  // }

    // const name = 'Sumir';

    // const foo = () => 'Bar';

    // return (
    //   <Fragment>
    //     <h1>Hello from {name.toUpperCase()} {1+1} {foo()}</h1>
    //     <h2>Goodbye</h2>
    //   </Fragment>
    // );

    return (
      <GithubState>
        <AlertState>
          <Router>
            <Fragment>
              <div className='App'>
                <Navbar title="Github Finder" />
                <div className='container'>
                  <Alert/> 
                  <Routes>
                    {
                    /* having route with multiple elements using Fragment or grouping them in another component 
                      <Route path='/' element={ <Fragment>
                        <Search />
                        {/* passing props to components
                          <Users loading={loading} users={users}/>    
                        <Users/>  
                      </Fragment>
                    }/> */}

                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>} />
                    <Route path='/user/:login' element={
                      // passing props to components 
                      //<User user={user} repos={repos} loading={loading}/>
                      <User />} />
                    <Route path='*' element={<NotFound/>} />
                  </Routes>
                  
                </div>  
                
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </GithubState>
    )
}

export default App;
