var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_3263261_2 = new ol.format.GeoJSON();
var features_3263261_2 = format_3263261_2.readFeatures(json_3263261_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3263261_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3263261_2.addFeatures(features_3263261_2);
cluster_3263261_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_3263261_2
});
var lyr_3263261_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_3263261_2, 
                style: style_3263261_2,
                popuplayertitle: 'ตำบลไชยราช - ตำบลไชยราช326 - ตำบลไชยราช - ตำบลไชยราช326 (1)',
                interactive: true,
                title: '<img src="styles/legend/3263261_2.png" /> ตำบลไชยราช - ตำบลไชยราช326 - ตำบลไชยราช - ตำบลไชยราช326 (1)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_3263261_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_3263261_2];
lyr_3263261_2.set('fieldAliases', {'ลำดับ': 'ลำดับ', 'ชื่อสถานที่': 'ชื่อสถานที่', 'ลองติจูด x': 'ลองติจูด x', 'ละติจูด y': 'ละติจูด y', 'ประเภทสถานที่': 'ประเภทสถานที่', 'ที่อยู่': 'ที่อยู่', 'ตำบล': 'ตำบล', 'อำเภอ': 'อำเภอ', 'จังหวัด': 'จังหวัด', 'ภาพสถานที่': 'ภาพสถานที่', });
lyr_3263261_2.set('fieldImages', {'ลำดับ': 'Range', 'ชื่อสถานที่': 'TextEdit', 'ลองติจูด x': 'TextEdit', 'ละติจูด y': 'TextEdit', 'ประเภทสถานที่': 'TextEdit', 'ที่อยู่': 'TextEdit', 'ตำบล': 'TextEdit', 'อำเภอ': 'TextEdit', 'จังหวัด': 'TextEdit', 'ภาพสถานที่': 'TextEdit', });
lyr_3263261_2.set('fieldLabels', {'ลำดับ': 'hidden field', 'ชื่อสถานที่': 'header label - always visible', 'ลองติจูด x': 'hidden field', 'ละติจูด y': 'hidden field', 'ประเภทสถานที่': 'header label - always visible', 'ที่อยู่': 'hidden field', 'ตำบล': 'header label - always visible', 'อำเภอ': 'header label - always visible', 'จังหวัด': 'header label - always visible', 'ภาพสถานที่': 'header label - visible with data', });
lyr_3263261_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});