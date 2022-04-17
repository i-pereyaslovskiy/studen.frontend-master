
	let body=document.querySelector('body');
	let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}

	let burger = document.querySelector('.navigation-menu__item--burger');
if(burger){
	let menu = document.querySelector('.navigation');
	burger.addEventListener("click", function(e){
	burger.classList.toggle('_active');
	menu.classList.toggle('_active');
	})//burger.addEventListener - click
}
