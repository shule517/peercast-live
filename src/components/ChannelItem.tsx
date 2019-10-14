import * as React from 'react';
import styled from 'styled-components';
import Channel from '../Channel';
import { Link } from 'react-router-dom'

declare var flvjs: any;

type Props = {
    channel: Channel,
}

const ChannelItem = (props: Props) => {
    const {
        channel,
    } = props;

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
    const onSelectChannel = () => {
        return;
        if (!flvPlayer) {
            let thumnbailElement:any = document.getElementById(thumnbailElementId);
            thumnbailElement.hidden = true;

            let videoElement:any = document.getElementById(videoElementId);
            videoElement.hidden = false;
            const url = `http://150.95.177.111:7144/stream/${channel.streamId}.flv?auth=JkVYNUxQTmVaTUEwWSdlMDouSWhDQnE7c1lZKCFyeXVY&tip=${channel.tip}`;
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
    };

    return (
        <Link to={`/channels/${channel.streamId}`}>
            <ChannelItemStyle onClick={() => onSelectChannel()}>
                <div>
                    <Thumbnail id={thumnbailElementId} src="./live-chuu.png" hidden={!hiddenPlayer} />
                    <video id={videoElementId} controls width="347.5" height="195.47" hidden={hiddenPlayer}></video>
                </div>
                <ChannelDetail>
                    <Title>
                        {channelDetail(channel)}
                    </Title>
                    <Details>
                        {channel.name}
                    </Details>
                </ChannelDetail>
            </ChannelItemStyle>
        </Link>
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

export default ChannelItem;
