function saturdayFun(activity = 'roller-skate'){
return `This Saturday, I want to ${activity}!`
}
function mondayWork ( answer = "go to the office"){
    return `This Monday, I will ${answer}.`
}
function wrapAdjective (wrapper){
    return function(adjective){
        return`You are ${wrapper}${adjective}${wrapper}!`
    }
}
