// Code your solution here
function findMatching(drivers,name){
    const results = drivers.filter(people => people.toUpperCase() == name.toUpperCase())
    return results;
}
function fuzzyMatch(drivers,letters){
    const results = drivers.filter(people => people.startsWith(letters))
    return results;
}
function matchName(drivers,names){
    const results = drivers.filter(people => people.name == names)
    return results;
}