const moviesUrl=['https://swapi.dev/api/films/1','https://swapi.dev/api/films/2','https://swapi.dev/api/films/3',
'https://swapi.dev/api/films/4','https://swapi.dev/api/films/5','https://swapi.dev/api/films/6'];
const starshipsId=['sh1','sh2','sh3','sh4','sh5','sh6'];
var shashasha=[];

var starships=[];
var movies=[];
var starwars=[];
var time1 =0;
var time2=0;
function starwarsHandler(){
  for(let k=0;k<6;k++){
    let starwar=document.getElementById((k+1).toString());
    if(starwar){
     starwars.push(starwar);
    }else{
      k--;   
    }
  }
  console.log(starwars);
} 

function handleClick(id){
  let container= document.querySelector('.container');
  container.innerHTML=movies[parseInt(id)-1];
}

async function renderMovies(){ 
  var startTime=performance.now();  
  for(let i=0;i<moviesUrl.length;i++){
       let res= await fetch(moviesUrl[i]);
       let json= await res.json();
       let htmlsegment=`<span class='movie'>
                        <h3>title:${json.title}</h3>
                        <h3>episode_id:${json.episode_id}</h3>
                        <h3>release_date:${json.release_date}</h3>
                       </span>`;
       let html ='';
       html +=htmlsegment;
       let container= document.querySelector('.container');
       container.innerHTML=html;                 
       movies.push(html);
  } 
  console.log(movies);
  var endTime=performance.now();
  time1=endTime-startTime;
  console.log(`${time1}`);
  
}
renderMovies();//call
setTimeout(starwarsHandler(),time1);//do not want undefined

const starwars1 = document.getElementById('1');
starwars1.addEventListener('click',()=> handleClick('4'));

const starwars2 = document.getElementById('2');
starwars2.addEventListener('click',()=> handleClick('5'));

const starwars3 = document.getElementById('3');
starwars3.addEventListener('click',()=> handleClick('6'));


const starwars4 = document.getElementById('4');
starwars4.addEventListener('click', ()=> handleClick('1'));

const starwars5 = document.getElementById('5');
starwars5.addEventListener('click',()=> handleClick('2'));

const starwars6 = document.getElementById('6');
starwars6.addEventListener('click',()=> handleClick('3'));


const starshipWhich=[];
const lenges=[];
async function renderStarShips(){
      var startTime=performance.now();
      for(let j=0;j<starshipsId.length;j++){  
          let res=await fetch(moviesUrl[j]);
          let json= await res.json();
          var starshipsUrls=json.starships;
          for(let h=0;h<starshipsUrls.length;h++){
            let html ='';
            const last=starshipsUrls[h].split('/');
            let htmlsegment=`<li> <span class="swapi__ship">
                   <button class="button" id='sh${last[last.length-2]}'>STARSHIPS${last[last.length-2]}</button>
                   </span>
                   </li>`;
            shashasha.push(last[last.length-2]);       
            html +=htmlsegment;
            
            starshipWhich.push(htmlsegment);//linearly
            
          }

          starships.push(starshipsUrls);
          lenges.push(starships[j].length);
           
        }
      console.log(starshipWhich); 
      var endTime=performance.now(); 
      time2=endTime-startTime;   
         
}
var shipM=[];
var time3=0;
async function renderShipsInfo(){
  setTimeout(()=>{console.log(' ')},time2);
  var startTime=performance.now();
  for(let s=0;s<6;s++){
    for(let p=0;p<lenges[s];p++){
      let res= await fetch(starships[s][p]);
      let json= await res.json();
      let htmlsegment=`<span class='ships'>
                        <h3>name:${json.name}</h3>
                        <h3>model:${json.model}</h3>
                        <h3>length:${json.length}</h3>
                       </span>`;                 
      let html ='';
      html +=htmlsegment;
      shipM.push(html);
    }
    
  }
  var endTime=performance.now();
  time3=endTime-startTime; 
  console.log(shipM); 
}

  
function handleShip2(id){
      setTimeout(()=>console.log(''), time2);
      let container= document.querySelector('#Ordered');
      let spark=makePagefirst(id,1);
      spark=`<ol id="Ordered">`+spark+`</ol>`;
      container.innerHTML=spark; 
      console.log(spark); 
  }
  
function handleShip3(id){
      setTimeout(()=>console.log(''), time2);
      if(lenges[parseInt(id)]>10){//page2
        let container= document.querySelector('#Ordered');
        let spark=makePagefirst(id,2);
        spark=`<ol id="Ordered">`+spark+`</ol>`;
        container.innerHTML=spark; 
        console.log(spark); 

      }else{//page
        let container= document.querySelector('#Ordered');
        let spark=makePagefirst(id,1);
        spark=`<ol id="Ordered">`+spark+`</ol>`;
        container.innerHTML=spark; 
        console.log(spark);

      }
    
}
   
//used in handship1 and handship2 and handship3 for page making
function makePagefirst(id ,p){
  var count=0;
  for(let m=0;m<6;m++){
     if(m<id){
      count +=lenges[m];
    }
  }
  let html='';
  if(p===1){
   for(let l=0;l<10;l++){
    if(lenges[parseInt(id)]>l){
    html+=starshipWhich[count+l];
    }else{
    html += '-';
    }
   }
  }else{
    for(let l=0;l<10;l++){
      if(lenges[parseInt(id)]>l+10){
      html+=starshipWhich[count+l+10];
      }else{
      html += '-';
      }
     }
  }
  return html;
}
function handleF(t){
  let container= document.querySelector('.container');
  container.innerHTML=shipM[t];
  console.log('i am here');
}
var ships=[];

//starships
renderStarShips();

renderShipsInfo();//do not want undefined

let conty=document.createElement('span');


setTimeout(shipHandler, time2+time3);


function shipHandler(){
  for (let u=0;u<shashasha.length;u++){
    document.querySelector('#sh'+shashasha[u]).addEventListener('click',()=>handleF(t));
  }
      
  
}

const starships1 = document.getElementById('sh1');
starships1.addEventListener('click',()=> handleShip2('0'));
starships1.addEventListener('dblclick',()=> handleShip3('0'));

const starships2 = document.getElementById('sh2');
starships2.addEventListener('click',()=> handleShip2('1'));
starships2.addEventListener('dblclick',()=> handleShip3('1'));

const starships3 = document.getElementById('sh3');
starships3.addEventListener('click',()=> handleShip2('2'));
starships3.addEventListener('dblclick',()=> handleShip3('2'));



const starships4 = document.getElementById('sh4');
starships4.addEventListener('click', ()=> handleShip2('3'));
starships4.addEventListener('dblclick', ()=> handleShip3('3'));

const starships5 = document.getElementById('sh5');
starships5.addEventListener('click',()=> handleShip2('4'));
starships5.addEventListener('dblclick',()=> handleShip3('4'));

const starships6 = document.getElementById('sh6');
starships6.addEventListener('click',()=> handleShip2('5'));
starships6.addEventListener('dblclick',()=> handleShip3('5'));


const sparkle=document.getElementById('back__btn');
//sparkle.addEventListener('dblclick',handleDouBack());//for changing page