var findContentChildren = function(g, s) {
    //this is failing because I'm accessing a static value in my object - "is there exactly 1 or more cookies at the child's exact greed value?"
//What I really want, is a greedy approach that's looking for a cookie of more OR = child's greedy factor.
    
    let happyChildren = 0;
    let cookies = {};
    
    //sort both arrays. Time complexity of n * log(n)
    g = g.sort((a,b) => b-a);
    s = s.sort((a,b) => b-a);
    // console.log(g);
    
    // for (let i = 0; i < s.length; i++) {
    //     if (cookies[s[i]]) {
    //         cookies[s[i]] += 1;
    //     } else {
    //         cookies[s[i]] = 1;
    //     }
    // }
    // console.log(cookies)
    let j = 0;
    for (let i = 0; i < g.length; i++) {
        if (g[i] <= s[j]) {
            happyChildren += 1;
            j += 1;
        }
    }
    // console.log(cookies)
    
    return happyChildren;
};