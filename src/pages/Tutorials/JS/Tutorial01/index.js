import React, { useState } from 'react';
import { Box, CardMedia, List, ListItem, ListItemText, styled, Typography } from '@mui/material';
import { CodeEditor } from '../../../../components/modules/CodeEditor';
import { CancelOutlined, CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { customAxios } from '../../../../customAxios';
import { useScrollToTop } from '../../../../hooks/useScrollToTop';
import { CommonLayout } from '../../../../components/layout/common';

export const JsTutorial01 = () => {
  useScrollToTop();

  return (
    <CommonLayout>
      <iframe
        frameBorder="0"
        width="100%"
        height="500px"
        src="https://replit.com/@leminhthanh142/CodeCampReplitEmbed?lite=true"
      />
    </CommonLayout>
  );
};
