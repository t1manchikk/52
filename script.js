
const topicsDiv=document.getElementById('topics');

document.getElementById('topicForm').onsubmit=e=>{
 e.preventDefault();
 addTopic(e.target[0].value);
 e.target.reset();
}

function addTopic(title){
 const d=document.createElement('div');
 d.className='topic';
 d.innerHTML=`<h3>${title}</h3>
 <form>
 <input placeholder="Повідомлення" required>
 <button>Додати</button>
 </form>
 <div class="msgs"></div>`;
 d.querySelector('form').onsubmit=e=>{
   e.preventDefault();
   addMsg(d.querySelector('.msgs'), e.target[0].value);
   e.target.reset();
 };
 topicsDiv.appendChild(d);
}

function addMsg(container,text){
 const m=document.createElement('div');
 m.className='msg';
 m.innerHTML=`${text} <button>✎</button><button>🗑</button>`;
 m.children[1].onclick=()=>{
   const t=prompt("Редагувати",text);
   if(t) m.firstChild.textContent=t+' ';
 };
 m.children[2].onclick=()=>m.remove();
 container.appendChild(m);
}
