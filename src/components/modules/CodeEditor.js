import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import { Box, FormControl, OutlinedInput, TextField } from '@mui/material';

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
import { Button, TextareaAutosize } from '@mui/material';
import { customAxios } from '../../customAxios';

const defaultValue = `public class Code {
  public static void main(String[] args) {
    String[] words = new String {"hello", "world", "this", "is", "great"};
    String result = smash(words);
    System.out.println(result);
  }
  public static String smash(String... words) {
    return String.join(" ", words);
  }
}`;

export default class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultValue,
      theme: 'solarized_dark',
      mode: 'java',
      output: { content: '', error: '' },
      fontSize: 14,
      error: {
        color: 'red'
      }
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

  async handleSubmit() {
    console.log(this.state.value);
    const code = this.state.value;
    const res = await customAxios.post('/test', code, {
      headers: {
        'Content-Length': 0,
        'Content-Type': 'text/plain'
      }
    });
    console.log(res.data);
    this.setState({ output: res.data });
  }

  render() {
    return (
      <div>
        <Box display={'flex'} alignItems={'center'} width={'100%'}>
          <Box display={'flex'} alignItems={'center'}>
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
          </Box>

          <Box ml={2} display={'flex'} alignItems={'center'}>
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
          </Box>
        </Box>
        <AceEditor
          mode={this.state.mode}
          theme={this.state.theme}
          name="react-ace-code-editor"
          width={1000}
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
        <Box mt={2}>
          <Button
            sx={{ mr: 4 }}
            variant={'contained'}
            color={'primary'}
            onClick={this.handleSubmit}>
            Submit
          </Button>
          {!this.state.output.error && (
            <TextField
              multiline
              rows={4}
              placeholder={'Output'}
              value={this.state.output.content}
              sx={{
                width: 550
              }}
            />
          )}
          {this.state.output.error && (
            <TextField
              multiline
              rows={4}
              placeholder={'Output'}
              value={this.state.output.error}
              error={true}
              sx={{
                width: 550,
                '& .MuiInputBase-root': {
                  color: 'red'
                }
              }}
            />
          )}
        </Box>
      </div>
    );
  }
}
