//query selectors
var div = document.querySelector("#container");
var frag = document.createDocumentFragment();
var select = document.getElementById("initialClick");
var button = document.getElementById("filter");
var result = document.querySelector(".result");
var shikiList = document.querySelector("#shikiList");
var resultsCard = document.querySelector(".results_card")
var shikiCard = document.querySelector(".shiki_card")
var abilityList = document.querySelector("#abiliyList");
var shikiName = document.querySelector(".shikiName");
var tagCard = document.querySelector(".tag_card");
var tagText = document.querySelector(".tagDefinition");
var defHelp = document.querySelector(".defHelp");
var optionsList = document.getElementById("optionsList");
var br = document.createElement("br");
let isFavsTraitsOnly = document.getElementById("listFavoritesTraits");

//selecting array-----> MAKE SURE THEY ARE LINKED IN HTML
var dataArr = shikiData;
var tagDefArr = tagDefinition;


function formatStr(str){
    let placeholder = str;
    placeholder = placeholder.replace(/_/g, " ");
    placeholder = placeholder.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    
    return placeholder;
}

//eliminate underscores & capitalization
function formatString(arr){
    var placeholder = "";

    for (var i= 0; i<arr.length; i++){
        placeholder = arr[i];
        placeholder = placeholder.replace(/_/g, " ");
        placeholder = placeholder.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')

        arr[i] = placeholder;
    }
    return arr
}

if(document.URL.includes("index.html")){
    //dynamic dropdown
    var tagArr = []
    tagArr = Object.keys(dataArr[0]);
    tagArr = formatString(tagArr)

    for (var i = 1;i<tagArr.length; i++){
        var optionNode = document.createElement("option");
        optionNode.value = tagArr[i];
        optionNode.textContent = tagArr[i];
        optionsList.appendChild(optionNode);
    }
    
    //event listener
    select.addEventListener("change", (event)=>{
        event.preventDefault();
    
        var trueValArr=[];
        shikiCard.classList.add("invisible");
        tagCard.classList.add("invisible");
    
        //retrieve the selected key
        
        if(event.target.id==="listFavoritesTraits"){
            toggleDropdown();
        }else{
            var tag = event.target.value
            //unformat string to match key object in array
            tag = unFormatString(tag);
            
            //get array with shiki_names that have the value of true for key
            trueValArr = getShikiNames(tag);
        
            //proper cap & spaces between string in arr
            trueValArr = formatString(trueValArr);
        
            resultsCard.classList.remove("invisible");
            //listCard.classList.remove("invisible");
        
            //render shiki list
            renderList(trueValArr, tag);
            
            event.target.value = "";
        }
    });
    
    
    resultsCard.addEventListener("click", (event)=>{
        event.preventDefault();
        var shikiTrueArr =[];
        var tag = event.target.id;
        var formattedTag = "";
        //shikiCard.textContent = tag;
    
        //call a function that gets by the Tag and returns the true values of the object
        if(tag !== ""){
            shikiCard.classList.remove("invisible");
            tagCard.classList.add("invisible");
            shikiName.textContent="";
                 
            formattedTag = tag.replace(/_/g, " ");
            formattedTag = formattedTag.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    
            let iEl = document.createElement("i");
            iEl.classList.add("fas");
            iEl.classList.add("fa-star");
            iEl.setAttribute("id", "starIcon")
            
            if(isFavoritesLocalStorage(tag)){
                iEl.setAttribute("style", "color:yellow;")
            }
            
            shikiName.append(iEl);
            let introStr = " "+formattedTag +" has the following abilities as well:";
    
            shikiName.append(introStr)
            
            shikiTrueArr = shikiProfile(tag);
            shikiTrueArr = shikiFilterArr(shikiTrueArr);
            shikiTrueArr = formatString(shikiTrueArr);
            shikiAbilityRender(shikiTrueArr);
        } else {
            shikiCard.classList.add("invisible");
            tagCard.classList.add("invisible");
        }
    
        shikiName.setAttribute("id", tag)
        
    })
    
    shikiCard.addEventListener("click", event =>{
        event.preventDefault();
        var tagId = event.target.id;
        var tagDef = "";
    
        if(tagId != ""&& tagId !=="starIcon"){
            tagCard.classList.remove("invisible");
            tagDef = findTagObj(tagId);
            tagText.textContent = tagDef;
        }else if (tagId ==="starIcon"){
            if(isFavoritesLocalStorage(shikiName.id)){
                removeCharacterLocalStorage(shikiName.id)
            }else{
                savesCharacterLocalStorage(shikiName.id)
            }
    
        }else{
            tagCard.classList.add("invisible");
        }
    
    
    
    })


}
function toggleDropdown(){
    
    if(isLocalStorage() && isFavsTraitsOnly.checked){
        while(optionsList.firstChild){
            optionsList.removeChild(optionsList.firstChild)
        }
        
        let allSkillsArr=[];
        let uniqueSkillsArr=[];

        let favoriteCharacters = getFavortiesLocalStorage();

        favoriteCharacters.forEach(character=>{
            dataArr.forEach(profile=>{
                if(character.name=== profile.shiki_name){
                    let tempArr =shikiFilterArr(profile);
                    allSkillsArr =tempArr.concat(allSkillsArr)
                }
            })
        })
        
        allSkillsArr.forEach(ability=>{
            if(!uniqueSkillsArr.includes(ability)){
                uniqueSkillsArr.push(ability)
            }
        })

        uniqueSkillsArr.sort()
        uniqueSkillsArr.forEach(ability=>{
            let optionNode = document.createElement("option");
            optionNode.value = formatStr(ability);
            optionNode.textContent = formatStr(ability);
            optionsList.appendChild(optionNode);
        })
    }else{
        if(!isLocalStorage()){
            alert("No favorites have been selected!")
            isFavsTraitsOnly.checked = false;
        }
        while(optionsList.firstChild){
            optionsList.removeChild(optionsList.firstChild)
        }
        var tagArr = []
        tagArr = Object.keys(dataArr[0]);
        tagArr = formatString(tagArr)
    
        for (var i = 1;i<tagArr.length; i++){
            var optionNode = document.createElement("option");
            optionNode.value = tagArr[i];
            optionNode.textContent = tagArr[i];
            optionsList.appendChild(optionNode);
        }
    }  
}

function getShikiNames(tag){
    var tempShiki = [];
    var shikiNames = [];
    //console.log(dataArr.length)
    //console.log(tag);

    for(var i = 0; i<dataArr.length; i++){
        tempShiki = dataArr[i];
        //console.log(tempShiki.length)
        for(var shikiTag in tempShiki){
            //console.log(tempShiki[shikiTag])
            if(shikiTag === tag && tempShiki[shikiTag]=== true) {
                shikiNames.push(dataArr[i].shiki_name)
            }
            //console.log(`${shiki}: ${tempShiki[shiki]}`)
        }  
    }
    return shikiNames
};

function unFormatString(tag){
    tag = tag.split(' ').join('_')
    tag = tag.toLowerCase();

    return tag
};

//render shiki list
function renderList(arr, ability){
    //clear the previous list
    shikiList.textContent = "";
    var shiki="";

    //check if arr is empty
    if(arr.length===0){
        result.textContent ="Sorry there are no Shikigami in the database right now with "+formatStr(ability)+".";
        shikiList.textContent= ""
    } else{

        result.textContent= "The following have "+formatStr(ability)+". Click on a name below for more information:"
        for (var i= 0; i<arr.length; i++){
            shiki = arr[i];
            var liEl = document.createElement("li");
            var aEl = document.createElement("a");

            aEl.href = "#";
            aEl.textContent = shiki;
            aEl.setAttribute("id", unFormatString(arr[i]));
            aEl.setAttribute("style", "text-decoration: none; color: white;");
            liEl.appendChild(aEl);
            shikiList.appendChild(liEl);
            shikiList.setAttribute("style", "list-style-type: none; text-align: left;");
        }
    }            

};

function shikiProfile(tag){
    var shikiProfileArr=[];
    for(var i=0; i<dataArr.length; i++){
        if(dataArr[i].shiki_name === tag){
            shikiProfileArr = dataArr[i];
        }
    }
    return shikiProfileArr;
}

function shikiFilterArr(obj){
    var tempArr = [];
    for(const ability in obj){
        if(obj[ability] === true){
            tempArr.push(ability)
        };
    };
    return tempArr;
}

function shikiAbilityRender(arr){
    abilityList.textContent="";
    defHelp.textContent = "";
    var ability = "";
    var defineHelp = "Click on any from the list above to see more info.";

    for(var i=0; i<arr.length; i++){
        ability = arr[i];
        var liEl = document.createElement("li");
        var aEl= document.createElement("a");

        aEl.href="#";
        aEl.textContent =ability;
        aEl.setAttribute("id", unFormatString(arr[i]));
        aEl.setAttribute("style", "text-decoration: none; color: black;");
        liEl.appendChild(aEl)
        abilityList.appendChild(liEl);
    }
    var text = document.createTextNode(defineHelp);
    defHelp.appendChild(text);

}

function findTagObj(tagName){
    var tempTagDef = "";

    for(var i=0; i<tagDefinition.length; i++){
        if (tagDefinition[i].tag === tagName){
            tempTagDef = tagDefinition[i].tag;
            tempTagDef = tempTagDef.replace(/_/g, " ");
            tempTagDef = tempTagDef.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
            
            tempTagDef = tempTagDef +": " +tagDefinition[i].tag_definition;
        };
    };
    return tempTagDef;
}