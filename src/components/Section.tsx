import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import EmbedVideoContent, { EmbedVideoProps } from './EmbedVideoContent';
import QnAContent, { QnAContentProps } from './QnAContent';
import TextContent, { TextContentProps } from './TextContent';

export interface SectionProps {
  index?: number,
  heading: string,
  content: QnAContentProps | TextContentProps | EmbedVideoProps
}

export interface IContent {
  type: string;
}

export default class Section extends React.Component<SectionProps, {}> {
  render() {
    const styles = {
      heading: {
        fontSize: 25,
      }
    };

    const options = [
      'The Best',
      'The Worst'
    ];

    let id: number = this.props.index !== undefined ? this.props.index : 0;

    return (
      <Accordion id={`anchor-${id.toString()}`} expanded={true}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={styles.heading}>{this.props.heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {this.renderContent(this.props.content)}
        </AccordionDetails>
      </Accordion>
    );
  }

  renderContent = (content: TextContentProps | QnAContentProps | EmbedVideoProps) => {
    if(content.type === 'text') {
      const textContent = content as TextContentProps;
      return (<TextContent {...textContent} />);
    } else if(content.type === 'qna') {
      const qnaContent = content as QnAContentProps;
      return (<QnAContent {...qnaContent}/>)
    } else {
      const embedVideoContent = content as EmbedVideoProps;
      return (<EmbedVideoContent {...embedVideoContent}/>)
    }
  }
}