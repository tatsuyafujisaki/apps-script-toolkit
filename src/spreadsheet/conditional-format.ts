function addConditionalFormatRule_(
  formula: string,
  color: string,
  sheet = SpreadsheetApp.getActiveSheet(),
): void {
  const rules = sheet.getConditionalFormatRules();
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
      .setRanges([getRangeWithoutHeader_(sheet)])
      .whenFormulaSatisfied(formula)
      .setBackground(color)
      .build(),
  );
  sheet.setConditionalFormatRules(rules);
}
