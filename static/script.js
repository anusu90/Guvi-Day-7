let day = [{'date': 'DD'}];
for (var i =1; i<32; i++){
    temp = {'date':i};
    day.push(temp);
}

let month = [{'mn': 'Jan'}, {'mn': 'Feb'}, {'mn': 'Mar'}, {'mn': 'April'},{'mn': 'May'}, {'mn': 'June'}, {'mn': 'July'}, {'mn': 'Aug'}, {'mn': 'Sept'}, {'mn': 'Oct'}, {'mn': 'Nov'}, {'mn': 'Dec'}]
let myObject = {"days": day, "months": month};

w3.displayObject("date-list", myObject);
w3.displayObject("month-list", myObject);



