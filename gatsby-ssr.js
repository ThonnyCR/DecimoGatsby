import React from "react";

export function onRenderBody({setPreBodyComponents}) {
          setPreBodyComponents([
            <script type="text/javascript" key="navbarScript" src="/navbarScript.js"/>
          ]);
  }