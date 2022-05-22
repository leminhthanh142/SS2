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
import { Link } from 'react-router-dom';

export const JavaTutorial07 = () => {
  const { getTutorials } = useTutorials();
  return (
    <CommonLayout>
      <Box mb={5}>
        <StyledHeading>[JAVA-CORE-07] Array - ArrayList - Mảng tập hợp các phần tử</StyledHeading>
      </Box>
      <Box mb={4}>
        <StyledHeading>Giới thiệu</StyledHeading>
        <StyledContent>
          Mảng trong Java là một tập hợp các biến có cùng kiểu. Mảng dùng đến khi cần lưu giữ danh
          sách các giá trị như các số
        </StyledContent>
        <StyledContent>
          Để khai báo mảng cần <code>Array</code> chỉ ra kiểu dữ liệu của các phần tử tiếp theo là{' '}
          <code>[ ]</code>
        </StyledContent>
      </Box>
      <Box mb={4}>
        <StyledHeading>Array - Khai báo mảng</StyledHeading>
        <StyledContent>Ví dụ sau khai báo một mảng số nguyên có tên arr</StyledContent>
        <StyledContent>
          Bây giờ, bạn cần số phần tử có thể lưu trữ trong mảng. Để làm điều này bạn dùng từ khóa
          new gán ngay tại khai báo hoặc gán sau với cú pháp
        </StyledContent>
        <StyledContent>
          <code>int[] arr = new int[5];</code>
          <br />
          Hoặc
          <br />
          <code>
            int[] arr; <br />
            arr = new int[5];
          </code>
        </StyledContent>
        <StyledContent>
          Đoạn mã trên tạo ra mạng lưu được 5 phần tử. Trong mảng mỗi phần tử có một hằng số để xác
          định vị trí của nó trang mảng gọi là chỉ số <code>index</code>. Để trỏ đến phần tử trong
          mảng cần viết tên mảng và theo sau là chỉ số nằm trong cặp ngoặc vuông <code>[ ]</code>
        </StyledContent>
        <StyledContent sx={{ fontStyle: 'italic', color: 'red' }}>
          Lưu ý là chỉ số mảng bắt đầu từ 0, nên phần tử thứ 3 sẽ có chỉ số là 2.
        </StyledContent>
        <StyledContent>Ví dụ gán giá trị cho phần tử mảng thứ 3 </StyledContent>
        <StyledContent>
          <code>arr[2] = 42;</code>
        </StyledContent>
      </Box>
      <Box mb={4}>
        <StyledHeading>Khởi tạo giá trị cho mảng</StyledHeading>
        <StyledContent>
          Java cung cấp cách nhanh chóng để khởi tạo giá trị mảng các kiểu nguyên thủy khi bạn đã
          biết giá trị của nó và chèn ngay vào các phần tử mảng
        </StyledContent>
        <Replit repo={'java-tutorial-71'} query={{ embed: true }} path={'Main.java'} />
      </Box>
      <Box mb={4}>
        <StyledHeading>Duyệt qua các phần tử mảng</StyledHeading>
        <StyledContent>
          Lấy số phần tử mảng Mỗi đối tượng mảng, có thuộc tính <code>length</code> là số phần tử có
          trong mảng.
        </StyledContent>
        <Replit repo={'java-tutorial-72'} query={{ embed: true }} path={'Main.java'} />
      </Box>
      <Box mb={5}>
        <StyledHeading>Duyệt qua phần tử mảng với vòng lặp for</StyledHeading>
        <StyledContent>
          Khi đã có số lượng phần tử mảng, dễ dàng duyệt qua từng phần tử với vòng lặp
          <code>for</code> <Link to={'/java-tutorials/5'}>(here)</Link>. Ví dụ sau tính tổng cộng
          giá trị các phần tử mảng
        </StyledContent>
        <Replit repo={'java-tutorial-73'} query={{ embed: true }} path={'Main.java'} />
      </Box>
      <Box mb={5}>
        <StyledHeading>ArrayList</StyledHeading>
        <StyledContent>
          Trong Java, chúng ta cần khai báo độ dài của một mảng <code>array</code> trước khi sử
          dụng. Khi đã khai báo kích thước của một mảng rồi thì rất khó để thay đổi kích thước đó.
        </StyledContent>{' '}
        <StyledContent>
          Để xử lý vấn đề này, chúng ta có thể sử dụng lớp <code>ArrayList</code>. Các lớp{' '}
          <code>ArrayList</code>
          có mặt trong gói <code>java.util</code> cho phép chúng ta tạo ra các mảng có thể thay đổi
          kích thước.
        </StyledContent>
      </Box>
      <Box mb={5}>
        <StyledHeading>ArrayList - Khai báo</StyledHeading>
        <StyledContent>
          <code>{`ArrayList<Type> arrayList= new ArrayList<>();`}</code>
        </StyledContent>
        <StyledContent>
          Ở đây, Type là kiểu dữ liệu của ArrayList mà ta muốn tạo. Ví dụ,
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial07/tut07-03.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent>
          Chương trình trên đã sử dụng kiểu dữ liệu <code>Integer</code> và <code>String</code>. Ở
          đây, <code>Integer</code> là <code>class</code> bao bọc trương ứng của kiểu dữ liệu{' '}
          <code>int</code>.
        </StyledContent>
        <StyledContent sx={{ fontStyle: 'italic', color: 'red' }}>
          Lưu ý: không thể tạo danh sách các mảng thuộc kiểu dữ liệu cơ bản như int, float, char,
          v.v
        </StyledContent>
        <StyledContent sx={{ fontSize: 24, fontWeight: 700 }}>Sử dụng hàm add ()</StyledContent>
        <StyledContent>
          Để thêm một phần tử vào ArrayList, chúng ta sử dụng hàm add(). Ví dụ,
        </StyledContent>
        <Replit repo={'java-tutorial-74'} query={{ embed: true }} path={'Main.java'} />
      </Box>
      <Box mb={5}>
        <StyledHeading>Truy cập tới các phần tử trong ArrayList</StyledHeading>
        <StyledContent sx={{ fontSize: 24, fontWeight: 700 }}>Sử dụng hàm get ()</StyledContent>
        <StyledContent>
          Để truy cập ngẫu nhiên các phần tử của <code>ArrayList</code>, chúng ta sử dụng hàm
          <code>get()</code>. Ví dụ,
        </StyledContent>
        <Replit repo={'java-tutorial-75'} query={{ embed: true }} path={'Main.java'} />
      </Box>
      <Box mb={5}>
        <StyledHeading>Xóa các phần tử trong ArrayList</StyledHeading>
        <StyledContent sx={{ fontSize: 24, fontWeight: 700 }}>Sử dụng hàm remove ()</StyledContent>
        <StyledContent>
          Để loại bỏ một phần tử khỏi <code>ArrayList</code>, chúng ta có thể sử dụng hàm{' '}
          <code>remove()</code>. Ví dụ,
        </StyledContent>
        <Replit repo={'java-tutorial-76'} query={{ embed: true }} path={'Main.java'} />
      </Box>
      <Box>
        <Stack spacing={2}>
          {getTutorials(javaTutorials, 7).map((tutorial) => (
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
