import React from 'react';

const shell = require('electron').shell;

class Thanks extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h4>if you think i deserve donate for my work you do it <span style={{color: "blue", cursor: "pointer"}}
                                                                      onClick={this.openUrlInExternalBrowser}>here</span>
        </h4>
      </React.Fragment>
    );
  }

  openUrlInExternalBrowser = () => {
    const url = "https://www.buymeacoffee.com/meslzy";

    shell.openExternal(url);
  }
}

export default Thanks;