function capitalizeFirstLetter_(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
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
