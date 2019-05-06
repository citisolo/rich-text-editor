import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import styled from 'styled-components';

const EditorWrapper = styled.div`
    padding: 4em;
    background: rgb(29, 31, 39);
    color: white;
    height: 400px;
`;

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
    }
    render() {
        return (
           <EditorWrapper>
                <Editor editorState={this.state.editorState} onChange={this.onChange} />
           </EditorWrapper>
        )
    }
}

export default MyEditor;