import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Stack, styled, CardMedia, Card } from '@mui/material';
import { CommonLayout } from '../../components/layout/common';
import { Drawing } from '../../components/logos/Drawing';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useAuth } from '../../context/authContext';
import { LessonIcon } from '../../components/elements/LessonIcon';
import { Header } from '../../components/Header';

export const HomePage = () => {
  const { user } = useAuth();

  return (
    <CommonLayout width={'100%'}>
      <Wrapper pt={10}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Box>
            <Heading variant={'h1'}>
              The Best Way To <br />
              Learn Java
            </Heading>
            <Box mt={4} mb={5}>
              <Stack spacing={2} direction={'row'} alignItems={'center'} mb={2}>
                <CardMedia
                  component={'img'}
                  image={'/images/chiendao.jpeg'}
                  sx={{ borderRadius: '10px', width: 50, height: 50 }}
                />
                <Typography sx={{ fontWeight: 700 }}>by ChienDao</Typography>
              </Stack>
              <Stack spacing={2} direction={'row'} alignItems={'center'} mb={5}>
                <CardMedia
                  component={'img'}
                  image={'/images/thanhle.jpeg'}
                  sx={{ borderRadius: '10px', width: 50, height: 50 }}
                />
                <Typography sx={{ fontWeight: 700 }}>by ThanhLe</Typography>
              </Stack>
              <Box mb={5}>
                <Typography>
                  Chỉ với 7 bài học chúng mình sẽ giúp bạn nắm được những thứ cơ bản về{' '}
                  <code>Java</code>
                </Typography>
              </Box>
              <Link to={'/java-tutorials'}>
                <StyledButton>
                  <img src="/images/illustration-student@2x.png" alt="" />
                  <Typography sx={{ fontWeight: 500 }}>Bắt Đầu Học Thôi Nào</Typography>
                </StyledButton>
              </Link>
            </Box>
          </Box>
          <CardMedia
            component={'img'}
            image={'/images/hero-background.png'}
            sx={{ width: 800, marginTop: -15 }}
          />
        </Stack>
      </Wrapper>
      <Container mt={15} pt={15} pb={15}>
        <Heading sx={{ color: '#ffffff', fontSize: 40 }} align={'center'}>
          Khóa Học Này Có <br />
          Dành Cho Bạn Không?
        </Heading>
        <Box mt={5}>
          <Typography sx={{ color: '#a5a5a5', fontStyle: 'italic' }} align={'center'}>
            Khóa học này cực kì cơ bản, dành cho những bạn mới bắt đầu học Java
          </Typography>
          <Typography sx={{ color: '#a5a5a5', fontStyle: 'italic' }} align={'center'}>
            Với những bạn đã có kiến thức về java thì có thể ôn tập với những bài tập <br />
            trong phần practices, với độ khó tăng dần
          </Typography>
        </Box>
        <Stack direction={'row'} gap={3} justifyContent={'center'} mt={10}>
          <InformationCard>
            <CardMedia component={'img'} image={'/images/illustration-webgl@2x.png'} />
            <Title>Bạn không cần phải biết Java trước đó</Title>
            <Description>
              Khóa đào tạo này dành cho những người mới bắt đầu hoàn toàn và sẽ giải thích những
              điều cơ bản trước khi giải quyết các chủ đề nâng cao hơn.
            </Description>
          </InformationCard>
          <InformationCard>
            <CardMedia component={'img'} image={'/images/illustration-mathematics@2x.png'} />
            <Title>Bạn không cần thiết phải xuất sắc với môn toán</Title>
            <Description>
              Nhiều bạn nhầm tưởng rằng học code là cần phải học thật giỏi toán, và đúng là thế thật
              :v. Nhưng bạn đừng lo chúng ta sẽ cải thiện logic qua từng ngày và từng bài
            </Description>
          </InformationCard>
          <InformationCard>
            <CardMedia component={'img'} image={'/images/illustration-computer@2x.png'} />
            <Title>Bạn không cần phải có 1 chiếc máy tính trâu bò</Title>
            <Description>
              Và đúng như vậy, bạn không cần phải có 1 chiếc máy tính quá trâu bò để code, bạn có
              thể code trực tiếp ở trên web luôn. Thật tuyệt vời phải không nào
            </Description>
          </InformationCard>
        </Stack>
      </Container>
      <Wrapper>
        <Box mt={15}>
          <Heading variant={'h2'} align={'center'}>
            Bạn Sẽ Học Những Gì
          </Heading>
          <Stack direction={'row'} gap={2} justifyContent={'space-between'} mt={10}>
            <StyledCard>
              <Typography sx={{ fontWeight: 700, fontSize: 24 }}>01</Typography>
              <StyledTitle sx={{ color: '#ff6651' }}>Basic</StyledTitle>
              <Typography>Bạn sẽ tìm hiểu cơ bản về java</Typography>
              <img src="/images/chapter-01@2x.png" alt="" width={290} />
              <Stack direction={'row'} gap={1} mt={2}>
                <LessonIcon color={'#ff6651'} />
                <Typography sx={{ color: '#ff6651' }}>7 bài học</Typography>
              </Stack>
              <StyledContent>
                <span>01</span> Giới thiệu Java căn bản
              </StyledContent>
              <StyledContent>
                <span>02</span> Comment, Biến, kiểu dữ liệu trong Java
              </StyledContent>
              <StyledContent>
                <span>03</span> Biểu thức, Statements ,Boolean expressions
              </StyledContent>
              <StyledContent>
                <span>04</span> Câu lệnh rẽ nhánh
              </StyledContent>
              <StyledContent>
                <span>05</span> Vòng lặp, lặp đi lặp lại
              </StyledContent>
              <StyledContent>
                <span>06</span> Hàm - Phương thức (Method)
              </StyledContent>
              <StyledContent>
                <span>07</span> Array - ArrayList - Mảng tập hợp các phần tử
              </StyledContent>
            </StyledCard>
            <StyledCard>
              <Typography sx={{ fontWeight: 700, fontSize: 24 }}>02</Typography>
              <StyledTitle sx={{ color: '#54b3fa' }}>
                Final <br />
                Project
              </StyledTitle>
              <Stack direction={'row'} spacing={1} mt={2}>
                <Box>
                  <LessonIcon />
                </Box>
                <Typography>
                  Dự án này giúp người học hiểu sâu hơn thông qua các dự án nhỏ được chia thành các
                  phần (khóa học) và sau đó được ghép lại thành một chương trình lớn (dự án cuối
                  cùng).
                </Typography>
              </Stack>
              <img src="/images/chapter-04@2x.png" alt="" width={313} />
            </StyledCard>
            <StyledCard>
              <Typography sx={{ fontWeight: 700, fontSize: 24 }}>03</Typography>
              <StyledTitle sx={{ color: '#ffb905' }}>Practices</StyledTitle>
              <Stack direction={'row'} spacing={1} mt={10}>
                <Box>
                  <LessonIcon color={'#ffb905'} />
                </Box>
                <Typography>
                  Tại đây bạn có thể thỏa sức thể hiện khả năng của mình với những bài tập từ khó
                  đến dễ. Hơn thế nữa bạn còn có thể tham khảo nhiều cách khác nhau từ những người
                  dùng khác nữa nhé
                </Typography>
              </Stack>
              <img src="/images/chapter-02@2x.png" alt="" width={313} />
            </StyledCard>
          </Stack>
        </Box>
      </Wrapper>
    </CommonLayout>
  );
};

const Wrapper = styled(Box)(() => ({
  width: '80%',
  margin: '0 auto'
}));

const Container = styled(Box)(() => ({
  background: '#150c21'
}));

const StyledTitle = styled(Typography)(() => ({
  color: '#ff6651',
  marginBottom: '15px',
  fontSize: 42,
  fontWeight: 700
}));

const StyledCard = styled(Stack)(() => ({
  position: 'relative',
  padding: '55px 55px 40px',
  borderRadius: '10px',
  maxWidth: 540,
  minWidth: 508,
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 25px 0px',
  '& img': {
    position: 'absolute',
    right: -30,
    top: -60
  }
}));

const StyledContent = styled(Typography)(() => ({
  fontSize: 18,
  marginTop: 16,
  paddingTop: 10,
  paddingBottom: 12,
  backgroundImage: 'url(/images/dot.png)',
  backgroundPosition: 'bottom left',
  backgroundRepeat: 'repeat-x',
  '& span': {
    color: '#ff6651',
    fontWeight: 700,
    marginRight: 8
  }
}));

const Heading = styled(Typography)(() => ({
  fontSize: 58,
  fontWeight: 700
}));

const StyledButton = styled(Box)(() => ({
  position: 'relative',
  borderRadius: '36px',
  width: 'fit-content',
  boxShadow: '0px 24px 74px rgb(60 0 189 / 16%)',
  background: '#ffffff',
  color: '#705df2',
  padding: '20px 32px',
  '& img': {
    position: 'absolute',
    top: -10,
    left: -10,
    width: 60,
    height: 60
  }
}));

const InformationCard = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  width: '288px',
  marginLeft: 10,
  marginBottom: 40,
  marginRight: 10,
  padding: '10px 35px 35px 35px',
  borderRadius: 10,
  border: '2px solid rgba(255,255,255,0.06)',
  flexDirection: 'column',
  alignItems: 'center',
  '& img': {
    display: 'block',
    marginTop: -35,
    width: 138,
    height: 138
  }
}));

const Title = styled(Typography)(() => ({
  fontSize: 20,
  marginTop: 12,
  color: '#ffffff',
  textAlign: 'center',
  fontWeight: 700
}));

const Description = styled(Typography)(() => ({
  color: '#a5a5a5',
  marginTop: 12,
  fontSize: 16,
  textAlign: 'center'
}));
