import React, { useState, createRef, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/theme-solarized_dark";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  MdOutlinePhotoCamera,
  MdDownload,
  MdFileDownloadOff,
} from "react-icons/md";
import { useScreenshot } from "use-react-screenshot";
import "highlight.js/styles/night-owl.css";
import Highlight from "react-highlight";
import sound from "../sounds/camera.mp3";

const useAudio = () => {
  const [audio] = useState(new Audio(sound));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [toggle];
};

export const CssEditor = ({ setCss }) => {
  const [toggle] = useAudio();
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState("");
  const [isDownload, setIsDownload] = useState(false);

  const getImage = () => {
    takeScreenshot(ref.current);
  };
  const onEditorChange = (newValue) => {
    setCss(newValue);
    setValue(newValue);
  };
  return (
    <Accordion allowZeroExpanded onChange={() => setIsOpen(!isOpen)}>
      <AccordionItem dangerouslySetExpanded={isOpen}>
        <div className="accordion-text">
          <p onClick={() => setIsOpen(!isOpen)}>CSS (stylesheet)</p>

          <span className="editor-tools">
            <span
              className="camera-svg"
              onClick={() => {
                getImage();
                toggle();
                setIsDownload(!isDownload);
              }}
            >
              <MdOutlinePhotoCamera />
            </span>
            {isDownload ? (
              <a
                href={image}
                download="code"
                onClick={() => setIsDownload(!isDownload)}
              >
                <MdDownload className="download-btn" />
              </a>
            ) : (
              <MdFileDownloadOff className="download-btn" />
            )}
          </span>
        </div>

        <AccordionItemPanel>
          <AceEditor
            width={window.innerWidth / 2 + 3 + "px"}
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
        <span
          style={{
            position: "absolute",
            zIndex: -1,
            width: "100%",
            opacity: 0,
          }}
        >
          <div ref={ref}>
            <Highlight languages={["css"]}>{value}</Highlight>
          </div>
        </span>
      </AccordionItem>
    </Accordion>
  );
};
