function like(){
	document.querySelectorAll('button').forEach( item => {
    if(item.getAttribute('aria-label') == 'Like'){
      item.click()
    }
  });
};
