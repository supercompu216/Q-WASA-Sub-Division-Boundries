var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Sub_Divisions_1 = new ol.format.GeoJSON();
var features_Sub_Divisions_1 = format_Sub_Divisions_1.readFeatures(json_Sub_Divisions_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sub_Divisions_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sub_Divisions_1.addFeatures(features_Sub_Divisions_1);
var lyr_Sub_Divisions_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sub_Divisions_1, 
                style: style_Sub_Divisions_1,
                popuplayertitle: 'Sub_Divisions',
                interactive: true,
    title: 'Sub_Divisions<br />\
    <img src="styles/legend/Sub_Divisions_1_0.png" /> Ayoub Stadium<br />\
    <img src="styles/legend/Sub_Divisions_1_1.png" /> Brewary<br />\
    <img src="styles/legend/Sub_Divisions_1_2.png" /> Gawalmandi<br />\
    <img src="styles/legend/Sub_Divisions_1_3.png" /> Hazar Ganji<br />\
    <img src="styles/legend/Sub_Divisions_1_4.png" /> Mali Bagh<br />\
    <img src="styles/legend/Sub_Divisions_1_5.png" /> Nawan Killi<br />\
    <img src="styles/legend/Sub_Divisions_1_6.png" /> Pashtoonabad<br />\
    <img src="styles/legend/Sub_Divisions_1_7.png" /> Sariab<br />\
    <img src="styles/legend/Sub_Divisions_1_8.png" /> Satellite Town<br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_Sub_Divisions_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Sub_Divisions_1];
lyr_Sub_Divisions_1.set('fieldAliases', {'Id': 'Id', 'layer': 'layer', 'Nos of Tub': 'Nos of Tub', });
lyr_Sub_Divisions_1.set('fieldImages', {'Id': 'Range', 'layer': 'TextEdit', 'Nos of Tub': 'TextEdit', });
lyr_Sub_Divisions_1.set('fieldLabels', {'Id': 'no label', 'layer': 'inline label - always visible', 'Nos of Tub': 'no label', });
lyr_Sub_Divisions_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});