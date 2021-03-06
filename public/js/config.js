/**.
 * User: Matthieu Holzer
 * Date: 08.09.12
 * Time: 14:08
 */
define(function () {
    return {

        'DEBUG' : true,

        'API_HOST' : '192.168.178.34',
        'API_PORT' : 80,

        'WEBSOCKET_HOST' : '192.168.178.34',
        'WEBSOCKET_PORT' : 3000,

        'UPLOADER_CHUNK_SIZE'            : 1048576, //1MB
        'UPLOADER_SUPPORTED_VIDEO_TYPES' : ['ogg', 'mp4', 'webm', 'avi', 'flv', 'mpeg', 'mpg', 'mkv', 'mov'],
        'UPLOADER_SUPPORTED_AUDIO_TYPES' : ['ogg', 'mp4', 'mp3', 'mp2', 'mpa', 'flac', 'opus'],
        'UPLOADER_SUPPORTED_IMAGE_TYPES' : ['jpeg', 'jpg', 'png'],

        'MEDIA_METADATA_ANALYZE_MAX_TIMEOUT' : 2000, //2s
        'MEDIA_NEEDED_FORMATS'               : {
            'video' : ['webm', 'ogg', 'mp4'],
            'audio' : ['mp3', 'ogg'],
            'image' : ['jpeg']
        },

        'GUI_MIN_WINDOW_WIDTH'    : 800,
        'GUI_MIN_WINDOW_HEIGHT'   : 500,
        'GUI_MAX_FILENAME_LENGTH' : 35,

        GUI_TIMELINE_PIXEL_PER_FRAME : 3
    };
});