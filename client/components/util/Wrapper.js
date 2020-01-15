import React from 'react';
import styled from '@emotion/styled';

const Content = styled.section({
  padding: '.15rem 1rem',
  minHeight: '100vh',
  backgroundColor: '#272526'
});

function Wrapper(props) {
  return (
    <Content>
      <div className='container ' {...props} />
    </Content>
  );
}

export default Wrapper;
