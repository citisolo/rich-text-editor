import React from 'react';
import ReactDOM from 'react-dom';
//import {Editor} from 'draft-js';
import Editor from "draft-js-plugins-editor";
import { Button } from 'semantic-ui-react'

import styled from 'styled-components';

const EditorWrapper = styled.div`
    padding: 1em;
    // background: rgb(29, 31, 39);
    // color: white;
    height: 400px;
    margin-top: 1em;
    border-style: dashed;
    border-color: black;
    font-size: large;
`;

const ButtonWrapper = styled.div`
    margin-bottom: 1em;
`;

const MenuWrapper = styled.div`
    display: flex;
`;

const MyEditor = ({ 
    editorState, 
    onChange, 
    handleKeyCommand, 
    plugins, 
    blockStyleFn,
    blockRendererFn }) => {
    return (
        <EditorWrapper>
            <Editor 
                blockStyleFn={blockStyleFn}     
                editorState={editorState} 
                onChange={onChange} 
                handleKeyCommand={handleKeyCommand}
                plugins={plugins}
                textAlignment='left'
                blockRendererFn={blockRendererFn}
                />
        </EditorWrapper>
    )
}

export default MyEditor;