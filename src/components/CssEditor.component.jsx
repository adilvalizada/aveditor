import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/theme-solarized_dark";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export const CssEditor = ({ setCss }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onEditorChange = (newValue) => {
    setCss(newValue);
  };
  return (
    <Accordion allowZeroExpanded onChange={() => setIsOpen(!isOpen)}>
      <AccordionItem dangerouslySetExpanded={isOpen}>
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="accordion-text">CSS (stylesheet)</div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <AceEditor
            width={window.innerWidth / 2 + "px"}
            height={Math.trunc(window.innerHeight / 3) - 32 + "px"}
            placeholder="Placeholder CSS"
            mode="css"
            theme="solarized_dark"
            name="css"
            onChange={onEditorChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};
