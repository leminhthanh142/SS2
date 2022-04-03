import React, { useState } from 'react';
import {
  Box,
  Button,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography
} from '@mui/material';
import { CodeEditor } from '../../../components/modules/CodeEditor';
import { Link } from 'react-router-dom';
import { customAxios } from '../../../customAxios';
import { useScrollToTop } from '../../../hooks/useScrollToTop';
import { CommonLayout } from '../../../components/layout/common';

const java02 = `public class JAV02 {
   public static void main(String[] args) {
       int a = 5;
       System.out.println(a);
   }
}

`;

export const Tutorial02 = () => {
  useScrollToTop();
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
    <CommonLayout>
      <Box mb={5}>
        <StyledHeading>[Java-Core-02] Comment, Biến, kiểu dữ liệu trong Java</StyledHeading>
      </Box>
      <Box mb={3}>
        <StyledHeading>Giới thiệu</StyledHeading>
        <StyledContent>
          Heyyyy, bài học <Link to={'/tutorials/1'}>làm quen với Java</Link> đầu tiên thế nào rồi :D
          ? Easy phải không nào :))) . Tiếp tục với series “...”, trong bài học này chúng ta sẽ tìm
          hiểu về <code>comment</code> (Ghi chú), <code>Biến</code> (Variable),{' '}
          <code>Kiểu dữ liệu</code> ( Data Type) .
        </StyledContent>
      </Box>
      <Box mb={3}>
        <StyledHeading>Comment</StyledHeading>
        <StyledContent>
          Những đoạn <code>comment</code> nhằm giúp giải thích phần <code>code</code> mà bạn muốn
          ghi chú đấy ,<code>comment</code> sẽ được bỏ qua khi chúng ta chạy chương trình nên bạn
          đừng lo nhé :D
        </StyledContent>
        <List>
          Có 3 dạng comment :
          <StyledListItem>
            <ListItemText
              primary={
                <div>
                  <p>
                    1. Theo dòng (line): <code>{'//'}</code> những kí tự phía sau sẽ được bỏ qua.
                  </p>
                  <CardMedia
                    component={'img'}
                    image={'/images/tutorials/tutorial02/image1.png'}
                    sx={{ mb: 2 }}
                  />
                </div>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <div>
                  <p>
                    2. Theo khối <code>(block)</code> : bắt đầu bằng <code>{'/*'}</code> và kết thúc
                    bằng <code>{'*/'}</code> :
                  </p>
                  <CardMedia
                    component={'img'}
                    image={'/images/tutorials/tutorial02/image2.png'}
                    sx={{ mb: 2 }}
                  />
                </div>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <div>
                  <p>
                    3. Cũng là khối nhưng có tác dụng như 1 document: bắt đầu bằng{' '}
                    <code>{'/**'}</code> và kết thúc bằng
                    <code>{'**/'}</code>
                  </p>
                  <CardMedia
                    component={'img'}
                    image={'/images/tutorials/tutorial02/image3.png'}
                    sx={{ mb: 2 }}
                  />
                </div>
              }
            />
          </StyledListItem>
        </List>
      </Box>
      <Box mb={3}>
        <StyledHeading>Biến & Kiểu dữ liệu</StyledHeading>
        <StyledContent>
          Nói tới <code>biến</code> chắc hẳn bạn đang liên tưởng gì đó đến Toán phải không ?? :D ??
          Bạn không nhầm đâu, chính là nó đấy. Để dễ hình dung hơn, bạn hãy chạy thử chương trình
          sau nhé
        </StyledContent>
        <CodeEditor code={java02} disableExampleTestScreen readOnly />
        <br />
        <StyledContent>
          Nếu bạn có lỡ quên cách chạy chương trình thì “Its okay - chúng ta đều là những người
          mới”, bạn có thể xem lại tại <Link to={'/tutorials/1'}>đây.</Link>
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial02/image4.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent>
          <a href="https://vi.wikipedia.org/wiki/Bi%E1%BA%BFn_s%E1%BB%91">
            <i>
              Trong toán học, Biến số là một số có giá trị bất kỳ, không bắt buộc phải duy nhất có
              một giá trị, biến số là số có thể thay đổi giá trị trong một tình huống có thể thay
              đổi. (Wikipedia)
            </i>
          </a>
        </StyledContent>
        <StyledContent>
          Cũng như vậy trong Java, <code>Biến</code> đại diện cho một đối tượng và phải xác định xem
          nó thuộc Kiểu dữ liệu nào. Chúng ta có 2 kiểu đó là : <code>nguyên thủy</code> (primitive)
          và <code>Đối tượng</code>
          (Object).
        </StyledContent>
        <List>
          Có các kiểu dữ liệu nguyên thuỷ (primitive) như sau:
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>byte</code> : dùng để lưu dữ liệu kiểu số nguyên có kích thước một byte (8
                  bit).
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
                  • <code>boolean</code>: là kiểu logic, chỉ có 2 giá trị true hoặc false
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>char</code>: kiểu ký tự, chỉ chứa đc được một ký tự, được định nghĩa trong
                  dấu ngoặc đơn ' int : số nguyên (1,2,3, ..)
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>short</code> : số nguyên, bé hơn int.
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>long</code>: số nguyên, lớn hơn int.
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>float</code>: số thực (1.5, 2.5, ..).
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • <code>double</code>: số thực, lớn hơn float.
                </p>
              }
            />
          </StyledListItem>
        </List>
        <StyledContent>
          Chúng ta đã từng <code>System.out.println("Hello World!");</code> để in ra{' '}
          <code>console</code> với một chuỗi <code>"Hello World!"</code> Và đó chính là kiểu dữ liệu
          <code>Object</code> (incoming ) có tên là <code>String</code>. Với một chuỗi các kí tự,
          được định nghĩa trong dấu ngoặc kép "".
        </StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial02/image5.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent>
          Bạn có thấy những kí tự <code>L,f,d</code> không ? đó chính là chữ cái bắt đầu của mỗi
          kiểu dữ liệu tương ứng với L là <code>long</code>, f là <code>float</code> và d là{' '}
          <code>double</code>.
        </StyledContent>
      </Box>
      <Box mb={3} mt={3}>
        <StyledHeading>Cách khai báo (Declaring a variable)</StyledHeading>
        <StyledContent>
          Ồ, làm thế nào mà Java có thể hiểu dữ liệu mà bạn đang muốn thực thi là gì nhỉ ? Vậy nên
          chúng ta cần phải khai báo.
        </StyledContent>
        <List>
          Chúng ta có những cách sau :
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • Cách 1: <code>[kiểu_dữ_liệu] khoảng cách [tên_biến];</code>
                  {'  '}
                  <code>int a;</code>
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • Cách 2: <code>[kiểu_dữ_liệu] khoảng cách [tên_biến] = [giá_trị];</code>
                  {'   '}
                  <code>int a = 5;</code>
                </p>
              }
            />
          </StyledListItem>
        </List>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial02/image6.png'}
          sx={{ mb: 2 }}
        />
      </Box>
      <Box mb={3}>
        <StyledHeading>Hằng</StyledHeading>
        <StyledContent>
          Trái ngược với <code>Biến</code>, chúng ta có <code>hằng</code> {':>'} là thứ sẽ luôn luôn
          giữ nguyên, tất nhiên ta đã khởi tạo giá trị ngay từ đầu.
        </StyledContent>
        <List>
          Lý do sử dụng hằng:
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • Tạo ra những giá trị vốn thực tế không cho thay đổi, làm chương trình an toàn
                  hơn.
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • Giúp người đọc biết ý nghĩa con số vô cảm trong khoa học như có thể áp dụng giá
                  trị số PI, gia tốc trọng trường,...
                </p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • Sẽ cảnh báo nếu người dùng cố tình thay đổi giá trị sau này. Đảm bảo tính toán
                  vẹn của giá trị
                </p>
              }
            />
          </StyledListItem>
        </List>
        <StyledContent>
          Cách khai báo của hằng cũng tương tự như biến, nhưng có thêm từ khóa (keyword) final :
          <br />
          <code>{`final <kiểu dữ liệu> <tên biến> = <giá trị hằng>;`}</code>
        </StyledContent>
      </Box>
      <Box mb={3}>
        <StyledHeading>Cách đặt tên (Naming convention)</StyledHeading>
        <List>
          Để tránh trường hợp “Ông nói gà, bà nói vịt” thì chúng ta cần thống nhất với nhau theo một
          quy tắc, để cách đặt tên được đồng bộ.
          <StyledListItem>
            <ListItemText
              primary={
                <p>• Một biến chỉ có thể được khai báo 1 lần trong một chương trình cơ bản.</p>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <p>
                  • Tên biến là 1 loại mã định danh (<code>Identifier</code>- chúng ta sẽ dùng tên
                  tiếng Anh nhé) và phải tuân theo các quy tắc. Identifier là tên được đặt cho những
                  thứ như : biến, class, method,...v.v
                  <br />
                  <code>Identifier</code> có thể chứa các ký tự (a-z, A-Z), số (0-9), gạch chân(_)
                  và đô la ($)” Đối với biến chúng ta sử dụng quy tắc lạc đà
                  <code>Camel Case</code>: đó là chữ cái đầu tiên của từ đầu tiên phải viết thường
                  và chữ cái đầu tiên của các từ tiếp theo phải viết hoa, ví dụ: classList,
                  maxScore.
                </p>
              }
            />
          </StyledListItem>
        </List>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial02/image7.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent>
          Chi tiết hơn về các quy tắc, các bạn có thể xem tại{' '}
          <a href="https://www.oracle.com/java/technologies/javase/codeconventions-namingconventions.html">
            đây
          </a>
        </StyledContent>
      </Box>
      <Box mb={3}>
        <StyledHeading>Phạm vi sử dụng (Variable scopes)</StyledHeading>
        <StyledContent>Ơ tại sao lại phải sinh ra phạm vi này nhỉ ?</StyledContent>
        <StyledContent>Nào hãy cùng xem ví dụ nhé</StyledContent>
        <CardMedia
          component={'img'}
          image={'/images/tutorials/tutorial02/image8.png'}
          sx={{ mb: 2 }}
        />
        <StyledContent>
          Đó, IDE đã báo với chúng ta rằng Không thể xử lý a (Cannot resolve symbol ‘a’ - Identifier
          expected) , vậy nên khi bạn khai báo một biến a trong 2 cái dấu {} thì bạn chỉ có thể sử
          dụng ở trong nó thôi, ra ngoài nó sẽ không hiểu a là thằng nào và từ đâu chui ra.
        </StyledContent>
        <List>
          Chúng ta có 3 phạm vi <code>scope</code> :
          <StyledListItem>
            <ListItemText
              primary={
                <div>
                  <p>
                    • <code>Class</code> ( hay còn là <code>global</code>) <code>scope</code> :{' '}
                    <code>scope</code>
                    đại ca, to nhất nơi đây, khai báo ở ngoài các hàm (như{' '}
                    <code>public static void main(String[] args)</code>) và bên trong{' '}
                    <code>class</code>.
                  </p>
                  <CardMedia
                    component={'img'}
                    image={'/images/tutorials/tutorial02/image9.png'}
                    sx={{ mb: 2 }}
                  />
                </div>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <div>
                  <p>
                    • <code>Method scope</code> : khai báo bên trong hàm
                  </p>
                  <CardMedia
                    component={'img'}
                    image={'/images/tutorials/tutorial02/image10.png'}
                    sx={{ mb: 2 }}
                  />
                </div>
              }
            />
          </StyledListItem>
          <StyledListItem>
            <ListItemText
              primary={
                <div>
                  <p>
                    • <code>Block scope</code> (khối) : Phần này sẽ được giải thích kĩ hơn sau nha
                    :D
                  </p>
                  <CardMedia
                    component={'img'}
                    image={'/images/tutorials/tutorial02/image11.png'}
                    sx={{ mb: 2 }}
                  />
                </div>
              }
            />
          </StyledListItem>
        </List>
      </Box>
      <Box mb={5}>
        <StyledHeading>Lời kết</StyledHeading>
        <StyledContent>
          Vậy là chúng ta đã biết được cách comment, hiểu được Biến là gì, chúng ta có những kiểu dữ
          liệu nào , cách đặt tên sao cho đúng và phạm vi của chúng. Để hiểu rõ hơn chúng ta hãy
          cùng làm một số bài tập nha :)))
        </StyledContent>
      </Box>
      <Box mb={15}>
        <StyledContent>
          <Link to={'/tutorials/1'}>[Java-Core-01] Giới thiệu Java căn bản</Link>
        </StyledContent>
        <StyledContent>
          <Link to={'/tutorials/3'}>[Java-Core-03] Biểu thức, Statements ,Boolean expressions</Link>
        </StyledContent>
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
