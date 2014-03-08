window.onload = function(){
    var music = document.querySelector('#music');
    var list = document.querySelector('.list');
    list.addEventListener('dragover', function(e){
        e.preventDefault();
    });

    list.addEventListener('drop', function(e){
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
