const list = document.querySelector('#Player-List');
const form= document.querySelector('#P-form');
const form2=document.querySelector('#P-form1');
const b1=document.querySelector('#b1');
const b2=document.querySelector('#b2');
const b3=document.querySelector('#b3');
const div1=document.querySelector('#div1');
let z;

//create and render players for each data
function renderPlayer(doc)
{
    let li=document.createElement('li');
    let P_Name= document.createElement('span');
    let number= document.createElement('span');
    let Position=document.createElement('span');
    let Club=document.createElement('span');
    let Nation=document.createElement('span');
    let cross= document.createElement('p');
    cross.className='cross';
   
    li.setAttribute('data-id', doc.id);
    P_Name.textContent= doc.data().P_Name;
    number.textContent= doc.data().number;
    Position.textContent= doc.data().Position;
    Club.textContent=doc.data().Club ;
    Nation.textContent=doc.data().Nation ;
    cross.textContent = 'x' ;

    li.appendChild(P_Name);
    li.appendChild(number);
    li.appendChild(Position);
    li.appendChild(Club);
    li.appendChild(Nation);
    li.appendChild(cross);

    list.appendChild(li);

    //deletion
    
    cross.addEventListener('click',(e) =>{
    e.stopPropagation();
    let del_id = e.target.parentElement.getAttribute('data-id');
    db.collection('Players').doc(del_id).delete();
    })
    
}

db.collection('Players').get().then((snapshot) =>     //.where('Nation' ,'==', 'Argentina')
{
    snapshot.docs.forEach(doc => {
        //console.log(doc.data())
        renderPlayer(doc);
    })
    

});

//saving newly added data
b1.addEventListener('click',(e)  =>{
    e.preventDefault();
    //console.log(form.P_Name.value);
    db.collection('Players').add({
        P_Name: form.P_Name.value,
        number: form.number.value,
        Position: form.Position.value,
        Club: form.Club.value,
        Nation: form.Nation.value
       /* 
       P_Name: form.elements['P_Name'].value,
       Age: form.elements['Age'].value,
       Position: form.elements['Position'].value,
       Club: form.elements['Club'].value,
   Nation: form.elements['Nation'].value
*/
    
    });
   
})
    
    b2.addEventListener('click',(e)  =>{
      // console.log(form.elements['P_Name'].value);

        e.preventDefault();
        div1.style.display='block';
        // z=form2.P_Name.value;
        
        // console.log(document.forms['xyz'][P_Name.value]);
        
           
        /* P_Name: form.elements['P_Name'].value,
            Age: form.elements['Age'].value,
            Position: form.elements['Position'].value,
            Club: form.elements['Club'].value,
        Nation: form.elements['Nation'].value
        
        
        });
        */
    
 
})

b3.addEventListener('click',(e) =>
{
    e.preventDefault();
   //const id1 = db.collection('Players').where('P_Name','==',z).id;
  //console.log(form2.Age.value);
   db.collection('Players').doc('CwzP6vb8y0XAaHji3lX4').update       //.doc('CwzP6vb8y0XAaHji3lX4')
   ({
   // P_Name: form.P_Name.value,

    number:  form2.number.value,
    Position: form2.Position.value,
    Club: form2.Club.value,
    Nation: form2.Nation.value
   

});


})

