function login(username, password){
    let users = ["alex", "warren", "joey"];
    if(users.includes(username)&& password === "Emp@154"){
        return "login successfull";
    }
    else if(users.includes(username)){
        return "user not found";
    }
    else if(password !== "Emp@154"){
        return "incorrect password";
    }
}
module.exports = login;