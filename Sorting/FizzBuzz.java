class Solution {
    public List<String> fizzBuzz(int n) {
        //naive solution: loop from 1 to n. check if i %3 == 0 or i % 5 == 0. conditionals. else, print i. O(n) time complexity.
        ArrayList<String> answer = new ArrayList<>();
        
        for (int i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                answer.add("FizzBuzz");
            }
            else if (i % 3 == 0) {
                answer.add("Fizz");
            } else if (i % 5 == 0) {
                answer.add("Buzz");
            } else {
                answer.add(Integer.toString(i));
            }
        }
        
        return answer;
        //I could use a HashMap to make the conditionals more efficient. add both 3 and 5. if n is found in the hashmap, print n / HashMap[n]
    }
}