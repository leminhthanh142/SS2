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

export const JavaTutorial05 = () => {
  const { getTutorials } = useTutorials();
  return (
    <CommonLayout>
      <Box mb={5}>
        <StyledHeading>[Java-Core-05] Vòng lặp, lặp đi lặp lại</StyledHeading>
      </Box>
      <Box mb={4}>
        <StyledHeading>Giới thiệu</StyledHeading>
        <StyledContent>
          Như chúng ta đã biết, máy tính giúp chúng ta giảm bớt số lượng công việc nhằm tiết kiệm
          thời gian và sức lao động. Vậy nên điều trên dẫn đến sự ra đời của vòng lặp{' '}
          <code>loop</code>.
        </StyledContent>
      </Box>
      <Box mb={4}>
        <StyledContent sx={{ fontSize: 24, fontWeight: 700 }}># Vòng lặp với for</StyledContent>
        <StyledContent>
          <pre>
            <code style={{ width: '100%' }}>
              {`
                for ([biến chạy]; [điều kiện]; [bước nhảy]) {
                  // ... body
                }
              `}
            </code>
          </pre>
        </StyledContent>
        <StyledContent>Trước hết , chúng ta hãy thử Run thử đoạn code phía dưới nhé</StyledContent>
        <Replit repo={'java-tutorial-51'} query={{ embed: true }} path={'Main.java'} />
        <List>
          Mình sẽ giải thích kĩ hơn về ví dụ bên trên
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • Biến <code>i</code> được khai báo bằng <code>0</code>
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • Với vòng lặp thứ nhất <code>i = 0</code>, thỏa mãn <code>i {'<'} 2(true)</code>,
                  hiển thị <code>0</code>
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • Sau đó với <code>i++</code>, biến <code>i</code> được tăng giá trị lên thành{' '}
                  <code>1</code>
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • Với vòng lặp thứ hai <code>i = 1</code>, thỏa mãn <code>i {'<'} 2 (true)</code>,
                  hiển thị <code>1</code>
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • Sau đó với <code>i++</code>, biến <code>i</code> được tăng giá trị lên thành{' '}
                  <code>2</code>
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • Với vòng lặp thứ hai <code>i = 2</code>, không thỏa mãn{' '}
                  <code>i {'<'} 2 (false)</code>, vòng lặp kết thúc
                </p>
              }
            />
          </StyledListItem>
        </List>
        <StyledContent>
          Để khái quát hơn, chúng ta có <code>flowchart</code> sau
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial05/image1.png'}
          sx={{ mb: 2, width: 600 }}
        />
        <StyledContent>
          Đôi khi chúng ta sử dụng vòng lặp để tìm kiếm giá trị thích hợp và khi đã tìm thấy, chúng
          ta không muốn lặp nữa thì cần thoát khỏi vòng lặp . Vậy làm cách nào ? Với ví dụ sau :
        </StyledContent>
        <Replit repo={'java-tutorial-52'} query={{ lite: true }} path={'Main.java'} />
        <List>
          Với kết quả cả hai số 3 và 6 đều được in ra màn hình , khác với mong muốn chỉ tìm số đầu
          tiên chia hết cho 3 {'--->'} vậy nên chúng ta có từ khóa (keyword) break
          <StyledListItem>
            <ListItemText
              primary={<p>• Bỏ qua những phần code còn lại bên trong body của vòng lặp</p>}
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText primary={<p>• Ngay lập tức thoát và dừng vòng lặp</p>} />
          </StyledListItem>
        </List>
        <Replit repo={'java-tutorial-53'} query={{ embed: true }} path={'Main.java'} />
        <StyledContent>
          Đó, các bạn thấy không, lần này khi i = 3 và chia hết cho 3 thì vòng lặp đã được dừng lại
        </StyledContent>
      </Box>
      <Box mb={4}>
        <StyledContent sx={{ fontSize: 24, fontWeight: 700 }}># Vòng lặp với while</StyledContent>
        <StyledContent>
          <pre>
            <code style={{ width: '100%' }}>
              {`
                while (true){
                  // … body
                }
              `}
            </code>
          </pre>
        </StyledContent>
        <StyledContent>
          Trong khi vòng lặp <code>for</code> sử dụng khi ta có thể xác định được phạm vi lặp thì
          với <code>while</code> chúng ta kiểm tra điều kiện và lặp cho đến khi điều kiện lặp là{' '}
          <code>false</code> mới dừng
        </StyledContent>
        <Replit repo={'java-tutorial-54'} query={{ embed: true }} path={'Main.java'} />
        <StyledContent>Biến i được khai báo bằng 0</StyledContent>
        <StyledContent>
          • <code>i = 0</code> thỏa mãn <code>i {'<'} 4 ( true )</code> , tăng biến <code></code>{' '}
          lên 1 <code>( i = 1 )</code> và in ra màn hình
        </StyledContent>
        <StyledContent>
          • <code>i = 1</code> thỏa mãn <code>i {'<'} 4 ( true )</code> , tăng biến <code>i</code>{' '}
          lên 1 <code>( i = 2 )</code> và in ra màn hình
        </StyledContent>
        <StyledContent>
          • <code>i = 2</code> thỏa mãn <code>i {'<'} 4 ( true )</code> , tăng biến <code>i</code>{' '}
          lên 1 <code>( i = 3 )</code> và in ra màn hình
        </StyledContent>
        <StyledContent>
          • <code>i = 3</code> thỏa mãn <code>i {'<'} 4 ( true )</code> , tăng biến <code>i</code>{' '}
          lên 1 <code>( i = 4)</code> và in ra màn hình
        </StyledContent>
        <StyledContent>
          • <code>i = 4</code> không thỏa mãn <code>i {'<'} 4 ( false )</code> , kết thúc vòng lặp
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial05/image2.png'}
          sx={{ mb: 2, width: 600 }}
        />
      </Box>
      <Box mb={4}>
        <StyledContent sx={{ fontSize: 24, fontWeight: 700 }}>
          # Vòng lặp với do...while
        </StyledContent>
        <StyledContent>
          <pre>
            <code style={{ width: '100%' }}>
              {`
                do{
                  // … body
                }while ([điều kiện]);
              `}
            </code>
          </pre>
        </StyledContent>
        <StyledContent>
          Người anh em cùng cha khác ông nội với <code>while</code>, chỉ khác một điều với{' '}
          <code>do…while</code> là phía bên trong <code>{'{}'}</code> sẽ được thực thi 1 lần trước
          khi kiểm tra điều kiện lặp
        </StyledContent>
        <Replit repo={'java-tutorial-55'} query={{ embed: true }} path={'Main.java'} />
        <List>
          Lần này, trên màn hình đã hiển thị ra “Vòng lặp 4” bởi vì
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • Biến <code>i</code> được khai báo bằng 0
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • tăng biến <code>i</code> lên 1 <code>( i = 1 )</code> và in ra màn hình,{' '}
                  <code>i = 1</code> thỏa mãn (<code>true</code>) {'--->'} lặp
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • tăng biến <code>i</code> lên 1 <code>( i = 2 )</code> và in ra màn hình,{' '}
                  <code>i = 2</code> thỏa mãn (<code>true</code>) {'--->'} lặp
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • tăng biến <code>i</code> lên 1 <code>( i = 3 )</code> và in ra màn hình,{' '}
                  <code>i = 3</code> thỏa mãn (<code>true</code>) {'--->'} lặp
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • tăng biến <code>i</code> lên 1 <code>( i = 4 )</code> và in ra màn hình
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>i = 4</code> không thỏa mãn <code>i {'<'} 4 ( false )</code> , kết thúc
                  vòng lặp
                </p>
              }
            />
          </StyledListItem>
        </List>
        <StyledContent>
          Vậy nên trước khi kiểm tra điều kiện lặp, <code>i = 4</code> vẫn được in ra ngoài màn
          hình.
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial05/image3.png'}
          sx={{ mb: 2, width: 600 }}
        />
      </Box>
      <Box mb={5}>
        <StyledHeading>Kết</StyledHeading>
        <StyledContent>
          Vòng lặp mang lại rất nhiều lợi ích, tuy nhiên nếu không kiểm soát tốt thì rất dễ rơi vào
          vòng lặp vô tận, nên các bạn hãy chú ý nhé
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial05/image4.png'}
          sx={{ mb: 2, width: 400 }}
        />
        <StyledContent>
          Ngoài ra, với <code>do… while</code> cũng nên lưu ý 1 chút với chiếc meme này :3
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial05/image5.png'}
          sx={{ mb: 2 }}
        />
      </Box>
      <Box>
        <Stack spacing={2}>
          {getTutorials(javaTutorials, 5).map((tutorial) => (
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
