/*Draw a feature collection of 5 polygons covering water bodies in your area. Take a screenshot. 
Then, upload the code and screenshot in your GitHub repo. Submit your GitHub repo link.*/


var Waterbodies = /* color: #070cff */ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Polygon(
            [[[91.80010094922442, 22.347901100731544],
              [91.80128112119097, 22.348417096625592],
              [91.80138840955156, 22.34972692377653],
              [91.79855599683184, 22.35161225942549],
              [91.79718270581621, 22.35018337580014]]]),
        {
          "Object": "Waterbodies",
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[91.7939211396541, 22.351771023368315],
              [91.79529443066973, 22.352584685736097],
              [91.7939211396541, 22.3549264192054],
              [91.79254784863848, 22.354271531606322]]]),
        {
          "Object": "Waterbodies",
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[91.7892239962956, 22.352097541375198],
              [91.78965314973799, 22.352186845804273],
              [91.78953245033232, 22.352511814215884],
              [91.78924545396772, 22.352504372199668]]]),
        {
          "Object": "Waterbodies",
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[91.78638964095344, 22.351023896863037],
              [91.78671687045326, 22.351043742449562],
              [91.78664445080986, 22.351549803951368],
              [91.78635477223625, 22.351529958436895]]]),
        {
          "Object": "Waterbodies",
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[91.78832887807121, 22.351832602225397],
              [91.7883798400425, 22.351542361883766],
              [91.78862928548088, 22.351596937036888],
              [91.78854881921043, 22.351892138631012],
              [91.78831010260811, 22.351835082909478]]]),
        {
          "Object": "Waterbodies",
          "system:index": "4"
        })]);

print(Waterbodies);