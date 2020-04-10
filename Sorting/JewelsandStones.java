class Solution {
    public int numJewelsInStones(String J, String S) {
        int jewelCount = 0;
        //I need all the stones to test against.
            //so, split S into an arraylist of chars
        ArrayList<Character> stones = new ArrayList<Character>();
        
        // stones.add(S.split(""));  --> split isn't the way...arraylist of chars, but for each in S, add to the stones character ArrayList
        for (char ch : S.toCharArray()) {
            stones.add(ch);
        }
        
        
        //use .contains() to see if, for each letter in S, it's in J
        for (char check: stones) {
            
            if (J.indexOf(check) != -1) {
                jewelCount ++;
            }            
        }
        
        
        return jewelCount;
    }
}