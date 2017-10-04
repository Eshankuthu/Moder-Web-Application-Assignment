const items = Array.from(document.querySelectorAll('[data-time]'));
var item = items.filter(a=>a.innerHTML=="ECMA6 Video")
				.map(b=>b.getAttribute('data-time').split(':'))
				.map((x)=>parseInt(x[0])*60+parseInt(x[1]))
				.reduce((c,d)=>c+d,0);
console.log(item);