//eyes follow mouse cursor
const eye = $('.face__eye-ball');

document.addEventListener('mousemove', () => {
	let x = event.clientX * 100 / window.innerWidth + '%';
	let y = event.clientY * 100 / window.innerHeight + '%';
	
	for(let i = 0; i < 2; i++) {
		eye[i].style.left = x;
		eye[i].style.top = y;
		eye[i].style.transform = 'translate(-'+x+',-'+y+')';
	}
});