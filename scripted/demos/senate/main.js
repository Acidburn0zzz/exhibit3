define('gmaps', ['async!https://maps.googleapis.com/maps/api/js?v=3&sensor=false'],
    function() {
        return window.google;
    }
);

require(["../api/configs/dev-config.js"], function() {
    require(["lib/jquery", "exhibit", "ext/map/map-extension"], function($, Exhibit, MapExtension) {
        window.Exhibit = Exhibit;
        MapExtension.register(Exhibit);
        $(document).trigger("scriptsLoaded.exhibit");
    });
});
