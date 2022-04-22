import OriginalSidebar from '@theme-original/DocSidebar';
import React from 'react';
import Logo from '@theme/Logo';

export default function DocSidebar(props) {
  console.log(props);
  return (
    <>
      <a target="_self" href="/docs/">
        <Logo />
        <span style={{paddingLeft: "5px"}}>Simulator Docs</span>
      </a>
      <OriginalSidebar {...props} />
    </>
  );
}
