//import atom from reciol
import { atom } from 'recoil';

//state for editor content
const editorState = atom({
    key: 'editor-state',
    default: ''
});

export { editorState }