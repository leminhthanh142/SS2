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

export const JavaTutorial08 = () => {
  const { getTutorials } = useTutorials();
  return (
    <CommonLayout>
      <Box mb={5}>
        <StyledHeading>[JAVA-CORE- Final ] Project tổng kết</StyledHeading>
      </Box>
      <Box mb={4}>
        <StyledHeading>Giới thiệu</StyledHeading>
        <StyledContent>
          Waoo , vậy là chúng ta đã cùng nhau đi đến phần kết thúc của khóa học rồi, tại bài học
          này, chúng ta hãy cùng nhau xây dựng một project có tên “Book Management” (Quản lý sách)..
          Tại project này, chúng ta sẽ áp dụng từng thứ nhỏ nhỏ lại để xây dựng lên một thứ to lớn
          nhé :D . Và các bạn đừng lo lắng, chúng ta sẽ cùng nhau thực hiện nó, okey let's goo.
        </StyledContent>
      </Box>
      <Box mb={4}>
        <StyledHeading>Mô tả ban đầu</StyledHeading>
        <StyledContent>
          Ứng dụng sẽ chạy và nhận đầu vào <code>input</code> trên màn hình tiêu chuẩn
          <code>console</code>. Chúng ta sẽ cùng nhau xây dựng từng thành phần của project{' '}
          <code>module</code>, sau đó ghép lại để hoàn thiện chương trình.
        </StyledContent>
        <List>
          Các chức năng :
          <StyledListItem>
            <ListItemText primary={<p>1. Xem tất cả book.</p>} />
          </StyledListItem>
          <StyledListItem>
            <ListItemText primary={<p>2. Thêm mới book.</p>} />
          </StyledListItem>
          <StyledListItem>
            <ListItemText primary={<p>3. Chỉnh sửa book.</p>} />
          </StyledListItem>
          <StyledListItem>
            <ListItemText primary={<p>4. Xóa book.</p>} />
          </StyledListItem>
          <StyledListItem>
            <ListItemText primary={<p>5. Tìm kiếm theo keyword.</p>} />
          </StyledListItem>
          <StyledListItem>
            <ListItemText primary={<p>6. Hiển thị menu trên console</p>} />
          </StyledListItem>
        </List>
      </Box>
      <Box mb={4}>
        <StyledHeading>Kiến thức cần có</StyledHeading>
        <StyledContent>
          Tại bài học này {':>'} chúng ta sẽ sử dụng và xâu chuỗi lại toàn bộ những gì đã học , từ
          đó các bạn sẽ có những ví dụ cụ thể hơn và dễ ghi nhớ hơn.
        </StyledContent>
      </Box>
      <Box mb={4}>
        <StyledHeading>Lets gooo!</StyledHeading>
        <StyledContent>
          Đầu tiên, chúng ta hãy tạo ra <code>project</code> mới trong Intellij Idea nhé ^^ Nếu bạn
          đã quên cách tạo, <Link to={'/java-tutorials/1'}>hãy xem lại bài này nhé</Link>
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial08/tut08-01.png'}
          sx={{ mb: 2 }}
        />
        <List>
          Chúng ta hãy chỉ tập trung vào file <code>src</code> thôi nhé {':>'} , nào giờ bạn hãy tạo
          ra 3 class có tên lần lượt : <code>Book.java</code>, <code>BookManage.java</code>,
          <code>Main.java</code>.
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  <code>- Book.java</code> : Đối tượng mà chúng ta sẽ sử dụng
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  <code>- BookManage.java</code> : Giúp chúng ta thực hiện các chức năng quản lý
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  <code>- Main.java</code> : hàm main() sẽ nằm ở đây, xương sống của ứng dụng
                </p>
              }
            />
          </StyledListItem>
        </List>
      </Box>
      <Box mb={5}>
        <StyledHeading>Book.java</StyledHeading>
        <StyledContent>
          Class Book sẽ có những thuộc tính <code>attributes</code> và các phương thức{' '}
          <code>methods</code> sau
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial08/tut08-02.png'}
          sx={{ mb: 2 }}
        />{' '}
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial08/tut08-03.png'}
          sx={{ mb: 2 }}
        />
      </Box>
      <Box mb={5}>
        <StyledHeading>BookManage.java</StyledHeading>
        <StyledContent>
          Class BookManage sẽ có các phương thức <code>methods</code> sau
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial08/tut08-04.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent sx={{ fontStyle: 'italic', color: 'red' }}>
          <code>1. public BookManager()</code> : hàm khởi tạo <code>constructor</code> và tạo ra
          những cuốn sách mặc định ^^
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial08/tut08-05.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent>Kết quả :</StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial08/tut08-06.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent sx={{ fontStyle: 'italic', color: 'red' }}>
          <code>2. public ArrayList getBooks()</code>: trả về toàn bộ book
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial08/tut08-07.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent sx={{ fontStyle: 'italic', color: 'red' }}>
          <code>3. public void printBooks(ArrayList books)</code> : In tất cả book hiện có, nếu
          không có thì hiển thị <code>Empty</code>
        </StyledContent>
        <StyledContent>
          Tương tự như hàm <code>main()</code> ở phía trên, chúng ta sẽ duyệt qua từng phần tử của
          bookList sau đó in ra book đó
        </StyledContent>
        <StyledContent sx={{ fontStyle: 'italic', color: 'red' }}>
          <code>4. public Book getBookById(int id)</code>: trả về book theo id
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial08/tut08-08.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent sx={{ fontStyle: 'italic', color: 'red' }}>
          <code>5. public boolean add(Book newBook)</code>: thêm mới book, nếu id đã tồn tại trả về
          false và ngược lại.
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial08/tut08-09.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent sx={{ fontStyle: 'italic', color: 'red' }}>
          <code>6. public void remove(int id)</code>: xóa book khỏi bookList và ngược lại.
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial08/tut08-10.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent sx={{ fontStyle: 'italic', color: 'red' }}>
          <code>7. public List searchByName(String keyword)</code>: Trả về những book có keyword
          trong tên
        </StyledContent>{' '}
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial08/tut08-11.png'}
          sx={{ mb: 2 }}
        />
      </Box>
      <Box mb={5}>
        <StyledHeading>Main.java</StyledHeading>
        <StyledContent>
          Class <code>Main</code> này sẽ là xương sống của cả trường trình. Để có thế nhận vào dữ
          liệu từ console , chúng ta sử dụng lớp <code>java.util.Scanner</code>
        </StyledContent>
        <StyledContent>
          Chúng ta sẽ đặt từ khóa <code>static</code> cho phương thức <code>printMenu()</code> để có
          thể truy cập mà không cần khởi tạo đối tượng
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial08/tut08-12.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent sx={{ fontStyle: 'italic', color: 'red' }}>
          Flow diagram của chương trình
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial08/tut08-13.png'}
          sx={{ mb: 2 }}
        />
        <Replit repo={'java-final'} query={{ lite: true }} path={'Main.java'} height={850} />
      </Box>
      <Box mb={5}>
        <StyledHeading>Lời kết</StyledHeading>
        <StyledContent>
          Vậy là chúng ta đã cùng nhau kết thúc khóa học Java cơ bản này, bây giờ các bạn sẽ tự tin
          hơn với hành trình học hỏi , trau dồi kiến thức trong ngành IT ^^^^
        </StyledContent>
      </Box>
      <Box>
        <Stack spacing={2}>
          {getTutorials(javaTutorials, 8).map((tutorial) => (
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
