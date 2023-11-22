//basic map stuff
let config = {
    minZoom: 7,
    maxZoom: 18,
};
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5,
    zoomDelta: 0.25,
    zoomSnap: 0
});
var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svgElement.setAttribute('viewBox', '0 0 400 400');
svgElement.innerHTML =
    '<style type="text/css">' +
    '.st1{fill:#EFDAAC }' +
    '</style>' +
    '<rect x="1" y="0" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="1" width="1" height="400" class="st1"/>' +
    '<rect x="399" y="0" width="1" height="400" class="st1"/>' +
    '<rect x="0" y="399" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="10" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="20" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="30" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="40" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="50" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="60" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="70" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="80" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="90" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="100" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="110" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="120" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="130" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="140" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="150" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="160" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="170" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="180" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="190" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="200" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="210" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="220" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="230" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="240" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="250" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="260" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="270" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="280" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="290" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="300" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="310" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="320" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="330" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="340" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="350" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="360" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="370" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="380" width="400" height="0.5" class="st1"/>' +
    '<rect x="0" y="390" width="400" height="0.5" class="st1"/>' +

    '<rect y="0" x="10" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="20" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="30" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="40" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="50" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="60" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="70" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="80" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="90" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="100" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="110" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="120" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="130" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="140" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="150" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="160" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="170" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="180" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="190" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="200" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="210" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="220" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="230" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="240" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="250" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="260" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="270" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="280" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="290" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="300" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="310" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="320" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="330" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="340" width="0.5" height="400" class="st1"/>' +
    '<rect y="0" x="350" width="0.5" height="400"  class="st1"/>' +
    '<rect y="0" x="360" width="0.5" height="400"  class="st1"/>' +
    '<rect y="0" x="370" width="0.5" height="400"  class="st1"/>' +
    '<rect y="0" x="380" width="0.5" height="400"  class="st1"/>' +
    '<rect y="0" x="390" width="0.5" height="400" class="st1"/>' +
    '<rect x="200" y="0" width="0.5" height="400" class="st1"/>';


var bounds = [
    [0, 0],
    [1000, 1000]
];
var boundsT = [
    [430, 0],
    [1000, 553]
];

var image = L.imageOverlay('icons/Background low contrast.jpg', bounds).addTo(map);
var image = L.imageOverlay('icons/Trimisteguros zone of alineation/Trimisteguros zone.png', boundsT).addTo(map);
var image = L.imageOverlay('icons/Polivian Yellow Delta outer frame.png', bounds).addTo(map);
var svgOverlay = L.svgOverlay(svgElement, bounds, {
    opacity: 0.8,
    interactive: true
}).addTo(map);

map.fitBounds(bounds);

//disables panning outside map
map.on('drag', function () {
    map.panInsideBounds(bounds, {animate: false});
});


//function that interacts with html elements to change
function myFunction(name) {
    document.getElementById("info").innerHTML = name;
}

//custom icons for marker

//classes, basically blueprints so you dont have to type everytime the size and just need
// to specify the link
var pointofInterestIcon = L.Icon.extend({
    options: {
        iconSize: [25, 25],
    }
});
var smallIcon = L.Icon.extend({
    options: {
        iconSize: [80, 80],
    }
});
var mediumIcon = L.Icon.extend({
    options: {
        iconSize: [90, 90],
    }
});
var LargerIcon = L.Icon.extend({
    options: {
        iconSize: [140, 140],
    }
});

var evenLargerIcon = L.Icon.extend({
    options: {
        iconSize: [180, 180],
    }
});


var pointOfInterest = new pointofInterestIcon({iconUrl: 'icons/poi.svg'})

var achachi = new mediumIcon({iconUrl: 'icons/Town icons/ACHACACHI.svg'})
var apolo = new mediumIcon({iconUrl: 'icons/Town icons/APOLO.svg'})
var consata = new mediumIcon({iconUrl: 'icons/Town icons/CONSATA.svg'})
var laja = new mediumIcon({iconUrl: 'icons/Town icons/LAJA.svg'})
var mecapaca = new mediumIcon({iconUrl: 'icons/Town icons/MECAPACA.svg'})
var palca = new mediumIcon({iconUrl: 'icons/Town icons/PALCA.svg'})
var pongo = new mediumIcon({iconUrl: 'icons/Town icons/PONGO.svg'})
var tipuani = new mediumIcon({iconUrl: 'icons/Town icons/TIPUANI.svg'})
var viacha = new mediumIcon({iconUrl: 'icons/Town icons/VIACHA.svg'})

var busStop = new mediumIcon({iconUrl: 'icons/Static points of interest/BUS STOP.svg'})
var mines = new mediumIcon({iconUrl: 'icons/Static points of interest/MINES.svg'})
var launchSite = new mediumIcon({iconUrl: 'icons/Static points of interest/LAUNCH SITE.svg'})
var moonValley = new mediumIcon({iconUrl: 'icons/Static points of interest/MOON VALLEY.svg'})
var troutFarm = new mediumIcon({iconUrl: 'icons/Static points of interest/TROUT FARM.svg'})

var armoredOpsFB = new LargerIcon({iconUrl: 'icons/Bases/ARMORED OPS FORWARD BASE.svg'})
var occultOpsHC = new LargerIcon({iconUrl: 'icons/Bases/OCCLT OPS HIDDEN CELL.svg'})
var polivian301HQ = new LargerIcon({iconUrl: 'icons/Bases/POLIVIAN 301 HQ.svg'})

var unknown = new smallIcon({iconUrl: 'icons/Characters/UNKNOWN.svg'})
var aurora = new smallIcon({iconUrl: 'icons/Characters/AURORA.svg'})
var butcher = new smallIcon({iconUrl: 'icons/Characters/BUTCHER.svg'})
var coco = new smallIcon({iconUrl: 'icons/Characters/COCO.svg'})
var fulgora = new smallIcon({iconUrl: 'icons/Characters/FULGORA.svg'})
var gungirl = new smallIcon({iconUrl: 'icons/Characters/GUN GIRL.svg'})
var helmetgirl = new smallIcon({iconUrl: 'icons/Characters/HELMET GIRL.svg'})
var knifegirl = new smallIcon({iconUrl: 'icons/Characters/KNIFE GIRL.svg'})
var lumina = new smallIcon({iconUrl: 'icons/Characters/LUMINA.svg'})
var meteora = new smallIcon({iconUrl: 'icons/Characters/METEORA.svg'})
var panzerfaustina = new smallIcon({iconUrl: 'icons/Characters/PANZERFAUSTINA.svg'})
var romina = new smallIcon({iconUrl: 'icons/Characters/ROMINA.svg'})


var mountainNorth = new evenLargerIcon({iconUrl: 'icons/Biomes/MOUNTAIN NORTH.svg'})
var plateauWall = new evenLargerIcon({iconUrl: 'icons/Biomes/PLATEAU WALL.svg'})
var polivianDesert = new evenLargerIcon({iconUrl: 'icons/Biomes/POLIVIAN DESERT.svg'})
var trimisteguros = new evenLargerIcon({iconUrl: 'icons/Biomes/TRIMISTEGUROS.svg'})
var tropicalSouth = new evenLargerIcon({iconUrl: 'icons/Biomes/TROPICAL SOUTH.svg'})


//markers
var unknownMarker = L.marker([721, 274], {icon: unknown}).addTo(map);
var unknownMarker1 = L.marker([869, 327], {icon: unknown}).addTo(map);
var unknownMarker2 = L.marker([712, 387], {icon: unknown}).addTo(map);
var unknownMarker3 = L.marker([618, 271], {icon: unknown}).addTo(map);
var auroraMarker = L.marker([232, 588], {icon: aurora}).addTo(map);
var butcherMarker = L.marker([315, 370], {icon: butcher}).addTo(map);
var cocoMarker = L.marker([153, 400], {icon: coco}).addTo(map);
var fulgoraMarker = L.marker([513, 732], {icon: fulgora}).addTo(map);
var gungirlMarker = L.marker([312, 770], {icon: gungirl}).addTo(map);
var helmetgirlMarker = L.marker([312, 840], {icon: helmetgirl}).addTo(map);
var knifegirlMarker = L.marker([312, 710], {icon: knifegirl}).addTo(map);
var luminaMarker = L.marker([450, 187], {icon: lumina}).addTo(map);
var meteoraMarker = L.marker([900, 770], {icon: meteora}).addTo(map);
var panzerfaustinaMarker = L.marker([751, 729], {icon: panzerfaustina}).addTo(map);
var rominaMarker = L.marker([262, 588], {icon: romina}).addTo(map);

var achachiMarker = L.marker([750, 540], {icon: achachi}).addTo(map);
var viachaMarker = L.marker([810, 710], {icon: viacha}).addTo(map);
var apoloMarker = L.marker([120, 400], {icon: apolo}).addTo(map);
var consataMarker = L.marker([280, 370], {icon: consata}).addTo(map);
var lajaMarker = L.marker([395, 601], {icon: laja}).addTo(map);
var mecapacaMarker = L.marker([345, 740], {icon: mecapaca}).addTo(map);
var palcaMarker = L.marker([450, 840], {icon: palca}).addTo(map);
var pongoMarker = L.marker([330, 580], {icon: pongo}).addTo(map);
var tipuaniMarker = L.marker([60, 250], {icon: tipuani}).addTo(map);

var busStopMarker = L.marker([100, 940], {icon: busStop}).addTo(map);
var minesMarker = L.marker([160, 75], {icon: mines}).addTo(map);
var launchSiteMarker = L.marker([750, 270], {icon: launchSite}).addTo(map);
var moonValleyMarker = L.marker([650, 850], {icon: moonValley}).addTo(map);
var troutFarmMarker = L.marker([300, 610], {icon: troutFarm}).addTo(map);

var armoredOpsFBMarker = L.marker([900, 880], {icon: armoredOpsFB}).addTo(map);
var occultOpsHCMarker = L.marker([480, 760], {icon: occultOpsHC}).addTo(map);
var polivian301HQMarker = L.marker([200, 600], {icon: polivian301HQ}).addTo(map);

var mountainNorthMarker = L.marker([840, 750], {icon: mountainNorth}).addTo(map);
var plateauWallMarker = L.marker([550, 450], {icon: plateauWall}).addTo(map);
var polivianDesertMarker = L.marker([600, 700], {icon: polivianDesert}).addTo(map);
var trimistegurosMarker = L.marker([810, 100], {icon: trimisteguros}).addTo(map);
var tropicalSouthMarker = L.marker([150, 300], {icon: tropicalSouth}).addTo(map);

//points of interest to be added in the toggable section
var
    poi1 = L.marker([371, 722], {icon: pointOfInterest});
poi2 = L.marker([783, 720], {icon: pointOfInterest});
poi3 = L.marker([517, 681], {icon: pointOfInterest});
poi4 = L.marker([179, 588], {icon: pointOfInterest});
poi5 = L.marker([425, 585], {icon: pointOfInterest});
poi6 = L.marker([769, 540], {icon: pointOfInterest});
poi7 = L.marker([97, 408], {icon: pointOfInterest});
poi8 = L.marker([162, 556], {icon: pointOfInterest});
poi9 = L.marker([218, 525], {icon: pointOfInterest});
poi10a = L.marker([635, 676], {icon: pointOfInterest});
poi10b = L.marker([946, 704], {icon: pointOfInterest});
poi10c = L.marker([64, 149], {icon: pointOfInterest});
poi11 = L.marker([84, 237], {icon: pointOfInterest});
poi12 = L.marker([920, 738], {icon: pointOfInterest});
poi13 = L.marker([625, 823], {icon: pointOfInterest});
poi14 = L.marker([375, 685], {icon: pointOfInterest});
poi15 = L.marker([414, 818], {icon: pointOfInterest});
poi16 = L.marker([850, 814], {icon: pointOfInterest});
poi17 = L.marker([293, 425], {icon: pointOfInterest});
poi18 = L.marker([90, 369], {icon: pointOfInterest});
poi19 = L.marker([249, 353], {icon: pointOfInterest});
poi20 = L.marker([783, 669], {icon: pointOfInterest});
poi21 = L.marker([43, 323], {icon: pointOfInterest});
poi22 = L.marker([882, 861], {icon: pointOfInterest});
poi23 = L.marker([864, 640], {icon: pointOfInterest});
poi24 = L.marker([450, 730], {icon: pointOfInterest});
poi25 = L.marker([172, 517], {icon: pointOfInterest});
poi26 = L.marker([419, 565], {icon: pointOfInterest});
poi27 = L.marker([820, 594], {icon: pointOfInterest});
poi28 = L.marker([784, 228], {icon: pointOfInterest});
poi29 = L.marker([349, 669], {icon: pointOfInterest});
poi30 = L.marker([600, 273], {icon: pointOfInterest});
poi31 = L.marker([827, 651], {icon: pointOfInterest});
poi32 = L.marker([920, 685], {icon: pointOfInterest});
poi33 = L.marker([875, 703], {icon: pointOfInterest});
poi34 = L.marker([94, 125], {icon: pointOfInterest});
poi35 = L.marker([350, 566], {icon: pointOfInterest});
poi36 = L.marker([343, 378], {icon: pointOfInterest});
poi37 = L.marker([289, 540], {icon: pointOfInterest});
poi38 = L.marker([67, 407], {icon: pointOfInterest});
poi39 = L.marker([386, 797], {icon: pointOfInterest});
poi40 = L.marker([353, 338], {icon: pointOfInterest});
poi41 = L.marker([762, 630], {icon: pointOfInterest});
poi42 = L.marker([416, 624], {icon: pointOfInterest});
poi43 = L.marker([611, 357], {icon: pointOfInterest});
poi44 = L.marker([366, 611], {icon: pointOfInterest});
poi45 = L.marker([897, 330], {icon: pointOfInterest});
poi46 = L.marker([664, 451], {icon: pointOfInterest});
poi47 = L.marker([471, 827], {icon: pointOfInterest});
poi48 = L.marker([39, 217], {icon: pointOfInterest});
poi49 = L.marker([728, 230], {icon: pointOfInterest});
poi50 = L.marker([311, 663], {icon: pointOfInterest});
poi51 = L.marker([398, 550], {icon: pointOfInterest});
poi52 = L.marker([376, 549], {icon: pointOfInterest});
poi53 = L.marker([420, 780], {icon: pointOfInterest});
poi54 = L.marker([330, 655], {icon: pointOfInterest});
poi55 = L.marker([387, 526], {icon: pointOfInterest});


//adds group of toggable markers to map

var spoi = L.layerGroup([poi1, poi2, poi3, poi4, poi5, poi6, poi7, poi8, poi9,
    poi10a,poi10b,poi10c, poi11, poi12, poi13, poi14, poi15, poi16, poi17, poi18, poi19,
    poi20, poi21, poi22, poi23, poi24, poi25, poi26, poi27, poi28, poi29,
    poi30, poi31, poi32, poi33, poi34, poi35, poi36, poi37, poi38, poi39,
    poi40, poi41, poi42, poi43, poi44, poi45, poi46, poi47, poi48, poi49,
    poi50, poi51, poi52, poi53, poi54, poi55
])
var overlayMaps = {
    "Point Of Interest": spoi
};
var layerControl = L.control.layers(null, overlayMaps).addTo(map);

//adds function on click of a marker

// unknownMarker.on('click', function(e) {
//     window.open("https://www.pixiv.net/en/artworks/109816309 ");
// });
poi1.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/90897369");
});
poi2.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/94067280");
});
poi3.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/94334830");
});
poi4.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/94931286");
});
poi5.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/95401808");
});
poi6.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/96801283");
});
poi7.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/97268711");
});
poi8.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/98245390");
});
poi9.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/98426940");
});
poi10a.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/98750477");
});
poi10b.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/98750477");
});
poi10c.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/98750477");
});
poi11.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/98908143");
});
poi12.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/98993079");
});
poi13.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/99104975");
});
poi14.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/99734836");
});
poi15.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/100221193");
});
poi16.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/101196014");
});
poi17.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/101359319");
});
poi18.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/101513127");
});
poi19.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/101669873");
});
poi20.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/101789345");
});
poi21.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/102241527");
});
poi22.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/102381776");
});
poi23.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/102447176");
});
poi24.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/102603375");
});
poi25.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/102684340");
});
poi26.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/102859275");
});
poi27.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/102913269");
});
poi28.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/103216459");
});
poi29.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/99262205");
});
poi30.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/103408689");
});
poi31.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/103775532");
});
poi32.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/104191274");
});
poi33.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/104280027");
});
poi34.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/104465643");
});
poi35.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/105089134");
});
poi36.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/105564348");
});
poi37.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/106307829");
});
poi38.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/106437090");
});
poi39.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/106870694");
});
poi40.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/107276273");
});
poi41.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/107522953");
});
poi42.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/107681496");
});
poi43.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/107761529");
});
poi44.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/103841371");
});
poi45.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/107977511 ");
});
poi46.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/108211755");
});
poi47.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/108358431");
});
poi48.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/109070273");
});
poi49.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/109816309");
});
poi50.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/112564279");
});
poi51.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/112741841");
});
poi52.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/112848556");
});
poi53.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/113083873");
});
poi54.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/113202790");
});
poi55.on('click', function (e) {
    window.open("https://www.pixiv.net/en/artworks/113388424");
});


// function that reveals coordinate of where you clicked,
// useful for not going insane when wanting to add a new character specifically somewhere
// remember to comment it back when you finish so users cant access it

// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }
//
// map.on('click', onMapClick);