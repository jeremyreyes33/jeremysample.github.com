let ph = document.getElementById('ph');
	let usd = document.getElementById('usd');
	let cur = document.getElementById('currency');
	let result = document.getElementById('result');

		cur.addEventListener("input", convert_ph);

		function convert_ph() {
				let money = parseInt(cur.value) || 0;
 				let con = 0;
 				let txt ="";

	 				if(ph.checked == true) {

	 					con = money/55.02;
	 					txt = ` ${money} php = ${con.toFixed(2)} usd`;
	 				} else if (usd.checked == true) {

	 					con = money*55.02;
	 					txt = ` ${money} usd = ${con.toFixed(2)} php`;
	 				}
				
				result.innerHTML = txt;
		}

//This is the Mulitiplication
let num_loop = document.querySelector('#num_loop');
	num_loop.addEventListener("input", compute);
		
		function compute() {

			      let num1 = parseInt(num_loop.value) || 0 ;
			      let result = document.getElementById('res');
			      let text = "";

			      var i;

			      for (i=1; i<=20; i++) {

			        text += + num1 + " X " + i + " = " + i*num1 + "<br>";

			      }

			      result.innerHTML = text;  
		    }

