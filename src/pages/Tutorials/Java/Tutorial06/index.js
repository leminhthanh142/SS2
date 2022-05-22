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

export const JavaTutorial06 = () => {
  const { getTutorials } = useTutorials();
  return (
    <CommonLayout>
      <Box mb={5}>
        <StyledHeading>[Java-Core-06] Hàm - Phương thức (Method)</StyledHeading>
      </Box>
      <Box mb={4}>
        <StyledHeading>Giới thiệu</StyledHeading>
        <StyledContent>
          Hàm - Phương thức <code>(method)</code> là một khối tập trung các dòng lệnh code để thực
          hiện mục đích nào đó. Nó giúp chúng ta <code>tái sử dụng</code> hoặc <code>chia nhỏ</code>{' '}
          tách bạch một khối lệnh riêng lẻ với mục đích khác nhau.
        </StyledContent>
      </Box>
      <Box mb={4}>
        <StyledHeading>Cú pháp</StyledHeading>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial06/image1.png'}
          sx={{ mb: 2 }}
        />
        <List>
          Trong đó:
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>access_specifier</code>: Chỉ định truy cập vào phương thức.
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>modifier</code>: Cho phép bạn gán các thuộc tính cho phương thức.
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>datatype</code>: Kiểu dữ liệu mà giá trị của nó được phương thức trả về.
                  Nếu không có một giá trị nào được trả về, kiểu dữ liệu có thể là void.
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>method_name</code>: Tên của phương thức
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>parameter_list</code>: Chứa tên của tham số được sử dụng trong phương thức
                  và kiểu dữ liệu. Dấu phẩy được dùng để phân cách các tham số.
                </p>
              }
            />
          </StyledListItem>
        </List>
      </Box>
      <Box mb={4}>
        <StyledHeading>Return - Dữ liệu trả về</StyledHeading>
        <StyledContent>
          Khi hàm được gọi, tất cả khối lệnh trong hàm được thực thi, sau đó trả về một giá trị
          <code>return</code> , giá trị đó chính là dữ liệu trả về của hàm.
        </StyledContent>
        <StyledContent>Chúng ta có ví dụ sau :</StyledContent>
        <Replit repo={'java-tutorial-61'} query={{ embed: true }} path={'Main.java'} />
        <StyledContent>
          Ở ví dụ trên, nếu chúng ta cố tình <code>return</code> một kiểu dữ liệu khác với kiểu dữ
          liệu mà ta đã khai báo trên hàm , ngay lập tức IDE sẽ báo lỗi cho chúng ta. Ngoài ra nếu
          muốn hàm làm gì đó mà không muốn trả về gì hết thì hãy dùng <code>void</code> , các bạn
          hãy chú ý nhé ^^
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial06/image3.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent>
          Ngoài ra có một cách khác khi sử dụng <code>void</code> mà muốn dừng hàm lại chúng ta sử
          dụng <code>return;</code> và không có gì kèm theo cả
        </StyledContent>
        <StyledContent>Giờ hãy chạy thử nha</StyledContent>
        <Replit repo={'java-tutorial-62'} query={{ embed: true }} path={'Main.java'} />
      </Box>
      <Box mb={4}>
        <StyledHeading>Parameter list - Các tham số</StyledHeading>
        <StyledContent>
          Các tham số là các biến được truyền vào khi một hàm được gọi và tất nhiên khi gọi hàm
          chúng ta phải truyền đầy đủ tham số nhé ^^ ! Các bạn hãy thử xóa bớt biến a khi gọi hàm
          sum() trong main xem chương trình sẽ báo lỗi gì nhé :))
        </StyledContent>
        <Replit repo={'java-tutorial-63'} query={{ lite: true }} path={'Main.java'} />
      </Box>
      <Box mb={5}>
        <StyledHeading>Ví dụ về Hàm dựng sẵn - built-in method</StyledHeading>
        <StyledContent>
          JDK định nghĩa sẵn một số lớp tiện dụng, một trong số là lớp <code>Math</code> cung cấp
          các hàm về toán học. Để gọi hàm chỉ đơn giản viết tên lớp Math và tên phương thức cần gọi.
        </StyledContent>
        <StyledContent>
          Trước khi gọi các hàm Math, bạn có thể import package để khỏi phải viết đầy đủ tên pack,
          như sau:
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial06/image2.png'}
          sx={{ mb: 2 }}
        />
      </Box>
      <Box>
        <Stack spacing={2}>
          {getTutorials(javaTutorials, 6).map((tutorial) => (
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
