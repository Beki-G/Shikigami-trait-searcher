let charactersList = document.getElementById("favoritesListed");
let profileDiv = document.getElementById("characterProfiles");
let favortiesDiv = document.querySelector("#favoritesDiv");

if(document.URL.includes("favorites.html")){
    renderFavoriteCharacterList();

    favortiesDiv.addEventListener("click", function(event){
        let targetId = event.target.id;

        if (targetId=== "clearFavorites"){
           localStorage.removeItem("charaFavorites"); 
           location.reload();
        }
    })

};

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

function renderFavoriteCharacterList(){
    let characters = getFavortiesLocalStorage();

    if(characters === null){
        charactersList.textContent = "Your favorites will appear here"
    }else{
        let button = document.createElement("button");
        button.textContent = "Clear Favorites";
        button.setAttribute("id", "clearFavorites");
        favortiesDiv.appendChild(button);



        characters.forEach(element=>{
            let liEl = document.createElement("li");
            liEl.textContent= formatStr(element.name);
            liEl.setAttribute("style", "list-style: none;")
            charactersList.appendChild(liEl);
        })

        getCharacterProfiles(characters);
    }
}

function isLocalStorage(){
    if("charaFavorites" in localStorage){
        return true;
    }
    return false
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

function removeCharacterLocalStorage(character){
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

}

function getCharacterProfiles(arr){
    let favoriteProfiles = [];

    shikiData.forEach(profile =>{
        arr.forEach(character => {
            if(profile.shiki_name === character.name){
                favoriteProfiles.push(profile)
            }
        })
    })

    favoriteProfiles.forEach(character =>{
        renderCharacterProfile(character)
    })
}

function renderCharacterProfile(charaObj){
    let charaName = formatStr(charaObj.shiki_name)
    let charaArr = shikiFilterArr(charaObj)

    let cardEl = document.createElement("div");
    cardEl.classList.add("card");
    let cardBodyEl = document.createElement("div");
    cardBodyEl.classList.add("card-body");
    let nameEl = document.createElement("h5");
    nameEl.classList.add("card-title");
    nameEl.textContent = charaName;
    let ulEl= document.createElement("ul");

    charaArr.forEach(ability =>{
        let liEl = document.createElement("li");
        liEl.textContent = formatStr(ability);
        ulEl.appendChild(liEl)
    })

    cardBodyEl.appendChild(nameEl);
    cardBodyEl.appendChild(ulEl);    
    cardEl.appendChild(cardBodyEl);
    profileDiv.appendChild(cardEl);

}
