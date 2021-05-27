import './App.css';
import React from 'react';
import Section from './components/Section';
import getTestData from './utils/testData';

export default class App extends React.Component<{},{}> {

  render() {
    const styles = {
      root: {

      }
    };

    const contents = getTestData();

    return (
      <div style={styles.root}>
      <Section {...contents[0]}/>
      <Section {...contents[1]}/>
      <Section {...contents[2]}/>
    </div>
    );
  }
}
