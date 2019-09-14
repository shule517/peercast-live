// import React, { FC } from 'react';
// import Counter from './containers/Counter';
// import './App.css';

// const App: FC = () => (
//   <div className="container">
//     <header>
//       <h1>ビーズカウンター</h1>
//     </header>
//     <Counter />
//   </div>
// );

// export default App;

// import React, { Component } from "react";
// import { Button, Card, Statistic } from "semantic-ui-react";
// import "./App.css";
// interface AppState {
//   count: number;
// }
// class App extends Component<{}, AppState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   increment() {
//     this.setState(prevState => ({
//       count: prevState.count + 1
//     }));
//   }
//   decrement() {
//     this.setState(prevState => ({
//       count: prevState.count - 1
//     }));
//   }
//   render() {
//     const { count } = this.state;
//     return (
//       <div className="container">
//         <header>
//           <h1>カ ウ ン タ ー </h1>
//         </header>
//         <Card>
//           <Statistic className="number-board">
//             <Statistic.Label>count</Statistic.Label>
//             <Statistic.Value>{count}</Statistic.Value>
//           </Statistic>
//           <Card.Content>
//             <div className="ui two buttons">
//               <Button color="red" onClick={() => this.decrement()}>
//                 -1
//               </Button>
//               <Button color="green" onClick={() => this.increment()}>
//                 +1
//               </Button>
//             </div>
//           </Card.Content>
//         </Card>
//       </div>
//     );
//   }
// }
// export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ChannelList from './components/ChannelList';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Counter from './components/Counter';

// // // type AppProps = {
// // //   fuga: string,
// // //   handleClick: () => void;
// // // }

// // // type Props = {
// // //   // fuga: string,
// // //   // handleClick: () => void;
// // // }

// // // const App = (props: Props) => {
// // //   const {
// // //     // fuga,
// // //     // handleClick
// // //   } = props;

// // //   return (
// // //     <div>
// // //       {/* <span>{fuga}</span> */}
// // //       {/* <button onClick={ () => handleClick() }>増加</button> */}
// // //     </div>
// // //   );
// // // }

// // // const App: FC<HeaderProps> = ({ name, children }) => {
// // //   return (
// // //     <div>
// // //       <p>{name}さんこんにちは</p>
// // //       <div>{children}</div>
// // //     </div>
// // //   )
// // // }
// // // export default class App extends React.Component {
// // //   render() {
// // //     return <div>
// // //       <span>{this.props.fuga}</span>
// // //       <button onClick={ () => this.props.handleClick() }>増加</button>
// // //     </div>
// // //   }
// // // }

import styled from 'styled-components';

const ChannelStyle = styled.div`
  padding: 40px;
`

const Logo = styled.img`
  height: 50px;
  width: 180px;
  padding-left: 7px;
`

const App = () => (
  // <Counter />
  <ChannelStyle>
    <Logo src="pecalive.png" />
    <ChannelList />
  </ChannelStyle>
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
