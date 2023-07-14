'use client';
import TitleMenu from "../components/TitleMenu";
import ExternalLink from "../components/ExternalLink";
import styled, { keyframes } from 'styled-components'; 
import Image from 'next/image';
import { Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';
const { Title } = Typography;

const BlackBackground = styled.div`
  background: black;
  width: 100%;
  height: 100vh;
`;

const OverlayImage = styled(Image)`
  position: absolute;
  right: 25% !important;
  transform: translateY(20%);
  z-index: 2;
`;

const GradientTwoLineTitle = styled(Title)`
  && {
    white-space: pre-line;
    display: flex;
    justify-content: center;
    background: linear-gradient(to right, grey 0%, grey 40%, white 50%, grey 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 100px; /* Adjust the font size as needed */
    position: relative;
    z-index: 1;

  }
`;

const ExternalLinkContainer = styled.div`
  position: absolute;
  right: 15%;
`;

const RoundIconLink = styled.a`
  display: inline-block;
  position: fixed;  border-radius: 50%;
  padding: 8px;
  background: blue;
  color: white;
  left: 30%;
`;


const Dashboard = () => {
  return (
    // <Container>
    <BlackBackground>
      <TitleMenu />
      <div>
        {/* <TitleContainer> */}
        <GradientTwoLineTitle level={1}>
          神愛世人
          <br />
          我愛女人  
          <OverlayImage src="/man-side-face.png" alt="My Image" height={300} width={300}/>
          
        </GradientTwoLineTitle>
        <RoundIconLink href="mailto:changyaowen19980629@gmail.com">
          <MailOutlined style={{ fontSize: '60px', margin: '10px'}} />
        </RoundIconLink>
        <ExternalLinkContainer>
          <ExternalLink />
        </ExternalLinkContainer>

        {/* </TitleContainer> */}
        
      </div>
    </BlackBackground>
    // </Container>

  );


};

export default Dashboard;