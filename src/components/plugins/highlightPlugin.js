import { RichUtils } from 'draft-js';
import { black } from 'ansi-colors';


export default () => {
    return {
        customStyleMap: {
            'HIGHLIGHT': {
                background: '#fffe0d',
                color: black,
            }
        },
        keyBindingFn: e => {
            console.log(e.ctrlKey);
            if (e.ctrlKey && e.key === "h") {
                return "highlight";
            }
        },
        handleKeyCommand: (command, editorState, {setEditorState}) => {
            console.log(command);
            if (command === "highlight") {
                setEditorState(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT"));
                return true;
            }
        }
    };
};