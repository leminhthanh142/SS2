import React from 'react';
import {
  Box,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Stack,
  styled,
  Typography
} from '@mui/material';
import { CommonLayout } from '../../../../components/layout/common';
import { Replit } from '../../../../components/Replit';
import { javaTutorials } from '../../../../data/tutorials';
import { useTutorials } from '../../../../hooks/useTutorials';
import { TutorialLink } from '../../../../components/TutorialLink';

export const JavaTutorial04 = () => {
  const { getTutorials } = useTutorials();
  return (
    <CommonLayout>
      <Box mb={5}>
        <StyledHeading>[Java-Core-04] Câu lệnh rẽ nhánh</StyledHeading>
      </Box>
      <Box mb={4}>
        <StyledHeading>Giới thiệu</StyledHeading>
        <StyledContent>
          Ở bài học này, chúng ta sẽ tìm hiểu về rẽ nhánh ^^. Rẽ nhánh là khi một điều kiện nào đó
          thỏa mãn <code>( true )</code> chúng ta sẽ làm gì đó ( làm gì thì chúng ta sẽ biết nhé{' '}
          {':>'})
        </StyledContent>
        <StyledContent>
          <code>Boolean expressions</code> sẽ được sử ở bài này {':>'} nếu không nhớ nhấn vào đây để
          xem lại nhé
        </StyledContent>
      </Box>
      <Box mb={4}>
        <StyledHeading>Câu lệnh rẽ nhánh</StyledHeading>
        <StyledContent sx={{ fontSize: 24, fontWeight: 700 }}>#If</StyledContent>
        <StyledContent>
          Nếu điều này đúng … thì hãy làm gì đó nhé <br /> Hãy cùng nhìn vào ví dụ dưới đây nhé :D
        </StyledContent>
        <Replit repo={'java-tutorial-41'} query={{ embed: true }} path={'Main.java'} />
        <StyledContent>
          Các bạn thử <code>Run</code> đoạn code trên sẽ thấy trên màn hình hiển thị{' '}
          <code>True</code>. Đọc qua thì chắc hẳn các bạn đã hiểu lý do, tuy nhiên tại sao ở đây lại{' '}
          <code>==</code> trong dòng <code>if(a == 10)</code> nhỉ ? Đó là vì dấu <code>=</code> đã
          được sử dụng cho phép gán đó :D . Tổng quát hơn chúng ta có :
        </StyledContent>
        <StyledContent>
          <pre>
            <code style={{ width: '100%' }}>
              {`
              if ([điều kiện]) {
                // if sẽ nhận vào true hoặc false
                // nếu true phần bên trong {} sẽ được thực thi
                // nếu false phần bên trong {} sẽ được bỏ qua
                // tiếp tục thực thi phần còn lại
              }
              `}
            </code>
          </pre>
        </StyledContent>
        <StyledContent sx={{ fontStyle: 'italic' }}>
          ! Chú ý : nếu phần bên trong <code>{'{}'}</code> của <code>if</code> chỉ có 1{' '}
          <code>statements</code> chúng ta có thể bỏ qua dấu <code>{'{}'}</code>
        </StyledContent>
        <StyledContent>
          Ví dụ:
          <code style={{ width: '100%' }}>if(a == 10) System.out.println("True");</code>
        </StyledContent>
      </Box>
      <Box mb={4}>
        <StyledContent sx={{ fontSize: 24, fontWeight: 700 }}># if…else</StyledContent>
        <StyledContent>
          Nếu điều này đúng … không thì…
          <br />
          Ngược lại với <code>if</code> thực thi phần bên trong <code>{'{}'}</code> khi{' '}
          <code>true</code>, chúng ta có <code>else</code> khi phần bên trong <code>{'{}'}</code> là{' '}
          <code>false</code>
        </StyledContent>
        <Replit repo={'java-tutorial-42'} query={{ embed: true }} path={'Main.java'} />
      </Box>
      <Box mb={4}>
        <StyledContent sx={{ fontSize: 24, fontWeight: 700 }}># if…else…if</StyledContent>
        <StyledContent>
          Ngoài ra, các câu điều kiện <code>if</code> có thể được nối với nhau thành chuỗi{' '}
          <code>chained</code> , chỉ thực thi phần điều kiện đúng đầu tiên mà bỏ qua phần còn lại
        </StyledContent>
        <StyledContent>Ví dụ:</StyledContent>
        <Replit repo={'java-tutorial-43'} query={{ embed: true }} path={'Main.java'} />
      </Box>
      <Box mb={4}>
        <StyledContent sx={{ fontSize: 24, fontWeight: 700 }}># switch</StyledContent>
        <StyledContent>
          <pre>
            <code style={{ width: '100%' }}>
              {`
              switch ( variable ){
                case value1:
                  // làm gì đó
                case value2:
                  break; // cái này có vẻ quen quen nhỉ :D
                  // làm gì đó
                default:
                  // mặc định sẽ làm gì đó
              }
            `}
            </code>
          </pre>
        </StyledContent>
        <StyledContent>
          <code>Switch</code> sẽ kiểm tra giá trị của <code>variable</code> ( bên trong{' '}
          <code>switch</code> ) và so sánh với từng giá trị khác nhau của các <code>case</code> từ
          trên xuống dưới. Nếu giá trị so sánh là <code>true</code> thì khối lệnh trong
          <code>:</code> đó sẽ được thực thi.
        </StyledContent>
        <List>
          Chú ý : <code>break</code> ở đây cũng có tác dụng ngay lập tức thoát khỏi{' '}
          <code>switch</code> giống như thoát khỏi vòng lặp.
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • Nếu không gặp <code>break</code>, khi gặp <code>case</code> là <code>true</code>
                  , các khối lệnh bên dưới sẽ được thực thi cho dù không phải là <code>case</code>{' '}
                  <code>true</code>.
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>default</code> : dù cho các case ở trên đúng hay sai thì{' '}
                  <code>default</code> sẽ luôn thực thi ( nếu không gặp keyword <code>break</code>).
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>default</code> : không bắt buộc có trong cấu trúc
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>value</code> trong case phải là một giá trị cụ thể, không được là{' '}
                  <code>statement</code>.
                </p>
              }
            />
          </StyledListItem>
        </List>
      </Box>
      <Box mb={3}>
        <StyledContent sx={{ fontSize: 24, fontWeight: 700 }}>
          #switch có case thỏa mãn với break
        </StyledContent>
        <Replit repo={'java-tutorial-44'} query={{ embed: true }} path={'Main.java'} />
        <StyledContent>
          Ở phần code trên, ngay khi <code>case 3</code> thỏa mãn <code>i = 3</code> và in ra màn
          hình 3 thì gặp <code>break</code>, <code>switch</code> ngay lập tức kết thúc.
        </StyledContent>
      </Box>
      <Box mb={3}>
        <StyledContent sx={{ fontSize: 24, fontWeight: 700 }}>
          #switch có case thỏa mãn không có break
        </StyledContent>
        <Replit repo={'java-tutorial-45'} query={{ embed: true }} path={'Main.java'} />
        <StyledContent>
          Ở phần code trên, <code>case 1</code> và <code>case 2</code> không thỏa mãn{' '}
          <code>i = 3</code>, đến case 3 thỏa mãn phần code còn lại được thực thi đến hết ( vì không
          gặp phải keyword <code>break</code> ) :D
        </StyledContent>
      </Box>
      <Box mb={5}>
        <StyledContent sx={{ fontSize: 24, fontWeight: 700 }}>
          #switch không có case nào thỏa mãn
        </StyledContent>
        <Replit repo={'java-tutorial-46'} query={{ embed: true }} path={'Main.java'} />
        <StyledContent>
          Với <code>i = -1</code>, không có <code>case</code> nào thỏa mãn, cho nên màn hình chỉ in
          ra “<code>default</code>”
        </StyledContent>
      </Box>
      <Box mb={5}>
        <StyledHeading>Kết</StyledHeading>
        <StyledContent>
          Như vậy mình và các bạn vừa tìm hiểu xong về cấu trúc <code>switch case</code> trong Java
          và từ khóa
          <code>break</code>. Hi vọng bạn hiểu cách sử dụng để vận dụng phù hợp nhé ^^
        </StyledContent>
      </Box>
      <Box>
        <Stack spacing={2}>
          {getTutorials(javaTutorials, 4).map((tutorial) => (
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
