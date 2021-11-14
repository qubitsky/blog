import React from "react";
import Highlight, { defaultProps, PrismTheme } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";


export default ({ codeProps, ...props }) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeProps.codeString}
      language={codeProps.language}
      theme={vsDark as PrismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={[className, props.className].join(" ")}
          style={{ ...style }}
        >
          <code className={codeProps.className}>
            {tokens.map((line, index) => {
              const lineProps = getLineProps({ line, key: index });
              return (
                <div key={index} {...lineProps}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </code>
        </pre>
      )}
    </Highlight>
  );
};
