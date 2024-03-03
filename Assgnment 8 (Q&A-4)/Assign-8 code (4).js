/*Open this link (https://code.earthengine.google.com/c8088995f366782ca1f47c1a55785b8e) and change the division name to yours. 
Take a screenshot of your division map and upload it to GitHub. Submit the repo link.*/


var dataset = ee.FeatureCollection('FAO/GAUL/2015/level1');

var bgd = dataset.filter(ee.Filter.eq("ADM0_NAME","Bangladesh"))

var DHAKA = bgd.filter(ee.Filter.eq("ADM1_NAME","Dhaka"))


print(bgd)
//Map.centerObject(bgd)
//Map.addLayer(bgd)
var styleParams = {
  fillColor: 'red',
  color: '00909F',
  width: 1.0,
};

dataset = bgd.style(styleParams);


//Map.addLayer(dataset, {}, 'First Level Administrative Units');
Map.addLayer(DHAKA.style(styleParams),{}, "Dhaka division");