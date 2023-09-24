"use client"
import { PortableTextComponentProps } from '@portabletext/react';
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Code(props: PortableTextComponentProps<any>["value"]) {
  const { node } = props;
  if (!node || !node.code) {
    return null
  }
  const { language, code } = node
  return (
    <SyntaxHighlighter language={language || 'text'} style={stackoverflowDark}>
      {code}
    </SyntaxHighlighter>
  )
}