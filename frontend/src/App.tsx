import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Layout from './layouts/Layout';
import Register from './pages/register';
import SignIn from './pages/SignIn';




const App = ()=>{
  return(
    <Router >
      <Routes>
        <Route path="/" element={<Layout>
          <p>Home Page</p>
        </Layout>}/>
        <Route path="/search" element={<Layout>
          <p>search Page</p>
        </Layout>}/>
        <Route path="/Register" element = {<Layout><Register /></Layout>}/>
        <Route path="/sign-in" element={<Layout><SignIn/></Layout>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  )
}

export default App;