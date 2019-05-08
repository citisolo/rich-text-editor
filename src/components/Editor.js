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
`;

const ButtonWrapper = styled.div`
    margin-bottom: 1em;
`;

const MenuWrapper = styled.div`
    display: flex;
`;

const MyEditor = ({ editorState, onChange, handleKeyCommand, plugins}) => {
    return (
        <EditorWrapper>
            <Editor 
                    editorState={editorState} 
                    onChange={onChange} 
                    handleKeyCommand={handleKeyCommand}
                    plugins={plugins}
                    textAlignment='left'
                />
        </EditorWrapper>
    )
}

export default MyEditor;