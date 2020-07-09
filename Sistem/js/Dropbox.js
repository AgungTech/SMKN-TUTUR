    // Sistem Cross Platform
    window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
    window.BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder;
    window.URL = window.URL || window.webkitURL;
    
function createDropHandler()
    {
        var filedb = new FileDropbox();
        
        filedb.defineDropHandler(this.elementContext);
        filedb.eventHost = this;
        
        filedb.onFinish = function()
        {
            $('#app-progress')[0].style['width'] = '50%';
            activeAudioLayerControl = this.eventHost.elementContext;
            this.eventHost.audioPlayback.audioContext.decodeAudioData(this.resultArrayBuffer, this.eventHost.decodeAudioFinished, this.eventHost.decodeAudioFailed);  
        }
        
        filedb.onFail = function(e)
        {
            var msg = '';
          
          
            switch (e.target.error.code) {
              case FileError.QUOTA_EXCEEDED_ERR:
                msg = 'QUOTA_EXCEEDED_ERR';
                break;
              case FileError.NOT_FOUND_ERR:
                msg = 'NOT_FOUND_ERR';
                break;
              case FileError.SECURITY_ERR:
                msg = 'SECURITY_ERR';
                break;
              case FileError.INVALID_MODIFICATION_ERR:
                msg = 'INVALID_MODIFICATION_ERR';
                break;
              case FileError.INVALID_STATE_ERR:
                msg = 'INVALID_STATE_ERR';
                break;
              default:
                msg = 'Unknown Error ' + e.code;
                break;
            };
          
            console.log('Error: ' + msg);
        }  
    };

function Drobbox() {

    this.result = null;
    this.resultArrayBuffer = null;
    this.onFinish = null;
    this.onFail = null;

    this.defineDropHandler = function defineDropHandler(dropContainerElement)
    {

        dropContainerElement.addEventListener("dragenter", this.skipEventHandler, false);
        dropContainerElement.addEventListener("dragexit", this.skipEventHandler, false);
        dropContainerElement.addEventListener("dragover", this.skipEventHandler, false);
        dropContainerElement.addEventListener("drop", this.dropHandler, false);
        dropContainerElement.masterObj = this; // need to define this controller for further events
    };
    
    this.skipEventHandler = function skipEventHandler(evt)
    {
        evt.stopPropagation();
        evt.preventDefault();
    };
    
    this.dropHandler = function dropHandler(evt)
    {
        evt.stopPropagation();
        evt.preventDefault();
        
        // get list of dropped files 
        var files = evt.dataTransfer.files;
        // amount of dropped files
        var count = files.length;
        
        // One file at least neccessary to continue
        if (count > 0)
        {
            handleFiles(files, evt.currentTarget.masterObj);
        }
    };
    
    function handleFiles(files, masterObj)
    {
        // handle only the first file (no multifile support) 
        var file = files[0];
        // create the reader to access the local file (note: browser have different security restrictions) 
        var reader = new FileReader();
        
        // init the reader event handlers
        reader.onload = function (evt)
        {
            var arrayBuffer = evt.target.result;
            
            masterObj.resultArrayBuffer = arrayBuffer;
            // write into the result array
            masterObj.result = new Uint8Array(arrayBuffer);
            
            // callback
            if (masterObj.onFinish !== null)
            {
                masterObj.onFinish();
            }
        }; // event handle on success
        
        reader.onerror = masterObj.onFail; // event handle on failure
        
        // load the file as array buffer
        reader.readAsArrayBuffer(file);
    }
    
    
};