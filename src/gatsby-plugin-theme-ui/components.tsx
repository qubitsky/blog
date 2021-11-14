import React from 'react';
import { preToCodeBlock } from "mdx-utils";
import CodeBlock from "../components/CodeBlock";

export default {
  pre: (props) => {
    const codeProps = preToCodeBlock(props);
    // if there's a codeString and some props, we passed the test
    if (codeProps) {
      return <CodeBlock {...props} codeProps={codeProps} />;
    }
    // it's possible to have a pre without a code in it
    return <pre {...props} />;
  },
};
