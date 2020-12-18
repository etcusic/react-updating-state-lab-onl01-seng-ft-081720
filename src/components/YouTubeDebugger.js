import React from 'react';
 
export default class YouTubeDebugger extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }
    }
    
    bitration = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state))
    }

    resolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        }, () => console.log(this.state))
    }
    
    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.bitration}>BITRATION</button>
                <button className='resolution' onClick={this.resolution}>RESOLUTION</button>
            </div>
        );
    }

}