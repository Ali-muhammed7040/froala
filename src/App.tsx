import React from "react";

import "froala-editor/js/plugins.pkgd.min.js"; // Core plugins
import "froala-editor/js/plugins/image.min.js"; // Image plugin
import "froala-editor/js/third_party/image_tui.min.js"; // TUI plugin

// CSS for Froala plugins
import "froala-editor/css/plugins/image.min.css"; // CSS for Image plugin
import "froala-editor/css/third_party/image_tui.min.css"; // CSS for TUI plugin

// Core Froala styles
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/plugins/draggable.min.js"; // Draggable plugin
import "froala-editor/js/plugins/image.min.js"; // Image plugin
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/plugins/draggable.min.css"; // Draggable CSS
import "froala-editor/css/plugins/image.min.css"; // Image CSS
import "./App.css";

import Froala from "react-froala-wysiwyg";

const defaultContent = `<div>
<section data-element_type="section" data-id="6dad7bdb">
  <div data-element_type="column" data-id="2fdea927">
    <div data-element_type="widget" data-id="1ae5ac6e" data-widget_type="heading.default">
      <h2>Buy Froala Editor</h2>
    </div>
    <div data-element_type="widget" data-id="19f12a3a" data-widget_type="heading.default">
      <h5>Powering web editing for customers ranging from startups to the world's largest companies.</h5>
    </div>
  </div>
</section>
</div>`;

interface FroalaEditorConfig {
  attribution: boolean;
  height: number;
  quickInsertEnabled: boolean;
  placeholderText: string;
  pluginsEnabled: string[];
  toolbarButtons: {
    moreText: {
      buttons: string[];
      buttonsVisible: number;
    };
    moreRich: {
      buttons: string[];
      name: string;
      buttonsVisible: number;
    };
    moreMisc: {
      buttons: string[];
      align: string;
      buttonsVisible: number;
    };
  };
  imageEditButtons: string[];
  imageMaxSize: number;
  imageInsertButtons: string[];
  imageUploadURL: string;
  events: {
    "image.beforeUpload": (files: File[]) => boolean;
  };
}

const froalaEditorConfig: any = {
  attribution: false,
  height: 400,
  quickInsertEnabled: false,
  placeholderText: "Your content goes here!",
  pluginsEnabled: [
    "align",
    "imageDisplay",
    "colors",
    "entities",
    "fontSize",
    "help",
    "image", // Enable the Image plugin
    "imageTUI",
    "link",
    "lists",
    "paragraphFormat",
    "paragraphStyle",
    "save",
    "table",
    "wordPaste",
    "draggable", // Enable the Draggable plugin
    'accept', 'accept-charset', 'accesskey', 'action', 'align', 'allowfullscreen', 'allowtransparency', 'alt', 'aria-.*', 'async', 'autocomplete', 'autofocus', 'autoplay', 'autosave', 'background', 'bgcolor', 'border', 'charset', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'color', 'cols', 'colspan', 'content', 'contenteditable', 'contextmenu', 'controls', 'coords', 'data', 'data-.*', 'datetime', 'default', 'defer', 'dir', 'dirname', 'disabled', 'download', 'draggable', 'dropzone', 'enctype', 'for', 'form', 'formaction', 'frameborder', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'http-equiv', 'icon', 'id', 'ismap', 'itemprop', 'keytype', 'kind', 'label', 'lang', 'language', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'mozallowfullscreen', 'multiple', 'muted', 'name', 'novalidate', 'open', 'optimum', 'pattern', 'ping', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'reversed', 'rows', 'rowspan', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'src', 'srcdoc', 'srclang', 'srcset', 'start', 'step', 'summary', 'spellcheck', 'style', 'tabindex', 'target', 'title', 'type', 'translate', 'usemap', 'value', 'valign', 'webkitallowfullscreen', 'width', 'wrap',
    'video'
  ],
  // toolbarButtons: {
  //   moreText: {
  //     buttons: [
  //       "paragraphFormat",
  //       "|",
  //       "fontSize",
  //       "textColor",
  //       "backgroundColor",
  //       "insertImage",
  //       "alignLeft",
  //       "alignRight",
  //       "alignJustify",
  //       "formatOL",
  //       "formatUL",
  //       "indent",
  //       "outdent",
  //       "video"
  //     ],
  //     buttonsVisible: 6,
  //   },
  //   moreRich: {
  //     buttons: [
  //       "|",
  //       "bold",
  //       "italic",
  //       "underline",
  //       "insertHR",
  //       "insertLink",
  //       "insertTable",
  //     ],
  //     name: "additionals",
  //     buttonsVisible: 3,
  //   },
  //   moreMisc: {
  //     buttons: ["|", "undo", "redo", "help", "|"],
  //     align: "right",
  //     buttonsVisible: 2,
  //   },
  // },
  toolbarButtons: {

    'moreText': {
    
    'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
    
    },
    
    'moreParagraph': {
    
    'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
    
    },
    
    'moreRich': {
    
    'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
    
    },
    
    'moreMisc': {
    
    'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
    
    'align': 'right',
    
    'buttonsVisible': 2
    
    }
    
    },
    
  imageEditButtons: [
    // Image-specific options
    "imageAlign", // Align options
    "imageReplace", // Replace image
    "imageLink", // Add link to image
    "imageDelete", // Delete image
    "imageResize", // Resize image
    "imageCaption",
    "imageTUI",
    "imageDisplay" // Add image caption
  ],
  imageMaxSize: 5 * 1024 * 1024, // 5MB
  imageInsertButtons: ["imageBack", "|", "imageUpload", "imageByURL"], // Buttons for inserting images
  imageUploadURL: "/upload", // Specify the image upload URL (this is a placeholder, make sure to implement your backend for uploads)
  events: {
    "image.beforeUpload": function (files: File[]): boolean {
      const editor = this;
      if (files.length) {
        if (files[0].size / 1000 > 255) {
          alert("Image file size exceeded the limit");
          return false;
        } else {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target) {
              const result = (e.target as FileReader).result as string;
              (editor as any).image.insert(
                result,
                null,
                null,
                (editor as any).image.get()
              );
            }
          };
          reader.readAsDataURL(files[0]);
        }
      }
      (editor as any).popups.hideAll();
      return false;
    },
  },
  imageTUIOptions: {
    includeUI: {
      initMenu: "filter",
      menuBarPosition: "right",
      theme: {
        "menu.activeIcon.path": "https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/svg/icon-b.svg",
        "menu.disabledIcon.path": "https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/svg/icon-a.svg",
        "menu.hoverIcon.path": "https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/svg/icon-c.svg",
        "menu.normalIcon.path": "https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/svg/icon-d.svg",
        "submenu.activeIcon.name": "icon-c",
        "submenu.activeIcon.path": "https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/svg/icon-c.svg",
        "submenu.normalIcon.name": "icon-d",
        "submenu.normalIcon.path": "https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/svg/icon-d.svg"
      }
    }
  }
};

export default class App extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div className="App">
        <Froala
          model={defaultContent}
          onModelChange={this.onModelChange}
          tag="textarea"
          config={froalaEditorConfig}
        />
      </div>
    );
  }

  private onModelChange = (model: string) => {
    const elem = document.createElement("div");
    elem.innerHTML = model;
    console.log(elem);
  };
}
