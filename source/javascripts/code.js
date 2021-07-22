function selectText(el) {
  var range = document.createRange();
  range.selectNodeContents(el);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
};

function copyElement(el) {
  window.getSelection().removeAllRanges();
  let range = document.createRange();
  range.selectNode(typeof el === 'string' ? document.getElementById(el) : el);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}

function selectAll(evt) {
  var $pre = getCodePre(evt.currentTarget);
  selectText($pre[0]);
}
function copyClipboard(evt) {
  var $pre = getCodePre(evt.currentTarget);
  copyElement($pre[0]);
}

function getCodePre(element){
    return $(element).closest('div[class=code]').find("pre")
}

window.selectAll= selectAll;
window.copyClipboard= copyClipboard;
