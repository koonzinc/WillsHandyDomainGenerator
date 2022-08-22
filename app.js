

function generateDomain() {
    let pronoun = ["the", "our", "her"];
    let adj = ["great", "amazing"];
    let noun = ["woman", "man"];
    let domainList = "";

    for(let i = 0; i < pronoun.length; i++){
        for(let j = 0; j < adj.length; j++){
            for(let k = 0; k < noun.length; k++){
                domainList += `${pronoun[i]}${adj[j]}${noun[k]}.comm<br>` 
            }
        }
    }

    document.getElementById("domain").innerHTML = domainList;
}





