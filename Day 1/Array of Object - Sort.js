var library = [

{prof:'Rakesh Shrestha', course:'WAA', courseID:'CS545'},
{prof:'Asaad Saad', course:'WAP', courseID:'CS452'},
{prof:'Steve Nolle', course:'SWE', courseID:'CS425'}
];

var result = library.map(a=>a.course).sort();
//console.log(result);

library.sort(function(a,b){ return (a.course>b.course) ? 1 : ((b.course > a.course) ? -1 : 0) });
console.log(library);