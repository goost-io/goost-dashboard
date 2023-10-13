import {Editor} from "@tinymce/tinymce-react";
import React from "react";

export const TinyMceEditor = ({ onChange }) => {
    const handleEditorChange = (e) => {
        onChange(e.target.getContent()); // Pass the content to the parent component
    };

    return (
        <div>
            <Editor
                initialValue=""
                init={{
                    branding: false,
                    height: 400,
                    menubar: true,
                    plugins:
                        "print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern",
                    toolbar:
                        "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
                    image_advtab: true
                }}
                onChange={handleEditorChange}
            />
        </div>
    );
};