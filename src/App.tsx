import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ChannelList from './ChannelList';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <ChannelList />
  // <BrowserRouter>
  //   <div>
  //     <ul>
  //       <li><Link to='/'>Home</Link></li>
  //       <li><Link to='/about'>About</Link></li>
  //       <li><Link to='/friends'>Friends</Link></li>
  //     </ul>

  //     <Route exact path='/' component={Home} />
  //     <Route path='/about' component={About} />
  //     <Route path='/friends' component={Friends} />
  //     <Route path='/menus/:id' component={ChannelList} />
  //   </div>
  // </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
)
const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
)

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <Header />
//       <ChannelList />

//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </div>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
