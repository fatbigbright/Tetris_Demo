window.onload = function(){
    var box = document.getElementById('box');
    box.addEventListener('dragover', function(e){
        /*cancel the default operation*/
        e.preventDefault();
    });
    box.addEventListener('drop', function(e){
        /*prevent redirecting*/
        e.stopPropagation();
        /*cancel the default operation*/
        e.preventDefault();

        var fileList = e.dataTransfer.files;
        if(!fileList){
            return;
        }

        if(fileList.length > 0){
            var file = fileList[0];
            if(file.size > 1024 * 1024){
                alert('The file is too large, make sure it does not exceed 1024KB.');
                return;
            }

            var filereader = new FileReader();
            filereader.myTarget = document.getElementById('box');
            filereader.onloadend = function(event){
                this.myTarget.value = this.result;
            };
            filereader.readAsText(file);
        }
    }, false);
};
