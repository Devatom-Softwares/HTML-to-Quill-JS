<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Convert HTML to Quill JS Format</title>
    <style>
        body {
            margin: 0px;
            padding: 0px;
        }

        .code {
            padding: 1em;
            color: rgb(238, 255, 255);
            background-color: rgb(33, 33, 33);
            font-family: Menlo, Monaco, "Courier New", monospace;
            font-size: 12px;
            line-height: 18px;
            white-space: pre;
            outline: none;
        }

        .hidden {
            opacity: 0;
            height: 0px;
        }

        .layout {
            display: grid;
            grid-template-columns: calc(50vw - 4em) 8em calc(50vw - 4em);
            height: 100vh;
        }

        .controls {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .controls button {
            background-color: dodgerblue;
            color: white;
            border: none;
            padding: 1em;
            border-radius: 2em;
            outline: none;
            margin: 1em;
            cursor: pointer;
            transition: 0.4s;
        }

        .controls button:hover {
            background-color: mediumblue;
            transition: 0.4s;
        }

        .controls button:disabled {
            background-color: grey;
            cursor: not-allowed;
        }

        .controls button:disabled:hover {
            background-color: grey;
            cursor: not-allowed;
        }
    </style>
</head>
<body>
    <div class="layout">
        <textarea id="input" class="code" placeholder="Paste your HTML code here..."></textarea>
        <div class="controls">
            <textarea class="hidden" id="copyable"></textarea>
            <button id="convert">Convert</button>
            <button id="copy" disabled>Copy</button>
        </div>
        <div id="output" class="code"></div>
    </div>
    <script src="parse.js"></script>
</body>
</html>