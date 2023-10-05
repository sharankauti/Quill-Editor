
import { useState } from 'react';
import './App.css';
import ReactQuill,{ Quill} from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import quillEmoji from "react-quill-emoji";
import "react-quill-emoji/dist/quill-emoji.css";

import QuillCursors from 'quill-cursors';
import 'quill-paste-smart'
import htmlEditButton from "quill-html-edit-button";
import { ImageDrop } from 'quill-image-drop-module';
import Focus from 'quill-focus/src/focus';


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
  Quill.register({
    "modules/htmlEditButton": htmlEditButton
  })
  Quill.register('modules/imageDrop', ImageDrop);
  Quill.register('modules/focus', Focus)
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
    htmlEditButton: {
      debug: true, // logging, default:false
      msg: "Edit the content in HTML format", //Custom message to display in the editor, default: Edit HTML here, when you click "OK" the quill editor's contents will be replaced
      okText: "Ok", // Text to display in the OK button, default: Ok,
      cancelText: "Cancel", // Text to display in the cancel button, default: Cancel
      buttonHTML: "&lt;&gt;", // Text to display in the toolbar button, default: <>
      buttonTitle: "Show HTML source", // Text to display as the tooltip for the toolbar button, default: Show HTML source
      syntax: false, // Show the HTML with syntax highlighting. Requires highlightjs on window.hljs (similar to Quill itself), default: false
      prependSelector: 'div#myelement', // a string used to select where you want to insert the overlayContainer, default: null (appends to body),
      editorModules: {} //
    },
    imageDrop: true,
    focus: {
      focusClass: 'focused-blot' // Defaults to .focused-blot.
    }
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
