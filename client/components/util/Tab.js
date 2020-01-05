import React from 'react';

function Tab(props) {
  const { id, title, addTab, activeTab, children } = props;

  React.useEffect(() => {
    addTab({
      id: id,
      title: title
    });
  });

  return activeTab.id === id && children;
}

export default Tab;
