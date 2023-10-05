
import { useState } from 'react';
import './App.css';
import ReactQuill,{ Quill} from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import quillEmoji from "react-quill-emoji";
import "react-quill-emoji/dist/quill-emoji.css";

import QuillCursors from 'quill-cursors';
import 'quill-paste-smart'




function App() {
  const [value,setValue] = useState('')
  Quill.register(
    {
      "formats/emoji": quillEmoji.EmojiBlot,
      "modules/emoji-toolbar": quillEmoji.ToolbarEmoji,
      "modules/emoji-textarea": quillEmoji.TextAreaEmoji,
      "modules/emoji-shortname": quillEmoji.ShortNameEmoji,
    },
    true
  );
  Quill.register('modules/cursors', QuillCursors);
const modules = {
      toolbar: {
        container :[
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{font :[]}],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          [{ 'script': 'sub'}, { 'script': 'super' }], 
          ['link', 'image','video'],
          [{ 'color': [] }, { 'background': [] }],   
          ['emoji'],
        ]
      },
      "emoji-toolbar": true,
      "emoji-textarea": true,
      "emoji-shortname": true,
      cursors: true,
      clipboard: {
        allowed: {
            tags: ['a', 'b', 'strong', 'u', 's', 'i', 'p', 'br', 'ul', 'ol', 'li', 'span'],
            attributes: ['href', 'rel', 'target', 'class']
        },
        keepSelection: true,
        substituteBlockElements: true,
        magicPasteLinks: true,
        // hooks: {
        //     uponSanitizeElement(node, data, config) {
        //         console.log(node);
        //     },
        // },
    },
    }
  





  return (
    <div className="TextEditorContainer">
        <div className='EditorWrap'>
          <h3>Text Editor</h3>
          <ReactQuill theme="snow"
           value={value} 
           onChange={setValue} 
           className='Editor'
           modules={modules}  
           id='editor'
           />
        </div>
        
    </div>
  );
}

export default App;
