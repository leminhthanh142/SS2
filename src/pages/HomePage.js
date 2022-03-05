import React from 'react';
import { Box, TextareaAutosize } from '@mui/material';
import CodeEditor from '../components/modules/CodeEditor';

export const HomePage = () => {
  return (
    <Box>
      <CodeEditor />
      <Box>
        <TextareaAutosize minRows={5} placeholder={'Output'} />
      </Box>
    </Box>
  );
};
