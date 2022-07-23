let domainList = [];

function generateDomain() {
    let pronoun = ["the", "our", "he", "him", "her", "me", "she", "them"];
    let adj = ["great", "large", "bloody", "blushing", "brave", "busy", "blue", "bored"];
    let noun = ["woman", "man", "dog", "ability", "card", "career", "case", "college"];

    for(let i = 0; i < pronoun.length; i++){
        let randPronoun = pronoun[Math.floor(Math.random() + i)]
        for(let i = 0; i < adj.length; i++){
            let randAdj = adj[Math.floor(Math.random() + i)]
            for(let i = 0; i < noun.length; i++){
                let randNoun = noun[Math.floor(Math.random() + i)]
                domainList.push(randPronoun + randAdj + randNoun + ".com"); 
            }
        }
    }

    document.getElementById("domain").innerHTML += "<br>" + domainList[Math.floor(Math.random() * domainList.length)];
}





