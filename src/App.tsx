import './App.css';
import React from 'react';
import Section, { SectionProps } from './components/Section';
import getTestData from './utils/testData';
import AddSectionForm from './components/AddSectionForm';
import ContentList from './components/ContentList';
import { Grid } from '@material-ui/core';

export interface AppState {
  contents: SectionProps[]
}

export default class App extends React.Component<{},AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      contents: getTestData()
    }
  }

  onAddSection = (section: SectionProps) => {
    let contents = this.state.contents;
    contents.push(section);
    this.setState({
      contents: contents
    });
  }

  renderSections = () => {
    let sections: JSX.Element[] = [];
    for (let i = 0; i < this.state.contents.length; i++) {
      const section = this.state.contents[i];
      const id = `#anchor-${i.toString()}`;
      sections.push(<Section {...section} index={i}></Section>);
    }
    return sections;
  }

  renderContentTable = () => {
    let contentTitles: string[] = [];
    this.state.contents.forEach(section => {
      contentTitles.push(section.heading);
    })
    return (<ContentList titles={contentTitles}></ContentList>)
  }

  render() {
    const styles = {
      root: {
        height: '100%'
      },
      rightPane: {
        height: '100vw',
        overflow: 'scroll'
      }
    };

    return (
      <Grid style={styles.root} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' direction='row' spacing={2}>
            <Grid item xs={3}>
              {this.renderContentTable()}
              <AddSectionForm onAddSection={this.onAddSection} />
            </Grid>
            <Grid style={styles.rightPane} item xs={9}>
              <Grid container>
                <Grid item>
                  {this.renderSections()}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
