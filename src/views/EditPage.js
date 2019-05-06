import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
//import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import MyEditor from '../components/Editor';




const EditPageWrapper = styled.div`
    margin: 100px 100px 100px 100px;
`;

export default ({props}) => {
    return (
        <EditPageWrapper>
            <nav><h1>My Rich Text Editor</h1></nav>
            <section>
                <MyEditor></MyEditor>
            </section>
        </EditPageWrapper>
    )
}