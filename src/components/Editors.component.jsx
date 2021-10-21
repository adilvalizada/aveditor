import React, { useMemo, useState } from "react";
import { CssEditor } from "./components/editors/CssEditor.component";
import { HtmlEditor } from "./components/editors/HtmlEditor.component";
import { JsEditor } from "./components/editors/JsEditor.component";

export const Editors = () => {
  const [html, setHtml] = useState(null);
  const [css, setCss] = useState(null);
  const [js, setJs] = useState(null);

  const srcDoc = useMemo(() => {
    if (!html && !css && !setJs) return false;
    return `<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<style>
	${css}
	</style>
</head>
<body>
	${html}
	<script>
    ${js}
	</script>
</body>
</html>`;
  }, [html, css, js]);

  return (
    <div className="App">
      <div className="editors">
        <HtmlEditor setHtml={setHtml} />
        <CssEditor setCss={setCss} />
        <JsEditor setJs={setJs} />
      </div>
      <iframe srcDoc={srcDoc} />
    </div>
  );
};
