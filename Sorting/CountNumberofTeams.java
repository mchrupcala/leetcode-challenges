class Solution {
    public int numTeams(int[] rating) {
        int count = 0;
        
        for (int i = 0; i < rating.length; i++) {
            for (int j = i+1; j < rating.length; j++) {
                for (int k = j+1; k < rating.length; k++) {
                    if (rating[i] < rating[j] && rating[j] < rating[k]) {
                        count += 1;
                    } else if (rating[k] < rating[j] && rating[j] < rating[i]) {
                        count += 1;
                    }
                }
                
            }
            
        }
        
        
        return count;
    }
}