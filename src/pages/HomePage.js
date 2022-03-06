import React from 'react';
import { Box, Typography } from '@mui/material';
import CodeEditor from '../components/modules/CodeEditor';

export const HomePage = () => {
  return (
    <Box mt={6}>
      <Box display="flex">
        <Box maxWidth={700} ml={2} mr={2}>
          <h2>Sentence Smash</h2>
          <p>
            Write a function that takes an array of words and smashes them together into a sentence
            and returns the sentence. You can ignore any need to sanitize words or add punctuation,
            but you should add spaces between each word. <br />
            <strong>
              Be careful, there shouldn&apos;t be a space at the beginning or the end of the
              sentence!
            </strong>
          </p>
          <pre>
            <code>
              [&apos;hello&apos;, &apos;world&apos;, &apos;this&apos;, &apos;is&apos;,
              &apos;great&apos;] =&gt; &apos;hello world this is great&apos;
            </code>
          </pre>
        </Box>
        <Box maxWidth={850}>
          <CodeEditor />
        </Box>
      </Box>
    </Box>
  );
};
