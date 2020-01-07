import { CHART_TYPE } from './Types';

// var chartTypeList = function() {
//     var keys = Object.keys(CHART_TYPE);
//     return keys.map((obj) => { return obj });
// }

var chartOptions = function() {
    const keys = Object.keys(CHART_TYPE);
    return keys.map((key) => {
        var obj = { label: key, options: [] }
        CHART_TYPE[obj].map((o) => {
            obj.options.push({ label: o, value: o })
        });
        return obj
    });
}

// module.exports.chartTypeList = chartTypeList;
module.exports.chartOptions = chartOptions;