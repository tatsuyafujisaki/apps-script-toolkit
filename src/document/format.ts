function formatLegalDocument() {
  const TOP_MARGIN_MILLIMETERS = 35;
  const BOTTOM_MARGIN_MILLIMETERS = 27;
  const LEFT_MARGIN_MILLIMETERS = 30;
  const RIGHT_MARGIN_MILLIMETERS = 15;

  const TOP_MARGIN_POINTS = convertMillimetersToPoints_(TOP_MARGIN_MILLIMETERS);
  const BOTTOM_MARGIN_POINTS = convertMillimetersToPoints_(
    BOTTOM_MARGIN_MILLIMETERS,
  );
  const LEFT_MARGIN_POINTS = convertMillimetersToPoints_(
    LEFT_MARGIN_MILLIMETERS,
  );
  const RIGHT_MARGIN_POINTS = convertMillimetersToPoints_(
    RIGHT_MARGIN_MILLIMETERS,
  );

  DocumentApp.getActiveDocument()
    .setLanguage('ja')
    .getBody()
    .setMarginTop(TOP_MARGIN_POINTS)
    .setMarginBottom(BOTTOM_MARGIN_POINTS)
    .setMarginLeft(LEFT_MARGIN_POINTS)
    .setMarginRight(RIGHT_MARGIN_POINTS)
    .editAsText()
    .setFontFamily('Sawarabi Mincho')
    .setFontSize(12);
}

function convertMillimetersToPoints_(millimeters: number): number {
  const MILLIMETERS_IN_INCH = 25.4;
  const POINTS_IN_INCH = 72;
  const POINTS_IN_MILLIMETER = POINTS_IN_INCH / MILLIMETERS_IN_INCH;
  return millimeters * POINTS_IN_MILLIMETER;
}
