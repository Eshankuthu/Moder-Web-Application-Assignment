var library =[
    {prof : 'Asaad Saad', course:'WAP', courseID : 'CS452'},
    {prof : 'Rakesh Shrestha', course:'WAA', courseID : 'CS545'},
    {prof : 'Steve Nolle', course:'SWE', courseID : 'CS425'}
];

var result = library.sort(function(a,b){
        if(a.course<b.course){
            return -1;
        }
        if(a.course>b.course){
            return 1;
        }
        return 0;
});
console.log(result);
