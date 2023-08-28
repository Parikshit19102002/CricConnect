

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6714d07175msh71382736f31ed69p1b3eb2jsn2999f991b44a',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };
  
  function fetches(url){
  
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
       console.log(data);
    })
    .catch(error => {
      console.log('Error!!!!!');
    });
  }
  
  
  
  let livee=document.querySelector(".livee");
  
  livee.addEventListener("click",()=>{
     let commons=document.querySelectorAll(".com");
  
     for(let common of commons){
         if(common.classList.contains("diff")){
          common.classList.remove("diff");
         }
  
      livee.classList.add("diff");
     }
  })
  
  
  
  let recent=document.querySelector(".recent");
  
  recent.addEventListener("click",()=>{
     let commons=document.querySelectorAll(".com");
  
     for(let common of commons){
         if(common.classList.contains("diff")){
          common.classList.remove("diff");
         }
     }
     recent.classList.add("diff");
     
     
   let results= fetches('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent');
   
  
  })
  
  
  
  let upcoming=document.querySelector(".upcoming");
  
  upcoming.addEventListener("click",()=>{
     let commons=document.querySelectorAll(".com");
  
     for(let common of commons){
         if(common.classList.contains("diff")){
          common.classList.remove("diff");
         }
  
      upcoming.classList.add("diff");
     }
  })
  
  
  
  
  
  let league=document.querySelector(".league");
  
  league.addEventListener("click",()=>{
     let commons=document.querySelectorAll(".common");
  
     for(let common of commons){
         if(common.classList.contains("dark_international")){
          common.classList.remove("dark_international");
         }
  
      league.classList.add("dark_international");
     }
  })
  
  
  let international=document.querySelector(".international");
  
  international.addEventListener("click",()=>{
     let commons=document.querySelectorAll(".common");
  
     for(let common of commons){
         if(common.classList.contains("dark_international")){
          common.classList.remove("dark_international");
         }
  
         international.classList.add("dark_international");
     }
  })
  
  
  let domestic=document.querySelector(".domestic");
  
  domestic.addEventListener("click",()=>{
     let commons=document.querySelectorAll(".common");
  
     for(let common of commons){
         if(common.classList.contains("dark_international")){
          common.classList.remove("dark_international");
         }
  
      domestic.classList.add("dark_international");
     }
  })
  
  
  let women=document.querySelector(".women");
  
  women.addEventListener("click",()=>{
     let commons=document.querySelectorAll(".common");
  
     for(let common of commons){
         if(common.classList.contains("dark_international")){
          common.classList.remove("dark_international");
         }
  
      women.classList.add("dark_international");
     }
  })