import React from 'react'
import styled from 'styled-components'

const MarkdownRenderer = styled.article`
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.5;
    font-weight: 700;
    margin-top: 1.1em;
    margin-bottom: 0.4em;
    outline: none;
  }

  & h1 {
    border-bottom: 2px solid rgba(92, 147, 187, 0.17);
    padding-bottom: 0.2em;
    margin-bottom: 0.8rem;
    font-size: 1.7em;
  }

  & h2 {
    font-size: 1.6em;
  }

  & h3 {
    font-size: 1.3em;
  }

  & h4 {
    font-size: 1.3em;
  }

  & h5 {
    color: #93a5b1;
    font-size: 1.1em;
  }

  & h6 {
    color: #93a5b1;
    font-size: 0.85em;
  }

  & h1 + p,
  h2 + p,
  h3 + p,
  h4 + p,
  h5 + p,
  h6 + p {
    margin-bottom: 0;
    margin-top: 0.3em;
  }

  & p,
  blockquote {
    margin: 0;
  }

  & p {
    line-height: 1.5;
    font-size: 16px;
    vertical-align: baseline;

    & > code {
      background-color: rgba(33, 90, 160, 0.07);
      padding: 0.2em 0.3em;
      border-radius: 4px;
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace,
        Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    }
  }

  & a {
    color: #0f83fd;
    word-break: break-all;
    outline-color: rgba(61, 210, 255, 0.4);
  }

  & blockquote {
    font-size: 0.95em;
    margin: 1.4rem 0;
    padding: 0.1em 0 0.1em 0.9em;
    border-left: 3px solid #626e77;
    color: #626e77;

    & > blockquote {
      margin: 0.8rem 0;
    }
  }

  & div.code-block-container {
    background: #1e1e1e;
    margin: 0.5em 0;

    & .code-block-filename-container {
      margin-bottom: -0.3em;

      & span {
        display: inline-block;
        color: #fff;
        padding: 0 6px 0 8px;
        font-size: 12px;
        line-height: 24px;
        background-color: rgba(177, 197, 247, 0.25);
        white-space: no-wrap;
      }
    }

    & pre {
      margin: 0;
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
      font-size: 0.9em;
    }
  }

  & hr {
    border-top: 2px solid rgba(92, 147, 187, 0.17);
    margin: 2.5rem 0;
  }

  & ul,
  ol {
    list-style: none;
    padding-inline-start: 0;
    padding-left: none;
    margin: 0.2rem 0;
    line-height: 1.7;
  }

  & li {
    position: relative;
    padding-left: 1.6em;
    list-style-position: inside;
  }

  & ul > li::before {
    content: '';
    position: absolute;
    left: 0.35em;
    top: 0.7em;
    background: rgba(24, 30, 50, 0.7);
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }

  & ol {
    counter-reset: number;
  }

  & ol > li::before {
    display: inline-block;
    left: 0;
    top: 5px;
    position: absolute;
    content: counter(number);
    counter-increment: number;
    text-align: center;
    line-height: 18px;
    width: 20px;
    height: 20px;
    font-weight: 700;
    font-size: 8px;
    color: rgba(2, 13, 60, 0.6);
    border: 2px solid rgba(2, 13, 60, 0.6);
    border-radius: 50%;
  }

  & table {
    margin: 1.2rem 0;
    width: auto;
    border-collapse: collapse;
    line-height: 1.5;
    font-size: 0.9em;
    overflow: auto;
  }

  & thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }

  & tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  & tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;

    & th,
    td {
      border: 1px solid #cfdce6;
      padding: 0.4rem 0.5rem;
    }

    & > th {
      font-weight: 700;
      background: #edf2f7;
    }

    & > td {
      display: table-cell;
      vertical-align: inherit;
    }
  }

  & > strong {
    background: linear-gradient(transparent 70%, red 0%);
  }

  & > img {
    margin: auto;
    width: 80%;
  }
`

type Props = {
  html: string
}

const MarkdownToHtml: React.FC<Props> = ({ html }) => {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default MarkdownToHtml
