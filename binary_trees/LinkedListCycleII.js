var detectCycle = function(head) {
    //use two pointers. return the node pointer- (which is unique) not the value (which is not).
        let nodeDictionary = [];
        
        let current = head;
        
        while (!nodeDictionary.includes(current)) {
            nodeDictionary.push(current);
            if (current) {
                current = current.next;            
            }
        }
        
        if (nodeDictionary.includes(null)) {
            return null;
        } else {
            return current;
        }
        
        
        
    //FIRST ANSWER    
        /*    if (!head) return null;
        let current = head;
        let i = 0;
        let obj = [];
        let vals = [];
        let searchNode = null;
        let answer = null;
        
        while (current) {
            if (obj.includes(current)) {
                searchNode = current;
                break;
            } else {
                obj.push(current);
    
                current = current.next;            
            }
        }
        
        current = head;
        while (current) {
            if (current !== searchNode) {
                current = current.next            
            } else {
                answer = current;
                break;
            }
        } */
        
        
        //return current;
    };