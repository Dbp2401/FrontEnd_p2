// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $acierto from "./routes/acierto.tsx";
import * as $fallo from "./routes/fallo.tsx";
import * as $trivia from "./routes/trivia.tsx";
import * as $verificar from "./islands/verificar.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/acierto.tsx": $acierto,
    "./routes/fallo.tsx": $fallo,
    "./routes/trivia.tsx": $trivia,
  },
  islands: {
    "./islands/verificar.tsx": $verificar,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
