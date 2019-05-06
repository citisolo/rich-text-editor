import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils} from 'draft-js';
import { Button } from 'semantic-ui-react'

import styled from 'styled-components';

const EditorWrapper = styled.div`
    padding: 4em;
    background: rgb(29, 31, 39);
    color: white;
    height: 400px;
`;

const ButtonWrapper = styled.div`
    margin: 1em;
`;

const UIButton = ({ content, onBoldClick }) => {
    return (
        <ButtonWrapper>
            <Button secondary content={content} onClick={onBoldClick}/>
        </ButtonWrapper>
    );
}

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }

    handleKeyCommand(command, editorState){
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            console.log('handled');
            return 'handled';
        }
        console.log('not handled');
        return 'not-handled';
    }

    onBoldClick = () => {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD')
        );
    }

    _onBoldClick() {
        console.log('called');
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD')
        );
    }

    render() {
        return (
           <div>
           <UIButton content='Bold' onBoldClick={this.onBoldClick} />
           <EditorWrapper>
               <Editor 
                    editorState={this.state.editorState} 
                    onChange={this.onChange} 
                    handleKeyCommand={this.handleKeyCommand}
                />
           </EditorWrapper>
           </div>
        );
    }
}

export default MyEditor;