import * as React from 'react';
import styled from 'styled-components';
import Channel from '../Channel';
import { useState, useEffect } from 'react';

declare var flvjs: any;

type Props = {
    streamId: String,
    channels: Channel[],
}

const ChannelPlayer = (props: Props) => {
    const {
        streamId,
        channels,
    } = props;

    const channel: any = channels.find((channel) => channel.streamId === streamId) || {
        name: 'チャンネルが見つかりません',
        streamId: '',
        tip: '',
        contactUrl: '',
        genre: '',
        details: '',
        listenerCount: 0,
        relayCount: 0,
        bitrate: 0,
        type: 'FLV',
    }

    function unescapeHTML(html: string) {
    var escapeEl = document.createElement('textarea');
    escapeEl.innerHTML = html;
    return escapeEl.textContent;
    }

    const channelDetail = (channel: Channel) => {
        let text = '';
        const details = unescapeHTML(channel.details.replace(/ - .*/, '')) || ''

        if (channel.genre.length) {
            text = channel.genre
            if (details.length) {
                text += ' - '
            }
        }
        if (details.length) {
            text += details
        }
        return text;
    }

    const videoElementId = `videoElement-${channel.streamId}`;
    const thumnbailElementId = `thumnbailElement-${channel.streamId}`;
    let flvPlayer: any = null;
    let hiddenPlayer = true;

    useEffect(() => {
        let videoElement:any = document.getElementById(videoElementId);
        videoElement.hidden = false;
        console.log('channel.streamId:' + channel.streamId)
        if (channel.streamId.length > 0) {
            console.log('aaa')
            const url = `http://peca.live:7144/stream/${channel.streamId}.flv?tip=${channel.tip}`;
            flvPlayer = flvjs.createPlayer({
                type: 'flv',
                isLive: true,
                url: url
            });
            flvPlayer.attachMediaElement(videoElement);
            flvPlayer.load();
            flvPlayer.play();
            hiddenPlayer = false;
        }
    })

    return (
        <ChannelItemStyle>
            <a>
                <div>
                    <video id={videoElementId} controls width="800"></video>
                </div>
                <ChannelDetail>
                    <Title>
                        {channelDetail(channel)}
                    </Title>
                    <Details>
                        {channel.name}
                    </Details>
                </ChannelDetail>
            </a>
        </ChannelItemStyle>
    );
};

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Thumbnail = styled.img`
  width: 347.5px;
  height: 195.47px;
`

const ChannelDetail = styled.div`
  padding: 0px 5px;
`

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;  width: 347px;

  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  color: rgb(25, 23, 28);
  font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-top: 5px;
  margin-bottom: 2px;
`

const Details = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;  width: 347px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: rgb(50, 47, 55);
  font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
`

const ChannelItemStyle = styled.div`
  float: left;
  padding: 10px;
`

export default ChannelPlayer;
