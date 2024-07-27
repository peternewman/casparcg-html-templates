weather = {
}

skyconMap = [ //matches codes from Yahoo weather to Skycons
        Skycons.WIND, //0 tornado
        Skycons.WIND, //1 tropical storm
        Skycons.WIND, //2 hurricane
        Skycons.THUNDER, //3 severe thunderstorms
        Skycons.THUNDER, //4 thunderstorms
        Skycons.RAIN_SNOW, //5 mixed rain and snow
        Skycons.SLEET, //6 mixed rain and sleet
        Skycons.SLEET, //7 mixed snow and sleet
        Skycons.SLEET, //8 freezing drizzle
        Skycons.RAIN, //9 drizzle
        Skycons.SLEET, //10 freezing rain
        Skycons.SHOWERS_DAY, //11 showers
        Skycons.SHOWERS_DAY, //12 showers
        Skycons.SNOW, //13 snow flurries
        Skycons.SNOW, //14 light snow showers
        Skycons.SNOW, //15 blowing snow
        Skycons.SNOW, //16 snow
        Skycons.HAIL, //17 hail
        Skycons.SLEET, //18 sleet
        Skycons.CLOUDY, //19 dust
        Skycons.FOG, //20 foggy

        Skycons.FOG, //21 haze
        Skycons.CLOUDY, //22 smokey
        Skycons.PARTLY_CLOUDY_NIGHT, //23 blustery
        Skycons.WIND, //24 windy
        Skycons.CLOUDY, //25 cold
        Skycons.CLOUDY, //26 cloudy
        Skycons.PARTLY_CLOUDY_NIGHT, //27 mostly cloudy night
        Skycons.CLOUDY, //28 mostly cloudy day
        Skycons.PARTLY_CLOUDY_NIGHT, //29 partly cloudy night
        Skycons.PARTLY_CLOUDY_DAY, //30 partly cloudy day
        Skycons.CLEAR_NIGHT, //31 clear night
        Skycons.CLEAR_DAY, //32 sunny
        Skycons.PARTLY_CLOUDY_DAY, //33 fair night
        Skycons.PARTLY_CLOUDY_DAY, //34 fair day
        Skycons.SLEET, //35 mixed rain and hail
        Skycons.CLEAR_DAY, //36 hot
        Skycons.CLOUDY, //37-39 various forms of Tstorms
        Skycons.CLOUDY,
        Skycons.CLOUDY, //39
        Skycons.SHOWERS_DAY, //40 scattered showers
        Skycons.SNOW, //41 heavy snow
        Skycons.SNOW_SHOWERS_DAY, //42 scattered snow showers
        Skycons.SNOW, //43 heavy snow
        Skycons.PARTLY_CLOUDY_DAY, //44 partly cloudy
        Skycons.THUNDER_RAIN, //45 thundershowers
        Skycons.SNOW_SHOWERS_DAY, //46 snow showers
        Skycons.THUNDER_SHOWERS_DAY //47 isolated thundershowers
    ]

skyconList = [ // Simple list of all Skycons
        Skycons.WIND,
        Skycons.THUNDER,
        Skycons.RAIN_SNOW,
        Skycons.SLEET,
        Skycons.RAIN,
        Skycons.SHOWERS_DAY,
        Skycons.SNOW,
        Skycons.HAIL,
        Skycons.CLOUDY,
        Skycons.FOG,
        Skycons.PARTLY_CLOUDY_NIGHT,
        Skycons.PARTLY_CLOUDY_DAY,
        Skycons.CLEAR_NIGHT,
        Skycons.CLEAR_DAY,
        Skycons.SHOWERS_DAY,
        Skycons.SNOW_SHOWERS_DAY,
        Skycons.THUNDER_RAIN,
        Skycons.THUNDER_SHOWERS_DAY
    ]

function play(arg) {
}

function stop() {
}

function next() {
}

var skycons;
function update(arg) {
    skycons = new Skycons({"monochrome": false});
    skycons.play();
}
