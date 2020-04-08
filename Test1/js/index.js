$('#zones').click(function() {
    $( "#zonesObj" ).removeClass( "hide" )
    $( "#levelObj" ).addClass( "hide" )
    $( "#roleObj" ).addClass( "hide" )
    $( "#markObj" ).addClass( "hide" )
    $( "#fbObj" ).addClass( "hide" )
});

$('#level').click(function() {
    $( "#zonesObj" ).addClass( "hide" )
    $( "#levelObj" ).removeClass( "hide" )
    $( "#roleObj" ).addClass( "hide" )
    $( "#markObj" ).addClass( "hide" )
    $( "#fbObj" ).addClass( "hide" )
});

$('#role').click(function() {
    $( "#zonesObj" ).addClass( "hide" )
    $( "#levelObj" ).addClass( "hide" )
    $( "#roleObj" ).removeClass( "hide" )
    $( "#markObj" ).addClass( "hide" )
    $( "#fbObj" ).addClass( "hide" )
});

$('#mark').click(function() {
    $( "#zonesObj" ).addClass( "hide" )
    $( "#levelObj" ).addClass( "hide" )
    $( "#roleObj" ).addClass( "hide" )
    $( "#markObj" ).removeClass( "hide" )
    $( "#fbObj" ).addClass( "hide" )
});

$('#feedback').click(function() {
    $( "#zonesObj" ).addClass( "hide" )
    $( "#levelObj" ).addClass( "hide" )
    $( "#roleObj" ).addClass( "hide" )
    $( "#markObj" ).addClass( "hide" )
    $( "#fbObj" ).removeClass( "hide" )
});