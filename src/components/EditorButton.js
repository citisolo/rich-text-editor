import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils} from 'draft-js';
import { Button } from 'semantic-ui-react'

import styled from 'styled-components';


const ButtonWrapper = styled.div`
    margin-bottom: 1em;
    display: inline;
`;


const UIButton = ({ content, onButtonClick }) => {
    return (
        <ButtonWrapper>
            <Button secondary content={content} onClick={onButtonClick}/>
        </ButtonWrapper>
    );
}

export default UIButton;