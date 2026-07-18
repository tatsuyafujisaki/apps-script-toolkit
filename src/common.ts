function capitalizeFirstLetter_(str: string): string {
  if (typeof str === 'string' && str.length) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
}

function formatArray_(
  items: string[],
  outerPrefix = '',
  itemPrefix = '',
  itemSeparator = '',
  itemSuffix = '',
  outerSuffix = '',
): string {
  return (
    outerPrefix +
    items.map(item => itemPrefix + item + itemSuffix).join(itemSeparator) +
    outerSuffix
  );
}
