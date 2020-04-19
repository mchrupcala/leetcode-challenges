class Solution {
    public String defangIPaddr(String address) {
        //create an empty arraylist
        StringBuilder newIP = new StringBuilder();
        
        //loop through my IP address
        for (int i = 0; i < address.length(); i++) {
            //if char is a period, add [.] to arraylist and keep looping
            char current = address.charAt(i);
            if (current == '.') {
                newIP.append("[");
                newIP.append(".");
                newIP.append("]");
            }
            //else, add char to my arraylist and keep looping
            else {
                newIP.append(current);
            }
        }

        
        //convert arraylist into a string and return it.
   /*     String answerString = "";
        
        for (char c : newIP) {
            answerString += c;
        } */
        
        
        return newIP.toString();
    }
}