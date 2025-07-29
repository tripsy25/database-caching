//function to set user preferences and display personalized recommendations
function setPreferences(){
    var preferences = document.getElementById('preferences').value;
    setCookie('userPreferences', preferences, 1); //Cookie expires in 1 

    //Display personalized recommendations based on preferences
    displayRecommendations(preferences);

    //Hide preferences form and show recommendations container
    document.getElementById('preferences-container').style.display = 'none';
    document.getElementById('recommendations-container').style.display = 'none'
}

//Function to display personalized recommendations based on user preferences
function displayRecommendations(preferences){
    var recommendations = getRecommendations(preferences)
    document.getElementById('recommendations').innerText = recommendations;
}

//Function to read the value of a cookie with a given name
function getCookie(name){
    var nameEQ = name+ '=';
    var cookies = document.cookie.split(';');
    for(var i=0; i<cookies.length; i++){
        var cookie = cookies[i];
        while(cookie.charAt(0) === ' '){
            cookie = cookie.substring(1, cookie.length);
        }
        if(cookie.indexOf(nameEQ)===0){
            return cookie.substring(nameEQ.length)
        }
    }
    return null;
}

//Function to read user preferences cookie and display 
function displayRecommendationsOnLoad(){
    var preferences = getCookie('userPreferences');
    if(preferences){
        //Display personalized recommendations
        displayRecommendations(preferences,)
    }
}

//Function to set a cookie
function setCookie(name, value, hours){
    var expires = '';
    if(hours){
        var date = new Date();
        date.setTime(date.getTime() + (hours*60*60*1000));
        expires = ';expires=' + date.toUTCString();
    }

    document.cookie = name + '=' + value + expires + '; path=/';
}

//Function to get personalized recommendations based on preferences
function getRecommendations(preferences){
    switch(preferences){
        case 'movies':
            return 'Check out the lastest movies';
        case 'books':
            return 'Explore these must read books';
        default:
            return 'No recommendations available'
    }
}

//Function to logout a user
function logoutUser(){
    //Clear user preferences Cookie
    eraseCookie('userPreferences');

    //Show preferences form and hide recommendations
    document.getElementById('preferences-container').style.display = 'blo';
    document.getElementById('recommendations-container').style.display = 'blo'
}

//Function to erase cookie
function eraseCookie(name){ 
    document.cookie = name + '=; Max-age=-99999 '
}

//Display recommendations on page load
window.onload = displayRecommendationsOnLoad;