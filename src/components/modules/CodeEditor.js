import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';

const themes = [
  'monokai',
  'github',
  'tomorrow',
  'kuroir',
  'twilight',
  'xcode',
  'textmate',
  'solarized_dark',
  'solarized_light',
  'terminal',
  'dawn',
  'ambiance',
  'gruvbox'
];

// eslint-disable-next-line no-undef
themes.forEach((theme) => require(`ace-builds/src-noconflict/theme-${theme}`));
/*eslint-disable no-alert, no-console */
import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-min-noconflict/ext-language_tools';
import { Button } from '@mui/material';

const defaultValue = `class JavaIsNotSoHard {
  String private text = 'Hello World';
  
  public static void main (String[] args) {
    System.out.println(text);
  }
}`;

export default class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultValue,
      theme: 'solarized_dark',
      mode: 'java',
      fontSize: 14
    };
    this.setTheme = this.setTheme.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(newValue) {
    this.setState({
      value: newValue
    });
  }

  setTheme(e) {
    this.setState({
      theme: e.target.value
    });
  }

  onValidate(annotations) {
    console.log('onValidate', annotations);
  }

  setFontSize(e) {
    this.setState({
      fontSize: parseInt(e.target.value, 10)
    });
  }

  handleSubmit() {
    console.log(this.state.value);
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="field">
            <label>Theme:</label>
            <p className="control">
              <span className="select">
                <select name="Theme" onChange={this.setTheme} value={this.state.theme}>
                  {themes.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>Font Size:</label>
            <p className="control">
              <span className="select">
                <select name="Font Size" onChange={this.setFontSize} value={this.state.fontSize}>
                  {[14, 16, 18, 20, 24, 28, 32, 40].map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>
        </div>
        <AceEditor
          mode={this.state.mode}
          theme={this.state.theme}
          name="react-ace-code-editor"
          width={'100%'}
          onChange={this.onChange}
          onValidate={this.onValidate}
          value={this.state.value}
          fontSize={this.state.fontSize}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            highlightGutterLine: true,
            highlightSelectedWord: true,
            highlightActiveLine: true,
            showPrintMargin: true,
            showGutter: true,
            tabSize: 2
          }}
        />
        <Button sx={{ mt: 2 }} variant={'contained'} color={'primary'} onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    );
  }
}
