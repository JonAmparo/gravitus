import React from 'react';
import glamorous from 'glamorous';

const Content = glamorous.section({
  padding: '.15rem 1rem',
  minHeight: '100vh',
  backgroundColor: '#22262a'
});


function Wrapper(props) {
  return (
    <Content>
      <div className='container ' {...props} />
    </Content>
  );
}

export default Wrapper;
