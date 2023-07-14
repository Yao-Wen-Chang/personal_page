'use client';
import { Menu } from 'antd';
import { GithubOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
import styled from 'styled-components'; 

const CenterMenu = styled(Menu)`
  // display: flex;
  // justify-content: center;
  background: black;
`;


const RoundedItem = styled(Menu.Item)`
  color: white;
  .anticon {
    border-radius: 50%;
  }
`;

const ExternalLink = () => {

  const menuItems = [
    { key: 'github', label: 'ABOUT ME', icon: <GithubOutlined />, url: 'https://github.com/Yao-Wen-Chang'},
    { key: 'linkedin', label: 'PROJECT', icon: <LinkedinOutlined />, url: 'https://www.linkedin.com/in/yao-wen-chang-22b50323a/'},
    { key: 'youtube', label: 'YOUTUBE', icon: <YoutubeOutlined />, url: 'https://www.youtube.com/watch?v=bGwiBzam5RI&t=150s'},
  ];
  return (
    <>
  
      <CenterMenu mode="vertical">
        {menuItems.map(item => (
          <RoundedItem key={item.key} icon={item.icon}>
            <a href={item.url}>{item.label}</a>
          </RoundedItem>
        ))}
      </CenterMenu>
    
    </>

  );


};

export default ExternalLink;

