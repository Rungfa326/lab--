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
var format_326326_2 = new ol.format.GeoJSON();
var features_326326_2 = format_326326_2.readFeatures(json_326326_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_326326_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_326326_2.addFeatures(features_326326_2);
cluster_326326_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_326326_2
});
var lyr_326326_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_326326_2, 
                style: style_326326_2,
                popuplayertitle: 'ตำบลช้างแรก - ตำบลช้างแรก326 - ตำบลช้างแรก - ตำบลช้างแรก326',
                interactive: true,
                title: '<img src="styles/legend/326326_2.png" /> ตำบลช้างแรก - ตำบลช้างแรก326 - ตำบลช้างแรก - ตำบลช้างแรก326'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_326326_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_326326_2];
lyr_326326_2.set('fieldAliases', {'ลำดับ': 'ลำดับ', 'ชื่อสถานที่': 'ชื่อสถานที่', 'ลองติจูด x': 'ลองติจูด x', 'ละติจูด y': 'ละติจูด y', 'ประเภทสถานที่': 'ประเภทสถานที่', 'ที่อยู่': 'ที่อยู่', 'ตำบล': 'ตำบล', 'อำเภอ': 'อำเภอ', 'จังหวัด': 'จังหวัด', 'ภาพสถานที่': 'ภาพสถานที่', });
lyr_326326_2.set('fieldImages', {'ลำดับ': 'Range', 'ชื่อสถานที่': 'TextEdit', 'ลองติจูด x': 'TextEdit', 'ละติจูด y': 'TextEdit', 'ประเภทสถานที่': 'TextEdit', 'ที่อยู่': 'TextEdit', 'ตำบล': 'TextEdit', 'อำเภอ': 'TextEdit', 'จังหวัด': 'TextEdit', 'ภาพสถานที่': 'TextEdit', });
lyr_326326_2.set('fieldLabels', {'ลำดับ': 'hidden field', 'ชื่อสถานที่': 'header label - always visible', 'ลองติจูด x': 'hidden field', 'ละติจูด y': 'hidden field', 'ประเภทสถานที่': 'header label - always visible', 'ที่อยู่': 'hidden field', 'ตำบล': 'header label - always visible', 'อำเภอ': 'header label - always visible', 'จังหวัด': 'header label - always visible', 'ภาพสถานที่': 'header label - always visible', });
lyr_326326_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});