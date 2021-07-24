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
    return $(element).closest('div[class=code-container]').find("pre")
}

function setCodeContent(element, content){
    var $pre = $(element).find('pre');
    var $empty = $(element).find('.code-empty');
    var $toolbar = $(element).find('.toolbar-container');
    $pre.text(content);
    if(content){
        $empty.css("display", "none");
        $toolbar.removeClass("empty");
    }else{
        $empty.css("display", "block");
        $toolbar.addClass("empty");
    }
}

window.selectAll = selectAll;
window.copyClipboard = copyClipboard;
window.setCodeContent = setCodeContent;
