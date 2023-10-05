function foo(){
  console.log('global foo');
}

function boo(){

  function foo(){
    console.log('local foo');
  }
  foo();
  
}
boo();