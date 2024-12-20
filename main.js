(()=>{"use strict";const t="http://localhost:7070",e=document.querySelector(".container"),n=document.querySelector(".tickets-container"),d=document.querySelector(".add-ticket-button");document.addEventListener("DOMContentLoaded",(()=>{const a=new XMLHttpRequest;a.open("GET",`${t}/?method=allTickets`),a.responseType="json",a.addEventListener("load",(()=>{if(a.status>=200&&a.status<300)try{const d=a.response;if(!d.length)return;d.forEach((d=>{!function(t,e){const n=`\n<div data-id="${t.id}" class="ticket-wrapper">\n  <div class="ticket-body">\n    <div data-status="${t.status}" class="ticket-status">\n    <span class="ticket-status-checkbox hidden">&#10004;</span>\n    </div>\n    <div class="ticket-name"><p>${t.name}</p></div>\n    <div class="ticket-timestamp">\n      <span>${t.created}</span>\n    </div>\n    <div class="ticket-edit-button">\n    <span>&#9998;</span>\n    </div>\n    <div class="ticket-remove-button">\n      <span>&#10006;</span>\n    </div>\n  </div>\n  <div class="ticket-description hidden"><p></p></div>\n</div>\n `;e.insertAdjacentHTML("beforeEnd",n)}(d,n);const a=n.lastElementChild,s=a.querySelector(".ticket-status"),o=s.querySelector(".ticket-status-checkbox");"true"===s.dataset.status&&o.classList.remove("hidden");const i=a.querySelector(".ticket-name"),r=a.querySelector(".ticket-edit-button"),c=a.querySelector(".ticket-remove-button");s.addEventListener("click",(()=>{!function(t,e,n,d,a){if(t.querySelector(".modal"))return;d.classList.toggle("hidden");let{status:s}=n.dataset;const o=d.classList.contains("hidden");o&&(s=!1),o||(s=!0);const i=new FormData;i.append("id",e.dataset.id),i.append("status",s);const r=`${a}/?method=changeTicketStatus`,c=new XMLHttpRequest;c.open("POST",r),document.body.style.cursor="wait",c.addEventListener("load",(()=>{if(c.status>=200&&c.status<300)try{setTimeout((()=>{document.body.style.cursor=""}),500)}catch(t){console.error(t)}})),c.send(i)}(e,a,s,o,t)})),i.addEventListener("click",(()=>{!function(t,e,n,d){if(t.querySelector(".modal"))return;const a=n.closest(".ticket-wrapper").querySelector(".ticket-description");if(!a.classList.contains("hidden"))return void a.classList.add("hidden");const s=`${d}/?method=ticketById&id=${e.dataset.id}`,o=new XMLHttpRequest;o.open("GET",s),document.body.style.cursor="wait",o.addEventListener("load",(()=>{if(o.status>=200&&o.status<300)try{const t=o.response;if(setTimeout((()=>{document.body.style.cursor=""}),1e3),!t)return;a.textContent=t,a.classList.toggle("hidden")}catch(t){console.error(t)}})),o.send()}(e,a,i,t)})),r.addEventListener("click",(()=>{!function(t,e,n,d){t.querySelector(".modal")||(t.insertAdjacentHTML("beforeEnd",'\n    <div data-widget="editTicket" class="modal widget-edit">\n    <h2>Редактировать тикет</h2>  \n    <form data-id="editTicket-form" class="widget-form">\n      <label>\n        Краткое описание\n          <textarea rows=1 data-id="name" name="name" required class="widget-input"></textarea>\n      </label>\n      <label>\n        Подробное описание\n          <textarea rows=3 data-id="description" name="description" class="widget-input"></textarea>\n      </label>\n      <div class="widget-form-controls">\n        <button data-id="cancel" class="widget-button">Отмена</button>  \n        <button type="submit" data-id="ok" class="widget-button">Ок</button> \n      </div>     \n    </form>\n    </div>\n    '),function(t,e,n){if(!t)return;const d=t.querySelector("[data-widget=editTicket]").querySelector("[data-id=description]"),a=`${n}/?method=ticketById&id=${e.dataset.id}`,s=new XMLHttpRequest;s.open("GET",a),s.addEventListener("load",(()=>{if(s.status>=200&&s.status<300)try{const t=s.response;if(!t)return;d.value=t}catch(t){console.error(t)}})),s.send()}(t,e,d),function(t){if(!t)return;const e=t.querySelector("[data-widget=editTicket]"),n=e.querySelector("[data-id=editTicket-form]");e.querySelector("[data-id=cancel]").addEventListener("click",(()=>{n.reset(),e.remove()}))}(t),function(t,e,n){if(!t)return;const d=t.querySelector("[data-widget=editTicket]"),a=d.querySelector("[data-id=editTicket-form]"),s=d.querySelector("[data-id=name]"),o=e.closest(".ticket-wrapper").dataset.id,i=e.closest(".ticket-wrapper").querySelector(".ticket-name").textContent,r=e.closest(".ticket-wrapper").querySelector(".ticket-status").dataset.status;s.value=i,a.addEventListener("submit",(t=>{t.preventDefault();const e=a.name.value.trim(),s=a.description.value.trim();if(""===e)return;const i=new FormData;i.append("id",o),i.append("name",e),i.append("description",s),i.append("status",r),i.append("created",(new Date).toLocaleString());const c=`${n}/?method=editTicket`,u=new XMLHttpRequest;u.open("POST",c),document.body.style.cursor="wait",d.style.cursor="wait",u.addEventListener("load",(()=>{if(u.status>=200&&u.status<300)try{setTimeout((()=>{document.body.style.cursor="",d.style.cursor="",document.location.reload()}),1e3)}catch(t){console.error(t)}})),a.reset(),d.remove(),u.send(i)}))}(t,n,d))}(e,a,r,t)})),c.addEventListener("click",(()=>{!function(t,e,n){t.querySelector(".modal")||(t.insertAdjacentHTML("beforeEnd",'\n    <div data-widget="removeTicket" class="modal widget-remove">\n      <h2>Удалить тикет?</h2>  \n      <div class="widget-form">\n        <p class="widget-remove-text">Вы уверены, что хотите удалить тикет? Это действие необратимо.</p>\n        <div class="widget-form-controls">\n          <button data-id="cancel" class="widget-button">Отмена</button>  \n          <button data-id="ok" class="widget-button">Ок</button> \n        </div> \n      </div>\n    </div>\n    '),function(t){if(!t)return;const e=t.querySelector("[data-widget=removeTicket]");e.querySelector("[data-id=cancel]").addEventListener("click",(()=>{e.remove()}))}(t),function(t,e,n){if(!t)return;const d=t.querySelector("[data-widget=removeTicket]");d.querySelector("[data-id=ok]").addEventListener("click",(()=>{const t=new FormData;t.append("id",e.dataset.id);const a=`${n}/?method=removeTicket`,s=new XMLHttpRequest;s.open("POST",a),document.body.style.cursor="wait",s.addEventListener("load",(()=>{if(s.status>=200&&s.status<300)try{setTimeout((()=>{document.body.style.cursor="",document.location.reload()}),1e3)}catch(t){console.error(t)}})),d.remove(),s.send(t)}))}(t,e,n))}(e,a,t)}))}))}catch(t){console.error(t)}})),a.send(),d.addEventListener("click",(()=>{!function(t,e){t.querySelector(".modal")||(t.insertAdjacentHTML("beforeEnd",'\n    <div data-widget="addTicket" class="modal widget-add">\n    <h2>Добавить тикет</h2>  \n    <form data-id="addTicket-form" class="widget-form">\n      <label>\n        Краткое описание\n          <textarea rows=1 data-id="name" name="name" required class="widget-input"></textarea>\n      </label>\n      <label>\n        Подробное описание\n          <textarea rows=3 data-id="description" name="description" class="widget-input"></textarea>\n      </label>\n      <div class="widget-form-controls">\n        <button data-id="cancel" class="widget-button">Отмена</button>  \n        <button type="submit" data-id="ok" class="widget-button">Ок</button> \n      </div>     \n    </form>\n    </div>\n    '),function(t){if(!t)return;const e=t.querySelector("[data-widget=addTicket]"),n=e.querySelector("[data-id=addTicket-form]");e.querySelector("[data-id=cancel]").addEventListener("click",(()=>{n.reset(),e.remove()}))}(t),function(t,e){if(!t)return;const n=t.querySelector("[data-widget=addTicket]"),d=n.querySelector("[data-id=addTicket-form]");d.addEventListener("submit",(t=>{t.preventDefault();const a=d.name.value.trim(),s=d.description.value.trim();if(""===a)return;const o=new FormData;o.append("id",null),o.append("name",a),o.append("description",s),o.append("status",!1),o.append("created",(new Date).toLocaleString());const i=`${e}/?method=createTicket`,r=new XMLHttpRequest;r.open("POST",i),document.body.style.cursor="wait",n.style.cursor="wait",r.addEventListener("load",(()=>{if(r.status>=200&&r.status<300)try{setTimeout((()=>{document.body.style.cursor="",n.style.cursor="",document.location.reload()}),1e3)}catch(t){console.error(t)}})),r.send(o),d.reset(),n.remove()}))}(t,e))}(e,t)}))}))})();