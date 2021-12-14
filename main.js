function reconstruct(words,string){
    /*
    * @param words: list of words
    * @param string: desired sentence without spaces
    * **/
    let wordBuild = ""
    let finalSentence = [];
    for(let i = 0 ; i < string.length ; i++){
        wordBuild+= string[i]
        if(words.includes(wordBuild)){
            words.splice(words.indexOf(wordBuild),1)
            finalSentence.push(wordBuild)
            wordBuild = ""
        }
    }

    if(wordBuild !== "")
        return []

    return finalSentence;
}

const compareArrays = (x,y) =>{
    //true if params (arrays) have the same values, false otherwise
    return Array.isArray(x) && Array.isArray(y) && x.length === y.length && x.every((val,index)=>val === y[index]);
}

function unitTest(tests){
    tests.forEach((test,idx)=>{
        let value = reconstruct(test.words,test.string)
        let desired_result = test.desired
        console.assert(compareArrays(value,desired_result),`expected: ${value} | got: ${desired_result} (test #${idx+1})`)
    })
    console.log("tests done")
}

unitTest([
    {
        words:['quick','brown','the','fox'],
        string:'thequickbrownfox',
        desired:['the','quick','brown','fox']
    },
    {
        words:['bed','bath','bedbath','and','beyond'],
        string:'',
        desired:[]
    },
    {
        words:['bed','bath','bedbath','and','beyond'],
        string:'bedbathandbeyond',
        desired:['bed', 'bath', 'and', 'beyond']
    },
    {
        words:['0','bath','','and','beyond'],
        string:'bathandbeyond0',
        desired:["bath","and","beyond",'0']
    },
    {
        words:[' ','.','!','?'],
        string:'??',
        desired:[]
    },

])


