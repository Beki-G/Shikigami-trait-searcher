//query selectors
var div = document.querySelector("#container");
var frag = document.createDocumentFragment();
var select = document.createElement("select");
var button = document.getElementById("filter");
var result = document.querySelector(".result");
var shikiList = document.querySelector("#shiki-List");


//selecting array
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
}

function unFormatString(tag){
    tag = tag.split(' ').join('_')
    //console.log(placeholder);
    tag = tag.toLowerCase();

    console.log(tag);
    return tag
}

//render shiki list
function renderList(arr){
    //clear the previous list
    shikiList.textContent = "";
    var shiki="";

    //create li element and populate with shiki name and append to Shiki List
    for (var i= 0; i<arr.length; i++){
        shiki = arr[i];
        var liEl = document.createElement("li");
        liEl.textContent = shiki;
        shikiList.appendChild(liEl);
    }

    //if shiki list is empty let user know
    if(shikiList.textContent === ""){
        shikiList.textContent= "Sorry there are no Shikigami in the database right now with that ability"
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
    //render shiki list
    renderList(trueValArr);
})