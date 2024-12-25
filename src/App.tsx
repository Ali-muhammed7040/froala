import React from "react";
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

const froalaEditorConfig: FroalaEditorConfig = {
  attribution: false,
  height: 400,
  quickInsertEnabled: false,
  placeholderText: "Your content goes here!",
  pluginsEnabled: [
    "align",
    "colors",
    "entities",
    "fontSize",
    "help",
    "image", // Enable the Image plugin
    "link",
    "lists",
    "paragraphFormat",
    "paragraphStyle",
    "save",
    "table",
    "wordPaste",
    "draggable", // Enable the Draggable plugin
  ],
  toolbarButtons: {
    moreText: {
      buttons: [
        "paragraphFormat",
        "|",
        "fontSize",
        "textColor",
        "backgroundColor",
        "insertImage",
        "alignLeft",
        "alignRight",
        "alignJustify",
        "formatOL",
        "formatUL",
        "indent",
        "outdent",
      ],
      buttonsVisible: 6,
    },
    moreRich: {
      buttons: [
        "|",
        "bold",
        "italic",
        "underline",
        "insertHR",
        "insertLink",
        "insertTable",
      ],
      name: "additionals",
      buttonsVisible: 3,
    },
    moreMisc: {
      buttons: ["|", "undo", "redo", "help", "|"],
      align: "right",
      buttonsVisible: 2,
    },
  },
  imageEditButtons: [
    // Image-specific options
    "imageAlign", // Align options
    "imageReplace", // Replace image
    "imageLink", // Add link to image
    "imageDelete", // Delete image
    "imageResize", // Resize image
    "imageCaption", // Add image caption
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
