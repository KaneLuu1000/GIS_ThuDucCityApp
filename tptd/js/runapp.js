 var map = L.map('map').setView(
        [10.81802604425394, 106.7749350839349],
        12
      );


      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors - THU DUC CITY ESSENTIAL STORES DURING COVID-19 PANDEMIC - BY LIU KANE'
      }).addTo(map);


      var autolinker = new Autolinker({
        truncate: { length: 30, location: 'smart' },
      });

      L.control.locate({ locateOptions: { maxZoom: 19 } }).addTo(map);
      var measureControl = new L.Control.Measure({
        position: 'topleft',
        primaryLengthUnit: 'meters',
        secondaryLengthUnit: 'kilometers',
        primaryAreaUnit: 'sqmeters',
        secondaryAreaUnit: 'hectares',
      });
      measureControl.addTo(map);
      document.getElementsByClassName(
        'leaflet-control-measure-toggle'
      )[0].innerHTML = '';
      document.getElementsByClassName(
        'leaflet-control-measure-toggle'
      )[0].className += ' fas fa-ruler';
      var bounds_group = new L.featureGroup([]);
      function setBounds() {}
      function pop_iaimanghoatng_0(feature, layer) {
        var popupContent =
          '<table>\
                    <tr>\
                        <td colspan="2">' +
          '<b>ID</b>' +
          (feature.properties['field_1'] !== null
            ? autolinker.link(feature.properties['field_1'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['field_2'] !== null
            ? autolinker.link(feature.properties['field_2'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          '<b>Địa chỉ: </b>' +
          (feature.properties['field_4'] !== null
            ? autolinker.link(feature.properties['field_4'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          '<b>Phường: </b>' +
          (feature.properties['field_5'] !== null
            ? autolinker.link(feature.properties['field_5'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['field_6'] !== null
            ? autolinker.link(feature.properties['field_6'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          '<b>SĐT: </b>' +
          (feature.properties['field_7'] !== null
            ? autolinker.link(feature.properties['field_7'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          '<b>Thời gian hoạt động: </b>' +
          (feature.properties['field_8'] !== null
            ? autolinker.link(feature.properties['field_8'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['field_9'] !== null
            ? autolinker.link(feature.properties['field_9'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                </table>';
        layer.bindPopup(popupContent, { maxHeight: 400 });
      }

      function style_iaimanghoatng_0_0() {
        return {
          pane: 'pane_iaimanghoatng_0',
          radius: 3.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 1,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(39,207,75,1.0)',
          interactive: true,
        };
      }
      map.createPane('pane_iaimanghoatng_0');
      map.getPane('pane_iaimanghoatng_0').style.zIndex = 400;
      map.getPane('pane_iaimanghoatng_0').style['mix-blend-mode'] = 'normal';
      var layer_iaimanghoatng_0 = new L.geoJson(json_iaimanghoatng_0, {
        attribution: '',
        interactive: true,
        dataVar: 'json_iaimanghoatng_0',
        layerName: 'layer_iaimanghoatng_0',
        pane: 'pane_iaimanghoatng_0',
        onEachFeature: pop_iaimanghoatng_0,
        pointToLayer: function (feature, latlng) {
          var context = {
            feature: feature,
            variables: {},
          };
          return L.circleMarker(latlng, style_iaimanghoatng_0_0(feature));
        },
      });
      var cluster_iaimanghoatng_0 = new L.MarkerClusterGroup({
        showCoverageOnHover: false,
        spiderfyDistanceMultiplier: 2,
      });
      cluster_iaimanghoatng_0.addLayer(layer_iaimanghoatng_0);

      bounds_group.addLayer(layer_iaimanghoatng_0);
      cluster_iaimanghoatng_0.addTo(map);
      function pop_iaimngnghoatng_1(feature, layer) {
        var popupContent =
          '<table>\
                    <tr>\
                        <td colspan="2">' +
          '<b>ID</b>' +
          (feature.properties['field_1'] !== null
            ? autolinker.link(feature.properties['field_1'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['field_2'] !== null
            ? autolinker.link(feature.properties['field_2'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          '<b>Địa chỉ: </b>' +
          (feature.properties['field_4'] !== null
            ? autolinker.link(feature.properties['field_4'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          '<b>Phường: </b>' +
          (feature.properties['field_5'] !== null
            ? autolinker.link(feature.properties['field_5'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['field_6'] !== null
            ? autolinker.link(feature.properties['field_6'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          '<b>SĐT: </b>' +
          (feature.properties['field_7'] !== null
            ? autolinker.link(feature.properties['field_7'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          '<b>Trạng thái: </b>' +
          (feature.properties['field_8'] !== null
            ? autolinker.link(feature.properties['field_8'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                </table>';
        layer.bindPopup(popupContent, { maxHeight: 400 });
      }

      function style_iaimngnghoatng_1_0() {
        return {
          pane: 'pane_iaimngnghoatng_1',
          radius: 3.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 1,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(225,89,137,1.0)',
          interactive: true,
        };
      }
      map.createPane('pane_iaimngnghoatng_1');
      map.getPane('pane_iaimngnghoatng_1').style.zIndex = 401;
      map.getPane('pane_iaimngnghoatng_1').style['mix-blend-mode'] = 'normal';
      var layer_iaimngnghoatng_1 = new L.geoJson(json_iaimngnghoatng_1, {
        attribution: '',
        interactive: true,
        dataVar: 'json_iaimngnghoatng_1',
        layerName: 'layer_iaimngnghoatng_1',
        pane: 'pane_iaimngnghoatng_1',
        onEachFeature: pop_iaimngnghoatng_1,
        pointToLayer: function (feature, latlng) {
          var context = {
            feature: feature,
            variables: {},
          };
          return L.circleMarker(latlng, style_iaimngnghoatng_1_0(feature));
        },
      });
      var cluster_iaimngnghoatng_1 = new L.MarkerClusterGroup({
        showCoverageOnHover: false,
        spiderfyDistanceMultiplier: 2,
      });
      cluster_iaimngnghoatng_1.addLayer(layer_iaimngnghoatng_1);

      bounds_group.addLayer(layer_iaimngnghoatng_1);
      cluster_iaimngnghoatng_1.addTo(map);
      function pop_QThuc_2(feature, layer) {
        var popupContent =
          '<table>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['fid'] !== null
            ? autolinker.link(feature.properties['fid'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['fid_1'] !== null
            ? autolinker.link(feature.properties['fid_1'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['Cap'] !== null
            ? autolinker.link(feature.properties['Cap'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['MaTP'] !== null
            ? autolinker.link(feature.properties['MaTP'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['Tinh_Thanh'] !== null
            ? autolinker.link(feature.properties['Tinh_Thanh'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['Name'] !== null
            ? autolinker.link(feature.properties['Name'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['Vung'] !== null
            ? autolinker.link(feature.properties['Vung'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                </table>';
        layer.bindPopup(popupContent, { maxHeight: 400 });
      }

      function style_QThuc_2_0() {
        return {
          pane: 'pane_QThuc_2',
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '10,5,1,5,1,5',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2.0,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(35,35,255,0.17647058823529413)',
          interactive: false,
        };
      }
      map.createPane('pane_QThuc_2');
      map.getPane('pane_QThuc_2').style.zIndex = 402;
      map.getPane('pane_QThuc_2').style['mix-blend-mode'] = 'normal';
      var layer_QThuc_2 = new L.geoJson(json_QThuc_2, {
        attribution: '',
        interactive: false,
        dataVar: 'json_QThuc_2',
        layerName: 'layer_QThuc_2',
        pane: 'pane_QThuc_2',
        onEachFeature: pop_QThuc_2,
        style: style_QThuc_2_0,
      });
      bounds_group.addLayer(layer_QThuc_2);
      map.addLayer(layer_QThuc_2);
      function pop_Q9_3(feature, layer) {
        var popupContent =
          '<table>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['fid'] !== null
            ? autolinker.link(feature.properties['fid'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['fid_1'] !== null
            ? autolinker.link(feature.properties['fid_1'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['Cap'] !== null
            ? autolinker.link(feature.properties['Cap'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['MaTP'] !== null
            ? autolinker.link(feature.properties['MaTP'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['Tinh_Thanh'] !== null
            ? autolinker.link(feature.properties['Tinh_Thanh'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['Name'] !== null
            ? autolinker.link(feature.properties['Name'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                </table>';
        layer.bindPopup(popupContent, { maxHeight: 400 });
      }

      function style_Q9_3_0() {
        return {
          pane: 'pane_Q9_3',
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '10,5,1,5,1,5',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2.0,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(243,56,125,0.23921568627450981)',
          interactive: false,
        };
      }
      map.createPane('pane_Q9_3');
      map.getPane('pane_Q9_3').style.zIndex = 403;
      map.getPane('pane_Q9_3').style['mix-blend-mode'] = 'normal';
      var layer_Q9_3 = new L.geoJson(json_Q9_3, {
        attribution: '',
        interactive: false,
        dataVar: 'json_Q9_3',
        layerName: 'layer_Q9_3',
        pane: 'pane_Q9_3',
        onEachFeature: pop_Q9_3,
        style: style_Q9_3_0,
      });
      bounds_group.addLayer(layer_Q9_3);
      map.addLayer(layer_Q9_3);
      function pop_Q2_4(feature, layer) {
        var popupContent =
          '<table>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['fid'] !== null
            ? autolinker.link(feature.properties['fid'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['fid_1'] !== null
            ? autolinker.link(feature.properties['fid_1'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['Cap'] !== null
            ? autolinker.link(feature.properties['Cap'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['MaTP'] !== null
            ? autolinker.link(feature.properties['MaTP'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['Tinh_Thanh'] !== null
            ? autolinker.link(feature.properties['Tinh_Thanh'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['Name'] !== null
            ? autolinker.link(feature.properties['Name'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' +
          (feature.properties['Vung'] !== null
            ? autolinker.link(feature.properties['Vung'].toLocaleString())
            : '') +
          '</td>\
                    </tr>\
                </table>';
        layer.bindPopup(popupContent, { maxHeight: 400 });
      }

      function style_Q2_4_0() {
        return {
          pane: 'pane_Q2_4',
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '10,5,1,5,1,5',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2.0,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(38,255,23,0.1411764705882353)',
          interactive: false,
        };
      }
      map.createPane('pane_Q2_4');
      map.getPane('pane_Q2_4').style.zIndex = 404;
      map.getPane('pane_Q2_4').style['mix-blend-mode'] = 'normal';
      var layer_Q2_4 = new L.geoJson(json_Q2_4, {
        attribution: '',
        interactive: false,
        dataVar: 'json_Q2_4',
        layerName: 'layer_Q2_4',
        pane: 'pane_Q2_4',
        onEachFeature: pop_Q2_4,
        style: style_Q2_4_0,
      });
      bounds_group.addLayer(layer_Q2_4);
      map.addLayer(layer_Q2_4);
      var osmGeocoder = new L.Control.Geocoder({
        collapsed: true,
        position: 'topleft',
        text: 'Search',
        title: 'Testing',
      }).addTo(map);
      document.getElementsByClassName(
        'leaflet-control-geocoder-icon'
      )[0].className += ' fa fa-search';
      document.getElementsByClassName(
        'leaflet-control-geocoder-icon'
      )[0].title += 'Search for a place';
      var baseMaps = {};
      L.control
        .layers(
          baseMaps,
          {
            '<img src="tptd/legend/Q2_4.png" /> Q.2': layer_Q2_4,
            '<img src="tptd/legend/Q9_3.png" /> Q.9': layer_Q9_3,
            '<img src="tptd/legend/QThuc_2.png" /> Q.Thủ Đức': layer_QThuc_2,
            '<img src="tptd/legend/iaimngnghoatng_1.png" /> Địa điểm ngừng hoạt động':
              cluster_iaimngnghoatng_1,
            '<img src="tptd/legend/iaimanghoatng_0.png" /> Địa điểm đang hoạt động':
              cluster_iaimanghoatng_0,
          },
          { collapsed: false }
        )
        .addTo(map);
      setBounds();
      map.addControl(
        new L.Control.Search({
          layer: layer_iaimanghoatng_0,
          initial: false,
          hideMarkerOnCollapse: true,
          propertyName: 'field_4',
        })
      );
      document.getElementsByClassName('search-button')[0].className +=
        ' fa fa-binoculars';
      var mapDiv = document.getElementById('map');
      var row = document.createElement('div');
      row.className = 'row';
      row.id = 'all';
      row.style.height = '100%';
      var col1 = document.createElement('div');
      col1.className = 'col9';
      col1.id = 'mapWindow';
      col1.style.height = '99%';
      col1.style.width = '80%';
      col1.style.display = 'inline-block';
      var col2 = document.createElement('div');
      col2.className = 'col3';
      col2.id = 'menu';
      col2.style.display = 'inline-block';
      mapDiv.parentNode.insertBefore(row, mapDiv);
      document.getElementById('all').appendChild(col1);
      document.getElementById('all').appendChild(col2);
      col1.appendChild(mapDiv);
      var Filters = { field_5: 'str' };
      function filterFunc() {
        map.eachLayer(function (lyr) {
          if ('options' in lyr && 'dataVar' in lyr['options']) {
            features = this[lyr['options']['dataVar']].features.slice(0);
            try {
              for (key in Filters) {
                keyS = key.replace(/[^a-zA-Z0-9_]/g, '');
                if (Filters[key] == 'str' || Filters[key] == 'bool') {
                  var selection = [];
                  var options = document.getElementById('sel_' + keyS).options;
                  for (var i = 0; i < options.length; i++) {
                    if (options[i].selected) selection.push(options[i].value);
                  }
                  try {
                    if (key in features[0].properties) {
                      for (i = features.length - 1; i >= 0; --i) {
                        if (
                          selection.indexOf(features[i].properties[key]) < 0 &&
                          selection.length > 0
                        ) {
                          features.splice(i, 1);
                        }
                      }
                    }
                  } catch (err) {}
                }
                if (Filters[key] == 'int') {
                  sliderVals = document
                    .getElementById('div_' + keyS)
                    .noUiSlider.get();
                  try {
                    if (key in features[0].properties) {
                      for (i = features.length - 1; i >= 0; --i) {
                        if (
                          parseInt(features[i].properties[key]) <
                            sliderVals[0] ||
                          parseInt(features[i].properties[key]) > sliderVals[1]
                        ) {
                          features.splice(i, 1);
                        }
                      }
                    }
                  } catch (err) {}
                }
                if (Filters[key] == 'real') {
                  sliderVals = document
                    .getElementById('div_' + keyS)
                    .noUiSlider.get();
                  try {
                    if (key in features[0].properties) {
                      for (i = features.length - 1; i >= 0; --i) {
                        if (
                          features[i].properties[key] < sliderVals[0] ||
                          features[i].properties[key] > sliderVals[1]
                        ) {
                          features.splice(i, 1);
                        }
                      }
                    }
                  } catch (err) {}
                }
                if (
                  Filters[key] == 'date' ||
                  Filters[key] == 'datetime' ||
                  Filters[key] == 'time'
                ) {
                  try {
                    if (key in features[0].properties) {
                      HTMLkey = key.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '');
                      startdate = document
                        .getElementById('dat_' + HTMLkey + '_date1')
                        .value.replace(' ', 'T');
                      enddate = document
                        .getElementById('dat_' + HTMLkey + '_date2')
                        .value.replace(' ', 'T');
                      for (i = features.length - 1; i >= 0; --i) {
                        if (
                          features[i].properties[key] < startdate ||
                          features[i].properties[key] > enddate
                        ) {
                          features.splice(i, 1);
                        }
                      }
                    }
                  } catch (err) {}
                }
              }
            } catch (err) {}
            this[lyr['options']['layerName']].clearLayers();
            this[lyr['options']['layerName']].addData(features);
          }
        });
      }
      document
        .getElementById('menu')
        .appendChild(document.createElement('div'));
      var div_field_5 = document.createElement('div');
      div_field_5.id = 'div_field_5';
      div_field_5.className = 'filterselect';
      document.getElementById('menu').appendChild(div_field_5);
      sel_field_5 = document.createElement('select');
      sel_field_5.multiple = true;
      sel_field_5.size = 10;
      sel_field_5.id = 'sel_field_5';
      var field_5_options_str = "<option value='' unselected></option>";
      sel_field_5.onchange = function () {
        filterFunc();
      };
      field_5_options_str += '<option value=" An Khánh"> An Khánh</option>';
      field_5_options_str += '<option value=" An Phú"> An Phú</option>';
      field_5_options_str += '<option value=" Hiệp Phú"> Hiệp Phú</option>';
      field_5_options_str += '<option value=" Linh Trung"> Linh Trung</option>';
      field_5_options_str += '<option value=" Linh Tây"> Linh Tây</option>';
      field_5_options_str +=
        '<option value=" Phước Long A"> Phước Long A</option>';
      field_5_options_str +=
        '<option value=" Phước Long B"> Phước Long B</option>';
      field_5_options_str += '<option value=" Thảo Điền"> Thảo Điền</option>';
      field_5_options_str += '<option value=" Trường Thọ"> Trường Thọ</option>';
      field_5_options_str += '<option value="An Khánh">An Khánh</option>';
      field_5_options_str += '<option value="An Lợi Đông">An Lợi Đông</option>';
      field_5_options_str += '<option value="An Phú">An Phú</option>';
      field_5_options_str += '<option value="Bình An">Bình An</option>';
      field_5_options_str += '<option value="Bình Chiểu">Bình Chiểu</option>';
      field_5_options_str += '<option value="Bình Khánh">Bình Khánh</option>';
      field_5_options_str += '<option value="Bình Thọ">Bình Thọ</option>';
      field_5_options_str +=
        '<option value="Bình Trưng Tây">Bình Trưng Tây</option>';
      field_5_options_str +=
        '<option value="Bình Trưng Đông">Bình Trưng Đông</option>';
      field_5_options_str += '<option value="Cát Lái">Cát Lái</option>';
      field_5_options_str += '<option value="Cát lái">Cát lái</option>';
      field_5_options_str +=
        '<option value="Hiệp Bình Chánh">Hiệp Bình Chánh</option>';
      field_5_options_str +=
        '<option value="Hiệp Bình Phước">Hiệp Bình Phước</option>';
      field_5_options_str +=
        '<option value="Hiệp Bình Phước ">Hiệp Bình Phước </option>';
      field_5_options_str += '<option value="Hiệp Phú">Hiệp Phú</option>';
      field_5_options_str += '<option value="Hiệp Phú ">Hiệp Phú </option>';
      field_5_options_str += '<option value="Linh Chiểu">Linh Chiểu</option>';
      field_5_options_str += '<option value="Linh Trung">Linh Trung</option>';
      field_5_options_str += '<option value="Linh Tây">Linh Tây</option>';
      field_5_options_str += '<option value="Linh Xuân">Linh Xuân</option>';
      field_5_options_str += '<option value="Linh Đông">Linh Đông</option>';
      field_5_options_str += '<option value="Long Bình">Long Bình</option>';
      field_5_options_str += '<option value="Long Phước">Long Phước</option>';
      field_5_options_str +=
        '<option value="Long Thạnh Mỹ">Long Thạnh Mỹ</option>';
      field_5_options_str += '<option value="Long Trường">Long Trường</option>';
      field_5_options_str += '<option value="Phú Hữu">Phú Hữu</option>';
      field_5_options_str += '<option value="Phước Bình">Phước Bình</option>';
      field_5_options_str +=
        '<option value="Phước Long A">Phước Long A</option>';
      field_5_options_str +=
        '<option value="Phước Long A ">Phước Long A </option>';
      field_5_options_str +=
        '<option value="Phước Long B">Phước Long B</option>';
      field_5_options_str += '<option value="Tam Bình">Tam Bình</option>';
      field_5_options_str += '<option value="Tam Phú">Tam Phú</option>';
      field_5_options_str +=
        '<option value="Thạnh Mỹ Lợi">Thạnh Mỹ Lợi</option>';
      field_5_options_str +=
        '<option value="Thạnh Mỹ lợi">Thạnh Mỹ lợi</option>';
      field_5_options_str += '<option value="Thảo Điền">Thảo Điền</option>';
      field_5_options_str += '<option value="Thủ Thiêm">Thủ Thiêm</option>';
      field_5_options_str +=
        '<option value="Trường Thạnh">Trường Thạnh</option>';
      field_5_options_str += '<option value="Trường Thọ">Trường Thọ</option>';
      field_5_options_str += '<option value="Tân Phú">Tân Phú</option>';
      field_5_options_str +=
        '<option value="Tăng Nhơn Phú A">Tăng Nhơn Phú A</option>';
      field_5_options_str +=
        '<option value="Tăng Nhơn Phú B">Tăng Nhơn Phú B</option>';
      field_5_options_str +=
        '<option value="Tăng Nhơn Phú B ">Tăng Nhơn Phú B </option>';
      sel_field_5.innerHTML = field_5_options_str;
      div_field_5.appendChild(sel_field_5);
      var lab_field_5 = document.createElement('div');
      lab_field_5.innerHTML = '<b>Phường</b>';
      lab_field_5.className = 'filterlabel';
      div_field_5.appendChild(lab_field_5);
      var reset_field_5 = document.createElement('div');
      reset_field_5.innerHTML = 'Làm mới';
      reset_field_5.className = 'filterlabel';
      reset_field_5.onclick = function () {
        var options = document.getElementById('sel_field_5').options;
        for (var i = 0; i < options.length; i++) {
          options[i].selected = false;
        }
        filterFunc();
      };
      div_field_5.appendChild(reset_field_5);
