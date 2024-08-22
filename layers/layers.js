ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:102003").setExtent([719401.091339, 66026.687694, 1446466.908042, 582311.686644]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.669000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SWOhioHUC12_1 = new ol.format.GeoJSON();
var features_SWOhioHUC12_1 = format_SWOhioHUC12_1.readFeatures(json_SWOhioHUC12_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_SWOhioHUC12_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWOhioHUC12_1.addFeatures(features_SWOhioHUC12_1);
var lyr_SWOhioHUC12_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SWOhioHUC12_1, 
                style: style_SWOhioHUC12_1,
                popuplayertitle: "SW Ohio HUC12",
                interactive: true,
    title: 'SW Ohio HUC12<br />\
    <img src="styles/legend/SWOhioHUC12_1_0.png" /> Not Modeled<br />\
    <img src="styles/legend/SWOhioHUC12_1_1.png" /> Modeled<br />'
        });
var format_GMandLMHUC8Boundary_2 = new ol.format.GeoJSON();
var features_GMandLMHUC8Boundary_2 = format_GMandLMHUC8Boundary_2.readFeatures(json_GMandLMHUC8Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_GMandLMHUC8Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GMandLMHUC8Boundary_2.addFeatures(features_GMandLMHUC8Boundary_2);
var lyr_GMandLMHUC8Boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GMandLMHUC8Boundary_2, 
                style: style_GMandLMHUC8Boundary_2,
                popuplayertitle: "GM and LM HUC 8 Boundary",
                interactive: true,
                title: '<img src="styles/legend/GMandLMHUC8Boundary_2.png" /> GM and LM HUC 8 Boundary'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_SWOhioHUC12_1.setVisible(true);lyr_GMandLMHUC8Boundary_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SWOhioHUC12_1,lyr_GMandLMHUC8Boundary_2];
lyr_SWOhioHUC12_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'STATENS': 'STATENS', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'FID_WBDHU1': 'FID_WBDHU1', 'TNMID': 'TNMID', 'METASOURCE': 'METASOURCE', 'LOADDATE': 'LOADDATE', 'AREAACRES': 'AREAACRES', 'AREASQKM': 'AREASQKM', 'STATES': 'STATES', 'HUC12': 'HUC12', 'HUTYPE': 'HUTYPE', 'HUMOD': 'HUMOD', 'TOHUC': 'TOHUC', 'NONCONTRIB': 'NONCONTRIB', 'NONCONTR_1': 'NONCONTR_1', 'Shape_Leng': 'Shape_Leng', 'ACPF': 'ACPF', 'Name': 'Name', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_GMandLMHUC8Boundary_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TNMID': 'TNMID', 'METASOURCE': 'METASOURCE', 'SOURCEDATA': 'SOURCEDATA', 'SOURCEORIG': 'SOURCEORIG', 'SOURCEFEAT': 'SOURCEFEAT', 'LOADDATE': 'LOADDATE', 'GNIS_ID': 'GNIS_ID', 'AREAACRES': 'AREAACRES', 'AREASQKM': 'AREASQKM', 'STATES': 'STATES', 'HUC8': 'HUC8', 'NAME': 'NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SWOhioHUC12_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'STATENS': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'FID_WBDHU1': 'TextEdit', 'TNMID': 'TextEdit', 'METASOURCE': 'TextEdit', 'LOADDATE': 'DateTime', 'AREAACRES': 'TextEdit', 'AREASQKM': 'TextEdit', 'STATES': 'TextEdit', 'HUC12': 'TextEdit', 'HUTYPE': 'TextEdit', 'HUMOD': 'TextEdit', 'TOHUC': 'TextEdit', 'NONCONTRIB': 'TextEdit', 'NONCONTR_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'ACPF': 'TextEdit', 'Name': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GMandLMHUC8Boundary_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'TNMID': 'TextEdit', 'METASOURCE': 'TextEdit', 'SOURCEDATA': 'TextEdit', 'SOURCEORIG': 'TextEdit', 'SOURCEFEAT': 'TextEdit', 'LOADDATE': 'DateTime', 'GNIS_ID': 'TextEdit', 'AREAACRES': 'TextEdit', 'AREASQKM': 'TextEdit', 'STATES': 'TextEdit', 'HUC8': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SWOhioHUC12_1.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'STATENS': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'FID_WBDHU1': 'hidden field', 'TNMID': 'hidden field', 'METASOURCE': 'hidden field', 'LOADDATE': 'hidden field', 'AREAACRES': 'hidden field', 'AREASQKM': 'hidden field', 'STATES': 'hidden field', 'HUC12': 'inline label - always visible', 'HUTYPE': 'hidden field', 'HUMOD': 'hidden field', 'TOHUC': 'inline label - always visible', 'NONCONTRIB': 'hidden field', 'NONCONTR_1': 'hidden field', 'Shape_Leng': 'hidden field', 'ACPF': 'inline label - always visible', 'Name': 'inline label - always visible', 'Shape_Le_1': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_GMandLMHUC8Boundary_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'TNMID': 'hidden field', 'METASOURCE': 'hidden field', 'SOURCEDATA': 'hidden field', 'SOURCEORIG': 'hidden field', 'SOURCEFEAT': 'hidden field', 'LOADDATE': 'hidden field', 'GNIS_ID': 'hidden field', 'AREAACRES': 'hidden field', 'AREASQKM': 'hidden field', 'STATES': 'hidden field', 'HUC8': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_GMandLMHUC8Boundary_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});