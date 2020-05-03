var findJudge = function(N, trust) {
    //     if (!trust) return -1;
    //     //create a dict of nodes. Add vals for each connection
    //     const people = {};
        
    //     //traverse the list of connections
    //     for (let i = 0; i < trust.length; i++) {
    //         let person = trust[i][0];
    //         console.log('person: ', person, people);
    //         if (people[person]) {
    //             people[person].push(trust[i][1])
    //         } else {
    //             people[person] = [trust[i][1]]
    //         }
    //     }
    //     // console.log(Object.keys(people), people, N);
    //     //add the judge to dictionary
    //     if (Object.keys(people).length < N) {
    //         let townPeople = Object.keys(people);
    //         let theyTrust = Object.values(people);
    //         let judge = theyTrust.filter(i => !townPeople.includes(theyTrust));
    //         people[judge[0]] = [];
    //         console.log(townPeople, theyTrust, judge);
    //     }
    
    //     // console.log(people);
    //     //check each key in dict. if only one key has no connections, return that key.
    //     let judge = [];
        
    //     for ([key, val] of Object.entries(people)) {
    //         console.log(key, val);
    //         if (val.length === 0) {
    //             judge.push(key)
    //         }
    //     }
        
    //     return judge.length === 1 ? judge[0] : -1;
        
        //create 1 array, length of townspeople + 1 (0 index is dummy) fill it w/ 0's
        let trustCounts = new Array(N + 1).fill(0);
        
        //loop through pairs. for each, update counts for number each person trusts
        for (let [i, j] of trust) {
            // trustCounts[i] -= 1;
            trustCounts[j] += 1;
        }
        console.log(trustCounts);
        for (let i = 1; i < trustCounts.length; i++) {
            if (trustCounts[i] === N - 1) {
                return i;
            }
        }
        
        return -1;
    };