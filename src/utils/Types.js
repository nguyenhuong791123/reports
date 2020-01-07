export const ACTION = {
    SLASH: '/'
    ,TABLES: 'tables'
    ,CHARTS: 'charts'
};

export const FILE_TYPE = {
    PDF: 'pdf'
    ,CSV: 'csv'
    ,XSLX: 'xslx'
    ,DOCX: 'docx'
}

export const CHART_TYPE = {
    LINE: [ "SimpleLineChart", "TinyLineChart", "DashedLineChart", "VerticalLineChart", "BiaxialLineChart", "VerticalLineChartWithSpecifiedDomain", "LineChartConnectNulls", "LineChartWithXAxisPading", "LineChartWithReferenceLines", "CustomizedDotLineChart", "CustomizedLabelLineChart", "SynchronizedLineChart", "HighlightAndZoomLineChart", "LineChartHasMultiSeries", "LineChartAxisInterval" ]
    ,AREA: [ "SimpleAreaChart", "StackedAreaChart", "TinyAreaChart", "PercentAreaChart", "CardinalAreaChart", "AreaChartConnectNulls", "SynchronizedAreaChart", "AreaChartFillByValue" ]
    ,BAR: [ "TinyBarChart", "SimpleBarChart", "StackedBarChart", "MixBarChart", "CustomShapeBarChart", "PositiveAndNegativeBarChart", "BrushBarChart", "BarChartWithCustomizedEvent", "BarChartWithMinHeight", "BarChartStackedBySign", "BiaxialBarChart", "BarChartHasBackground", "BarChartWithMultiXAxis" ]
    ,COMPOSED: [ "LineBarAreaComposedChart", "SameDataComposedChart", "VerticalComposedChart", "ComposedChartWithAxisLabels" ]
    ,SCATTER: [ "SimpleScatterChart", "ThreeDimScatterChart", "JointLineScatterChart", "BubbleChart", "ScatterChartWithLabels", "MultipleYAxesScatterChart", "ScatterChartWithCells" ]
    ,PIE: [ "TwoLevelPieChart", "StraightAnglePieChart", "TwoSimplePieChart", "CustomActiveShapePieChart", "PieChartWithCustomizedLabel", "PieChartWithPaddingAngle" ]
    ,RADAR: [ "SimpleRadarChart", "SpecifiedDomainRadarChart" ]
    ,RADIA: [ "SimpleRadialBarChart" ]
    ,TREE: [ "SimpleTreemap", "CustomContentTreemap" ]
    ,TOOLTIP: [ "CustomContentOfTooltip" ]
    ,LEGEND: [ "LegendEffectOpacity" ]
    ,RESPNSIVE: [ "AreaResponsiveContainer", "ComposedResponsiveContainer", "PieResponsiveContainer" ]
}