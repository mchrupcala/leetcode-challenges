class Solution {
    public int findNumbers(int[] nums) {
        int count = 0;
        
        for (int i : nums) {
            String j = Integer.toString(i);
            
            List<Character> stringChars = new ArrayList<>();
            for (char c : j.toCharArray()) {
                stringChars.add(c);
            }
            
            if (stringChars.size() % 2 == 0) {
                count += 1;
            }
        }
        
        return count;
    }
}