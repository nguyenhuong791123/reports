import { CHART_TYPE } from './Types';

var chartTypeList = function() {
    var keys = Object.keys(CHART_TYPE);
    return keys.map((obj) => { return obj });
}

module.exports.chartTypeList = chartTypeList;