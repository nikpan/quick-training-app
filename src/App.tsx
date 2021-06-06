import './App.css';
import React from 'react';
import Section, { SectionProps } from './components/Section';
import getTestData from './utils/testData';
import AddSectionForm from './components/AddSectionForm';

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
    this.state.contents.forEach(section => {
      sections.push(<Section {...section} />)
    });
    return sections;
  }

  render() {
    const styles = {
      root: {

      }
    };

    return (
    <div style={styles.root}>
      {this.renderSections()}
      <AddSectionForm onAddSection={this.onAddSection} />
    </div>
    );
  }
}
