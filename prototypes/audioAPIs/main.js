window.onload = function(){
    var music = document.getElementById('music');
    music.addEventListener('dragover', function(e){
        e.preventDefault();
    });

    music.addEventListener('drop', function(e){
        e.stopPropagation();
        e.preventDefault();

        var fileList = e.dataTransfer.files;

        if(!fileList) return;

        if(fileList.length <= 0) return;

        var fileReader = new FileReader();
        fileReader.onload = function(e){
            music.src = e.target.result;
            music.play();
        };
        fileReader.readAsDataURL(fileList[0]);
    });
};
