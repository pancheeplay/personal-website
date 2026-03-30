function visit(node, callback) {
  callback(node);

  if (!node || !Array.isArray(node.children)) return;

  for (const child of node.children) {
    visit(child, callback);
  }
}

export default function remarkImageSize() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'image' || typeof node.title !== 'string') return;

      const marker = node.title.trim().toLowerCase();
      if (!marker) return;

      const sizeClass =
        marker === 'small'
          ? 'image-small'
          : marker === 'medium'
            ? 'image-medium'
            : marker === 'large'
              ? 'image-large'
              : null;

      if (!sizeClass) return;

      node.data = node.data || {};
      node.data.hProperties = {
        ...(node.data.hProperties || {}),
        class: sizeClass,
        className: [sizeClass]
      };

      // Use the markdown title as a sizing marker only, not as a tooltip.
      node.title = null;
    });
  };
}
