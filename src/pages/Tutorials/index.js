import React from 'react';
import { Box, Button, styled, Typography } from '@mui/material';
import { CommonLayout } from '../../components/layout/common';
import { Link } from 'react-router-dom';

export const TutorialsPage = () => {
  return (
    <CommonLayout>
      <div>
        <Box mb={3}>
          <StyledHeading>Giới thiệu</StyledHeading>
          <StyledContent>
            Xin chào các bạn, chúng mình là team Special Subject 2 Spring 2021. Hôm nay chúng mình
            xin giới thiệu tới các bạn khóa học Java căn bản. Mục tiêu giúp các bạn, dù với xuất
            phát điểm nào thì cũng có thể nắm được ngôn ngữ này trong vòng x tuần.
          </StyledContent>
          <StyledContent>
            Bài đầu tiên trong series này giới thiệu ngắn gọn với các bạn Java là gì, tập trung vào
            cách cài đặt môi trường và cài đặt công cụ lập trình.
          </StyledContent>
          <StyledContent>
            <Link to="/tutorials/1">[Java-Core-01] Giới thiệu Java căn bản</Link>
          </StyledContent>
          <StyledContent>
            <Link to="/tutorials/2">[Java-Core-02] Comment, Biến, kiểu dữ liệu trong Java</Link>
          </StyledContent>
          <StyledContent>
            <Link to="/tutorials/3">[Java-Core-03] Biểu thức, Statements ,Boolean expressions</Link>
          </StyledContent>
        </Box>
      </div>
    </CommonLayout>
  );
};

const StyledHeading = styled(Typography)(() => ({
  fontSize: 34
}));

const StyledContent = styled(Typography)(() => ({
  fontSize: 16,
  marginBottom: 12,
  '& a': {
    color: 'rgb(86,165,255)'
  }
}));
