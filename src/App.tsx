import React from 'react';
import ChannelList from './components/ChannelList';
import ChannelPlayer from './components/ChannelPlayer';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import styled from 'styled-components';
import Channel from './Channel'
import { useState, useEffect } from 'react';

const ChannelStyle = styled.div`
  padding: 40px;
`

const Logo = styled.img`
  height: 50px;
  width: 180px;
  padding-left: 7px;
`

const App = () => {
  const [channels, setChannels] = useState<Channel[]>([]);

  useEffect(() => {
      const fetchData = async () => {
          const res = await fetch('https://peca-live.herokuapp.com/api/v1/channels', {credentials: 'same-origin'});
          const text = await res.text();
          const lines = text.split('\n');

          const channels: any = lines.map(line => {
              const elements = line.split('<>');
              const type = elements[9];
              if (type === null) { return null; }

              return {
                  name: elements[0],          // A.ch
                  streamId: elements[1],      // 0C1A6C6959CEB2A8BF9598BC9185FF32
                  tip: elements[2],           // 14.13.42.64:5184
                  contactUrl: elements[3],    // http://jbbs.shitaraba.net/bbs/read.cgi/game/52685/1567349533/
                  genre: elements[4],         // PS4
                  details: elements[5],       // モンスターハンターワールド：アイスボーン MHWIB - &lt;Open&gt;
                  listenerCount: elements[6], // -1
                  relayCount: elements[7],    // -1
                  bitrate: elements[8],       // 1500
                  type: type,                 // FLV
              } }
          );
          setChannels(channels);
      };

      fetchData();
  }, []);

  return (
    <BrowserRouter>
      <ChannelStyle>
        <Link to='/'>
          <Logo src="/pecalive.png" />
        </Link>
        <div>
          <Route exact path='/' render={(props) => <ChannelList channels={channels} />} />
          <Route path='/channels/:streamId' render={
              (props) => { return <ChannelPlayer streamId={props.match.params.streamId} channels={channels}/>}
            }
          />
        </div>
      </ChannelStyle>

    </BrowserRouter>
  )
}

{/* <ChannelPlayer channel={channels.find((channel) => channel.streamId === props.match.params.id)} /> */}


export default App;
