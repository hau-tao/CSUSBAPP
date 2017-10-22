// camera.js 
// Functions for photobooth that takes a participant's picture before they play the game.

$(document).ready(function() {
    $("#webcam").scriptcam({
        showDebug: false,
        useMicrophone: false,
        showMicrophoneErrors: false,
        onError: onError,
        cornerRadius: 20,
        disableHardwareAcceleration: 1,
        path: '/static/js/camera/',
        onWebcamReady: webcamFound,
        noFlashFound: '<p><a href="http://www.adobe.com/go/getflashplayer">Adobe Flash Player</a> 11.7 or greater is needed to use the webcam.</p>',
        hideMouse: false
    });
});

function webcamFound(cameraNames, camera) {
    $.each(cameraNames, function(index, text) {
        $('#cameraNames').append( $('<option></option>').val(index).html(text) )
    });
    $('#cameraNames').val(camera);
}

function changeCamera() {
    $.scriptcam.changeCamera($('#cameraNames').val());
}

function getSnapshot() {
    alert($.scriptcam.getFrameAsBase64());
}

function base64_toimage() {
    $('#snapshot').attr("src","data:image/png;base64,"+$.scriptcam.getFrameAsBase64());
}

function base64_toimageandfield() {
    $('#snapshot').attr("src","data:image/png;base64,"+$.scriptcam.getFrameAsBase64());
    $('#snapshot-field').val($.scriptcam.getFrameAsBase64());
}
function onError(errorId, errorMsg) { 
    $("#snap_button").attr("disabled", true);
    alert("Error: " + errorMsg);
}
