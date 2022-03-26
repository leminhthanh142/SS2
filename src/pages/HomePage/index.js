import React, { useState } from 'react';
import { HomeLayout } from '../../components/layout/home';
import {
  Typography,
  styled,
  Box,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Button,
  CircularProgress
} from '@mui/material';
import './style.css';
import { CodeEditor } from '../../components/modules/CodeEditor';
import { Link } from 'react-router-dom';
import { customAxios } from '../../customAxios';
import { CancelOutlined, CheckCircle } from '@mui/icons-material';

const helloWorld = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }  
}
`;

const helloWorldBody = `
// Nơi đầu tiên Java tìm tới và đọc toàn bộ phần code nằm trong đây.
/** 2 dấu { } : đánh dấu phần bắt đầu và kết thúc của 1 code block 
  và nó sẽ đọc hết mọi thứ bên trong từ trên xuống dưới
  
  public static void main(String[] args) {
    (body) or (code block)
  } 
    
**/
public class HelloWorld {
  public static void main(String[] args) {
    /** Mọi dòng code của Java được kết thúc bằng ";"
        Đây chính là câu lệnh giúp bạn in ra màn hình đó
    
      "Hello World!" : chính là nội dung mà bạn muốn hiển thị, dấu “ ” giúp cho Java biết đó chính là một chuỗi 
      chứ không phải một thứ gì khó hiểu cả :D
     
    **/   
    System.out.println("Hello World!");
  }  
}
`;

export const HomePage = () => {
  const [output, setOutput] = useState({
    actual: '',
    error: '',
    message: '',
    expected: ''
  });

  const handleSubmit = async (code) => {
    const res = await customAxios.post('/test', code, {
      headers: {
        'Content-Type': 'text/plain'
      }
    });
    setOutput(res.data);
  };

  return (
    <HomeLayout>
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
          <StyledContent>Let’s goo!</StyledContent>
        </Box>
        <Box mb={3}>
          <StyledHeading>Java</StyledHeading>
          <StyledContent>
            <a href="https://vi.wikipedia.org/wiki/Java_(ng%C3%B4n_ng%E1%BB%AF_l%E1%BA%ADp_tr%C3%ACnh)">
              Java{' '}
            </a>
            (phiên âm Tiếng Việt: "Gia-va") là một ngôn ngữ lập trình hướng đối tượng, giúp cho các
            nhà phát triển phần mềm viết một lần, chạy ở mọi nơi (WORA). Vì mỗi hệ điều hành là khác
            nhau (OS) với lý do đó Java ra đời vào năm 1995.
          </StyledContent>
        </Box>
        <Box mb={3}>
          <StyledHeading>Cài đặt môi trường</StyledHeading>
          <StyledContent>Bạn đang thắc mắc môi trường là gì ư ?</StyledContent>
          <StyledContent>
            Để mình lấy ví dụ, tưởng tượng bạn đang xem Youtube , và video đó không phải là ngôn ngữ
            bạn biết, khi đó bạn sẽ nhấn vào “Phụ đề” để có thể hiểu được nội dung. Và tương tự Java
            virtual machine (JVM) xuất hiện để phiên dịch cho mỗi OS mà bạn đang sử dụng.
          </StyledContent>
          <CardMedia component={'img'} image={'/images/home/image1.png'} sx={{ mb: 2 }} />
          <StyledContent>
            Và vì chúng ta là lập trình viên nên cần một bộ công cụ để có thể lập trình được Java.
            Ngoài ra trong quá trình cài, nó sẽ cài môi trường JRE (Java Runtime Environment, bao
            gồm cả thằng JVM ở trên) luôn, tiện lợi.
          </StyledContent>{' '}
          <StyledContent>
            Mình sẽ đính kèm link để các bạn có thể tải xuống.Trong series này mình sẽ tập trung vào
            Windows OS, sau đó bạn chọn phiên bản x64 Installer và tiến hành cài đặt như bình
            thường.
          </StyledContent>
          <StyledContent>
            <a href="https://www.oracle.com/java/technologies/downloads/#java17">
              Download tại đây
            </a>
          </StyledContent>
          <CardMedia component={'img'} image={'/images/home/image2.png'} sx={{ mb: 2 }} />
        </Box>
        <Box mb={3}>
          <StyledHeading>Integrated Development Environment (IDE)</StyledHeading>
          <StyledContent>
            IDE là môi trường tích hợp dùng để viết code để phát triển ứng dụng. Đối với những phiên
            bản cao cấp thì IDE cung cấp tất tần tật các chức năng siêu cấp vippro, ở đây chúng ta
            sẽ sử dụng Intellij IDEA, với 2 phiên bản : Community (Free) và Ultimate (Trả phí hoặc
            miễn phí- với những bạn có email dạng “.edu ”).{' '}
          </StyledContent>
          <StyledContent>
            <a href="https://www.jetbrains.com/idea/download/#section=windows">Download tại đây</a>
          </StyledContent>
          <CardMedia component={'img'} image={'/images/home/image3.png'} sx={{ mb: 2 }} />
          <StyledContent>
            Tại đây các bạn chọn hệ điều hành thích hợp và tiến hành cài đặt giống JDK và chọn next
            và accept với mọi mục để hưởng dịch vụ tốt nhất nhé !
          </StyledContent>
        </Box>
        <Box mb={3}>
          <StyledHeading>Hello World</StyledHeading>
          <StyledContent>
            OKey, sau một loạt bước cài đặt, thì bạn bây giờ đã sẵn sàng để bắt đầu Lập trình Java.
            Mở <code>Intellij</code> lên nào, chọn <code>New project</code>.
          </StyledContent>
          <CardMedia component={'img'} image={'/images/home/image4.png'} sx={{ mb: 2 }} />
          <StyledContent>
            Bạn hãy chọn thẻ Java bên trái và nhấn Next 2 lần để tiến hành đặt tên cho Project của
            mình, ở đây mình sẽ đặt là “HelloWorld” và nhấn Finish để hoàn thành thui
          </StyledContent>
          <CardMedia component={'img'} image={'/images/home/image5.png'} sx={{ mb: 2 }} />
          <StyledContent>
            Bạn sẽ thấy cấu trúc project của mình, hãy cùng nhìn vào cấu trúc nha
          </StyledContent>
          <CardMedia component={'img'} image={'/images/home/image6.png'} sx={{ mb: 2 }} />
          <StyledContent>
            <code>.idea</code>: đây là thư mục do chính Intellij tự tạo ra, các bạn có thể bỏ qua
            phần này nhé <code>src</code> : đây là nơi bạn để tất cả code trong này.
            <code>projectName.iml</code> bạn cũng có thể bỏ qua nó .
          </StyledContent>
          <List>
            Được rồi, hãy tạo một chương trình đầu tiên của chính mình thôi :D Để tạo được ứng dụng
            đầu tiên, bạn hãy:
            <StyledListItem>
              <ListItemText
                primary={
                  <p>
                    • Chuột phải vào <code>src</code> {'-->'} <code>New</code> {'-->'}{' '}
                    <code>Java Class</code> {'-->'} đặt tên là <code>HelloWorld</code> {'-->'} enter
                  </p>
                }
              />
            </StyledListItem>
            <StyledListItem>
              <ListItemText
                primary={
                  '• Sau đó hãy copy toàn bộ đoạn code sau đây và dán vào HelloWorld.java mà bạn vừa tạo nhé'
                }
              />
            </StyledListItem>
          </List>
          <CodeEditor code={helloWorld} disableExampleTestScreen readOnly />
          <br />
          <StyledContent>
            Sau đó click chuột phải vào file trên màn hình, chọn Run <code>fileName.main()</code> (
            hoặc tổ hợp phím <code>Ctrl + Shift + F10</code> để chạy chương trình.
          </StyledContent>
          <CardMedia component={'img'} image={'/images/home/image7.png'} sx={{ mb: 2 }} />
          <StyledContent>
            Congrats, với dòng chữ “Hello World!” được in ra màn hình, bạn đã hoàn thành ứng dụng
            đầu tiên cho riêng mình :D Bravo
          </StyledContent>
        </Box>
        <Box>
          <StyledHeading>Góc giải thích</StyledHeading>
          <List>
            Với ví dụ trên :
            <StyledListItem>
              <ListItemText
                primary={
                  <p>
                    • Cơ bản các file code sẽ nằm trong thư mục <code>src</code>
                  </p>
                }
              />
            </StyledListItem>
            <StyledListItem>
              <ListItemText
                primary={
                  <p>
                    • File code sẽ kết thúc bằng <code>.java</code>
                  </p>
                }
              />
            </StyledListItem>
            <StyledListItem>
              <ListItemText
                primary={
                  <p>
                    • Tên file đặt là <code>HelloWorld</code> thì trong file sẽ mặc định là public
                    class <code>HelloWorld</code>
                  </p>
                }
              />
            </StyledListItem>
          </List>
          <StyledContent>
            Chúng ta tạm thời bỏ qua <code>public class HelloWorld</code> nhé, mình sẽ giải thích ở
            bài sau. Bây giờ chúng ta sẽ tập trung vào :
          </StyledContent>
          <Box display="flex" alignItems="stretch">
            <Box width={800}>
              <CodeEditor
                code={helloWorldBody}
                disableExampleTestScreen
                allowSubmitBtn
                onSubmit={handleSubmit}
              />
            </Box>
            {output && (
              <Box height={500} width={'30%'} sx={{ backgroundColor: 'rgb(23,23,25)' }} p={3}>
                {output.message === 'Correct' && (
                  <Box display={'flex'} alignItems={'center'}>
                    <Typography sx={{ color: '#4bb543' }}>All tests passed!</Typography>
                    <CheckCircle sx={{ ml: 2, color: '#4bb543' }} />
                  </Box>
                )}
                {output.message === 'Incorrect' && (
                  <Box>
                    <Box display={'flex'} alignItems={'center'}>
                      <Typography sx={{ color: '#C73E1D' }}>Test failed!</Typography>
                      <CancelOutlined sx={{ ml: 2, color: '#C73E1D' }} />
                    </Box>
                    <Typography>
                      Expected: `&quot;{output.expected}`&quot; actual: `&quot;{output.actual}
                      `&quot;
                    </Typography>
                  </Box>
                )}
                {output.error && <code style={{ color: '#C73E1D' }}>{output.error}</code>}
              </Box>
            )}
          </Box>
        </Box>
        <Box mb={3} mt={3}>
          <StyledHeading>Kết</StyledHeading>
          <StyledContent>
            Wehooo!!! vậy là bạn đã chính thức bước vào thế giới Java đầy bí ẩn, mình có ông anh 96…
            à mà thôi!
          </StyledContent>
        </Box>
        <Box mb={15}>
          <Link to={'/tutorials'}>
            <Button variant={'contained'}>
              <Typography fontSize={'18px'}>Khám phá thêm các bài giảng thôi nào</Typography>
            </Button>
          </Link>
        </Box>
      </div>
    </HomeLayout>
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
