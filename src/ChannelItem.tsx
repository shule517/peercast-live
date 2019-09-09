import * as React from 'react';
import styled from 'styled-components';
import Channel from './Channel';

declare var flvjs: any;

type Props = {
    channel: Channel,
}

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;`

  const ChannelItem = (props: Props) => {
    const {
        channel,
    } = props;

    return (
        <div>
            <StyledButton onClick={() => {
                var videoElement = document.getElementById('videoElement');
                const url = `http://ec2-18-222-202-2.us-east-2.compute.amazonaws.com:7144/stream/${channel.streamId}.flv?auth=JkVYNUxQTmVaTUEwWSdlMDouSWhDQnE7c1lZKCFyeXVY`;
                var flvPlayer = flvjs.createPlayer({
                    type: 'flv',
                    isLive: true,
                    url: url
                });
                flvPlayer.attachMediaElement(videoElement);
                flvPlayer.load();
                flvPlayer.play();
            }}>再生</StyledButton>
            {`【${channel.name}】 ${channel.genre} - ${channel.details.replace(/ - .*/, '')}`}
        </div>
    );
};

export default ChannelItem;
