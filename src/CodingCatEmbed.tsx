import React from "react";
import HTMLReactParser from "html-react-parser";
import { Box } from "grommet";

import loadjs from "loadjs";

const EMBED_MODULE = "https://static.codepen.io/assets/embed/ei.js";

export const CodingCatEmbed = () => {
  const [isScriptLoaded, setIsScriptLoaded] = React.useState(false);
  const scriptRef = React.createRef<HTMLScriptElement>();
  const [embedSrc, setEmbedSrc] = React.useState("");

  React.useEffect(() => {
    (async () => {
      try {
        await loadjs([EMBED_MODULE], { returnPromise: true });
        setIsScriptLoaded(true);
      } catch (e) {
        console.log("WOMP WOMP");
      }
    })();
  }, [loadjs, setIsScriptLoaded, isScriptLoaded]);

  return (
    <Box width="100%" height="100vh">
      {/* <Box>{injectedCodePen}</Box> */}
      {true && (
        <Box key="foo" align="end" justify="end">
          <iframe
            height="100%"
            style={{
              // width: "80%",
              maxHeight: "100%",
              height: "100vh",
              // height: "75vh",
              // maxHeight: "75vh",
              // maxWidth: "80vw",
              width: "100%",
              background: "transparent",
            }}
            scrolling="no"
            title="Bongo Cat Codes #2 - Jamming"
            src="https://codepen.io/carolineartz/embed/qBOEzQa?height=300&theme-id=39339&default-tab=result"
            frameBorder="no"
            allowTransparency
            allowFullScreen
          >
            See the Pen <a href="https://codepen.io/carolineartz/pen/qBOEzQa">Bongo Cat Codes #2 - Jamming</a>{" "}
            by Caroline Artz (<a href="https://codepen.io/carolineartz">@carolineartz</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Box>
      )}
    </Box>
  );
};

function load(url: string, script: HTMLScriptElement) {
  return new Promise(function (resolve, reject) {
    script.type = "text/javascript";
    script.async = true;
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
  });
}
