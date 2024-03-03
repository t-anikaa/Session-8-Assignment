/*Draw a rectangle, a point, and a polygon in Google Earth Engine, take a screenshot, and upload the screenshot and the code in your GitHub repo. 
Submit your GitHub repo link below.*/


var Rectangle = 
    /* color: #d61c11 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[91.79556237460038, 22.346765559174926],
              [91.79556237460038, 22.34640336565729],
              [91.79605724216363, 22.34640336565729],
              [91.79605724216363, 22.346765559174926]]], null, false),
        {
          "Type": "Rectangle",
          "system:index": "0"
        }),
    Polygon = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[91.79532365799805, 22.346516241135316],
              [91.79533841014764, 22.34639096175303],
              [91.79550604821107, 22.34634134612495],
              [91.7955127537336, 22.34655965475637],
              [91.79532634020707, 22.346524923860606]]]),
        {
          "Type": "Polygon",
          "system:index": "0"
        }),
    Point = /* color: #faff20 */ee.Feature(
        ee.Geometry.Point([91.79543822757071, 22.34663998822927]),
        {
          "Type": "Point",
          "system:index": "0"
        });
        
print(Rectangle);
print(Polygon);
print(Point);