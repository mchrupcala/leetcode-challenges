import java.util.ArrayList;
import java.util.List;

class Solution {
    public String toLowerCase(String str) {
        // return str.toLowerCase();
        
        List<Character> strangList = new ArrayList<>();
        for (char c: str.toCharArray()) {
            strangList.add(c);
        }

        ArrayList<String> lowers = new ArrayList<>();
        for (char newC : strangList) {
            String s = Character.toString(newC);
            lowers.add(s.toLowerCase());
        }
        return String.join("", lowers);
    }
}