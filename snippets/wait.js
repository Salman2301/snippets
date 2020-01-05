
function wait(ms=500) {
	return new Promise((res) =>{
		setTimeout(()=>{res("done")},ms);
	});
}


// how to use
/*
async function something() {
  console.time("waiting");
  await wait(10000); // wait for 10 secs
  console.timeEnd("waiting")
}
something();

*/
