function conditionalFormat_(
  formula: string,
  color: string,
  sheet: GoogleAppsScript.Spreadsheet.Sheet = SpreadsheetApp.getActiveSheet(),
) {
  const rules = sheet.getConditionalFormatRules();
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
      .setRanges([getHeaderlessRange_(sheet)])
      .whenFormulaSatisfied(formula)
      .setBackground(color)
      .build(),
  );
  sheet.setConditionalFormatRules(rules);
}
