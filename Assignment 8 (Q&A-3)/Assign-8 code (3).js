/*Open this link (https://code.earthengine.google.com/c67ab83b96e6e66e8d2418240536762c) and take a screenshot of the boundary of Bangladesh. 
Upload in your GitHub repo and submit the repo link*/


var dataset = ee.FeatureCollection('FAO/GAUL/2015/level1');

var bgd = dataset.filter(ee.Filter.eq("ADM0_NAME","Bangladesh"));

var ctg = bgd.filter(ee.Filter.eq("ADM1_NAME","Chittagong"));


print(bgd);
Map.centerObject(bgd);
Map.addLayer(bgd, {}, "BD boundary");
var styleParams = {
  fillColor: 'red',
  color: '00909F',
  width: 1.0,
};

dataset = bgd.style(styleParams);


//Map.addLayer(dataset, {}, 'First Level Administrative Units');
//Map.addLayer(ctg.style(styleParams));