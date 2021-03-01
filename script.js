const pics = document.getElementById('pics');
const change = document.getElementById('changeTheme');
const about = document.getElementById('about');
const dev = document.getElementById('dev');
const devlink = document.getElementById('devlink');
const instalink = document.getElementById('instalink');
const mute = document.getElementById('mute');
const singlePhoto = document.getElementById('singlePhoto');
const picsRange = 10;



(function fillPicsBlock(){
    for(let i = 0; i < picsRange; i++){
        let img = document.createElement('img');
        img.src = `img/${i}.jpg`;
        img.className = 'pic'; 
        img.id = String(i);
        img.addEventListener('click', openPic);                         
        pics.appendChild(img);
    }    

    function openPic(){        
        mute.style.visibility = 'visible';
        singlePhoto.firstElementChild.src = 'img/' + this.id + '.jpg';                
        singlePhoto.style.display = 'block';
        singlePhoto.style.zIndex = '2';        
        singlePhoto.style.position = 'fixed';
        singlePhoto.style.top = '4%';
        singlePhoto.style.left = (document.documentElement.clientWidth - singlePhoto.width) / 2 + 'px';
        function closePic(){
            if(this.id !== 'singlePhoto'){
                singlePhoto.style.display = 'none';
                mute.style.visibility = 'hidden';
            }
        }
        mute.addEventListener('click', closePic);
    }    
    
})();

function changeTheme(){
    if(this.innerHTML == 'Light Theme'){
        this.innerHTML = 'Dark Theme';
        this.className = 'change_theme_white';
        document.body.style.backgroundColor = 'white';
        about.style.color = 'black';
        dev.style.color = 'black';
        devlink.style.color = 'blue';
        instalink.style.color = 'blue';
    }else{
        this.innerHTML = 'Light Theme';
        this.className = 'change_theme_dark';
        document.body.style.backgroundColor = '#171717';
        about.style.color = 'grey';
        dev.style.color = 'grey';
        devlink.style.color = 'white';
        instalink.style.color = 'white';

    }
}

change.addEventListener('click', changeTheme);






