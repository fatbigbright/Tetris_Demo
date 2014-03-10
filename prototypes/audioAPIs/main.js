window.onload = function(){
    var music = document.querySelector('#music');
    var list = document.querySelector('.list');
    var listedFiles = {};
    var selectedFile = null;
    list.addEventListener('dragover', function(e){
        e.preventDefault();
    });

    list.addEventListener('drop', function(e){
        e.stopPropagation();
        e.preventDefault();

        var fileList = e.dataTransfer.files;

        if(!fileList) return;

        if(fileList.length <= 0) return;

        listedFiles[fileList[0].name] = fileList[0];

        var newMusicNode = document.createElement('div');
        newMusicNode.innerText = fileList[0].name;
        list.appendChild(newMusicNode);
        newMusicNode.onclick = function(){
            if(selectedFile != null){
                selectedFile.className = "unSelectedMusic";
            }
            selectedFile = this;
            this.className = "selectedMusic";
        };

        newMusicNode.ondblclick = function(){
            if(listedFiles[this.innerText]){
                var fileReader = new FileReader();
                fileReader.onload = function(e){
                    music.src = e.target.result;
                    music.play();
                };
                fileReader.readAsDataURL(listedFiles[this.innerText]);
            }
        };

        /*
        var fileReader = new FileReader();
        fileReader.onload = function(e){
            music.src = e.target.result;
            music.play();
        };
        fileReader.readAsDataURL(fileList[0]);
        */
    });
};
