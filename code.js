figma.showUI(__html__, {width: 424, height: 700 });

figma.ui.onmessage = msg => {
  if (msg.type === 'resize') {
    figma.ui.resize(msg.width, msg.height);
  }
};
