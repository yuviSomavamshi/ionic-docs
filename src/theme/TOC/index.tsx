import OriginalTOC from '@theme-original/TOC';
import React from 'react';

export default function TOC({ toc, editUrl, ...props }) {

  const isEmpty = toc.length <= 0;


  if (isEmpty) return null;

  return (
    <div className="toc-wrapper">
      <h2>Contents</h2>
      <OriginalTOC toc={toc} {...props} />
    </div>
  );
}
