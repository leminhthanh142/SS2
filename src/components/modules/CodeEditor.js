import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/webpack-resolver';
import { Box, FormControl, OutlinedInput, TextField, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
  'gruvbox',
  'one_dark'
];

// eslint-disable-next-line no-undef
themes.forEach((theme) => require(`ace-builds/src-noconflict/theme-${theme}`));
/*eslint-disable no-alert, no-console */
import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-min-noconflict/ext-language_tools';
import { Button } from '@mui/material';
import { customAxios } from '../../customAxios';
import { styled } from '@mui/styles';
import { Lock } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const defaultValue = `import java.util.*;

public class Kata{
    public static void main (String[] args) {
      Integer[] arr = new Integer[]{1,2,3,4,5};
      boolean isNiceArr = isNice(arr);
      System.out.println(isNiceArr);
    }
    
    public static boolean isNice(Integer[] arr){
        return false;
    }
}`;

const sampleTest = `
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

public class SolutionTest {
    @Test
    public void sampleTest() {
\t\tassertEquals(Kata.isNice(new Integer[]{1,2,3,4,5}), true);
    }
}
`;

export const CodeEditor = ({
  onSubmit,
  onChangeViewMode,
  code,
  disableExampleTestScreen,
  readOnly,
  allowSubmitBtn,
  height,
  error,
  practiceId
}) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(code || defaultValue);
  const [theme, setTheme] = useState('xcode');
  const [mode, setMode] = useState('java');
  const [output, setOutput] = useState({
    content: '',
    error: ''
  });
  const [fontSize, setFontSize] = useState(14);
  const [isShowUnlockButton, setIsShowUnlockButton] = useState(false);

  const handleChangeValue = (newValue) => {
    setValue(newValue);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleChangeFontSize = (e) => {
    setFontSize(parseInt(e.target.value, 10));
  };

  const handleSubmit = async () => {
    onSubmit(value);
    if (onChangeViewMode) {
      onChangeViewMode('output');
    }
    if (!error) {
      setIsShowUnlockButton(true);
    }
  };

  const handleReset = () => {
    setValue(defaultValue);
  };

  const handleUnlockSolution = () => {
    navigate(`/practices/${practiceId}/solutions`);
  };

  return (
    <div>
      {/*<Box display={'flex'} alignItems={'center'} width={'100%'}>*/}
      {/*  <Box display={'flex'} alignItems={'center'}>*/}
      {/*    <label>Theme:</label>*/}
      {/*    <p className="control">*/}
      {/*      <span className="select">*/}
      {/*        <select name="Theme" onChange={this.setTheme} value={this.state.theme}>*/}
      {/*          {themes.map((lang) => (*/}
      {/*            <option key={lang} value={lang}>*/}
      {/*              {lang}*/}
      {/*            </option>*/}
      {/*          ))}*/}
      {/*        </select>*/}
      {/*      </span>*/}
      {/*    </p>*/}
      {/*  </Box>*/}

      {/*  <Box ml={2} display={'flex'} alignItems={'center'}>*/}
      {/*    <label>Font Size:</label>*/}
      {/*    <p className="control">*/}
      {/*      <span className="select">*/}
      {/*        <select name="Font Size" onChange={this.setFontSize} value={this.state.fontSize}>*/}
      {/*          {[14, 16, 18, 20, 24, 28, 32, 40].map((lang) => (*/}
      {/*            <option key={lang} value={lang}>*/}
      {/*              {lang}*/}
      {/*            </option>*/}
      {/*          ))}*/}
      {/*        </select>*/}
      {/*      </span>*/}
      {/*    </p>*/}
      {/*  </Box>*/}
      {/*</Box>*/}
      {!disableExampleTestScreen && (
        <Box
          width={'100%'}
          p={2}
          sx={{ background: 'rgba(55, 53, 47, 0.08)', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <Typography>Solution</Typography>
        </Box>
      )}
      <AceEditor
        mode={mode}
        theme={theme}
        name="react-ace-code-editor"
        width={'100%'}
        height={height}
        onChange={handleChangeValue}
        value={value}
        fontSize={fontSize}
        readOnly={readOnly}
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
      {allowSubmitBtn && (
        <Button variant={'contained'} color={'primary'} onClick={handleSubmit}>
          <PlayArrowIcon sx={{ mr: 1 }} />
          Run
        </Button>
      )}
      {!disableExampleTestScreen && (
        <>
          <Box
            mt={3}
            width={'100%'}
            p={2}
            sx={{
              background: 'rgba(55, 53, 47, 0.08)',
              borderBottom: '1px solid rgba(0,0,0,0.1)'
            }}>
            <Typography>Sample Tests</Typography>
          </Box>
          <AceEditor
            mode={'java'}
            theme={theme}
            name="react-ace-code-editor-sample-tests"
            value={sampleTest}
            width={'100%'}
            height={350}
            readOnly
            fontSize={fontSize}
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
          <Box mt={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Box display={'flex'} alignItems={'center'}>
              {isShowUnlockButton && (
                <Button
                  sx={{ mr: 2 }}
                  variant={'outlined'}
                  color={'primary'}
                  onClick={handleUnlockSolution}>
                  <Lock />{' '}
                  <Typography sx={{ ml: 1 }} component={'span'}>
                    Show More Solutions
                  </Typography>
                </Button>
              )}
              <Button variant={'outlined'} color={'primary'} onClick={handleReset}>
                <Typography component={'span'}>Reset</Typography>
              </Button>
            </Box>
            <Button variant={'contained'} color={'primary'} onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </>
      )}
    </div>
  );
};

CodeEditor.propTypes = {
  onSubmit: PropTypes.func,
  onChangeViewMode: PropTypes.func,
  code: PropTypes.string,
  disableExampleTestScreen: PropTypes.bool,
  readOnly: PropTypes.bool,
  allowSubmitBtn: PropTypes.bool,
  height: PropTypes.number,
  error: PropTypes.string,
  practiceId: PropTypes.string
};
