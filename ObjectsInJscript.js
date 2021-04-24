/*var Divine = {
    name:'Divine',
    age:28,
    address:'Liberty Estate',
    login(){
        console.log(this.name + ' has logged in');
    }
};
Divine.login();
*/

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.score = 0;
    }
    login(){
        console.log(this.name, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.name, 'just logged out');
    
    }
    updateScore(){
        this.score++;
        console.log(this.name, 'has score', this.score);
        return this;
    }
}


var userOne = new User('Divine', 28);
var userTwo = new User('Hamad', 40);

console.log(userOne);