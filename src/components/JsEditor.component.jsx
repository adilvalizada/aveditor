import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export const JsEditor = ({ setJs }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onEditorChange = (newValue) => {
    setJs(newValue);
  };

  return (
    <Accordion allowZeroExpanded onChange={() => setIsOpen(!isOpen)}>
      <AccordionItem dangerouslySetExpanded={isOpen}>
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="accordion-text">JAVASCRIPT (vanilla)</div>
          </AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
          <AceEditor
            width={window.innerWidth / 2 + "px"}
            height={Math.trunc(window.innerHeight / 3) - 25 + "px"}
            placeholder="Placeholder JAVASCRIPT"
            mode="javascript"
            theme="solarized_dark"
            name="javascript"
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
