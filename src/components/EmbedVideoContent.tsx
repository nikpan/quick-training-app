import React from 'react';
import { IContent } from './Section';

export interface EmbedVideoProps extends IContent {
  url: string,
  start?: number,
  end?: number
}

export default class EmbedVideoContent extends React.Component<EmbedVideoProps> {
  render() {
    let embedUrl = this.props.url;
    let start = this.props.start !== undefined ? this.props.start : 0;
    embedUrl = embedUrl + `?start=${start}`;
    if(this.props.end !== undefined) {
      embedUrl = embedUrl + `&end=${this.props.end}`;
    }
    return (
      <iframe 
        width="560" 
        height="315" 
        src={embedUrl} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen />
    );
  }
}