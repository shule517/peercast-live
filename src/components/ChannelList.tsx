import * as React from 'react';
import ChannelItem from './ChannelItem'
import Channel from '../Channel'
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ChannelList = () => {
    const [channels, setChannels] = useState<Channel[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const tp_res = await fetch('http://temp.orz.hm/yp/index.txt', {credentials: 'same-origin'});
            const tp_text = await tp_res.text();

            // const sp_res = await fetch('http://bayonet.ddo.jp/sp/index.txt', {credentials: 'same-origin'});
            // const sp_text = await sp_res.text();
            const sp_text = "";

            const text = tp_text + '\n' + sp_text;
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
        <ChannelStyle>
            {
                channels.filter(channel => channel.type === 'FLV').map((item, index) => {
                    return <ChannelItem key={index} channel={item}/>
                })
            }
        </ChannelStyle>
    );
};

const ChannelStyle = styled.div`
  padding: 50px;
`

export default ChannelList;
