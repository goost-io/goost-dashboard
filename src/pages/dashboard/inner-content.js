import React from "react";

function InnerContent({title, description}) {
    return (
        <div
            style={{border: "1px solid #ccc", padding: "10px", margin: "10px 0"}}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function NestedContent() {
    return (
        <div>
            <h2>Nested Content Component</h2>
            <InnerContent
                title='Inner Content 1'
                description='This is the first inner content component.'
            />
            <InnerContent
                title='Inner Content 2'
                description='This is the second inner content component.'
            />
            <InnerContent
                title='Inner Content 3'
                description='This is the third inner content component.'
            />
        </div>
    );
}

export default NestedContent;
