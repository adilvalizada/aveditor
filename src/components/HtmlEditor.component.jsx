import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/theme-solarized_dark";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export const HtmlEditor = ({ setHtml }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onEditorChange = (newValue) => {
    setHtml(newValue);
  };

  return (
    <Accordion allowZeroExpanded onChange={() => setIsOpen(!isOpen)}>
      <AccordionItem dangerouslySetExpanded={isOpen}>
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="accordion-text">HTML (text/html)</div>
          </AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
          <AceEditor
            width={window.innerWidth / 2 + "px"}
            height={Math.trunc(window.innerHeight / 3) - 32 + "px"}
            placeholder="Placeholder HTML"
            mode="html"
            theme="solarized_dark"
            name="html"
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
