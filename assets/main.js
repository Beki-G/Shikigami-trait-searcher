//query selectors
var div = document.querySelector("#container");
var frag = document.createDocumentFragment();
var select = document.createElement("select");
var button = document.getElementById("filter");
var result = document.querySelector(".result");
var shikiList = document.querySelector("#shikiList");
var resultsCard = document.querySelector(".results_card")
var shikiCard = document.querySelector(".shiki_card")
var abilityList = document.querySelector("#abiliyList");
var shikiName = document.querySelector(".shikiName");

//selecting array-----> MAKE SURE THEY ARE LINKED IN HTML
var dataArr = spShiki;


//eliminate underscores & capitalization
function formatString(arr){
    var placeholder = "";

    for (var i= 0; i<arr.length; i++){
        placeholder = arr[i];
        //console.log(placeholder);
        placeholder = placeholder.replace(/_/g, " ");
        //console.log(placeholder);
        placeholder = placeholder.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')

        //console.log(placeholder)
        arr[i] = placeholder;
    }
    //console.log(arr)
    return arr
}

//dynamic dropdown
var tagArr = []
tagArr = Object.keys(dataArr[0]);
tagArr = formatString(tagArr)
for(var i = 1; i<tagArr.length; i++){
    var currentTag = tagArr[i];
    select.options.add(new Option(currentTag));
    frag.appendChild(select);
    div.appendChild(frag);
}

//load tag definitions to card
//loop through tags & stores as a single string both the key & object & stores in arr
//render arr to tagsList

// var tagDefArr = tagDefinition;
// var strTagDef = "";
// var tempTagArr =[];
// var finalTagArr =[];

// for (var i=0; i<tagDefArr.length; i++){
//     tempTagArr.push(tagDefArr[i].tag)
// }

// tempTagArr = formatString(tempTagArr);

// for (var i=0; i<tagDefArr.length; i++){
//     // tempTagArr = tagDefArr[i].tag;
//     // tempTagArr = formatString(tempTagArr);
//     strTagDef = tempTagArr[i] +": "+ tagDefArr[i].tag_definition
//     finalTagArr.push(strTagDef);
// }

// strTagDef = "";

// for(var i=0; i<finalTagArr.length; i++){
//     strTagDef = finalTagArr[i];
//     var liEl = document.createElement("li");
//     liEl.textContent = strTagDef;
//     tagList.appendChild(liEl);
// }


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
    //console.log(placeholder);
    tag = tag.toLowerCase();

    //console.log(tag);
    return tag
};

//render shiki list
function renderList(arr){
    //clear the previous list
    shikiList.textContent = "";
    var shiki="";

    //create li element and populate with shiki name and append to Shiki List
    for (var i= 0; i<arr.length; i++){
        shiki = arr[i];
        var liEl = document.createElement("li");
        var aEl = document.createElement("a");

        aEl.href = "#";
        aEl.textContent = shiki;
        aEl.setAttribute("id", unFormatString(arr[i]));
        liEl.appendChild(aEl);
        shikiList.appendChild(liEl);
    }

    //if shiki list is empty let user know
    if(shikiList.textContent === ""){
        shikiList.textContent= "Sorry there are no Shikigami in the database right now with that ability"
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
    var ability = "";

    for(var i=0; i<arr.length; i++){
        ability = arr[i];
        var liEl = document.createElement("li");
        liEl.textContent = ability;
        abilityList.appendChild(liEl);
    }
}

//event listener
select.addEventListener("change", (event)=>{
    var trueValArr=[];

    //retrieve the selected key
    var tag = event.target.value

    //unformat string to match key object in array
    tag = unFormatString(tag);
    
    //get array with shiki_names that have the value of true for key
    trueValArr = getShikiNames(tag);
    //console.log(trueValArr);

    //proper cap & spaces between string in arr
    trueValArr = formatString(trueValArr);

    resultsCard.classList.remove("invisible");
    //listCard.classList.remove("invisible");

    //render shiki list
    renderList(trueValArr);
});

resultsCard.addEventListener("click", (event)=>{
    var shikiTrueArr =[];
    var tag = event.target.id;
    var formattedTag = "";
    //shikiCard.textContent = tag;

    //call a function that gets by the Tag and returns the true values of the object
    if(tag != ""){
        shikiCard.classList.remove("invisible")
        formattedTag = tag.replace(/_/g, " ");
        formattedTag = formattedTag.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

        shikiName.textContent = formattedTag +" has the following abilities as well:";
        shikiTrueArr = shikiProfile(tag);
        shikiTrueArr = shikiFilterArr(shikiTrueArr);
        shikiTrueArr = formatString(shikiTrueArr);
        shikiAbilityRender(shikiTrueArr);
    } else {
        shikiCard.classList.add("invisible")
    }
    
})