const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e1aa14092bmsh46a7b7297d0ff9fp1a1491jsn9956860de603',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};




<<<<<<< HEAD
=======


>>>>>>> dfdaaf74a58a095ebee0ef3c0cce40777e30b44f
let common_class=document.querySelectorAll(".common_class");
   let batting_test_batting=document.querySelector(".batting_test_batting");

  for(let common_clas of common_class){
    if(!common_clas.classList.contains("remove"))
    common_clas.classList.add("remove");
  }

  batting_test_batting.classList.remove("remove");

  let com_class=document.querySelectorAll(".com_class");
  let batting_ranking_list=document.querySelector(".batting_ranking_list");
  for(let com_clas of com_class){
    if(!com_clas.classList.contains("remove"))
    com_clas.classList.add("remove");
  }

  batting_ranking_list.classList.remove("remove");
  
  fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen?formatType=test',options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
     }
  return response.json();
  })
  .then(data => {

    console.log(data);

  

  let ranks=data.rank;


  for(let rankss of ranks){

  let box=document.querySelector(".box");

  let row_inside_box=document.createElement("div");
  row_inside_box.classList.add("row_inside_box");
  
  /*create one row*/
  let pos=document.createElement("div");
  pos.classList.add("pos");
  pos.textContent=rankss.rank;

  let pla=document.createElement("div");
  pla.classList.add("pla");
  

  let pla_name=document.createElement("div");
  pla_name.classList.add("pla_name");

  let inside_player_name=document.createElement("div");
  inside_player_name.classList.add("inside_player_name");
  inside_player_name.textContent=rankss.name;

  let anchor=document.createElement("a");
  anchor.href="player_info.html";

  async function img_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();
      
      let player_img_box=document.createElement("div");
      player_img_box.classList.add("player_img_box");

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);


      imgElement.addEventListener('error', () => {
        imgElement.parentNode.removeChild(imgElement);
      });

      pla.prepend(imgElement);
       
    } catch (error) {
      console.log(error);
    }
  }

  img_fetch();
  
  anchor.appendChild(inside_player_name);
  pla_name.appendChild(anchor);
  pla.appendChild(pla_name);

  let requiredId=rankss.id;
  inside_player_name.addEventListener("click", () => {
  localStorage.setItem('globalId', requiredId);
  window.location.href = `player_info.html`; 
  });

  let county_name=document.createElement("div");
  county_name.classList.add("county_name");
  county_name.textContent=rankss.country;
  pla_name.appendChild(county_name);


  let avg=document.createElement("div");
  avg.classList.add("avg");
  avg.textContent=rankss.avg;

  let rat=document.createElement("div");
  rat.classList.add("rat");
  rat.textContent=rankss.points;

  row_inside_box.appendChild(pos);
  row_inside_box.appendChild(pla);
  row_inside_box.appendChild(avg);
  row_inside_box.appendChild(rat);

  box.appendChild(row_inside_box);

  }

  })
  .catch(()=>{
    console.log("Error!!!!");
  })




/*add event listerner at initial phase*/

  
 com_class=document.querySelectorAll(".com_class");
 batting_ranking_list=document.querySelector(".batting_ranking_list");
for(let com_clas of com_class){
  if(!com_clas.classList.contains("remove"))
  com_clas.classList.add("remove");
}

batting_ranking_list.classList.remove("remove"); 


let batting=document.querySelector(".batting");


let test=document.querySelector(".test");

test.addEventListener("click",()=>{

let commons=document.querySelectorAll(".com");

for(let common of commons){
  if(common.classList.contains("color_green")){
    common.classList.remove("color_green");
  }
}

test.classList.add("color_green");

let common_class=document.querySelectorAll(".common_class");
let batting_test_batting=document.querySelector(".batting_test_batting");

for(let common_clas of common_class){
 if(!common_clas.classList.contains("remove"))
 common_clas.classList.add("remove");
}

batting_test_batting.classList.remove("remove");

fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen?formatType=test',options)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
   }
return response.json();
})
.then(data => {

  console.log(data);



let ranks=data.rank;
let box=document.querySelector(".batting_test_batting .box");

for(let rankss of ranks){

let row_inside_box=document.createElement("div");
row_inside_box.classList.add("row_inside_box");

/*create one row*/
let pos=document.createElement("div");
pos.classList.add("pos");
pos.textContent=rankss.rank;

let pla=document.createElement("div");
pla.classList.add("pla");


let pla_name=document.createElement("div");
pla_name.classList.add("pla_name");

let inside_player_name=document.createElement("div");
inside_player_name.classList.add("inside_player_name");
inside_player_name.textContent=rankss.name;

let anchor=document.createElement("a");
anchor.href="player_info.html";

async function img_fetch(){
  try {
    const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
    const imageBlob = await imageResponse.blob();
    
    let player_img_box=document.createElement("div");
    player_img_box.classList.add("player_img_box");

    let imgElement = document.createElement("img");
    imgElement.src = URL.createObjectURL(imageBlob);


    imgElement.addEventListener('error', () => {
      imgElement.parentNode.removeChild(imgElement);
    });

    pla.prepend(imgElement);
     
  } catch (error) {
    console.log(error);
  }
}

img_fetch();

anchor.appendChild(inside_player_name);
pla_name.appendChild(anchor);
pla.appendChild(pla_name);

let requiredId=rankss.id;
inside_player_name.addEventListener("click", () => {
localStorage.setItem('globalId', requiredId);
window.location.href = `player_info.html`; 
});

let county_name=document.createElement("div");
county_name.classList.add("county_name");
county_name.textContent=rankss.country;
pla_name.appendChild(county_name);


let avg=document.createElement("div");
avg.classList.add("avg");
avg.textContent=rankss.avg;

let rat=document.createElement("div");
rat.classList.add("rat");
rat.textContent=rankss.points;

row_inside_box.appendChild(pos);
row_inside_box.appendChild(pla);
row_inside_box.appendChild(avg);
row_inside_box.appendChild(rat);

box.appendChild(row_inside_box);

}


})
.catch(()=>{
  console.log("Error!!!!");
})

})

/*test end*/





/*odi*/

let odi=document.querySelector(".odi");

odi.addEventListener("click",()=>{

let commons=document.querySelectorAll(".com");

for(let common of commons){
  if(common.classList.contains("color_green")){
    common.classList.remove("color_green");
  }
}

odi.classList.add("color_green");

let common_class=document.querySelectorAll(".common_class");
let batting_odi_batting=document.querySelector(".batting_odi_batting");

for(let common_clas of common_class){
 if(!common_clas.classList.contains("remove"))
 common_clas.classList.add("remove");
}

batting_odi_batting.classList.remove("remove");

fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen?formatType=odi',options)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
   }
return response.json();
})
.then(data => {

  console.log(data);

let ranks=data.rank;


for(let rankss of ranks){

let box=document.querySelector(".batting_odi_batting .box");

let row_inside_box=document.createElement("div");
row_inside_box.classList.add("row_inside_box");

/*create one row*/
let pos=document.createElement("div");
pos.classList.add("pos");
pos.textContent=rankss.rank;

let pla=document.createElement("div");
pla.classList.add("pla");


let pla_name=document.createElement("div");
pla_name.classList.add("pla_name");

let inside_player_name=document.createElement("div");
inside_player_name.classList.add("inside_player_name");
inside_player_name.textContent=rankss.name;

let anchor=document.createElement("a");
anchor.href="player_info.html";

async function img_fetch(){
  try {
    const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
    const imageBlob = await imageResponse.blob();
    
    let player_img_box=document.createElement("div");
    player_img_box.classList.add("player_img_box");

    let imgElement = document.createElement("img");
    imgElement.src = URL.createObjectURL(imageBlob);


    imgElement.addEventListener('error', () => {
      imgElement.parentNode.removeChild(imgElement);
    });

    pla.prepend(imgElement);
     
  } catch (error) {
    console.log(error);
  }
}

img_fetch();

anchor.appendChild(inside_player_name);
pla_name.appendChild(anchor);
pla.appendChild(pla_name);

let requiredId=rankss.id;
inside_player_name.addEventListener("click", () => {
localStorage.setItem('globalId', requiredId);
window.location.href = `player_info.html`; 
});

let county_name=document.createElement("div");
county_name.classList.add("county_name");
county_name.textContent=rankss.country;
pla_name.appendChild(county_name);


let avg=document.createElement("div");
avg.classList.add("avg");
avg.textContent=rankss.avg;

let rat=document.createElement("div");
rat.classList.add("rat");
rat.textContent=rankss.points;

row_inside_box.appendChild(pos);
row_inside_box.appendChild(pla);
row_inside_box.appendChild(avg);
row_inside_box.appendChild(rat);

box.appendChild(row_inside_box);

}


})
.catch(()=>{
  console.log("Error!!!!");
})

})

/*odi end*/



/*t20*/

let t20=document.querySelector(".t20");

t20.addEventListener("click",()=>{

let commons=document.querySelectorAll(".com");

for(let common of commons){
  if(common.classList.contains("color_green")){
    common.classList.remove("color_green");
  }
}

t20.classList.add("color_green");

let common_class=document.querySelectorAll(".common_class");
let batting_t20_batting=document.querySelector(".batting_t20_batting");

for(let common_clas of common_class){
 if(!common_clas.classList.contains("remove"))
 common_clas.classList.add("remove");
}

batting_t20_batting.classList.remove("remove");

fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen?formatType=t20',options)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
   }
return response.json();
})
.then(data => {

  console.log(data);

let ranks=data.rank;


for(let rankss of ranks){

let box=document.querySelector(".batting_t20_batting .box");

let row_inside_box=document.createElement("div");
row_inside_box.classList.add("row_inside_box");

/*create one row*/
let pos=document.createElement("div");
pos.classList.add("pos");
pos.textContent=rankss.rank;

let pla=document.createElement("div");
pla.classList.add("pla");


let pla_name=document.createElement("div");
pla_name.classList.add("pla_name");

let inside_player_name=document.createElement("div");
inside_player_name.classList.add("inside_player_name");
inside_player_name.textContent=rankss.name;

let anchor=document.createElement("a");
anchor.href="player_info.html";

async function img_fetch(){
  try {
    const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
    const imageBlob = await imageResponse.blob();
    
    let player_img_box=document.createElement("div");
    player_img_box.classList.add("player_img_box");

    let imgElement = document.createElement("img");
    imgElement.src = URL.createObjectURL(imageBlob);


    imgElement.addEventListener('error', () => {
      imgElement.parentNode.removeChild(imgElement);
    });

    pla.prepend(imgElement);
     
  } catch (error) {
    console.log(error);
  }
}

img_fetch();

anchor.appendChild(inside_player_name);
pla_name.appendChild(anchor);
pla.appendChild(pla_name);

let requiredId=rankss.id;
inside_player_name.addEventListener("click", () => {
localStorage.setItem('globalId', requiredId);
window.location.href = `player_info.html`; 
});

let county_name=document.createElement("div");
county_name.classList.add("county_name");
county_name.textContent=rankss.country;
pla_name.appendChild(county_name);


let avg=document.createElement("div");
avg.classList.add("avg");
avg.textContent=rankss.avg;

let rat=document.createElement("div");
rat.classList.add("rat");
rat.textContent=rankss.points;

row_inside_box.appendChild(pos);
row_inside_box.appendChild(pla);
row_inside_box.appendChild(avg);
row_inside_box.appendChild(rat);

box.appendChild(row_inside_box);

}


})
.catch(()=>{
  console.log("Error!!!!");
})

})


/*end*/











/*batting*/





  batting.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".common");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

   batting.classList.add("color_green");
  
    let com_class=document.querySelectorAll(".com_class");
    let batting_ranking_list=document.querySelector(".batting_ranking_list");
    for(let com_clas of com_class){
      if(!com_clas.classList.contains("remove"))
      com_clas.classList.add("remove");
    }
  
    batting_ranking_list.classList.remove("remove");





    /*when open*/

    commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }
    
    let tt=document.querySelector(".test");
    tt.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let batting_test_batting=document.querySelector(".batting_test_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   batting_test_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen?formatType=test',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
  
  
    let ranks=data.rank;
    let box=document.querySelector(".batting_test_batting .box");
  
    for(let rankss of ranks){
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.avg;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   
   /*when open end*/








   
   /*test*/

   let test=document.querySelector(".test");

   test.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

    test.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let batting_test_batting=document.querySelector(".batting_test_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   batting_test_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen?formatType=test',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
  
  
    let ranks=data.rank;
    let box=document.querySelector(".batting_test_batting .box");
  
    for(let rankss of ranks){
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.avg;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   })

   /*test end*/





   /*odi*/

   let odi=document.querySelector(".odi");

   odi.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

    odi.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let batting_odi_batting=document.querySelector(".batting_odi_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   batting_odi_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen?formatType=odi',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
    let ranks=data.rank;
  
  
    for(let rankss of ranks){
  
    let box=document.querySelector(".batting_odi_batting .box");
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.avg;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   })
   
   /*odi end*/



   /*t20*/

   let t20=document.querySelector(".t20");

   t20.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

    t20.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let batting_t20_batting=document.querySelector(".batting_t20_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   batting_t20_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen?formatType=t20',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
    let ranks=data.rank;
  
  
    for(let rankss of ranks){
  
    let box=document.querySelector(".batting_t20_batting .box");
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.avg;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   })


   /*t20 end*/

  })


/*batting end*/













  /*team*/

  let team=document.querySelector(".team");

  team.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".common");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

    team.classList.add("color_green");
  
    let com_class=document.querySelectorAll(".com_class");
    let team_ranking_list=document.querySelector(".team_ranking_list");
    for(let com_clas of com_class){
      if(!com_clas.classList.contains("remove"))
      com_clas.classList.add("remove");
    }
  
    team_ranking_list.classList.remove("remove");





    /*when open*/

    commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }
    
    let tt=document.querySelector(".test");
    tt.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let team_test_batting=document.querySelector(".team_test_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   team_test_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/teams?formatType=test',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
  
  
    let ranks=data.rank;
    let box=document.querySelector(".team_test_batting .box");
  
    for(let rankss of ranks){
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.imageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.matches;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   
   /*when open end*/








   
   /*test*/

   let test=document.querySelector(".test");

   test.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

    test.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let team_test_batting=document.querySelector(".team_test_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   team_test_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/teams?formatType=test',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
  
  
    let ranks=data.rank;
    let box=document.querySelector(".team_test_batting .box");
  
    for(let rankss of ranks){
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.imageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.matches;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   })

   /*test end*/





   /*odi*/

   let odi=document.querySelector(".odi");

   odi.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

    odi.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let team_odi_batting=document.querySelector(".team_odi_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   team_odi_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/teams?formatType=odi',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
    let ranks=data.rank;
  
  
    for(let rankss of ranks){
  
    let box=document.querySelector(".team_odi_batting .box");
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.imageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.matches;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   })
   
   /*odi end*/



   /*t20*/

   let t20=document.querySelector(".t20");

   t20.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

    t20.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let team_t20_batting=document.querySelector(".team_t20_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   team_t20_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/teams?formatType=t20',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
    let ranks=data.rank;
  
  
    for(let rankss of ranks){
  
    let box=document.querySelector(".team_t20_batting .box");
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.imageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.matches;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   })


   /*t20 end*/

  })

  /*team end*/




  /*all-rounder*/


  let allrounder=document.querySelector(".allrounder");

  allrounder.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".common");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

   allrounder.classList.add("color_green");
  
    let com_class=document.querySelectorAll(".com_class");
    let allrounder_ranking_list=document.querySelector(".allrounder_ranking_list");
    for(let com_clas of com_class){
      if(!com_clas.classList.contains("remove"))
      com_clas.classList.add("remove");
    }
  
    allrounder_ranking_list.classList.remove("remove");





    /*when open*/

    commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }
    
    let tt=document.querySelector(".test");
    tt.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let allrounder_test_batting=document.querySelector(".allrounder_test_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   allrounder_test_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/allrounders?formatType=test',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
  
  
    let ranks=data.rank;
    let box=document.querySelector(".allrounder_test_batting .box");
  
    for(let rankss of ranks){
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.avg;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   
   /*when open end*/








   
   /*test*/

   let test=document.querySelector(".test");

   test.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

    test.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let allrounder_test_batting=document.querySelector(".allrounder_test_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   allrounder_test_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/allrounders?formatType=test',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
  
  
    let ranks=data.rank;
    let box=document.querySelector(".allrounder_test_batting .box");
  
    for(let rankss of ranks){
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.avg;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   })

   /*test end*/





   /*odi*/

   let odi=document.querySelector(".odi");

   odi.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

    odi.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let allrounder_odi_batting=document.querySelector(".allrounder_odi_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   allrounder_odi_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/allrounders?formatType=odi',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
    let ranks=data.rank;
  
  
    for(let rankss of ranks){
  
    let box=document.querySelector(".allrounder_odi_batting .box");
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.avg;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   })
   
   /*odi end*/



   /*t20*/

   let t20=document.querySelector(".t20");

   t20.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

    t20.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let allrounder_t20_batting=document.querySelector(".allrounder_t20_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   allrounder_t20_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/allrounders?formatType=t20',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
    let ranks=data.rank;
  
  
    for(let rankss of ranks){
  
    let box=document.querySelector(".allrounder_t20_batting .box");
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.avg;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   })


   /*t20 end*/

  })


  /*all-rounder end*/
 














  /*bowling*/


  let bowling=document.querySelector(".bowling");

  bowling.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".common");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

   bowling.classList.add("color_green");
  
    let com_class=document.querySelectorAll(".com_class");
    let bowling_ranking_list=document.querySelector(".bowling_ranking_list");
    for(let com_clas of com_class){
      if(!com_clas.classList.contains("remove"))
      com_clas.classList.add("remove");
    }
  
    bowling_ranking_list.classList.remove("remove");





    /*when open*/

    commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }
    
    let tt=document.querySelector(".test");
    tt.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let bowling_test_batting=document.querySelector(".bowling_test_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   bowling_test_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/bowlers?formatType=test',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
  
  
    let ranks=data.rank;
    let box=document.querySelector(".bowling_test_batting .box");
  
    for(let rankss of ranks){
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.avg;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   
   /*when open end*/








   
   /*test*/

   let test=document.querySelector(".test");

   test.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

    test.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let bowling_test_batting=document.querySelector(".bowling_test_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   bowling_test_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/bowlers?formatType=test',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
  
  
    let ranks=data.rank;
    let box=document.querySelector(".bowling_test_batting .box");
  
    for(let rankss of ranks){
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.avg;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   })

   /*test end*/





   /*odi*/

   let odi=document.querySelector(".odi");

   odi.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

    odi.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let bowling_odi_batting=document.querySelector(".bowling_odi_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   bowling_odi_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/bowlers?formatType=odi',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
    let ranks=data.rank;
  
  
    for(let rankss of ranks){
  
    let box=document.querySelector(".bowling_odi_batting .box");
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.avg;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   })
   
   /*odi end*/



   /*t20*/

   let t20=document.querySelector(".t20");

   t20.addEventListener("click",()=>{

    let commons=document.querySelectorAll(".com");

    for(let common of commons){
      if(common.classList.contains("color_green")){
        common.classList.remove("color_green");
      }
    }

    t20.classList.add("color_green");

    let common_class=document.querySelectorAll(".common_class");
    let bowling_t20_batting=document.querySelector(".bowling_t20_batting");
 
   for(let common_clas of common_class){
     if(!common_clas.classList.contains("remove"))
     common_clas.classList.add("remove");
   }
 
   bowling_t20_batting.classList.remove("remove");

    fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/bowlers?formatType=t20',options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
       }
    return response.json();
    })
    .then(data => {
  
      console.log(data);
  
    let ranks=data.rank;
  
  
    for(let rankss of ranks){
  
    let box=document.querySelector(".bowling_t20_batting .box");
  
    let row_inside_box=document.createElement("div");
    row_inside_box.classList.add("row_inside_box");
    
    /*create one row*/
    let pos=document.createElement("div");
    pos.classList.add("pos");
    pos.textContent=rankss.rank;
  
    let pla=document.createElement("div");
    pla.classList.add("pla");
    
  
    let pla_name=document.createElement("div");
    pla_name.classList.add("pla_name");
  
    let inside_player_name=document.createElement("div");
    inside_player_name.classList.add("inside_player_name");
    inside_player_name.textContent=rankss.name;
  
    let anchor=document.createElement("a");
    anchor.href="player_info.html";
  
    async function img_fetch(){
      try {
        const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${rankss.faceImageId}/i.jpg?p=de&d=high`,options);
        const imageBlob = await imageResponse.blob();
        
        let player_img_box=document.createElement("div");
        player_img_box.classList.add("player_img_box");
  
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);
  
  
        imgElement.addEventListener('error', () => {
          imgElement.parentNode.removeChild(imgElement);
        });
  
        pla.prepend(imgElement);
         
      } catch (error) {
        console.log(error);
      }
    }
  
    img_fetch();
    
    anchor.appendChild(inside_player_name);
    pla_name.appendChild(anchor);
    pla.appendChild(pla_name);
  
    let requiredId=rankss.id;
    inside_player_name.addEventListener("click", () => {
    localStorage.setItem('globalId', requiredId);
    window.location.href = `player_info.html`; 
    });
  
    let county_name=document.createElement("div");
    county_name.classList.add("county_name");
    county_name.textContent=rankss.country;
    pla_name.appendChild(county_name);
  
  
    let avg=document.createElement("div");
    avg.classList.add("avg");
    avg.textContent=rankss.avg;
  
    let rat=document.createElement("div");
    rat.classList.add("rat");
    rat.textContent=rankss.points;
  
    row_inside_box.appendChild(pos);
    row_inside_box.appendChild(pla);
    row_inside_box.appendChild(avg);
    row_inside_box.appendChild(rat);
  
    box.appendChild(row_inside_box);
  
    }

  
    })
    .catch(()=>{
      console.log("Error!!!!");
    })
    
   })


   /*t20 end*/

  })



  /*bowling end*/


