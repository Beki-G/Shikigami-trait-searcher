const tagTable = document.getElementById("tagTable");
const tableEl = document.getElementById("table");
const inputListen = document.querySelector("#myInput")


var tagDef = tagDefinition;

//Removes undercores from string and capitalizes following letter
function formatString(str){
    var placeholder = "";

        placeholder = str;
        //console.log(placeholder);
        placeholder = placeholder.replace(/_/g, " ");
        //console.log(placeholder);
        placeholder = placeholder.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')

        //console.log(placeholder)

    //console.log(arr)
    return placeholder
}

//uses formatString and replaces the tag.value with the formatted version in object
function getTags(allTags){
    var tempTagHolder= "";
    var FormattedTags = [];
    var tagObj = {};

    for(var i= 0; i<allTags.length; i++){
        
        tempTagHolder = allTags[i].tag;
        tempTagHolder = formatString(tempTagHolder)
        // console.log(tempTagHolder)
        tagObj = {tag: tempTagHolder, definition: allTags[i].tag_definition}
        FormattedTags.push(tagObj);
        
    }
    return FormattedTags;
}

function displayTags(tagsArr){
    const trEl1 = document.createElement("tr");
    const thEl1 = document.createElement("th");
    const thEl2 = document.createElement("th");

    thEl1.textContent="Trait";
    thEl2.textContent="Definition";
    trEl1.appendChild(thEl1);
    trEl1.appendChild(thEl2);
    trEl1.classList.add("header")
    tagTable.appendChild(trEl1);
    
    thEl1.setAttribute("style", "border: 1px solid white;background-color: black; color: white;");
    thEl2.setAttribute("style", "border: 1px solid black;")

    for (var i = 0; i<tagsArr.length; i++){
        const trEl2 = document.createElement("tr");
        const tdEl1 = document.createElement("td");
        const tdEl2 = document.createElement("td");

        tdEl1.setAttribute("style", "border: 1px solid white; background-color: black; color: white;");
        tdEl2.setAttribute("style", "border: 1px solid black;");
        tdEl1.textContent = tagsArr[i].tag;
        tdEl2.textContent = tagsArr[i].definition;

        trEl2.appendChild(tdEl1);
        trEl2.appendChild(tdEl2);
        tagTable.appendChild(trEl2);
    }

    
}

//Get tags from data & format them
tagsDef = getTags(tagDef);


displayTags(tagsDef);

function searchTable(){
    //console.log("I'm in SearchTable")
    event.preventDefault();

    //input = inputListen.nodeValue;
    let input = document.getElementById("myInput")
    let filter = input.value.toUpperCase();
    //console.log(tagTable.rows.length);
    let table = document.getElementById("tagTable");
    let tr = table.getElementsByTagName("tr")
    //console.log(tr)

    for (let i = 0; i < tr.length; i++) {
        
        let tdArr = tr[i].getElementsByTagName("td");

        for (let j = 0; j<tdArr.length; j++){
            let td = tdArr[j];
            if (td!= null) {
                txtValue = td.textContent || td.innerText;
                //console.log(txtValue)
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }       
    }
}
inputListen.addEventListener("keyup", searchTable);

