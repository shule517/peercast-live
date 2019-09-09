import * as React from 'react';
import Channel from './Channel';

declare var flvjs: any;

type Props = {
    channel: Channel,
}

const ChannelItem = (props: Props) => {
    const {
        channel,
    } = props;

    return (
        <div>
            <button onClick={() => {
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
            }}>再生</button>
            {`【${channel.name}】 ${channel.genre} - ${channel.details.replace(/ - .*/, '')}`}
        </div>
    );
};

export default ChannelItem;
