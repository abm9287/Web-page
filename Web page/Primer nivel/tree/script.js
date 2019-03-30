function drawTree(rows) {
  const space = '&nbsp;&nbsp;';
  const tree = '**';
  let content = '';
  for (let i = 0; i < rows; i++) {
    for (let j = (rows - 1); j >= 0; j--) {
      content += (j <= i) ? tree : space;
    }
    content += '<br />';
  }
  return content;
}

document.getElementById('root').innerHTML = drawTree(8);
