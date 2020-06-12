function isFavoritesLocalStorage(character){
    let favoritesArr = getFavortiesLocalStorage();

    if (favoritesArr !== null){
        for(const favorite in favoritesArr){
            if(favoritesArr[favorite].name === character){
                return true;
            }
        }
    }

    return false;
}

function listCharacterFavorites(){

}

function getFavortiesLocalStorage(){
    if("charaFavorites" in localStorage){
        let jsonstr = localStorage.getItem("charaFavorites");
        let favoritesArr =  JSON.parse(jsonstr);
        return favoritesArr;
    }
    return null;
}

function savesCharacterLocalStorage(character){
    let userFavorites =[]
    let favoriteChara = {name: character};
    let isRepeat= false;

    if("charaFavorites" in localStorage){
        let jsonstr = localStorage.getItem("charaFavorites");
        userFavorites = JSON.parse(jsonstr);

        for(const favorite in userFavorites){
            if (userFavorites[favorite].name === character){
                isRepeat = true;
            }
        }
        if(isRepeat===false){
            userFavorites.push(favoriteChara);
        }

        savesUpdatedArrayLocalStorage(userFavorites);
    }

    if (localStorage.getItem("charaFavorites")===null){
        userFavorites.push(favoriteChara);
        savesUpdatedArrayLocalStorage(userFavorites);
    }
    let fillStar = document.getElementById("starIcon");
    fillStar.setAttribute("style", "color: yellow" );

    console.log(character+" has been saved")
    console.log(userFavorites)
}

function savesUpdatedArrayLocalStorage(arr){
    localStorage.setItem("charaFavorites", JSON.stringify(arr));
}

function removeFavoriteLocalStorage(character){
    let favoritesArr = getFavortiesLocalStorage();
    let index;

    favoritesArr.forEach(element=>{
            if(element.name ===character){
                index = favoritesArr.indexOf(element)
            }
        }
    )

    favoritesArr.splice(index,1);

    savesUpdatedArrayLocalStorage(favoritesArr);

    let unfavorite = document.getElementById("starIcon");
    unfavorite.removeAttribute("style")

    console.log("index is: "+ index)
    console.log(favoritesArr)
    console.log(character +" has been removed")
}

