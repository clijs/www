var PADDING = 120
var scroll = false

function init () {

  var insertCode = document.querySelector('.insert-code')
  var codeContainer = document.querySelector('.code-container .window')
  var terminalContainer = document.querySelector('.terminal-container .window')

  terminalContainer.style.height = codeContainer.getBoundingClientRect().height + 'px'

  // insertCode.innerText = [
  //   'function me () {',
  //   '  console.log("hey")',
  //   '}',
  //   '',
  //   'class {}'
  // ].join('\n')
}

window.addEventListener('DOMContentLoaded', init)

