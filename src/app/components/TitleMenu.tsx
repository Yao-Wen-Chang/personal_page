'use client';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import styled from 'styled-components'; 

const CenterMenu = styled(Menu)`
  display: flex;
  justify-content: center;
  background: black;


`;

const StyledMenuItem = styled(Menu.Item)`
  color: white;
`;

const TitleMenu = () => {

  const menuItems = [
    { key: 'profile', label: 'ABOUT ME' },
    { key: 'project', label: 'PROJECT' },
    { key: 'video', label: 'YOUTUBE' },
    { key: 'blog', label: 'BLOG' },
    { key: 'store', label: 'STORE' },
  ];
  return (
    <>
  
      <CenterMenu mode="horizontal">
        {menuItems.map(item => (
          <StyledMenuItem key={item.key}>
            {item.label}
          </StyledMenuItem>
        ))}
      </CenterMenu>
    
    </>

  );


};

export default TitleMenu;

