/*
 * File: app/controller/Fahrplaner.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('VosNavigator.controller.Fahrplaner', {
    extend: 'Ext.app.Controller',

    config: {
        startOrt: {
            lat: 0.0,
            lng: 0.0
        },
        zielOrt: {
            lat: 0.0,
            lng: 0.0
        },
        db: null,
        directionList: 0,
        linesList: 0,
        neumarkt: true,
        tempCoords: {
            lat: 0.0,
            lng: 0.0
        },
        mutexLock: true,

        refs: {
            MainView: '#MainView',
            fahrplanerBackButton: '#fahrplanerBackButton',
            FahrplanerView: '#FahrplanerView',
            mybutton: 'button#mybutton',
            lineOne: 'dataview#lineOne',
            lineTwo: 'dataview#lineTwo',
            searchView: '#searchView',
            SearchTitle: 'label#SearchTitle',
            mybutton4: 'button#mybutton4',
            searchfieldStart: 'searchfield#searchfieldStart',
            searchfieldDestination: 'searchfield#searchfieldDestination'
        },

        control: {
            "button#fahrplanerBackButton": {
                tap: 'fahrplanerBackButton'
            },
            "button#mybutton": {
                tap: 'storeTest'
            },
            "#lineOne": {
                itemtap: 'onLineOneItemTap'
            },
            "searchfield#searchfieldStart": {
                focus: 'onFocusSearchfieldStart'
            },
            "searchfield#searchfieldDestination": {
                focus: 'onFocusSearchfieldDestination'
            },
            "button#mybutton4": {
                tap: 'sucheVerbindung'
            }
        }
    },

    fahrplanerBackButton: function(button, e, eOpts) {
        this.getFahrplanerView().hide();
        this.getMainView().show();
    },

    storeTest: function(button, e, eOpts) {
        this.stops.filter("id", 250);
    },

    onLineOneItemTap: function(list, index, item, record) {


        /*var dataView = this.getLineTwo();
        var linesData = record.get('lines');
        //var quantity = linesArray.getCount();



        var myPanel = Ext.create('Ext.Panel', {
            html: "<div class=\"buslineWrapper\"><div class=\"buslinesBoxLeft\"><div class=\"busIcon\" stlye=\"background-image:url(resources/images/icons/bus-icon-150x150.png)\"></div> " + this.getLines(linesData) + "</div><div class=\"buslinesBoxRight\">"+ record.get('name')+ "</div><div class=\"clearing\"></div></div>"
        });

        dataView.removeAll();
        dataView.add([myPanel]);*/
    },

    onFocusSearchfieldStart: function(textfield, e, eOpts) {

        //var searchTitle = Ext.getCmp('SearchTitle');
        //searchTitle.setData({title:"Start"}); // Übergabe an das Label searchTitle
        //console.log('Search Typ übergabe ::before');
        this.getApplication().getController('searchViewController').searchType = 'start';
        //console.log('Search Typ übergabe ::after');
        this.getSearchView().show({type:"slide",direction:"up"});
        this.getFahrplanerView().hide();
    },

    onFocusSearchfieldDestination: function(textfield, e, eOpts) {
        //var searchTitle = Ext.getCmp('SearchTitle');
        //searchTitle.setData({title:"Ziel"});  // Übergabe an das Label searchTitle
        //console.log('Search Typ übergabe ::before');
        this.getApplication().getController('searchViewController').searchType = 'destination';
        //console.log('Search Typ übergabe ::after');
        this.getSearchView().show({type:"slide",direction:"up"});
        this.getFahrplanerView().hide();

    },

    sucheVerbindung: function(button, e, eOpts) {



        var searchView = this.getApplication().getController('searchViewController');
        var sOrt = searchView.getStartOrt();
        var zOrt = searchView.getZielOrt();
        var self = this;
        console.log("verbindung von "+sOrt+" nach "+zOrt);

        var dataView = this.getLineTwo();
        dataView.removeAll();
        var htmlContent;

        htmlContent += "<div class=\"connection\">\n";
        htmlContent += "<div class=\"startBusstop\">\n";
        htmlContent += "<span class=\"vonnach\">von</span><img src=\"resources/images/icons/bus-icon-150x150.png\" height=\"20px\" width=\"auto\">\n";
        htmlContent += "<span class=\"ovalBox blue busline\">"+ sOrt +"</span>\n";
        htmlContent += "Linie <img src=\"resources/images/icons/busline_icon.png\" height=\"15px\" width=\"auto\"> <span class=\"ovalBox red busline\">#LINIE#</span> #RICHTUNG# \n";
        htmlContent += "</div>\n";


        htmlContent += "<div class=\"destinationBusstop\">\n";
        htmlContent += "<span class=\"vonnach\">nach</span><img src=\"resources/images/icons/bus-icon-150x150.png\" height=\"20px\" width=\"auto\"> \n";
        htmlContent += "<span class=\"ovalBox blue busline\">" + zOrt + "</span></div>\n";

        // IF ---- VERBINDUNG ÜBER NEUMARKT? DANN DAS HIER AUCH!

        htmlContent += "<div class=\"viaBusstop\">via <span class=\"ovalBox blue busline\">Neumarkt</span> mit \n";
        htmlContent += "Linie <img src=\"resources/images/icons/busline_icon.png\" height=\"15px\" width=\"auto\"> \n";
        htmlContent += "<span class=\"ovalBox red busline\">#LINIE#</span> #RICHTUNG# \n";
        htmlContent += "</div>\n";


        // ENDIF ----


        htmlContent += "</div>\n";

        var myPanel = Ext.create('Ext.Panel', {
            html: htmlContent
        });

        dataView.add([myPanel]);

        dataBaseActionDirektVerbindung(sOrt,zOrt);
        if(self.getNeumarkt()){
            //dataBaseActionUmstiegAmNeumarkt(sOrt,zOrt);
        }
        /**
        *
        *functions
        *
        **/

        function dataBaseActionUmstiegAmNeumarkt(sOrt,zOrt){
            var db = self.getDb();
            var start = self.getStartOrt();
            var ziel =  self.getZielOrt();
            var temp = self.getTempCoords();
            var direction1 = [];
            var direction2 = [];
            var direction1a=[];
            var direction2a=[];
            var endstation1 =[];
            var endstation1a = [];
            var startLines=[];
            var zielLines = [];
            var counter=0;
            var i=0;
            var j=0;
            var length=0;
            db.transaction(function(tx) {
                console.log("aufruf databaseActionUmstiegAmNeumarkt");

                //get coords from Startort Name
                tx.executeSql("select lineId from stops, connections where stops.id = connections.stopId and name = '"+sOrt+"' order by lineId;", [],
                              function(tx, res) {
                                  length = res.rows.length;
                                  j=0;
                                  for(i=0;i<length;i++){
                                      startLines[j++]=res.rows.item(i).lineId;
                                  }

                              },function(e){console.log("errror start line id "+e.message);});
                //get coords from ZielOrt Name
                tx.executeSql("select lineId from stops, connections where stops.id = connections.stopId and name = '"+zOrt+"' order by lineId;", [],
                              function(tx, res) {
                                  length = res.rows.length;
                                  j=0;
                                  for(i=0;i<length;i++){
                                      zielLines[j++]=res.rows.item(i).lineId;
                                  }

                              },function(e){console.log("errror ziel line id "+e.message);});
                //get direction1 start -> neumarkt
                tx.executeSql("Select direction1 as direction, lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = '"+sOrt+"' intersect Select direction1 as direction, lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId = lines.id and stops.name = 'Neumarkt' order by lineId;", [], function(tx, res)
                              {
                                  length = res.rows.length;
                                  j=0;

                                  for( i =0; i<length;i++){
                                      direction1[j++] = res.rows.item(i).direction;
                                  }


                              },function(){console.log("errror mit dir1");});
                //get direction1  neumarkt -> ziel

                tx.executeSql("Select direction1 as direction, lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = 'Neumarkt' intersect Select direction1 as direction, lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId = lines.id and stops.name = '"+zOrt+"' order by lineId;", [], function(tx, res)
                              {
                                  length = res.rows.length;
                                  j=0;

                                  for( i =0; i<length;i++){
                                      direction1a[j++] = res.rows.item(i).direction;
                                  }


                              },function(){console.log("errror mit dir1a");});
                //get direction2 start -> neumarkt

                tx.executeSql("Select direction2 as direction, lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = '"+sOrt+"' intersect Select direction2 as direction, lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId = lines.id and stops.name = 'Neumarkt' order by lineId;", [], function(tx, res)
                              {
                                  length = res.rows.length;
                                  j=0;

                                  for( i =0; i<length;i++){
                                      direction2[j++] = res.rows.item(i).direction;
                                  }


                              },function(){console.log("errror mit dir2");});
                //get direction2  neumarkt -> ziel

                tx.executeSql("Select direction2 as direction, lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = 'Neumarkt' intersect Select direction2 as direction, lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId = lines.id and stops.name = '"+zOrt+"' order by lineId;", [], function(tx, res)
                              {
                                  length = res.rows.length;
                                  j=0;

                                  for( i =0; i<length;i++){
                                      direction2a[j++] = res.rows.item(i).direction;
                                  }


                              },function(){console.log("errror mit dir2a");});
                //get endstation1   start -> neumarkt

                tx.executeSql("select name, lat, long as lng, lineId, endstation1 From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.id in (Select endstation1 From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = '"+sOrt+"' intersect Select endstation1 From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = 'Neumarkt') and lineId in (Select lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = '"+sOrt+"' intersect Select lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = 'Neumarkt' order by lineId) order by lineId;", [], function(tx, res)
                              {
                                  length = res.rows.length;
                                  j=0;
                                  for( i =0; i<length;i++){
                                      var innerArray =[];

                                      innerArray[0] = res.rows.item(i).name;
                                      innerArray[1] = res.rows.item(i).lat;
                                      innerArray[2] = res.rows.item(i).lng;
                                      innerArray[3] = res.rows.item(i).lineId;
                                      endstation1[j++] = innerArray;

                                      console.log("Monsterabfrage: "+endstation1[j-1][0]+" "+endstation1[j-1][1]+" "+endstation1[j-1][2]+" "+endstation1[j-1][3]);
                                  }

                              },function(){console.log("errror mit monsterabfraage");});
                //get endstation2   neumarkt -> ziel

                tx.executeSql("select name, lat, long as lng, lineId, endstation1 From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.id in (Select endstation1 From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = 'Neumarkt' intersect Select endstation1 From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = '"+zOrt+"') and lineId in (Select lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = 'Neumarkt' intersect Select lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = '"+zOrt+"' order by lineId) order by lineId;", [], function(tx, res)
                              {
                                  length = res.rows.length;
                                  j=0;
                                  for( i =0; i<length;i++){
                                      var innerArray =[];

                                      innerArray[0] = res.rows.item(i).name;
                                      innerArray[1] = res.rows.item(i).lat;
                                      innerArray[2] = res.rows.item(i).lng;
                                      innerArray[3] = res.rows.item(i).lineId;
                                      endstation1a[j++] = innerArray;

                                      console.log("Monsterabfrage2: "+endstation1a[j-1][0]+" "+endstation1a[j-1][1]+" "+endstation1a[j-1][2]+" "+endstation1a[j-1][3]);
                                  }

                              },function(){console.log("errror mit monsterabfraage2");});


            },function(e){console.log("Eroor"+e.message);},
                           function(){	//successCallback
                               var entfernung1;
                               var entfernung2;
                               var tmpDirection=[];
                               var tmpDirection2=[];
                               var neumarktCoords = {lng:8.0486774787,lat:52.2725392927};
                               console.log("Läuft bis hier 1 !");
                               for(var i =0;i<startLines.length;i++){
                                   entfernung1 = self.entfernung(start,{lat:endstation1[i][1],lng:endstation1[i][2]});
                                   console.log("Von: "+sOrt+" nach Neumarkt");
                                   entfernung2 = self.entfernung(neumarktCoords,{lat:endstation1[i][1],lng:endstation1[i][2]});

                                   if(entfernung1>entfernung2){
                                       tmpDirection[i]=direction1[i];
                                       console.log("e>e2 lineId: "+startLines[i]+"nach"+tmpDirection[i]);

                                   }else{
                                       tmpDirection[i]=direction2[i];
                                       console.log("e<e2 lineId: "+startLines[i]+"nach"+tmpDirection[i]);

                                   }
                               }
                               console.log("Läuft bis hier 2 !");

                               for(i =0;i<zielLines.length;i++){
                                   entfernung1 = self.entfernung(neumarktCoords,{lat:endstation1a[i][1],lng:endstation1a[i][2]});
                                   console.log("Von: Neumarkt nach "+zOrt);
                                   entfernung2 = self.entfernung(ziel,{lat:endstation1a[i][1],lng:endstation1a[i][2]});

                                   if(entfernung1>entfernung2){
                                       tmpDirection2[i]=direction1a[i];
                                       console.log("e>e2 lineId: "+zielLines[i]+"nach"+tmpDirection2[i]);

                                   }else{
                                       tmpDirection2[i]=direction2a[i];
                                       console.log("e<e2 lineId: "+zielLines[i]+"nach"+tmpDirection2[i]);

                                   }
                               }

                           });
        }





        function dataBaseActionDirektVerbindung(sOrt, zOrt){
            var coords;
            var start = self.getStartOrt();
            var ziel =  self.getZielOrt();
            var temp = self.getTempCoords();
            var db = self.getDb();
            var lines = [];
            var direction1 = [];
            var direction2 = [];
            var endstation1 = [];
            var i=0;
            var j=0;
            var length=0;

            db.transaction(function(tx) {
                //get coords from Startort Name
                tx.executeSql("select lat, long as lng from stops where name = '"+sOrt+"';", [],
                              function(tx, res) {
                                  if(res.rows.length){
                                      start.lat=res.rows.item(0).lat;
                                      start.lng=res.rows.item(0).lng;
                                  }else{
                                      console.log("aktuelle Pos einbeziehen");

                                  }

                              });
                //get coords from ZielOrt Name
                tx.executeSql("select lat, long as lng from stops where name = '"+zOrt+"';", [],
                              function(tx, res) {
                                  if(res.rows.length){
                                      ziel.lat=res.rows.item(0).lat;
                                      ziel.lng=res.rows.item(0).lng;
                                  }

                              });
                //get Lines from Start to Destiantion
                tx.executeSql("Select lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = '"+sOrt+"' intersect Select lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId = lines.id and stops.name = '"+zOrt+"' order by lineId;", [], function(tx, res)
                              {
                                  length = res.rows.length;
                                  j=0;

                                  if(length===0){
                                      self.setNeumarkt(true);
                                      console.log("verbindung über neumarkt:"+self.getNeumarkt());
                                      dataBaseActionUmstiegAmNeumarkt(sOrt,zOrt);

                                  }else{
                                      for(i =0; i<length;i++){
                                          lines[j++] = res.rows.item(i).lineId;
                                      }
                                      self.setNeumarkt(false);
                                  }
                              },function(){console.log("errror mit Lines");});

                tx.executeSql("Select direction1 as direction, lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = '"+sOrt+"' intersect Select direction1 as direction, lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId = lines.id and stops.name = '"+zOrt+"' order by lineId;", [], function(tx, res)
                              {
                                  length = res.rows.length;
                                  j=0;

                                  for( i =0; i<length;i++){
                                      direction1[j++] = res.rows.item(i).direction;
                                  }


                              },function(){console.log("errror mit dir1");});
                tx.executeSql("Select direction2 as direction, lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = '"+sOrt+"' intersect Select direction2 as direction, lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId = lines.id and stops.name = '"+zOrt+"' order by lineId;", [], function(tx, res)
                              {
                                  length = res.rows.length;
                                  j=0;

                                  for( i =0; i<length;i++){
                                      direction2[j++] = res.rows.item(i).direction;
                                  }


                              },function(){console.log("errror mit dir2");});
                tx.executeSql("select name, lat, long as lng, lineId, endstation1 From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.id in (Select endstation1 From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = '"+sOrt+"' intersect Select endstation1 From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = '"+zOrt+"') and lineId in (Select lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = '"+sOrt+"' intersect Select lineId From stops, connections, lines Where stops.id = connections.stopId and connections.lineId=lines.id and stops.name = '"+zOrt+"' order by lineId) order by lineId;", [], function(tx, res)
                              {
                                  length = res.rows.length;
                                  j=0;
                                  for( i =0; i<length;i++){
                                      var innerArray =[];

                                      innerArray[0] = res.rows.item(i).name;
                                      innerArray[1] = res.rows.item(i).lat;
                                      innerArray[2] = res.rows.item(i).lng;
                                      innerArray[3] = res.rows.item(i).lineId;
                                      endstation1[j++] = innerArray;

                                      console.log("Monsterabfrage: "+endstation1[j-1][0]+" "+endstation1[j-1][1]+" "+endstation1[j-1][2]+" "+endstation1[j-1][3]);
                                  }

                              },function(){console.log("errror mit monsterabfraage");});


            }, function(e) {
                console.log("ERROR: " + e.message);
            },function(){
                var entfernung1;
                var entfernung2;
                var tmpDirection= [];
                console.log("transaction Succesfull"+" start.lat "+start.lat+" ziel.lat "+ziel.lat+" Lines [0] "+lines[0]+" direction1[0] "+
                            direction1[0]+" direction2[0] "+direction2[0]+" Endstation1[0] "+endstation1[0][0]);
                if(!self.getNeumarkt()){
                    var length=lines.length;
                    for(var i =0;i<length;i++){
                        entfernung1 = self.entfernung(start,{lat:endstation1[i][1],lng:endstation1[i][2]});
                        console.log("Entfernung von Startort: "+sOrt+" nach "+endstation1[i][0]+"="+entfernung1);
                        entfernung2 = self.entfernung(ziel,{lat:endstation1[i][1],lng:endstation1[i][2]});
                        console.log("Entfernung von Zielort: "+zOrt+" nach "+endstation1[i][0]+"="+entfernung2);

                        if(entfernung1>entfernung2){
                            tmpDirection[i]=direction1[i];
                            console.log("e>e2 lineId: "+lines[i]+"nach"+tmpDirection[i]);

                        }else{
                            tmpDirection[i]=direction2[i];
                            console.log("e<e2 lineId: "+lines[i]+"nach"+tmpDirection[i]);

                        }
                    }
                }

            });

        }

    },

    getLines: function(data) {
        /*var len = data.length;
        var content = '';
        content += '<div class="busline">';

        for(var i=0;i<len;i++){
            content += '<a href="#">';
            content += data[i]['LineId'];
            content += '</a>';

        }

        content += '</div>';

        return content;*/
    },

    launch: function() {

        Ext.getStore('stops').load();
        console.log("Store Stops wurde geladen.");
        this.dbcopy();




        var db = window.sqlitePlugin.openDatabase("vosnavigator.db");
        this.setDb(db);


        console.log("launcher Fahrplaner");
    },

    dbcopy: function() {
           window.plugins.sqlDB.remove("vosnavigator.db",function(){
                console.log("db wurde erfolgreich entfernt");},
                function(e){
                    console.log("Error Code = "+JSON.stringify(e));
                });

            window.plugins.sqlDB.copy("vosnavigator.db",function(){
                console.log("db wurde erfolgreich kopiert");},
                function(e){
                 //db already exists or problem in copying the db file. Check the Log.
                console.log("Error Code = "+JSON.stringify(e));
                //e.code = 516 => if db exists
                });

    },

    entfernung: function(startOrt, zielOrt) {

        var distance = 0.0;
        var deltaX = 71.5 * (startOrt.lng-zielOrt.lng);
        var deltaY = 111.3 * (startOrt.lat-zielOrt.lat);
        if(deltaX!==0||deltaY!==0){
        distance = Math.sqrt(deltaX*deltaX+deltaY*deltaY)*1000;
        }

        return distance;
    }

});