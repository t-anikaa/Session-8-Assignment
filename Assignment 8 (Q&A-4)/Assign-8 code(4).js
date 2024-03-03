/*Open this code link in GEE (https://code.earthengine.google.com/112e053d130449b84e6a0d9af34db9e1) and change the division name to yours. 
Take a screenshot of your division map and upload it to GitHub. Submit the repo link.*/

var dataset = ee.FeatureCollection('FAO/GAUL/2015/level1');

var bgd = dataset.filter(ee.Filter.eq("ADM0_NAME","Bangladesh"));

var roi = bgd.filter(ee.Filter.eq("ADM1_NAME","Dhaka"));


print(bgd);
//Map.centerObject(bgd);
//Map.addLayer(bgd);
var styleParams = {
  fillColor: 'red',
  color: '00909F',
  width: 1.0,
};

dataset = bgd.style(styleParams);


//Map.addLayer(dataset, {}, 'First Level Administrative Units');
Map.centerObject(roi)
Map.addLayer(roi.style(styleParams), {}, "Dhaka division");