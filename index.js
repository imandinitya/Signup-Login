function signup(username){
    let users = ["alex", "warren", "joey"];
    if(users.includes(username)){
        return "username is already registered";
    }
    else{
        users.push(username);
        return "Signup successful";
    }
}
module.exports = signup;