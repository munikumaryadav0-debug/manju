const menuButton=document.querySelector('.menu');
const links=document.querySelector('.links');
menuButton.addEventListener('click',()=>{const open=links.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit',event=>{event.preventDefault();const name=document.getElementById('name').value.trim();document.getElementById('formMessage').textContent='Thanks, '+name+'! This demo form is ready to connect to your email or CRM.';event.target.reset();});