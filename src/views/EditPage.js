import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { EditorState, RichUtils} from 'draft-js';

import createHighlightPlugin from '../components/plugins/highlightPlugin';
import addLinkPlugin from '../components/plugins/addLinkPlugin';

//import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import MyEditor from '../components/Editor';
import UIButton from '../components/EditorButton';

import BlockStyleToolbar, { getBlockStyle } from "../components/blockStyles/BlockStyleToolbar";





const highlightPlugin = createHighlightPlugin();

const EditPageWrapper = styled.div`
    margin: 100px 100px 100px 100px;
`;

const ButtonsWrapper = styled.div`

`;

class EditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };

        this.plugins = [
            highlightPlugin,
            addLinkPlugin,
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

    onAddLink = () => {
        const editorState = this.state.editorState;
        const selection = editorState.getSelection();
        const link = window.prompt('Paste the link -');

        if (!link) {
            this.onChange(RichUtils.toggleLink(editorState, selection, null))
            return 'handled';
        }

        const content = editorState.getCurrentContent();
        const contentWithEntity = content.createEntity('LINK', 'MUTABLE', {url: link});

        const newEditorState = EditorState.push(editorState, contentWithEntity, 'create-entity');

        const entityKey = contentWithEntity.getLastCreatedEntityKey();
        this.onChange(RichUtils.toggleLink(newEditorState, selection, entityKey));

    }
    
    toggleBlockType = (blockType) => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
    }
    
    
    render(){
        return (
            <EditPageWrapper>
                <nav><h1>My Rich Text Editor</h1></nav>

                <BlockStyleToolbar
                  editorState={this.state.editorState}
                  onToggle={this.toggleBlockType}
                />
                <section>
                    <MyEditor 
                        blockStyleFn={getBlockStyle}
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