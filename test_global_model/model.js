/*
 * model.js
 * Henry Burkhardt Oct. 2023
 * [IN PROGRESS] This file returns the model builder object
 */

function generateModel(path_to_glb) {
  return `
        <head>
        <title>&lt;model-viewer&gt; template</title>
        <meta charset="utf-8">
        <meta name="description" content="&lt;model-viewer&gt; template">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link type="text/css" href="./styles.css" rel="stylesheet"/>
        <!-- OPTIONAL: The :focus-visible polyfill removes the focus ring for some input types -->
        <script src="https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js" defer></script>
        </head>
        <body>
        <!-- <model-viewer> HTML element -->
        <model-viewer bounds="tight" src="${path_to_glb}" ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="poster.webp" shadow-intensity="1">
            <div class="progress-bar hide" slot="progress-bar">
                <div class="update-bar"></div>
            </div>
            <button slot="ar-button" id="ar-button">
                View in your space
            </button>
            <div id="ar-prompt">
                <img src="ar_hand_prompt.png">
            </div>
        </model-viewer>  
        <script src="script.js"></script>
        <!-- Loads <model-viewer> for browsers: -->
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
        </body>
  `;
}

document.getElementById("home").innerHTML = generateModel(
  (path_to_glb = "./sheep/sheep.glb")
);
