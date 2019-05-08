import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 100px 100px 100px 100px;
    background:#24292e;
    color: white;
    height: 5em;
`;


class PageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }

    onChange = (editorState) => {
        this.setState({
            editorState
        })
    }

    handleKeyCommand = (command) => {
        console.log(command);
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled'
        }
        return 'not-handled';
    }

    render() {
        return(
            <Wrapper>
                <Editor
                    editorState={this.state.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange}
                />
            </Wrapper>
        )
    }
}

export default PageContainer;