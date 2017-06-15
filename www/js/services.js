angular.module('starter.services', [])

    .factory('PlaylistsService', function($q) {

        var playlists = [
                            {"title":"Strength Training Playlist","image":"strength.jpg","id":1,"length":"30 minutes","songs":["Rihanna - Diamonds (Dave Aude Remix)","Alicia Keys - New Day","Drake - Forever","Justin Bieber - As Long As You Love Me","Future - Turn Out The Lights","Ne-Yo - Let Me Love"]},
                            {"title":"Walking Playlist","image":"walking.jpg","id":2,"length":"35 minutes","songs":["Coldplay - Lost+ (With Jay-Z)","Ellie Goulding - Anything Could Happen","Kelly Clarkson - Stronger","Passion Pit - Dreams","The Killers - Spaceman ","Metro Station - Shake It"]},
                            {"title":"Running Playlist","image":"running.jpg","id":3,"length":"33 minutes","songs":["David Guetta - I Can Only Imagine","Journey - Any Way You Want It ","Train - 50 Ways to Say Goodbye","The Cure - In Between Days","Kayne West - Power","Wiz Khalifa - Black and Yellow"]},
                            {"title":"Biking Playlist","image":"biking.jpg","id":4,"length":"30 minutes","songs":["Madonna & The Eagles (Robin Skouteris mashup)","Madonna - Like a Prayer","Britney Spears (Alex Suarez Club Remix)","Brand-X - 99 Problems Can't Stop","Cooler Rock 'n' Roll - DJ Schmolli","Skrillex & The Doors (Zedd Remix)"]},
                            {"title":"Yoga Playlist","image":"yoga.jpg","id":5,"length":"35 minutes","songs":["Madonna - Drowned World / Substitute For Love","Anthony Hamilton & Elayna Boynton - Freedom","Alex Clare - When Doves Cry","Elie Goulding - Anything Could Happen","Florence and the Machine - Shake It Out","SMASH Cast Version - Brighter Than the Sun"]},
                            {"title":"Travelling Playlist","image":"travelling.jpg","id":6,"length":"35 minutes","songs":["Elie Goulding - Anything Could Happen","Kayne West - Power","Alex Clare - When Doves Cry","The Killers - Spaceman ","Future - Turn Out The Lights","Ne-Yo - Let Me Love","Wiz Khalifa - Black and Yellow"]},
                            {"title":"Hiking Playlist","image":"hiking.jpg","id":6,"length":"35 minutes","songs":["Elie Goulding - Anything Could Happen","Kayne West - Power","Alex Clare - When Doves Cry","The Killers - Spaceman ","Future - Turn Out The Lights","Ne-Yo - Let Me Love","Wiz Khalifa - Black and Yellow"]}
                        ];
 
        return {
            findInitial: function() {
                var deferred = $q.defer();
                deferred.resolve(playlists.slice(0, 3));
                return deferred.promise;
            },
            findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(playlists);
                return deferred.promise;
            },

            findById: function(playlistId) {
                var deferred = $q.defer();
                deferred.resolve(playlists[playlistId-1]);
                return deferred.promise;
            },
            findByName: function(searchKey) {
                var deferred = $q.defer();
                var results = playlists.filter(function(element) {
                    return element.title.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
                deferred.resolve(results);
                return deferred.promise;
            },

        }
     });