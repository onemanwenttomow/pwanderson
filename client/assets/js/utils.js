const util = {
    projectMatch: function() {
        this.matchingProjects = [];
        for (let i = 0; i < this.myProjects.length; i++) {
            if (this.myProjects[i].stack.indexOf(this.clickedOnStack) > -1) {
                this.matchingProjects.push(this.myProjects[i]);
            }
            console.log("match!", this.matchingProjects.length);
        }
    },
    onStackClick: function(e) {
        this.clickedOnStack = e;
        console.log(this.clickedOnStack);
        this.projectMatch;
    }
};

export default util;
