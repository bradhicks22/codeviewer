const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const javascriptCode = document.getElementById("javascript-code");
const runCodeButton = document.getElementById("run-code-button");
const preview = document.getElementById("preview");

runCodeButton.addEventListener("click", () => {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const javascript = `<script>${javascriptCode.value}</script>`;
  preview.srcdoc = html + css + javascript;
});