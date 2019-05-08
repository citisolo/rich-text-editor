import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { EditorState, RichUtils} from 'draft-js';

import createHighlightPlugin from '../components/plugins/highlightPlugin';

//import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import MyEditor from '../components/Editor';
import UIButton from '../components/EditorButton';


const highlightPlugin = createHighlightPlugin();

const EditPageWrapper = styled.div`
    margin: 100px 100px 100px 100px;
`;

const ButtonsWrapper = styled.div`
    j
`;

class EditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };

        this.plugins = [
            highlightPlugin,
        ];
    }

    onChange = (editorState) => {
        this.setState({
            editorState
        })
    }

    handleKeyCommand = (command, editorState) => {
        console.log(command);
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

    onUnderlineClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
		);
    };
    
    onItalicClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
		);
    };

    onHighlightClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "HIGHLIGHT")
		);
    };
    
    render(){
        return (
            <EditPageWrapper>
                <nav><h1>My Rich Text Editor</h1></nav>
                <ButtonsWrapper>
                    <UIButton content='B' onButtonClick={this.onBoldClick} />
                    <UIButton content='U' onButtonClick={this.onUnderlineClick} />
                    <UIButton content='I' onButtonClick={this.onItalicClick} />
                    <UIButton content='H' onButtonClick={this.onHighlightClick} />
                </ButtonsWrapper>
                <section>
                    <MyEditor 
                        editorState={this.state.editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                        plugins={this.plugins}
                    >
                    </MyEditor>
                </section>
            </EditPageWrapper>
        )
    }
}

export default EditPage;