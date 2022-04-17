import React from 'react';
import { Box, CardMedia, ListItem, Stack, styled, Typography } from '@mui/material';
import { CodeEditor } from '../../../../components/modules/CodeEditor';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../../../../hooks/useScrollToTop';
import { CommonLayout } from '../../../../components/layout/common';
import { javaTutorials } from '../../../../data/tutorials';
import { useTutorials } from '../../../../hooks/useTutorials';
import { TutorialLink } from '../../../../components/TutorialLink';

const myAge = `public class MyAge {
   public static void main(String[] args) {
       int age = 20;
       System.out.println(age + " is my age!");
   }
}

`;

export const JavaTutorial03 = () => {
  const { getTutorials } = useTutorials();

  return (
    <CommonLayout>
      <Box mb={5}>
        <StyledHeading>[Java-Core-03] Biểu thức, Statements ,Boolean expressions</StyledHeading>
      </Box>
      <Box mb={3}>
        <StyledHeading>Giới thiệu</StyledHeading>
        <StyledContent>
          Ở bài học trước chúng ta đã tìm hiểu qua <code>Comment</code>, <code>Biến</code>,{' '}
          <code>kiểu dữ liệu</code> trong Java. Bây giờ, bạn hãy đặt ra câu hỏi “Liệu chúng ta có
          thể tính toán, so sánh các kiểu dữ liệu khác nhau với nhau không ? Và bằng cách nào ?” thì
          ở bài này, chúng ta hãy cùng tìm hiểu nhé :D
        </StyledContent>
      </Box>
      <Box mb={3}>
        <StyledHeading>Biểu thức (Expressions)</StyledHeading>
        <StyledContent>
          Biểu thức khá quen thuộc với chúng ta phải không nào, đó một kết hợp bao gồm hữu hạn các
          ký hiệu ví dụ như: <code>1 + 1, 5 * 5, a - b, c/4</code> hay chỉ đơn giản là{' '}
          <code>: 13</code> Vậy những <code>+, -, *, /</code> thì sao ? Chúng chính là những toán tử
          <code>Operators</code>
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial03/image1.png'}
          sx={{ mb: 2 }}
        />
      </Box>
      <Box mb={3}>
        <StyledHeading>Câu lệnh (Statements)</StyledHeading>
        <StyledContent>
          <code>Statements</code> là một dòng lệnh mà bạn muốn thực thi một điều gì đó :D Hmmm nghe
          hơi mơ hồ phải không :D ? Nào hãy đến với ví dụ:
        </StyledContent>
        <StyledContent>
          <code>int age = 18;</code> Đây là câu lệnh khai báo biến mà bạn đã học ở bài trước đó :D
          <code>System.out.println("Hi");</code> Java say Hi với bạn đấy :)) ( just kidding)
        </StyledContent>
        <StyledContent>
          Oh, Trước đây khi tính toán bạn hay đặt biểu thức thế nào ? Có phải là{' '}
          <code>2 + 3 {'-->'} 5</code>
          hoặc <code>2 + 3 = 5</code> đúng không :D Hãy khai báo một biến a nhé <code>int a;</code>{' '}
          sau đó thực hiện tính toán và gán <code>a = 2 + 3;</code> khi đó vế phải sẽ được tính
          trước ( bằng 5 ) và đưa cho a giữ lấy giá trị này . Hoặc bạn cũng có thể viết :{' '}
          <code>int a = 2 + 3;</code>
          <br />
          <code>{`<biến> = <biểu thức>;`}</code> {'//'} chú ý biến phải được khởi tạo trước đó Nào
          giờ hãy thử hiển thị tuổi của bạn nhé :D
        </StyledContent>
        <CodeEditor code={myAge} disableExampleTestScreen readOnly />
        <StyledContent>Output: </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial03/image2.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent>Ngoài ra chúng ta còn có thể viết (kết quả vẫn như vậy :3)</StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial03/image3.png'}
          sx={{ mb: 2 }}
        />
      </Box>
      <Box mb={3}>
        <StyledHeading>Boolean expressions (Biểu thức đúng sai)</StyledHeading>
        <StyledContent>
          <code>boolean</code> : chỉ bao gồm đúng <code>true</code> hoặc sai <code>false</code>.
        </StyledContent>
        <StyledContent>
          <code>int a = 5;</code>
          <br />
          <code>int b = 6;</code>
          <br />
          <code>boolean x = true;</code>
          <br />
          <code>boolean y = false;</code>
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial03/image4.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent>Ngoài ra ta có bảng sau :</StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial03/image5.png'}
          sx={{ mb: 2 }}
        />
      </Box>
      <Box mb={5}>
        <StyledHeading>Độ ưu tiên của toán tử</StyledHeading>
        <StyledContent>
          Cũng như khi tính toán, ta nhân chia trước cộng trừ sau. Cho nên các toán tử cũng được xếp
          hạng độ ưu tiên dựa vào các hạng toán tử được liệt kê phía trên (những trường hợp phức tạp
          khác đã lược bỏ) với ưu tiên từ trên xuống, từ trái sang phải.
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial03/image6.png'}
          sx={{ mb: 2 }}
        />
      </Box>
      <Box>
        <Stack spacing={2}>
          {getTutorials(javaTutorials, 3).map((tutorial) => (
            <TutorialLink key={tutorial.id} path={tutorial.path} title={tutorial.title} />
          ))}
        </Stack>
      </Box>
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

const StyledListItem = styled(ListItem)(() => ({
  marginLeft: 12,
  padding: 0
}));
