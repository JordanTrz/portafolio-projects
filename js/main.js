const js_name = document.querySelector('.js_name');
const js_lastName = document.querySelector('.js_lastName');
const js_phone = document.querySelector('.js_phone');
const js_address = document.querySelector('.js_address');
const js_photo = document.querySelector('.js_photo');
const js_nickName = document.querySelector('.js_nickName');
const form = document.querySelector('form');
const app = document.querySelector('.app');

form.addEventListener('submit',function(event){
  event.preventDefault();

  const div_c = document.createElement('article');
  // const box_datos = document.innerHTML (`
  div_c.innerHTML = `
  <figure>
    <img src=${js_photo.value} alt="${js_name.value}">
  </figure>
  <h3>${js_name.value} ${js_lastName.value}</h3>
  <h4>${js_nickName.value}</h4>
  <span>
    <i class="fas fa-phone"></i>
    <h3>${js_phone.value}</h3>
  </span>
  <span>
    <i class="fas fa-home"></i>
    <h3>${js_address.value}</h3>
  </span>
  <div>
    <button>x</button>
  </div>
  `;

  // div_c.appendChild(box_datos);
  div_c.classList.add('box-contact');
  app.appendChild(div_c);
  form.reset();

  div_c.querySelector('button').addEventListener('click',function(){
    const flag = confirm();
    if(flag){
      div_c.remove('div_c');
    }
  })

});