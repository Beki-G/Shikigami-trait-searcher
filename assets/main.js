//query selectors
var div = document.querySelector("#container");
var frag = document.createDocumentFragment();
var select = document.createElement("select");
var button = document.getElementById("filter");
var result = document.querySelector(".result");
var shikiList = document.querySelector("#shiki-List")


//selecting array
var dataArr = spShiki;


//dropdown menu based off current tag_names in array
for(var i= 0; i<dataArr.length; i++){
    var currentTag= dataArr[i].tag_name;
    select.options.add(new Option(currentTag));
    frag.appendChild(select);
    div.appendChild(frag);
}

//search the array for child object & return index
function findTag(tag){
    var tagFound = 0;
    for(var i=0; i<dataArr.length; i++){        
        var searchTag = dataArr[i].tag_name
        if (searchTag === tag){
            tagFound = i;
            return tagFound;
        }
    }

}

//filter object & return only true values
function filterArr (obj){
    var shikiArr= [];

    for(const shiki in obj){
        if(obj[shiki] === true){
            shikiArr.push(shiki);
        }
    }
    // console.log("Here is one shikiArr")
    // console.log(shikiArr)

    return shikiArr;
}

//render shiki list

function renderList(arr){
    for (var i= 0; i<arr.length; i++){
        var shiki = arr[i];
        var liEl = document.createElement("li");
        liEl.textContent = shiki;
        shikiList.appendChild(liEl);

    }
}

//When selection occurs 
select.addEventListener("change", (event)=>{
    var tag = event.target.value;
    var tagIndex;
    

    tagIndex = findTag(tag);

    //just selected tag object extracted into a smaller array
    var tagTrueArr = dataArr[tagIndex];

    tagTrueArr = filterArr(tagTrueArr);

    result.textContent = "You have chosen to search for "+ tag +". The following shikigami have the ability you are looking for:";
    
    renderList(tagTrueArr);
  

})