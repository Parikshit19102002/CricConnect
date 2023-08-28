const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ebed3617b6msh0fb17948541bf0fp10e209jsnaf57a1f4fa1a',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};


       let notfound=document.querySelector(".NotFound");
        if(!notfound.classList.contains("notfound")){
      
        notfound.classList.add("notfound");
        }

fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live', options)
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => {
       console.log(data);

       let notfound=document.querySelector(".NotFound");
        if(!notfound.classList.contains("notfound")){
      
        notfound.classList.add("notfound");
        }

       let international=document.querySelector(".international");

       if( data.typeMatches[0].matchType=="International"){

        let notfound=document.querySelector(".NotFound");
        if(!notfound.classList.contains("notfound")){
      
        notfound.classList.add("notfound");
        }
  
      
       let commons=document.querySelectorAll(".common");

       for(let common of commons){
       if(common.classList.contains("dark_international")){
        common.classList.remove("dark_international");
       }
       
       international.classList.add("dark_international");
       }

       /**********/ 
       let liv_international=document.querySelector(".liv_international");



       if(liv_international.classList.contains("to_remove"))
       liv_international.classList.remove("to_remove");

       let liv_domestic=document.querySelector(".liv_domestic");
       if(!liv_domestic.classList.contains("to_remove"))
       liv_domestic.classList.add("to_remove");

       let liv_league=document.querySelector(".liv_league");
       if(!liv_league.classList.contains("to_remove"))
       liv_league.classList.add("to_remove");

       let liv_women=document.querySelector(".liv_women");
       if(!liv_women.classList.contains("to_remove"))
       liv_women.classList.add("to_remove");

       let recent_match_types=data.typeMatches[0].seriesMatches;
       
       /*series*/

       for(let recent_match_type of recent_match_types){
        

        if(recent_match_type.seriesAdWrapper){
        
        let match_heading=document.createElement("div");
        match_heading.classList.add("match_heading");

        match_heading.textContent=recent_match_type.seriesAdWrapper.matches[0].matchInfo.seriesName;

        
        liv_international.appendChild(match_heading);

        let to_color_black=document.createElement("div");
        to_color_black.classList.add("to_color_black");


        let p_series=document.createElement("div");
        p_series.classList.add("p_series");
      
        let seriesAds=recent_match_type.seriesAdWrapper.matches;

        for(let seriesAd of seriesAds){

        let p_series_match=document.createElement("div");
        p_series_match.classList.add("p_series_match");

        let xvsy=document.createElement("xvsy");
        xvsy.classList.add("xvsy");
        
        let inside_xvsy=document.createElement("div");
        inside_xvsy.classList.add("inside_xvsy");
        inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

        xvsy.appendChild(inside_xvsy);


        const timestamp = Number(seriesAd.matchInfo.startDate);
        const date = new Date(timestamp);
        
        const dateFormatOptions = { 
          month: 'long', 
          day: 'numeric'
        };
        
        const timeFormatOptions = {
          hour: 'numeric', 
          hour12: true
        };
        
      const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
      const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
        
       
      let date_time=document.createElement("div");
      date_time.classList.add("date_time");
      date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;

 

        let match_number=document.createElement("div");
        match_number.classList.add("match_number");
        match_number.textContent=seriesAd.matchInfo.matchDesc;
        xvsy.appendChild(match_number);

        let team=document.createElement("div");
        team.classList.add("team");
        let team1=document.createElement("div");
        team1.classList.add("team1");

        let team1_content=document.createElement("div");
        team1_content.classList.add("team1_content");
        team1_content.textContent=seriesAd.matchInfo.team1.teamName;

        team1.appendChild(team1_content);

        let team2=document.createElement("div");
        team1.classList.add("team2");

        let team2_content=document.createElement("div");
        team2_content.classList.add("team2_content");
        team2_content.textContent=seriesAd.matchInfo.team2.teamName;
        team2.appendChild(team2_content);
        

        let team1_img_box=document.createElement("div");
        team1_img_box.classList.add("team1_img_box");
        let team2_img_box=document.createElement("div");
        team2_img_box.classList.add("team2_img_box");
        
        
        async function img_fetch(){
        try {
          const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
          const imageBlob = await imageResponse.blob();
  
          let imgElement = document.createElement("img");
          imgElement.src = URL.createObjectURL(imageBlob);
          team1_img_box.append(imgElement);
        } catch (error) {
          console.log(error);
        }
      }

      img_fetch();

      async function im_fetch(){
        try {
          const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
          const imageBlob = await imageResponse.blob();
  
          let imgElement = document.createElement("img");
          imgElement.src = URL.createObjectURL(imageBlob);
          team2_img_box.append(imgElement);
        } catch (error) {
          console.log(error);
        }
      }

      im_fetch();

      let score1=document.createElement("div");
      score1.classList.add("score1");

      let score2=document.createElement("div");
      score2.classList.add("score2");

      /*score start*/

      score1_data=document.createElement("div");
      score1_data.classList.add("score1_data");

      let for_over=document.createElement("div");
      for_over.classList.add("for_over");
      
      if(seriesAd.matchScore){
      if(seriesAd.matchScore.team1Score)
      score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;

      for_over.classList.add("for_over");
      for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
      }

      score1_data.appendChild(for_over);

      score2_data=document.createElement("div");
      score2_data.classList.add("score2_data");

      let for_over1=document.createElement("div");
      for_over1.classList.add("for_over");
      
      if(seriesAd.matchScore){
      if(seriesAd.matchScore.team2Score)
      score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;

      for_over1.classList.add("for_over");
      for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
      }

      score2_data.appendChild(for_over1);

      /*score end*/

      score1.appendChild(team1_img_box);
      score1.appendChild(score1_data);
      score2.appendChild(team2_img_box);
      score2.appendChild(score2_data);

      
      team1.prepend(score1);
      team2.prepend(score2);

        

        team.appendChild(team1);
        team.appendChild(team2);

      let match_status=document.createElement("div");
      match_status.classList.add("match_status");
      match_status.textContent=seriesAd.matchInfo.status;



        p_series_match.appendChild(xvsy);
        p_series_match.appendChild(date_time);
        p_series_match.appendChild(team);

        p_series_match.appendChild(match_status);

        p_series.appendChild(p_series_match);
          
        }
        
        to_color_black.appendChild(p_series);
        liv_international.appendChild(to_color_black);
       }

       
      }   
}
else{
  let notfound=document.querySelector(".NotFound");
  if(notfound.classList.contains("notfound")){
      
    notfound.classList.remove("notfound");
  }
}





       
       /*international_recent*/

        
  
       international=document.querySelector(".international");

       international.addEventListener("click",()=>{
       
         let notfound=document.querySelector(".NotFound");
         if(!notfound.classList.contains("notfound")){
             
           notfound.classList.add("notfound");
         }
       
         let commons=document.querySelectorAll(".common");
        
         for(let common of commons){
             if(common.classList.contains("dark_international")){
              common.classList.remove("dark_international");
             }
       
          international.classList.add("dark_international");
         }
         
         let liv_international=document.querySelector(".liv_international");
         if(liv_international.classList.contains("to_remove"))
          liv_international.classList.remove("to_remove");
       
          let liv_domestic=document.querySelector(".liv_domestic");
          if(!liv_domestic.classList.contains("to_remove"))
          liv_domestic.classList.add("to_remove");
       
          let liv_league=document.querySelector(".liv_league");
          if(!liv_league.classList.contains("to_remove"))
          liv_league.classList.add("to_remove");
       
          let liv_women=document.querySelector(".liv_women");
          if(!liv_women.classList.contains("to_remove"))
          liv_women.classList.add("to_remove");
       
          let i=0;
       
          for(let typeMatchess of data.typeMatches){
                
           if(typeMatchess.matchType==="International"){
             break;
           }
       
           i++;
          }
       
       
         if(data.typeMatches[i] && data.typeMatches[i].matchType=="International"){
       
         let recent_match_types=data.typeMatches[i].seriesMatches;
          
          /*series*/
       
          for(let recent_match_type of recent_match_types){
           
       
           if(recent_match_type.seriesAdWrapper){
           
           let match_heading=document.createElement("div");
           match_heading.classList.add("match_heading");
       
           match_heading.textContent=recent_match_type.seriesAdWrapper.matches[0].matchInfo.seriesName;
       
           
           liv_international.appendChild(match_heading);
       
           let to_color_black=document.createElement("div");
           to_color_black.classList.add("to_color_black");
       
       
           let p_series=document.createElement("div");
           p_series.classList.add("p_series");
         
           let seriesAds=recent_match_type.seriesAdWrapper.matches;
       
           for(let seriesAd of seriesAds){
       
           let p_series_match=document.createElement("div");
           p_series_match.classList.add("p_series_match");
       
           let xvsy=document.createElement("xvsy");
           xvsy.classList.add("xvsy");
           
           let inside_xvsy=document.createElement("div");
           inside_xvsy.classList.add("inside_xvsy");
           inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;
       
           xvsy.appendChild(inside_xvsy);
       
       
           const timestamp = Number(seriesAd.matchInfo.startDate);
           const date = new Date(timestamp);
           
           const dateFormatOptions = { 
             month: 'long', 
             day: 'numeric'
           };
           
           const timeFormatOptions = {
             hour: 'numeric', 
             hour12: true
           };
           
         const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
         const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
           
          
         let date_time=document.createElement("div");
         date_time.classList.add("date_time");
         date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;
       
       
       
           let match_number=document.createElement("div");
           match_number.classList.add("match_number");
           match_number.textContent=seriesAd.matchInfo.matchDesc;
           xvsy.appendChild(match_number);
       
           let team=document.createElement("div");
           team.classList.add("team");
           let team1=document.createElement("div");
           team1.classList.add("team1");
       
           let team1_content=document.createElement("div");
           team1_content.classList.add("team1_content");
           team1_content.textContent=seriesAd.matchInfo.team1.teamName;
       
           team1.appendChild(team1_content);
       
           let team2=document.createElement("div");
           team1.classList.add("team2");
       
           let team2_content=document.createElement("div");
           team2_content.classList.add("team2_content");
           team2_content.textContent=seriesAd.matchInfo.team2.teamName;
           team2.appendChild(team2_content);
           
       
           let team1_img_box=document.createElement("div");
           team1_img_box.classList.add("team1_img_box");
           let team2_img_box=document.createElement("div");
           team2_img_box.classList.add("team2_img_box");
           
           
           async function img_fetch(){
           try {
             const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
             const imageBlob = await imageResponse.blob();
       
             let imgElement = document.createElement("img");
             imgElement.src = URL.createObjectURL(imageBlob);
             team1_img_box.append(imgElement);
           } catch (error) {
             console.log(error);
           }
         }
       
         img_fetch();
       
         async function im_fetch(){
           try {
             const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
             const imageBlob = await imageResponse.blob();
       
             let imgElement = document.createElement("img");
             imgElement.src = URL.createObjectURL(imageBlob);
             team2_img_box.append(imgElement);
           } catch (error) {
             console.log(error);
           }
         }
       
         im_fetch();
       
         let score1=document.createElement("div");
         score1.classList.add("score1");
       
         let score2=document.createElement("div");
         score2.classList.add("score2");
       
               /*score start*/

      score1_data=document.createElement("div");
      score1_data.classList.add("score1_data");

      let for_over=document.createElement("div");
      for_over.classList.add("for_over");
      
      if(seriesAd.matchScore){
      if(seriesAd.matchScore.team1Score)
      score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;

      for_over.classList.add("for_over");
      for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
      }

      score1_data.appendChild(for_over);

      score2_data=document.createElement("div");
      score2_data.classList.add("score2_data");

      let for_over1=document.createElement("div");
      for_over1.classList.add("for_over");
      
      if(seriesAd.matchScore){
      if(seriesAd.matchScore.team2Score)
      score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;

      for_over1.classList.add("for_over");
      for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
      }

      score2_data.appendChild(for_over1);

      /*score end*/
         
       
       
         score1.appendChild(team1_img_box);
         score1.appendChild(score1_data);
         score2.appendChild(team2_img_box);
         score2.appendChild(score2_data);
       
         
         team1.prepend(score1);
         team2.prepend(score2);
       
           
       
           team.appendChild(team1);
           team.appendChild(team2);
       
         let match_status=document.createElement("div");
         match_status.classList.add("match_status");
         match_status.textContent=seriesAd.matchInfo.status;
       
       
       
           p_series_match.appendChild(xvsy);
           p_series_match.appendChild(date_time);
           p_series_match.appendChild(team);
       
           p_series_match.appendChild(match_status);
       
           p_series.appendChild(p_series_match);
             
           }
           
           to_color_black.appendChild(p_series);
           liv_international.appendChild(to_color_black);
         }
          }
       
         }
         else{
       
           let notfound=document.querySelector(".NotFound");
           if(notfound.classList.contains("notfound")){
            
           notfound.classList.remove("notfound");
          }
       
         }
       
       })





      
/*league start*/



let league=document.querySelector(".league");

league.addEventListener("click",()=>{

  let notfound=document.querySelector(".NotFound");
  if(!notfound.classList.contains("notfound")){
      
    notfound.classList.add("notfound");
  }

  let commons=document.querySelectorAll(".common");
 
  for(let common of commons){
      if(common.classList.contains("dark_international")){
       common.classList.remove("dark_international");
      }

   league.classList.add("dark_international");
  }
  
  let liv_international=document.querySelector(".liv_international");
  if(!liv_international.classList.contains("to_remove"))
   liv_international.classList.add("to_remove");

   let liv_domestic=document.querySelector(".liv_domestic");
   if(!liv_domestic.classList.contains("to_remove"))
   liv_domestic.classList.add("to_remove");

   let liv_league=document.querySelector(".liv_league");
   if(liv_league.classList.contains("to_remove"))
   liv_league.classList.remove("to_remove");

   let liv_women=document.querySelector(".liv_women");
   if(!liv_women.classList.contains("to_remove"))
   liv_women.classList.add("to_remove");

   let i=0;

   for(let typeMatchess of data.typeMatches){
         
    if(typeMatchess.matchType==="League"){
      break;
    }

    i++;
   }


  if(data.typeMatches[i] && data.typeMatches[i].matchType=="League"){

  let recent_match_types=data.typeMatches[i].seriesMatches;
   
   /*series*/

   for(let recent_match_type of recent_match_types){
    

    if(recent_match_type.seriesAdWrapper){
    
    let match_heading=document.createElement("div");
    match_heading.classList.add("match_heading");

    match_heading.textContent=recent_match_type.seriesAdWrapper.matches[0].matchInfo.seriesName;

    
    liv_league.appendChild(match_heading);

    let to_color_black=document.createElement("div");
    to_color_black.classList.add("to_color_black");


    let p_series=document.createElement("div");
    p_series.classList.add("p_series");
  
    let seriesAds=recent_match_type.seriesAdWrapper.matches;

    for(let seriesAd of seriesAds){

    let p_series_match=document.createElement("div");
    p_series_match.classList.add("p_series_match");

    let xvsy=document.createElement("xvsy");
    xvsy.classList.add("xvsy");
    
    let inside_xvsy=document.createElement("div");
    inside_xvsy.classList.add("inside_xvsy");
    inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

    xvsy.appendChild(inside_xvsy);


    const timestamp = Number(seriesAd.matchInfo.startDate);
    const date = new Date(timestamp);
    
    const dateFormatOptions = { 
      month: 'long', 
      day: 'numeric'
    };
    
    const timeFormatOptions = {
      hour: 'numeric', 
      hour12: true
    };
    
  const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
  const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
    
   
  let date_time=document.createElement("div");
  date_time.classList.add("date_time");
  date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;



    let match_number=document.createElement("div");
    match_number.classList.add("match_number");
    match_number.textContent=seriesAd.matchInfo.matchDesc;
    xvsy.appendChild(match_number);

    let team=document.createElement("div");
    team.classList.add("team");
    let team1=document.createElement("div");
    team1.classList.add("team1");

    let team1_content=document.createElement("div");
    team1_content.classList.add("team1_content");
    team1_content.textContent=seriesAd.matchInfo.team1.teamName;

    team1.appendChild(team1_content);

    let team2=document.createElement("div");
    team1.classList.add("team2");

    let team2_content=document.createElement("div");
    team2_content.classList.add("team2_content");
    team2_content.textContent=seriesAd.matchInfo.team2.teamName;
    team2.appendChild(team2_content);
    

    let team1_img_box=document.createElement("div");
    team1_img_box.classList.add("team1_img_box");
    let team2_img_box=document.createElement("div");
    team2_img_box.classList.add("team2_img_box");
    
    
    async function img_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team1_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  img_fetch();

  async function im_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team2_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  im_fetch();

  let score1=document.createElement("div");
  score1.classList.add("score1");

  let score2=document.createElement("div");
  score2.classList.add("score2");

      score1_data=document.createElement("div");
      score1_data.classList.add("score1_data");

      let for_over=document.createElement("div");
      for_over.classList.add("for_over");
      
      if(seriesAd.matchScore){
      if(seriesAd.matchScore.team1Score)
      score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;

      for_over.classList.add("for_over");
      for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
      }

      score1_data.appendChild(for_over);

      score2_data=document.createElement("div");
      score2_data.classList.add("score2_data");

      let for_over1=document.createElement("div");
      for_over1.classList.add("for_over");
      
      if(seriesAd.matchScore){
      if(seriesAd.matchScore.team2Score)
      score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;

      for_over1.classList.add("for_over");
      for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
      }

      score2_data.appendChild(for_over1);
  


  score1.appendChild(team1_img_box);
  score1.appendChild(score1_data);
  score2.appendChild(team2_img_box);
  score2.appendChild(score2_data);

  
  team1.prepend(score1);
  team2.prepend(score2);

    

    team.appendChild(team1);
    team.appendChild(team2);

  let match_status=document.createElement("div");
  match_status.classList.add("match_status");
  match_status.textContent=seriesAd.matchInfo.status;



    p_series_match.appendChild(xvsy);
    p_series_match.appendChild(date_time);
    p_series_match.appendChild(team);

    p_series_match.appendChild(match_status);

    p_series.appendChild(p_series_match);
      
    }
    
    to_color_black.appendChild(p_series);
    liv_league.appendChild(to_color_black);
  }
   }

  }
  else{

    let notfound=document.querySelector(".NotFound");
    if(notfound.classList.contains("notfound")){
     
    notfound.classList.remove("notfound");
   }

  }

})



/*league_ end*/





/*domestic start*/

let domestic=document.querySelector(".domestic");

domestic.addEventListener("click",()=>{

  let notfound=document.querySelector(".NotFound");
  if(!notfound.classList.contains("notfound")){
    notfound.classList.add("notfound");
  }

  let commons=document.querySelectorAll(".common");
 
  for(let common of commons){
      if(common.classList.contains("dark_international")){
       common.classList.remove("dark_international");
      }

   domestic.classList.add("dark_international");
  }
  
  let liv_international=document.querySelector(".liv_international");
  if(!liv_international.classList.contains("to_remove"))
  liv_international.classList.add("to_remove");

   let liv_domestic=document.querySelector(".liv_domestic");
   if(liv_domestic.classList.contains("to_remove"))
   liv_domestic.classList.remove("to_remove");

   let liv_league=document.querySelector(".liv_league");
   if(!liv_league.classList.contains("to_remove"))
   liv_league.classList.add("to_remove");

   let liv_women=document.querySelector(".liv_women");
   if(!liv_women.classList.contains("to_remove"))
   liv_women.classList.add("to_remove");

   let i=0;

for(let typeMatchess of data.typeMatches){
      
 if(typeMatchess.matchType==="Domestic"){
   break;
 }

 i++;
}
  
  if(data.typeMatches[i] && data.typeMatches[i].matchType){

  let recent_match_types=data.typeMatches[i].seriesMatches;
   
   /*series*/

   for(let recent_match_type of recent_match_types){
    

    if(recent_match_type.seriesAdWrapper){
    
    let match_heading=document.createElement("div");
    match_heading.classList.add("match_heading");

    match_heading.textContent=recent_match_type.seriesAdWrapper.matches[0].matchInfo.seriesName;

    
    liv_domestic.appendChild(match_heading);

    let to_color_black=document.createElement("div");
    to_color_black.classList.add("to_color_black");


    let p_series=document.createElement("div");
    p_series.classList.add("p_series");
  
    let seriesAds=recent_match_type.seriesAdWrapper.matches;

    for(let seriesAd of seriesAds){

    let p_series_match=document.createElement("div");
    p_series_match.classList.add("p_series_match");

    let xvsy=document.createElement("xvsy");
    xvsy.classList.add("xvsy");
    
    let inside_xvsy=document.createElement("div");
    inside_xvsy.classList.add("inside_xvsy");
    inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

    xvsy.appendChild(inside_xvsy);


    const timestamp = Number(seriesAd.matchInfo.startDate);
    const date = new Date(timestamp);
    
    const dateFormatOptions = { 
      month: 'long', 
      day: 'numeric'
    };
    
    const timeFormatOptions = {
      hour: 'numeric', 
      hour12: true
    };
    
  const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
  const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
    
   
  let date_time=document.createElement("div");
  date_time.classList.add("date_time");
  date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;



    let match_number=document.createElement("div");
    match_number.classList.add("match_number");
    match_number.textContent=seriesAd.matchInfo.matchDesc;
    xvsy.appendChild(match_number);

    let team=document.createElement("div");
    team.classList.add("team");
    let team1=document.createElement("div");
    team1.classList.add("team1");

    let team1_content=document.createElement("div");
    team1_content.classList.add("team1_content");
    team1_content.textContent=seriesAd.matchInfo.team1.teamName;

    team1.appendChild(team1_content);

    let team2=document.createElement("div");
    team1.classList.add("team2");

    let team2_content=document.createElement("div");
    team2_content.classList.add("team2_content");
    team2_content.textContent=seriesAd.matchInfo.team2.teamName;
    team2.appendChild(team2_content);
    

    let team1_img_box=document.createElement("div");
    team1_img_box.classList.add("team1_img_box");
    let team2_img_box=document.createElement("div");
    team2_img_box.classList.add("team2_img_box");
    
    
    async function img_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team1_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  img_fetch();

  async function im_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team2_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  im_fetch();

  let score1=document.createElement("div");
  score1.classList.add("score1");

  let score2=document.createElement("div");
  score2.classList.add("score2");

        /*score start*/

        score1_data=document.createElement("div");
        score1_data.classList.add("score1_data");
  
        let for_over=document.createElement("div");
        for_over.classList.add("for_over");
        
        if(seriesAd.matchScore){
        if(seriesAd.matchScore.team1Score)
        if(seriesAd.matchScore.team1Score.inngs1){
        score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;
        
  
        for_over.classList.add("for_over");
        for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
        }
        }
  
        score1_data.appendChild(for_over);
  
        score2_data=document.createElement("div");
        score2_data.classList.add("score2_data");
  
        let for_over1=document.createElement("div");
        for_over1.classList.add("for_over");
        
        if(seriesAd.matchScore){
        if(seriesAd.matchScore.team2Score)
        if(seriesAd.matchScore.team2Score.inngs1){
        score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;
        
  
        for_over1.classList.add("for_over");
        for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
        }
        }
  
        score2_data.appendChild(for_over1);
  
        /*score end*/


  score1.appendChild(team1_img_box);
  score1.appendChild(score1_data);
  score2.appendChild(team2_img_box);
  score2.appendChild(score2_data);

  
  team1.prepend(score1);
  team2.prepend(score2);

    

    team.appendChild(team1);
    team.appendChild(team2);

  let match_status=document.createElement("div");
  match_status.classList.add("match_status");
  match_status.textContent=seriesAd.matchInfo.status;



    p_series_match.appendChild(xvsy);
    p_series_match.appendChild(date_time);
    p_series_match.appendChild(team);

    p_series_match.appendChild(match_status);

    p_series.appendChild(p_series_match);
      
    }
    
    to_color_black.appendChild(p_series);
    liv_domestic.appendChild(to_color_black);
   }

   
  }
}
else{
  let notfound=document.querySelector(".NotFound");
  if(notfound.classList.contains("notfound")){
      
    notfound.classList.remove("notfound");
  }
}


})




/*domestic end*/




/*women begin*/



let women=document.querySelector(".women");

women.addEventListener("click",()=>{

  let notfound=document.querySelector(".NotFound");
  if(!notfound.classList.contains("notfound")){
      
    notfound.classList.add("notfound");
  }

  let commons=document.querySelectorAll(".common");
 
  for(let common of commons){
      if(common.classList.contains("dark_international")){
       common.classList.remove("dark_international");
      }

   women.classList.add("dark_international");
  }
  
  let liv_international=document.querySelector(".liv_international");
  if(!liv_international.classList.contains("to_remove"))
   liv_international.classList.add("to_remove");

   let liv_domestic=document.querySelector(".liv_domestic");
   if(!liv_domestic.classList.contains("to_remove"))
   liv_domestic.classList.add("to_remove");

   let liv_league=document.querySelector(".liv_league");
   if(!liv_league.classList.contains("to_remove"))
   liv_league.classList.add("to_remove");

   let liv_women=document.querySelector(".liv_women");
   if(liv_women.classList.contains("to_remove"))
   liv_women.classList.remove("to_remove");
  
  let i=0;

for(let typeMatchess of data.typeMatches){
      
 if(typeMatchess.matchType=="Women"){
   break;
 }

 i++;
}

  if(data.typeMatches[i] && data.typeMatches[i].matchType){
  let recent_match_types=data.typeMatches[i].seriesMatches;
   
   /*series*/

   for(let recent_match_type of recent_match_types){
    

    if(recent_match_type.seriesAdWrapper){
    
    let match_heading=document.createElement("div");
    match_heading.classList.add("match_heading");

    match_heading.textContent=recent_match_type.seriesAdWrapper.matches[0].matchInfo.seriesName;

    
    liv_women.appendChild(match_heading);

    let to_color_black=document.createElement("div");
    to_color_black.classList.add("to_color_black");


    let p_series=document.createElement("div");
    p_series.classList.add("p_series");
  
    let seriesAds=recent_match_type.seriesAdWrapper.matches;

    for(let seriesAd of seriesAds){

    let p_series_match=document.createElement("div");
    p_series_match.classList.add("p_series_match");

    let xvsy=document.createElement("xvsy");
    xvsy.classList.add("xvsy");
    
    let inside_xvsy=document.createElement("div");
    inside_xvsy.classList.add("inside_xvsy");
    inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

    xvsy.appendChild(inside_xvsy);


    const timestamp = Number(seriesAd.matchInfo.startDate);
    const date = new Date(timestamp);
    
    const dateFormatOptions = { 
      month: 'long', 
      day: 'numeric'
    };
    
    const timeFormatOptions = {
      hour: 'numeric', 
      hour12: true
    };
    
  const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
  const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
    
   
  let date_time=document.createElement("div");
  date_time.classList.add("date_time");
  date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;



    let match_number=document.createElement("div");
    match_number.classList.add("match_number");
    match_number.textContent=seriesAd.matchInfo.matchDesc;
    xvsy.appendChild(match_number);

    let team=document.createElement("div");
    team.classList.add("team");
    let team1=document.createElement("div");
    team1.classList.add("team1");

    let team1_content=document.createElement("div");
    team1_content.classList.add("team1_content");
    team1_content.textContent=seriesAd.matchInfo.team1.teamName;

    team1.appendChild(team1_content);

    let team2=document.createElement("div");
    team1.classList.add("team2");

    let team2_content=document.createElement("div");
    team2_content.classList.add("team2_content");
    team2_content.textContent=seriesAd.matchInfo.team2.teamName;
    team2.appendChild(team2_content);
    

    let team1_img_box=document.createElement("div");
    team1_img_box.classList.add("team1_img_box");
    let team2_img_box=document.createElement("div");
    team2_img_box.classList.add("team2_img_box");
    
    
    async function img_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team1_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  img_fetch();

  async function im_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team2_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  im_fetch();

  let score1=document.createElement("div");
  score1.classList.add("score1");

  let score2=document.createElement("div");
  score2.classList.add("score2");

        /*score start*/

        score1_data=document.createElement("div");
        score1_data.classList.add("score1_data");
  
        let for_over=document.createElement("div");
        for_over.classList.add("for_over");
        
        if(seriesAd.matchScore){
        if(seriesAd.matchScore.team1Score)
        if(seriesAd.matchScore.team1Score.inngs1){
        score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;
        
  
        for_over.classList.add("for_over");
        for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
        }
        }
  
        score1_data.appendChild(for_over);
  
        score2_data=document.createElement("div");
        score2_data.classList.add("score2_data");
  
        let for_over1=document.createElement("div");
        for_over1.classList.add("for_over");
        
        if(seriesAd.matchScore){
        if(seriesAd.matchScore.team2Score)
        if(seriesAd.matchScore.team2Score.inngs1){
        score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;
        
  
        for_over1.classList.add("for_over");
        for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
        }
        }
  
        score2_data.appendChild(for_over1);
  
        /*score end*/


  score1.appendChild(team1_img_box);
  score1.appendChild(score1_data);
  score2.appendChild(team2_img_box);
  score2.appendChild(score2_data);

  
  team1.prepend(score1);
  team2.prepend(score2);

    

    team.appendChild(team1);
    team.appendChild(team2);

  let match_status=document.createElement("div");
  match_status.classList.add("match_status");
  match_status.textContent=seriesAd.matchInfo.status;



    p_series_match.appendChild(xvsy);
    p_series_match.appendChild(date_time);
    p_series_match.appendChild(team);

    p_series_match.appendChild(match_status);

    p_series.appendChild(p_series_match);
      
    }
    
    to_color_black.appendChild(p_series);
    liv_women.appendChild(to_color_black);
   }

   
  }
}
else{
  let notfound=document.querySelector(".NotFound");
  if(notfound.classList.contains("notfound")){
      
    notfound.classList.remove("notfound");
  }
}


})





/*women end*/




})
.catch(error => {
  
  let notfound=document.querySelector(".NotFound");
  if(notfound.classList.contains("notfound")){
      
    notfound.classList.remove("notfound");
  }
});


























/*live start*/

let livee=document.querySelector(".livee");

livee.addEventListener("click",()=>{
   let commons=document.querySelectorAll(".com");

   for(let common of commons){
       if(common.classList.contains("diff")){
        common.classList.remove("diff");
       }
   }

   livee.classList.add("diff");

   let rect=document.querySelector(".rect");
   if(!rect.classList.contains("to_remove"))
   rect.classList.add("to_remove");

   let liv=document.querySelector(".liv");
   if(liv.classList.contains("to_remove"))
   liv.classList.remove("to_remove");

    let upg=document.querySelector(".upg");
    if(!upg.classList.contains("to_remove"))
    upg.classList.add("to_remove");

  


   fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live', options)
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => {
       console.log(data);

       














       let international=document.querySelector(".international");

     
       let commons=document.querySelectorAll(".common");

       for(let common of commons){
       if(common.classList.contains("dark_international")){
        common.classList.remove("dark_international");
       }
       
       international.classList.add("dark_international");
       }

       
       /**********/ 
       let liv_international=document.querySelector(".liv_international");
       liv_international.innerHTML="";


       if(liv_international.classList.contains("to_remove"))
       liv_international.classList.remove("to_remove");

       let liv_domestic=document.querySelector(".liv_domestic");
       if(!liv_domestic.classList.contains("to_remove"))
       liv_domestic.classList.add("to_remove");

       let liv_league=document.querySelector(".liv_league");
       if(!liv_league.classList.contains("to_remove"))
       liv_league.classList.add("to_remove");

       let liv_women=document.querySelector(".liv_women");
       if(!liv_women.classList.contains("to_remove"))
       liv_women.classList.add("to_remove");

       let recent_match_types=data.typeMatches[0].seriesMatches;
       
       /*series*/

       for(let recent_match_type of recent_match_types){
        

        if(recent_match_type.seriesAdWrapper){
        
        let match_heading=document.createElement("div");
        match_heading.classList.add("match_heading");

        match_heading.textContent=recent_match_type.seriesAdWrapper.matches[0].matchInfo.seriesName;

        
        liv_international.appendChild(match_heading);

        let to_color_black=document.createElement("div");
        to_color_black.classList.add("to_color_black");


        let p_series=document.createElement("div");
        p_series.classList.add("p_series");
      
        let seriesAds=recent_match_type.seriesAdWrapper.matches;

        for(let seriesAd of seriesAds){

        let p_series_match=document.createElement("div");
        p_series_match.classList.add("p_series_match");

        let xvsy=document.createElement("xvsy");
        xvsy.classList.add("xvsy");
        
        let inside_xvsy=document.createElement("div");
        inside_xvsy.classList.add("inside_xvsy");
        inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

        xvsy.appendChild(inside_xvsy);


        const timestamp = Number(seriesAd.matchInfo.startDate);
        const date = new Date(timestamp);
        
        const dateFormatOptions = { 
          month: 'long', 
          day: 'numeric'
        };
        
        const timeFormatOptions = {
          hour: 'numeric', 
          hour12: true
        };
        
      const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
      const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
        
       
      let date_time=document.createElement("div");
      date_time.classList.add("date_time");
      date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;

 

        let match_number=document.createElement("div");
        match_number.classList.add("match_number");
        match_number.textContent=seriesAd.matchInfo.matchDesc;
        xvsy.appendChild(match_number);

        let team=document.createElement("div");
        team.classList.add("team");
        let team1=document.createElement("div");
        team1.classList.add("team1");

        let team1_content=document.createElement("div");
        team1_content.classList.add("team1_content");
        team1_content.textContent=seriesAd.matchInfo.team1.teamName;

        team1.appendChild(team1_content);

        let team2=document.createElement("div");
        team1.classList.add("team2");

        let team2_content=document.createElement("div");
        team2_content.classList.add("team2_content");
        team2_content.textContent=seriesAd.matchInfo.team2.teamName;
        team2.appendChild(team2_content);
        

        let team1_img_box=document.createElement("div");
        team1_img_box.classList.add("team1_img_box");
        let team2_img_box=document.createElement("div");
        team2_img_box.classList.add("team2_img_box");
        
        
        async function img_fetch(){
        try {
          const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
          const imageBlob = await imageResponse.blob();
  
          let imgElement = document.createElement("img");
          imgElement.src = URL.createObjectURL(imageBlob);
          team1_img_box.append(imgElement);
        } catch (error) {
          console.log(error);
        }
      }

      img_fetch();

      async function im_fetch(){
        try {
          const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
          const imageBlob = await imageResponse.blob();
  
          let imgElement = document.createElement("img");
          imgElement.src = URL.createObjectURL(imageBlob);
          team2_img_box.append(imgElement);
        } catch (error) {
          console.log(error);
        }
      }

      im_fetch();

      let score1=document.createElement("div");
      score1.classList.add("score1");

      let score2=document.createElement("div");
      score2.classList.add("score2");

       /*score start*/

       score1_data=document.createElement("div");
       score1_data.classList.add("score1_data");
 
       let for_over=document.createElement("div");
       for_over.classList.add("for_over");
       
       if(seriesAd.matchScore){
       if(seriesAd.matchScore.team1Score)
       if(seriesAd.matchScore.team1Score.inngs1){
       score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;
       
 
       for_over.classList.add("for_over");
       for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
       }
       }
 
       score1_data.appendChild(for_over);
 
       score2_data=document.createElement("div");
       score2_data.classList.add("score2_data");
 
       let for_over1=document.createElement("div");
       for_over1.classList.add("for_over");
       
       if(seriesAd.matchScore){
       if(seriesAd.matchScore.team2Score)
       if(seriesAd.matchScore.team2Score.inngs1){
       score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;
       
 
       for_over1.classList.add("for_over");
       for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
       }
       }
 
       score2_data.appendChild(for_over1);
 
       /*score end*/



      score1.appendChild(team1_img_box);
      score1.appendChild(score1_data);
      score2.appendChild(team2_img_box);
      score2.appendChild(score2_data);

      
      team1.prepend(score1);
      team2.prepend(score2);

        

        team.appendChild(team1);
        team.appendChild(team2);

      let match_status=document.createElement("div");
      match_status.classList.add("match_status");
      match_status.textContent=seriesAd.matchInfo.status;



        p_series_match.appendChild(xvsy);
        p_series_match.appendChild(date_time);
        p_series_match.appendChild(team);

        p_series_match.appendChild(match_status);

        p_series.appendChild(p_series_match);
          
        }
        
        to_color_black.appendChild(p_series);
        liv_international.appendChild(to_color_black);
       }

       
      }

















       
       /*international_recent*/

  
      international=document.querySelector(".international");

       international.addEventListener("click",()=>{
       let commons=document.querySelectorAll(".common");

       for(let common of commons){
       if(common.classList.contains("dark_international")){
        common.classList.remove("dark_international");
       }
       
       international.classList.add("dark_international");
       }

       
       /**********/ 
       let rect_international=document.querySelector(".liv_international");

      rect_international.innerHTML="";

       if(rect_international.classList.contains("to_remove"))
       rect_international.classList.remove("to_remove");

       let rect_domestic=document.querySelector(".liv_domestic");
       if(!rect_domestic.classList.contains("to_remove"))
       rect_domestic.classList.add("to_remove");

       let rect_league=document.querySelector(".liv_league");
       if(!rect_league.classList.contains("to_remove"))
       rect_league.classList.add("to_remove");

       let rect_women=document.querySelector(".liv_women");
       if(!rect_women.classList.contains("to_remove"))
       rect_women.classList.add("to_remove");


      

       let recent_match_types=data.typeMatches[0].seriesMatches;
       
       /*series*/

       for(let recent_match_type of recent_match_types){
        

        if(recent_match_type.seriesAdWrapper){
        
        let match_heading=document.createElement("div");
        match_heading.classList.add("match_heading");

        match_heading.textContent=recent_match_type.seriesAdWrapper.matches[0].matchInfo.seriesName;

        
        rect_international.appendChild(match_heading);

        let to_color_black=document.createElement("div");
        to_color_black.classList.add("to_color_black");


        let p_series=document.createElement("div");
        p_series.classList.add("p_series");
      
        let seriesAds=recent_match_type.seriesAdWrapper.matches;

        for(let seriesAd of seriesAds){

        let p_series_match=document.createElement("div");
        p_series_match.classList.add("p_series_match");

        let xvsy=document.createElement("xvsy");
        xvsy.classList.add("xvsy");
        
        let inside_xvsy=document.createElement("div");
        inside_xvsy.classList.add("inside_xvsy");
        inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

        xvsy.appendChild(inside_xvsy);


        const timestamp = Number(seriesAd.matchInfo.startDate);
        const date = new Date(timestamp);
        
        const dateFormatOptions = { 
          month: 'long', 
          day: 'numeric'
        };
        
        const timeFormatOptions = {
          hour: 'numeric', 
          hour12: true
        };
        
      const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
      const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
        
       
      let date_time=document.createElement("div");
      date_time.classList.add("date_time");
      date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;

 

        let match_number=document.createElement("div");
        match_number.classList.add("match_number");
        match_number.textContent=seriesAd.matchInfo.matchDesc;
        xvsy.appendChild(match_number);

        let team=document.createElement("div");
        team.classList.add("team");
        let team1=document.createElement("div");
        team1.classList.add("team1");

        let team1_content=document.createElement("div");
        team1_content.classList.add("team1_content");
        team1_content.textContent=seriesAd.matchInfo.team1.teamName;

        team1.appendChild(team1_content);

        let team2=document.createElement("div");
        team1.classList.add("team2");

        let team2_content=document.createElement("div");
        team2_content.classList.add("team2_content");
        team2_content.textContent=seriesAd.matchInfo.team2.teamName;
        team2.appendChild(team2_content);
        

        let team1_img_box=document.createElement("div");
        team1_img_box.classList.add("team1_img_box");
        let team2_img_box=document.createElement("div");
        team2_img_box.classList.add("team2_img_box");
        
        
        async function img_fetch(){
        try {
          const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
          const imageBlob = await imageResponse.blob();
  
          let imgElement = document.createElement("img");
          imgElement.src = URL.createObjectURL(imageBlob);
          team1_img_box.append(imgElement);
        } catch (error) {
          console.log(error);
        }
      }

      img_fetch();

      async function im_fetch(){
        try {
          const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
          const imageBlob = await imageResponse.blob();
  
          let imgElement = document.createElement("img");
          imgElement.src = URL.createObjectURL(imageBlob);
          team2_img_box.append(imgElement);
        } catch (error) {
          console.log(error);
        }
      }

      im_fetch();

      let score1=document.createElement("div");
      score1.classList.add("score1");

      let score2=document.createElement("div");
      score2.classList.add("score2");

       /*score start*/

       score1_data=document.createElement("div");
       score1_data.classList.add("score1_data");
 
       let for_over=document.createElement("div");
       for_over.classList.add("for_over");
       
       if(seriesAd.matchScore){
       if(seriesAd.matchScore.team1Score)
       if(seriesAd.matchScore.team1Score.inngs1){
       score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;
       
 
       for_over.classList.add("for_over");
       for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
       }
       }
 
       score1_data.appendChild(for_over);
 
       score2_data=document.createElement("div");
       score2_data.classList.add("score2_data");
 
       let for_over1=document.createElement("div");
       for_over1.classList.add("for_over");
       
       if(seriesAd.matchScore){
       if(seriesAd.matchScore.team2Score)
       if(seriesAd.matchScore.team2Score.inngs1){
       score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;
       
 
       for_over1.classList.add("for_over");
       for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
       }
       }
 
       score2_data.appendChild(for_over1);
 
       /*score end*/



      score1.appendChild(team1_img_box);
      score1.appendChild(score1_data);
      score2.appendChild(team2_img_box);
      score2.appendChild(score2_data);

      
      team1.prepend(score1);
      team2.prepend(score2);

        

        team.appendChild(team1);
        team.appendChild(team2);

      let match_status=document.createElement("div");
      match_status.classList.add("match_status");
      match_status.textContent=seriesAd.matchInfo.status;



        p_series_match.appendChild(xvsy);
        p_series_match.appendChild(date_time);
        p_series_match.appendChild(team);

        p_series_match.appendChild(match_status);

        p_series.appendChild(p_series_match);
          
        }
        
        to_color_black.appendChild(p_series);
        rect_international.appendChild(to_color_black);
       }

       
      }

})


/*league start*/

let league=document.querySelector(".league");

league.addEventListener("click",()=>{

  let commons=document.querySelectorAll(".common");
 
  for(let common of commons){
      if(common.classList.contains("dark_international")){
       common.classList.remove("dark_international");
      }

   league.classList.add("dark_international");
  }

  let rect_league=document.querySelector(".liv_league");
  rect_league.innerHTML="";
  
  let rect_international=document.querySelector(".liv_international");
  if(!rect_international.classList.contains("to_remove"))
   rect_international.classList.add("to_remove");

   let rect_domestic=document.querySelector(".liv_domestic");
   if(!rect_domestic.classList.contains("to_remove"))
   rect_domestic.classList.add("to_remove");

  
   if(rect_league.classList.contains("to_remove"))
   rect_league.classList.remove("to_remove");

   let rect_women=document.querySelector(".liv_women");
   if(!rect_women.classList.contains("to_remove"))
   rect_women.classList.add("to_remove");

  recent_match_types=data.typeMatches[1].seriesMatches;
   
   /*series*/

   for(let recent_match_type of recent_match_types){
    

    if(recent_match_type.seriesAdWrapper){
    
    let match_heading=document.createElement("div");
    match_heading.classList.add("match_heading");

    match_heading.textContent=recent_match_type.seriesAdWrapper.seriesName;

    
    rect_league.appendChild(match_heading);

    let to_color_black=document.createElement("div");
    to_color_black.classList.add("to_color_black");


    let p_series=document.createElement("div");
    p_series.classList.add("p_series");
  
    let seriesAds=recent_match_type.seriesAdWrapper.matches;

    for(let seriesAd of seriesAds){

    let p_series_match=document.createElement("div");
    p_series_match.classList.add("p_series_match");

    let xvsy=document.createElement("xvsy");
    xvsy.classList.add("xvsy");
    
    let inside_xvsy=document.createElement("div");
    inside_xvsy.classList.add("inside_xvsy");
    inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

    xvsy.appendChild(inside_xvsy);


    const timestamp = Number(seriesAd.matchInfo.startDate);
    const date = new Date(timestamp);
    
    const dateFormatOptions = { 
      month: 'long', 
      day: 'numeric'
    };
    
    const timeFormatOptions = {
      hour: 'numeric', 
      hour12: true
    };
    
  const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
  const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
    
   
  let date_time=document.createElement("div");
  date_time.classList.add("date_time");
  date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;



    let match_number=document.createElement("div");
    match_number.classList.add("match_number");
    match_number.textContent=seriesAd.matchInfo.matchDesc;
    xvsy.appendChild(match_number);

    let team=document.createElement("div");
    team.classList.add("team");
    let team1=document.createElement("div");
    team1.classList.add("team1");

    let team1_content=document.createElement("div");
    team1_content.classList.add("team1_content");
    team1_content.textContent=seriesAd.matchInfo.team1.teamName;

    team1.appendChild(team1_content);

    let team2=document.createElement("div");
    team1.classList.add("team2");

    let team2_content=document.createElement("div");
    team2_content.classList.add("team2_content");
    team2_content.textContent=seriesAd.matchInfo.team2.teamName;
    team2.appendChild(team2_content);
    

    let team1_img_box=document.createElement("div");
    team1_img_box.classList.add("team1_img_box");
    let team2_img_box=document.createElement("div");
    team2_img_box.classList.add("team2_img_box");
    
    
    async function img_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team1_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  img_fetch();

  async function im_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team2_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  im_fetch();

  let score1=document.createElement("div");
  score1.classList.add("score1");

  let score2=document.createElement("div");
  score2.classList.add("score2");

   /*score start*/

   score1_data=document.createElement("div");
   score1_data.classList.add("score1_data");

   let for_over=document.createElement("div");
   for_over.classList.add("for_over");
   
   if(seriesAd.matchScore){
   if(seriesAd.matchScore.team1Score)
   if(seriesAd.matchScore.team1Score.inngs1){
   score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;
   

   for_over.classList.add("for_over");
   for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
   }
   }

   score1_data.appendChild(for_over);

   score2_data=document.createElement("div");
   score2_data.classList.add("score2_data");

   let for_over1=document.createElement("div");
   for_over1.classList.add("for_over");
   
   if(seriesAd.matchScore){
   if(seriesAd.matchScore.team2Score)
   if(seriesAd.matchScore.team2Score.inngs1){
   score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;
   

   for_over1.classList.add("for_over");
   for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
   }
   }

   score2_data.appendChild(for_over1);

   /*score end*/


  score1.appendChild(team1_img_box);
  score1.appendChild(score1_data);
  score2.appendChild(team2_img_box);
  score2.appendChild(score2_data);

  
  team1.prepend(score1);
  team2.prepend(score2);

    

    team.appendChild(team1);
    team.appendChild(team2);

  let match_status=document.createElement("div");
  match_status.classList.add("match_status");
  match_status.textContent=seriesAd.matchInfo.status;



    p_series_match.appendChild(xvsy);
    p_series_match.appendChild(date_time);
    p_series_match.appendChild(team);

    p_series_match.appendChild(match_status);

    p_series.appendChild(p_series_match);
      
    }
    
    to_color_black.appendChild(p_series);
    rect_league.appendChild(to_color_black);
   }

   
  }

})

/*league_ end*/







/*domestic start*/

let domestic=document.querySelector(".domestic");

domestic.addEventListener("click",()=>{

  let commons=document.querySelectorAll(".common");
 
  for(let common of commons){
      if(common.classList.contains("dark_international")){
       common.classList.remove("dark_international");
      }

   domestic.classList.add("dark_international");
  }

  let rect_domestic=document.querySelector(".liv_domestic");
  rect_domestic.innerHTML="";
  
  let rect_international=document.querySelector(".liv_international");
  if(!rect_international.classList.contains("to_remove"))
   rect_international.classList.add("to_remove");

   
   if(rect_domestic.classList.contains("to_remove"))
   rect_domestic.classList.remove("to_remove");

   let rect_league=document.querySelector(".liv_league");
   if(!rect_league.classList.contains("to_remove"))
   rect_league.classList.add("to_remove");

   let rect_women=document.querySelector(".liv_women");
   if(!rect_women.classList.contains("to_remove"))
   rect_women.classList.add("to_remove");

  let recent_match_types=data.typeMatches[2].seriesMatches;
   
   /*series*/

   for(let recent_match_type of recent_match_types){
    

    if(recent_match_type.seriesAdWrapper){
    
    let match_heading=document.createElement("div");
    match_heading.classList.add("match_heading");

    match_heading.textContent=recent_match_type.seriesAdWrapper.seriesName;

    
    rect_domestic.appendChild(match_heading);

    let to_color_black=document.createElement("div");
    to_color_black.classList.add("to_color_black");


    let p_series=document.createElement("div");
    p_series.classList.add("p_series");
  
    let seriesAds=recent_match_type.seriesAdWrapper.matches;

    for(let seriesAd of seriesAds){

    let p_series_match=document.createElement("div");
    p_series_match.classList.add("p_series_match");

    let xvsy=document.createElement("xvsy");
    xvsy.classList.add("xvsy");
    
    let inside_xvsy=document.createElement("div");
    inside_xvsy.classList.add("inside_xvsy");
    inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

    xvsy.appendChild(inside_xvsy);


    const timestamp = Number(seriesAd.matchInfo.startDate);
    const date = new Date(timestamp);
    
    const dateFormatOptions = { 
      month: 'long', 
      day: 'numeric'
    };
    
    const timeFormatOptions = {
      hour: 'numeric', 
      hour12: true
    };
    
  const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
  const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
    
   
  let date_time=document.createElement("div");
  date_time.classList.add("date_time");
  date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;



    let match_number=document.createElement("div");
    match_number.classList.add("match_number");
    match_number.textContent=seriesAd.matchInfo.matchDesc;
    xvsy.appendChild(match_number);

    let team=document.createElement("div");
    team.classList.add("team");
    let team1=document.createElement("div");
    team1.classList.add("team1");

    let team1_content=document.createElement("div");
    team1_content.classList.add("team1_content");
    team1_content.textContent=seriesAd.matchInfo.team1.teamName;

    team1.appendChild(team1_content);

    let team2=document.createElement("div");
    team1.classList.add("team2");

    let team2_content=document.createElement("div");
    team2_content.classList.add("team2_content");
    team2_content.textContent=seriesAd.matchInfo.team2.teamName;
    team2.appendChild(team2_content);
    

    let team1_img_box=document.createElement("div");
    team1_img_box.classList.add("team1_img_box");
    let team2_img_box=document.createElement("div");
    team2_img_box.classList.add("team2_img_box");
    
    
    async function img_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team1_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  img_fetch();

  async function im_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team2_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  im_fetch();

  let score1=document.createElement("div");
  score1.classList.add("score1");

  let score2=document.createElement("div");
  score2.classList.add("score2");

   /*score start*/

   score1_data=document.createElement("div");
   score1_data.classList.add("score1_data");

   let for_over=document.createElement("div");
   for_over.classList.add("for_over");
   
   if(seriesAd.matchScore){
   if(seriesAd.matchScore.team1Score)
   if(seriesAd.matchScore.team1Score.inngs1){
   score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;
   

   for_over.classList.add("for_over");
   for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
   }
   }

   score1_data.appendChild(for_over);

   score2_data=document.createElement("div");
   score2_data.classList.add("score2_data");

   let for_over1=document.createElement("div");
   for_over1.classList.add("for_over");
   
   if(seriesAd.matchScore){
   if(seriesAd.matchScore.team2Score)
   if(seriesAd.matchScore.team2Score.inngs1){
   score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;
   

   for_over1.classList.add("for_over");
   for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
   }
   }

   score2_data.appendChild(for_over1);

   /*score end*/


  score1.appendChild(team1_img_box);
  score1.appendChild(score1_data);
  score2.appendChild(team2_img_box);
  score2.appendChild(score2_data);

  
  team1.prepend(score1);
  team2.prepend(score2);

    

    team.appendChild(team1);
    team.appendChild(team2);

  let match_status=document.createElement("div");
  match_status.classList.add("match_status");
  match_status.textContent=seriesAd.matchInfo.status;



    p_series_match.appendChild(xvsy);
    p_series_match.appendChild(date_time);
    p_series_match.appendChild(team);

    p_series_match.appendChild(match_status);

    p_series.appendChild(p_series_match);
      
    }
    
    to_color_black.appendChild(p_series);
    rect_domestic.appendChild(to_color_black);
   }

   
  }

})

/*domestic end*/


/*women begin*/

let women=document.querySelector(".women");

women.addEventListener("click",()=>{

  let commons=document.querySelectorAll(".common");
 
  for(let common of commons){
      if(common.classList.contains("dark_international")){
       common.classList.remove("dark_international");
      }

   women.classList.add("dark_international");
  }

  let rect_women=document.querySelector(".liv_women");
  rect_women.innerHTML="";
  
  let rect_international=document.querySelector(".liv_international");
  if(!rect_international.classList.contains("to_remove"))
   rect_international.classList.add("to_remove");

   let rect_domestic=document.querySelector(".liv_domestic");
   if(!rect_domestic.classList.contains("to_remove"))
   rect_domestic.classList.add("to_remove");

   let rect_league=document.querySelector(".liv_league");
   if(!rect_league.classList.contains("to_remove"))
   rect_league.classList.add("to_remove");

   
   if(rect_women.classList.contains("to_remove"))
   rect_women.classList.remove("to_remove");

  let recent_match_types=data.typeMatches[3].seriesMatches;
   
   /*series*/

   for(let recent_match_type of recent_match_types){
    

    if(recent_match_type.seriesAdWrapper){
    
    let match_heading=document.createElement("div");
    match_heading.classList.add("match_heading");

    match_heading.textContent=recent_match_type.seriesAdWrapper.seriesName;

    
    rect_women.appendChild(match_heading);

    let to_color_black=document.createElement("div");
    to_color_black.classList.add("to_color_black");


    let p_series=document.createElement("div");
    p_series.classList.add("p_series");
  
    let seriesAds=recent_match_type.seriesAdWrapper.matches;

    for(let seriesAd of seriesAds){

    let p_series_match=document.createElement("div");
    p_series_match.classList.add("p_series_match");

    let xvsy=document.createElement("xvsy");
    xvsy.classList.add("xvsy");
    
    let inside_xvsy=document.createElement("div");
    inside_xvsy.classList.add("inside_xvsy");
    inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

    xvsy.appendChild(inside_xvsy);


    const timestamp = Number(seriesAd.matchInfo.startDate);
    const date = new Date(timestamp);
    
    const dateFormatOptions = { 
      month: 'long', 
      day: 'numeric'
    };
    
    const timeFormatOptions = {
      hour: 'numeric', 
      hour12: true
    };
    
  const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
  const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
    
   
  let date_time=document.createElement("div");
  date_time.classList.add("date_time");
  date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;



    let match_number=document.createElement("div");
    match_number.classList.add("match_number");
    match_number.textContent=seriesAd.matchInfo.matchDesc;
    xvsy.appendChild(match_number);

    let team=document.createElement("div");
    team.classList.add("team");
    let team1=document.createElement("div");
    team1.classList.add("team1");

    let team1_content=document.createElement("div");
    team1_content.classList.add("team1_content");
    team1_content.textContent=seriesAd.matchInfo.team1.teamName;

    team1.appendChild(team1_content);

    let team2=document.createElement("div");
    team1.classList.add("team2");

    let team2_content=document.createElement("div");
    team2_content.classList.add("team2_content");
    team2_content.textContent=seriesAd.matchInfo.team2.teamName;
    team2.appendChild(team2_content);
    

    let team1_img_box=document.createElement("div");
    team1_img_box.classList.add("team1_img_box");
    let team2_img_box=document.createElement("div");
    team2_img_box.classList.add("team2_img_box");
    
    
    async function img_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team1_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  img_fetch();

  async function im_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team2_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  im_fetch();

  let score1=document.createElement("div");
  score1.classList.add("score1");

  let score2=document.createElement("div");
  score2.classList.add("score2");

   /*score start*/

   score1_data=document.createElement("div");
   score1_data.classList.add("score1_data");

   let for_over=document.createElement("div");
   for_over.classList.add("for_over");
   
   if(seriesAd.matchScore){
   if(seriesAd.matchScore.team1Score)
   if(seriesAd.matchScore.team1Score.inngs1){
   score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;
   

   for_over.classList.add("for_over");
   for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
   }
   }

   score1_data.appendChild(for_over);

   score2_data=document.createElement("div");
   score2_data.classList.add("score2_data");

   let for_over1=document.createElement("div");
   for_over1.classList.add("for_over");
   
   if(seriesAd.matchScore){
   if(seriesAd.matchScore.team2Score)
   if(seriesAd.matchScore.team2Score.inngs1){
   score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;
   

   for_over1.classList.add("for_over");
   for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
   }
   }

   score2_data.appendChild(for_over1);

   /*score end*/


  score1.appendChild(team1_img_box);
  score1.appendChild(score1_data);
  score2.appendChild(team2_img_box);
  score2.appendChild(score2_data);

  
  team1.prepend(score1);
  team2.prepend(score2);

    

    team.appendChild(team1);
    team.appendChild(team2);

  let match_status=document.createElement("div");
  match_status.classList.add("match_status");
  match_status.textContent=seriesAd.matchInfo.status;



    p_series_match.appendChild(xvsy);
    p_series_match.appendChild(date_time);
    p_series_match.appendChild(team);

    p_series_match.appendChild(match_status);

    p_series.appendChild(p_series_match);
      
    }
    
    to_color_black.appendChild(p_series);
    rect_women.appendChild(to_color_black);
   }

   
  }

})


/*women end*/




})
.catch(error => {
  console.log('Fetch error:');
});
    
/*data fetch end*/


/*end of recent*/
})




/*live end*/











/*recent*/



let recent=document.querySelector(".recent");

recent.addEventListener("click",()=>{
   let commons=document.querySelectorAll(".com");

   for(let common of commons){
       if(common.classList.contains("diff")){
        common.classList.remove("diff");
       }
   }

   recent.classList.add("diff");

   let rect=document.querySelector(".rect");
   if(rect.classList.contains("to_remove"))
   rect.classList.remove("to_remove");

   let liv=document.querySelector(".liv");
   if(!liv.classList.contains("to_remove"))
   liv.classList.add("to_remove");

    let upg=document.querySelector(".upg");
    if(!upg.classList.contains("to_remove"))
    upg.classList.add("to_remove");

  


   fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', options)
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => {
       console.log(data);

       














       let international=document.querySelector(".international");

     
       let commons=document.querySelectorAll(".common");

       for(let common of commons){
       if(common.classList.contains("dark_international")){
        common.classList.remove("dark_international");
       }
       
       international.classList.add("dark_international");
       }

       
       /**********/ 
       let rect_international=document.querySelector(".rect_international");



       if(rect_international.classList.contains("to_remove"))
       rect_international.classList.remove("to_remove");

       let rect_domestic=document.querySelector(".rect_domestic");
       if(!rect_domestic.classList.contains("to_remove"))
       rect_domestic.classList.add("to_remove");

       let rect_league=document.querySelector(".rect_league");
       if(!rect_league.classList.contains("to_remove"))
       rect_league.classList.add("to_remove");

       let rect_women=document.querySelector(".rect_women");
       if(!rect_women.classList.contains("to_remove"))
       rect_women.classList.add("to_remove");

       let recent_match_types=data.typeMatches[0].seriesMatches;
       
       /*series*/

       for(let recent_match_type of recent_match_types){
        

        if(recent_match_type.seriesAdWrapper){
        
        let match_heading=document.createElement("div");
        match_heading.classList.add("match_heading");

        match_heading.textContent=recent_match_type.seriesAdWrapper.matches[0].matchInfo.seriesName;

        
        rect_international.appendChild(match_heading);

        let to_color_black=document.createElement("div");
        to_color_black.classList.add("to_color_black");


        let p_series=document.createElement("div");
        p_series.classList.add("p_series");
      
        let seriesAds=recent_match_type.seriesAdWrapper.matches;

        for(let seriesAd of seriesAds){

        let p_series_match=document.createElement("div");
        p_series_match.classList.add("p_series_match");

        let xvsy=document.createElement("xvsy");
        xvsy.classList.add("xvsy");
        
        let inside_xvsy=document.createElement("div");
        inside_xvsy.classList.add("inside_xvsy");
        inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

        xvsy.appendChild(inside_xvsy);


        const timestamp = Number(seriesAd.matchInfo.startDate);
        const date = new Date(timestamp);
        
        const dateFormatOptions = { 
          month: 'long', 
          day: 'numeric'
        };
        
        const timeFormatOptions = {
          hour: 'numeric', 
          hour12: true
        };
        
      const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
      const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
        
       
      let date_time=document.createElement("div");
      date_time.classList.add("date_time");
      date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;

 

        let match_number=document.createElement("div");
        match_number.classList.add("match_number");
        match_number.textContent=seriesAd.matchInfo.matchDesc;
        xvsy.appendChild(match_number);

        let team=document.createElement("div");
        team.classList.add("team");
        let team1=document.createElement("div");
        team1.classList.add("team1");

        let team1_content=document.createElement("div");
        team1_content.classList.add("team1_content");
        team1_content.textContent=seriesAd.matchInfo.team1.teamName;

        team1.appendChild(team1_content);

        let team2=document.createElement("div");
        team1.classList.add("team2");

        let team2_content=document.createElement("div");
        team2_content.classList.add("team2_content");
        team2_content.textContent=seriesAd.matchInfo.team2.teamName;
        team2.appendChild(team2_content);
        

        let team1_img_box=document.createElement("div");
        team1_img_box.classList.add("team1_img_box");
        let team2_img_box=document.createElement("div");
        team2_img_box.classList.add("team2_img_box");
        
        
        async function img_fetch(){
        try {
          const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
          const imageBlob = await imageResponse.blob();
  
          let imgElement = document.createElement("img");
          imgElement.src = URL.createObjectURL(imageBlob);
          team1_img_box.append(imgElement);
        } catch (error) {
          console.log(error);
        }
      }

      img_fetch();

      async function im_fetch(){
        try {
          const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
          const imageBlob = await imageResponse.blob();
  
          let imgElement = document.createElement("img");
          imgElement.src = URL.createObjectURL(imageBlob);
          team2_img_box.append(imgElement);
        } catch (error) {
          console.log(error);
        }
      }

      im_fetch();

      let score1=document.createElement("div");
      score1.classList.add("score1");

      let score2=document.createElement("div");
      score2.classList.add("score2");

       /*score start*/

       score1_data=document.createElement("div");
       score1_data.classList.add("score1_data");
 
       let for_over=document.createElement("div");
       for_over.classList.add("for_over");
       
       if(seriesAd.matchScore){
       if(seriesAd.matchScore.team1Score)
       if(seriesAd.matchScore.team1Score.inngs1){
       score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;
       
 
       for_over.classList.add("for_over");
       for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
       }
       }
 
       score1_data.appendChild(for_over);
 
       score2_data=document.createElement("div");
       score2_data.classList.add("score2_data");
 
       let for_over1=document.createElement("div");
       for_over1.classList.add("for_over");
       
       if(seriesAd.matchScore){
       if(seriesAd.matchScore.team2Score)
       if(seriesAd.matchScore.team2Score.inngs1){
       score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;
       
 
       for_over1.classList.add("for_over");
       for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
       }
       }
 
       score2_data.appendChild(for_over1);
 
       /*score end*/



      score1.appendChild(team1_img_box);
      score1.appendChild(score1_data);
      score2.appendChild(team2_img_box);
      score2.appendChild(score2_data);

      
      team1.prepend(score1);
      team2.prepend(score2);

        

        team.appendChild(team1);
        team.appendChild(team2);

      let match_status=document.createElement("div");
      match_status.classList.add("match_status");
      match_status.textContent=seriesAd.matchInfo.status;



        p_series_match.appendChild(xvsy);
        p_series_match.appendChild(date_time);
        p_series_match.appendChild(team);

        p_series_match.appendChild(match_status);

        p_series.appendChild(p_series_match);
          
        }
        
        to_color_black.appendChild(p_series);
        rect_international.appendChild(to_color_black);
       }

       
      }

















       
       /*international_recent*/

  
      international=document.querySelector(".international");

       international.addEventListener("click",()=>{
       let commons=document.querySelectorAll(".common");

       for(let common of commons){
       if(common.classList.contains("dark_international")){
        common.classList.remove("dark_international");
       }
       
       international.classList.add("dark_international");
       }

       
       /**********/ 
       let rect_international=document.querySelector(".rect_international");

      rect_international.innerHTML="";

       if(rect_international.classList.contains("to_remove"))
       rect_international.classList.remove("to_remove");

       let rect_domestic=document.querySelector(".rect_domestic");
       if(!rect_domestic.classList.contains("to_remove"))
       rect_domestic.classList.add("to_remove");

       let rect_league=document.querySelector(".rect_league");
       if(!rect_league.classList.contains("to_remove"))
       rect_league.classList.add("to_remove");

       let rect_women=document.querySelector(".rect_women");
       if(!rect_women.classList.contains("to_remove"))
       rect_women.classList.add("to_remove");


      

       let recent_match_types=data.typeMatches[0].seriesMatches;
       
       /*series*/

       for(let recent_match_type of recent_match_types){
        

        if(recent_match_type.seriesAdWrapper){
        
        let match_heading=document.createElement("div");
        match_heading.classList.add("match_heading");

        match_heading.textContent=recent_match_type.seriesAdWrapper.matches[0].matchInfo.seriesName;

        
        rect_international.appendChild(match_heading);

        let to_color_black=document.createElement("div");
        to_color_black.classList.add("to_color_black");


        let p_series=document.createElement("div");
        p_series.classList.add("p_series");
      
        let seriesAds=recent_match_type.seriesAdWrapper.matches;

        for(let seriesAd of seriesAds){

        let p_series_match=document.createElement("div");
        p_series_match.classList.add("p_series_match");

        let xvsy=document.createElement("xvsy");
        xvsy.classList.add("xvsy");
        
        let inside_xvsy=document.createElement("div");
        inside_xvsy.classList.add("inside_xvsy");
        inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

        xvsy.appendChild(inside_xvsy);


        const timestamp = Number(seriesAd.matchInfo.startDate);
        const date = new Date(timestamp);
        
        const dateFormatOptions = { 
          month: 'long', 
          day: 'numeric'
        };
        
        const timeFormatOptions = {
          hour: 'numeric', 
          hour12: true
        };
        
      const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
      const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
        
       
      let date_time=document.createElement("div");
      date_time.classList.add("date_time");
      date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;

 

        let match_number=document.createElement("div");
        match_number.classList.add("match_number");
        match_number.textContent=seriesAd.matchInfo.matchDesc;
        xvsy.appendChild(match_number);

        let team=document.createElement("div");
        team.classList.add("team");
        let team1=document.createElement("div");
        team1.classList.add("team1");

        let team1_content=document.createElement("div");
        team1_content.classList.add("team1_content");
        team1_content.textContent=seriesAd.matchInfo.team1.teamName;

        team1.appendChild(team1_content);

        let team2=document.createElement("div");
        team1.classList.add("team2");

        let team2_content=document.createElement("div");
        team2_content.classList.add("team2_content");
        team2_content.textContent=seriesAd.matchInfo.team2.teamName;
        team2.appendChild(team2_content);
        

        let team1_img_box=document.createElement("div");
        team1_img_box.classList.add("team1_img_box");
        let team2_img_box=document.createElement("div");
        team2_img_box.classList.add("team2_img_box");
        
        
        async function img_fetch(){
        try {
          const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
          const imageBlob = await imageResponse.blob();
  
          let imgElement = document.createElement("img");
          imgElement.src = URL.createObjectURL(imageBlob);
          team1_img_box.append(imgElement);
        } catch (error) {
          console.log(error);
        }
      }

      img_fetch();

      async function im_fetch(){
        try {
          const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
          const imageBlob = await imageResponse.blob();
  
          let imgElement = document.createElement("img");
          imgElement.src = URL.createObjectURL(imageBlob);
          team2_img_box.append(imgElement);
        } catch (error) {
          console.log(error);
        }
      }

      im_fetch();

      let score1=document.createElement("div");
      score1.classList.add("score1");

      let score2=document.createElement("div");
      score2.classList.add("score2");

       /*score start*/

       score1_data=document.createElement("div");
       score1_data.classList.add("score1_data");
 
       let for_over=document.createElement("div");
       for_over.classList.add("for_over");
       
       if(seriesAd.matchScore){
       if(seriesAd.matchScore.team1Score)
       if(seriesAd.matchScore.team1Score.inngs1){
       score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;
       
 
       for_over.classList.add("for_over");
       for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
       }
       }
 
       score1_data.appendChild(for_over);
 
       score2_data=document.createElement("div");
       score2_data.classList.add("score2_data");
 
       let for_over1=document.createElement("div");
       for_over1.classList.add("for_over");
       
       if(seriesAd.matchScore){
       if(seriesAd.matchScore.team2Score)
       if(seriesAd.matchScore.team2Score.inngs1){
       score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;
       
 
       for_over1.classList.add("for_over");
       for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
       }
       }
 
       score2_data.appendChild(for_over1);
 
       /*score end*/



      score1.appendChild(team1_img_box);
      score1.appendChild(score1_data);
      score2.appendChild(team2_img_box);
      score2.appendChild(score2_data);

      
      team1.prepend(score1);
      team2.prepend(score2);

        

        team.appendChild(team1);
        team.appendChild(team2);

      let match_status=document.createElement("div");
      match_status.classList.add("match_status");
      match_status.textContent=seriesAd.matchInfo.status;



        p_series_match.appendChild(xvsy);
        p_series_match.appendChild(date_time);
        p_series_match.appendChild(team);

        p_series_match.appendChild(match_status);

        p_series.appendChild(p_series_match);
          
        }
        
        to_color_black.appendChild(p_series);
        rect_international.appendChild(to_color_black);
       }

       
      }

})


/*league start*/

let league=document.querySelector(".league");

league.addEventListener("click",()=>{

  let commons=document.querySelectorAll(".common");
 
  for(let common of commons){
      if(common.classList.contains("dark_international")){
       common.classList.remove("dark_international");
      }

   league.classList.add("dark_international");
  }

  let rect_league=document.querySelector(".rect_league");
  rect_league.innerHTML="";
  
  let rect_international=document.querySelector(".rect_international");
  if(!rect_international.classList.contains("to_remove"))
   rect_international.classList.add("to_remove");

   let rect_domestic=document.querySelector(".rect_domestic");
   if(!rect_domestic.classList.contains("to_remove"))
   rect_domestic.classList.add("to_remove");

  
   if(rect_league.classList.contains("to_remove"))
   rect_league.classList.remove("to_remove");

   let rect_women=document.querySelector(".rect_women");
   if(!rect_women.classList.contains("to_remove"))
   rect_women.classList.add("to_remove");

  recent_match_types=data.typeMatches[1].seriesMatches;
   
   /*series*/

   for(let recent_match_type of recent_match_types){
    

    if(recent_match_type.seriesAdWrapper){
    
    let match_heading=document.createElement("div");
    match_heading.classList.add("match_heading");

    match_heading.textContent=recent_match_type.seriesAdWrapper.seriesName;

    
    rect_league.appendChild(match_heading);

    let to_color_black=document.createElement("div");
    to_color_black.classList.add("to_color_black");


    let p_series=document.createElement("div");
    p_series.classList.add("p_series");
  
    let seriesAds=recent_match_type.seriesAdWrapper.matches;

    for(let seriesAd of seriesAds){

    let p_series_match=document.createElement("div");
    p_series_match.classList.add("p_series_match");

    let xvsy=document.createElement("xvsy");
    xvsy.classList.add("xvsy");
    
    let inside_xvsy=document.createElement("div");
    inside_xvsy.classList.add("inside_xvsy");
    inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

    xvsy.appendChild(inside_xvsy);


    const timestamp = Number(seriesAd.matchInfo.startDate);
    const date = new Date(timestamp);
    
    const dateFormatOptions = { 
      month: 'long', 
      day: 'numeric'
    };
    
    const timeFormatOptions = {
      hour: 'numeric', 
      hour12: true
    };
    
  const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
  const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
    
   
  let date_time=document.createElement("div");
  date_time.classList.add("date_time");
  date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;



    let match_number=document.createElement("div");
    match_number.classList.add("match_number");
    match_number.textContent=seriesAd.matchInfo.matchDesc;
    xvsy.appendChild(match_number);

    let team=document.createElement("div");
    team.classList.add("team");
    let team1=document.createElement("div");
    team1.classList.add("team1");

    let team1_content=document.createElement("div");
    team1_content.classList.add("team1_content");
    team1_content.textContent=seriesAd.matchInfo.team1.teamName;

    team1.appendChild(team1_content);

    let team2=document.createElement("div");
    team1.classList.add("team2");

    let team2_content=document.createElement("div");
    team2_content.classList.add("team2_content");
    team2_content.textContent=seriesAd.matchInfo.team2.teamName;
    team2.appendChild(team2_content);
    

    let team1_img_box=document.createElement("div");
    team1_img_box.classList.add("team1_img_box");
    let team2_img_box=document.createElement("div");
    team2_img_box.classList.add("team2_img_box");
    
    
    async function img_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team1_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  img_fetch();

  async function im_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team2_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  im_fetch();

  let score1=document.createElement("div");
  score1.classList.add("score1");

  let score2=document.createElement("div");
  score2.classList.add("score2");

   /*score start*/

   score1_data=document.createElement("div");
   score1_data.classList.add("score1_data");

   let for_over=document.createElement("div");
   for_over.classList.add("for_over");
   
   if(seriesAd.matchScore){
   if(seriesAd.matchScore.team1Score)
   if(seriesAd.matchScore.team1Score.inngs1){
   score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;
   

   for_over.classList.add("for_over");
   for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
   }
   }

   score1_data.appendChild(for_over);

   score2_data=document.createElement("div");
   score2_data.classList.add("score2_data");

   let for_over1=document.createElement("div");
   for_over1.classList.add("for_over");
   
   if(seriesAd.matchScore){
   if(seriesAd.matchScore.team2Score)
   if(seriesAd.matchScore.team2Score.inngs1){
   score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;
   

   for_over1.classList.add("for_over");
   for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
   }
   }

   score2_data.appendChild(for_over1);

   /*score end*/


  score1.appendChild(team1_img_box);
  score1.appendChild(score1_data);
  score2.appendChild(team2_img_box);
  score2.appendChild(score2_data);

  
  team1.prepend(score1);
  team2.prepend(score2);

    

    team.appendChild(team1);
    team.appendChild(team2);

  let match_status=document.createElement("div");
  match_status.classList.add("match_status");
  match_status.textContent=seriesAd.matchInfo.status;



    p_series_match.appendChild(xvsy);
    p_series_match.appendChild(date_time);
    p_series_match.appendChild(team);

    p_series_match.appendChild(match_status);

    p_series.appendChild(p_series_match);
      
    }
    
    to_color_black.appendChild(p_series);
    rect_league.appendChild(to_color_black);
   }

   
  }

})

/*league_ end*/







/*domestic start*/

let domestic=document.querySelector(".domestic");

domestic.addEventListener("click",()=>{

  let commons=document.querySelectorAll(".common");
 
  for(let common of commons){
      if(common.classList.contains("dark_international")){
       common.classList.remove("dark_international");
      }

   domestic.classList.add("dark_international");
  }

  let rect_domestic=document.querySelector(".rect_domestic");
  rect_domestic.innerHTML="";
  
  let rect_international=document.querySelector(".rect_international");
  if(!rect_international.classList.contains("to_remove"))
   rect_international.classList.add("to_remove");

   
   if(rect_domestic.classList.contains("to_remove"))
   rect_domestic.classList.remove("to_remove");

   let rect_league=document.querySelector(".rect_league");
   if(!rect_league.classList.contains("to_remove"))
   rect_league.classList.add("to_remove");

   let rect_women=document.querySelector(".rect_women");
   if(!rect_women.classList.contains("to_remove"))
   rect_women.classList.add("to_remove");

  let recent_match_types=data.typeMatches[2].seriesMatches;
   
   /*series*/

   for(let recent_match_type of recent_match_types){
    

    if(recent_match_type.seriesAdWrapper){
    
    let match_heading=document.createElement("div");
    match_heading.classList.add("match_heading");

    match_heading.textContent=recent_match_type.seriesAdWrapper.seriesName;

    
    rect_domestic.appendChild(match_heading);

    let to_color_black=document.createElement("div");
    to_color_black.classList.add("to_color_black");


    let p_series=document.createElement("div");
    p_series.classList.add("p_series");
  
    let seriesAds=recent_match_type.seriesAdWrapper.matches;

    for(let seriesAd of seriesAds){

    let p_series_match=document.createElement("div");
    p_series_match.classList.add("p_series_match");

    let xvsy=document.createElement("xvsy");
    xvsy.classList.add("xvsy");
    
    let inside_xvsy=document.createElement("div");
    inside_xvsy.classList.add("inside_xvsy");
    inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

    xvsy.appendChild(inside_xvsy);


    const timestamp = Number(seriesAd.matchInfo.startDate);
    const date = new Date(timestamp);
    
    const dateFormatOptions = { 
      month: 'long', 
      day: 'numeric'
    };
    
    const timeFormatOptions = {
      hour: 'numeric', 
      hour12: true
    };
    
  const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
  const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
    
   
  let date_time=document.createElement("div");
  date_time.classList.add("date_time");
  date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;



    let match_number=document.createElement("div");
    match_number.classList.add("match_number");
    match_number.textContent=seriesAd.matchInfo.matchDesc;
    xvsy.appendChild(match_number);

    let team=document.createElement("div");
    team.classList.add("team");
    let team1=document.createElement("div");
    team1.classList.add("team1");

    let team1_content=document.createElement("div");
    team1_content.classList.add("team1_content");
    team1_content.textContent=seriesAd.matchInfo.team1.teamName;

    team1.appendChild(team1_content);

    let team2=document.createElement("div");
    team1.classList.add("team2");

    let team2_content=document.createElement("div");
    team2_content.classList.add("team2_content");
    team2_content.textContent=seriesAd.matchInfo.team2.teamName;
    team2.appendChild(team2_content);
    

    let team1_img_box=document.createElement("div");
    team1_img_box.classList.add("team1_img_box");
    let team2_img_box=document.createElement("div");
    team2_img_box.classList.add("team2_img_box");
    
    
    async function img_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team1_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  img_fetch();

  async function im_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team2_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  im_fetch();

  let score1=document.createElement("div");
  score1.classList.add("score1");

  let score2=document.createElement("div");
  score2.classList.add("score2");

   /*score start*/

   score1_data=document.createElement("div");
   score1_data.classList.add("score1_data");

   let for_over=document.createElement("div");
   for_over.classList.add("for_over");
   
   if(seriesAd.matchScore){
   if(seriesAd.matchScore.team1Score)
   if(seriesAd.matchScore.team1Score.inngs1){
   score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;
   

   for_over.classList.add("for_over");
   for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
   }
   }

   score1_data.appendChild(for_over);

   score2_data=document.createElement("div");
   score2_data.classList.add("score2_data");

   let for_over1=document.createElement("div");
   for_over1.classList.add("for_over");
   
   if(seriesAd.matchScore){
   if(seriesAd.matchScore.team2Score)
   if(seriesAd.matchScore.team2Score.inngs1){
   score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;
   

   for_over1.classList.add("for_over");
   for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
   }
   }

   score2_data.appendChild(for_over1);

   /*score end*/


  score1.appendChild(team1_img_box);
  score1.appendChild(score1_data);
  score2.appendChild(team2_img_box);
  score2.appendChild(score2_data);

  
  team1.prepend(score1);
  team2.prepend(score2);

    

    team.appendChild(team1);
    team.appendChild(team2);

  let match_status=document.createElement("div");
  match_status.classList.add("match_status");
  match_status.textContent=seriesAd.matchInfo.status;



    p_series_match.appendChild(xvsy);
    p_series_match.appendChild(date_time);
    p_series_match.appendChild(team);

    p_series_match.appendChild(match_status);

    p_series.appendChild(p_series_match);
      
    }
    
    to_color_black.appendChild(p_series);
    rect_domestic.appendChild(to_color_black);
   }

   
  }

})

/*domestic end*/


/*women begin*/

let women=document.querySelector(".women");

women.addEventListener("click",()=>{

  let commons=document.querySelectorAll(".common");
 
  for(let common of commons){
      if(common.classList.contains("dark_international")){
       common.classList.remove("dark_international");
      }

   women.classList.add("dark_international");
  }

  let rect_women=document.querySelector(".rect_women");
  rect_women.innerHTML="";
  
  let rect_international=document.querySelector(".rect_international");
  if(!rect_international.classList.contains("to_remove"))
   rect_international.classList.add("to_remove");

   let rect_domestic=document.querySelector(".rect_domestic");
   if(!rect_domestic.classList.contains("to_remove"))
   rect_domestic.classList.add("to_remove");

   let rect_league=document.querySelector(".rect_league");
   if(!rect_league.classList.contains("to_remove"))
   rect_league.classList.add("to_remove");

   
   if(rect_women.classList.contains("to_remove"))
   rect_women.classList.remove("to_remove");

  let recent_match_types=data.typeMatches[3].seriesMatches;
   
   /*series*/

   for(let recent_match_type of recent_match_types){
    

    if(recent_match_type.seriesAdWrapper){
    
    let match_heading=document.createElement("div");
    match_heading.classList.add("match_heading");

    match_heading.textContent=recent_match_type.seriesAdWrapper.seriesName;

    
    rect_women.appendChild(match_heading);

    let to_color_black=document.createElement("div");
    to_color_black.classList.add("to_color_black");


    let p_series=document.createElement("div");
    p_series.classList.add("p_series");
  
    let seriesAds=recent_match_type.seriesAdWrapper.matches;

    for(let seriesAd of seriesAds){

    let p_series_match=document.createElement("div");
    p_series_match.classList.add("p_series_match");

    let xvsy=document.createElement("xvsy");
    xvsy.classList.add("xvsy");
    
    let inside_xvsy=document.createElement("div");
    inside_xvsy.classList.add("inside_xvsy");
    inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

    xvsy.appendChild(inside_xvsy);


    const timestamp = Number(seriesAd.matchInfo.startDate);
    const date = new Date(timestamp);
    
    const dateFormatOptions = { 
      month: 'long', 
      day: 'numeric'
    };
    
    const timeFormatOptions = {
      hour: 'numeric', 
      hour12: true
    };
    
  const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
  const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
    
   
  let date_time=document.createElement("div");
  date_time.classList.add("date_time");
  date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;



    let match_number=document.createElement("div");
    match_number.classList.add("match_number");
    match_number.textContent=seriesAd.matchInfo.matchDesc;
    xvsy.appendChild(match_number);

    let team=document.createElement("div");
    team.classList.add("team");
    let team1=document.createElement("div");
    team1.classList.add("team1");

    let team1_content=document.createElement("div");
    team1_content.classList.add("team1_content");
    team1_content.textContent=seriesAd.matchInfo.team1.teamName;

    team1.appendChild(team1_content);

    let team2=document.createElement("div");
    team1.classList.add("team2");

    let team2_content=document.createElement("div");
    team2_content.classList.add("team2_content");
    team2_content.textContent=seriesAd.matchInfo.team2.teamName;
    team2.appendChild(team2_content);
    

    let team1_img_box=document.createElement("div");
    team1_img_box.classList.add("team1_img_box");
    let team2_img_box=document.createElement("div");
    team2_img_box.classList.add("team2_img_box");
    
    
    async function img_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team1_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  img_fetch();

  async function im_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team2_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  im_fetch();

  let score1=document.createElement("div");
  score1.classList.add("score1");

  let score2=document.createElement("div");
  score2.classList.add("score2");

   /*score start*/

   score1_data=document.createElement("div");
   score1_data.classList.add("score1_data");

   let for_over=document.createElement("div");
   for_over.classList.add("for_over");
   
   if(seriesAd.matchScore){
   if(seriesAd.matchScore.team1Score)
   if(seriesAd.matchScore.team1Score.inngs1){
   score1_data.textContent=`${seriesAd.matchScore.team1Score.inngs1.runs}/${seriesAd.matchScore.team1Score.inngs1.wickets}`;
   

   for_over.classList.add("for_over");
   for_over.textContent=`(${seriesAd.matchScore.team1Score.inngs1.overs})`;
   }
   }

   score1_data.appendChild(for_over);

   score2_data=document.createElement("div");
   score2_data.classList.add("score2_data");

   let for_over1=document.createElement("div");
   for_over1.classList.add("for_over");
   
   if(seriesAd.matchScore){
   if(seriesAd.matchScore.team2Score)
   if(seriesAd.matchScore.team2Score.inngs1){
   score2_data.textContent=`${seriesAd.matchScore.team2Score.inngs1.runs}/${seriesAd.matchScore.team2Score.inngs1.wickets}`;
   

   for_over1.classList.add("for_over");
   for_over1.textContent=`(${seriesAd.matchScore.team2Score.inngs1.overs})`;
   }
   }

   score2_data.appendChild(for_over1);

   /*score end*/


  score1.appendChild(team1_img_box);
  score1.appendChild(score1_data);
  score2.appendChild(team2_img_box);
  score2.appendChild(score2_data);

  
  team1.prepend(score1);
  team2.prepend(score2);

    

    team.appendChild(team1);
    team.appendChild(team2);

  let match_status=document.createElement("div");
  match_status.classList.add("match_status");
  match_status.textContent=seriesAd.matchInfo.status;



    p_series_match.appendChild(xvsy);
    p_series_match.appendChild(date_time);
    p_series_match.appendChild(team);

    p_series_match.appendChild(match_status);

    p_series.appendChild(p_series_match);
      
    }
    
    to_color_black.appendChild(p_series);
    rect_women.appendChild(to_color_black);
   }

   
  }

})


/*women end*/




})
.catch(error => {
  console.log('Fetch error:');
});
    
/*data fetch end*/


/*end of recent*/
})



/*recent end*/





















/*upcoming start*/

let upcoming=document.querySelector(".upcoming");

upcoming.addEventListener("click",()=>{
   let commons=document.querySelectorAll(".com");

   for(let common of commons){
       if(common.classList.contains("diff")){
        common.classList.remove("diff");
       }
   }

   upcoming.classList.add("diff");

   let rect=document.querySelector(".rect");
   if(!rect.classList.contains("to_remove"))
   rect.classList.add("to_remove");

   let liv=document.querySelector(".liv");
   if(!liv.classList.contains("to_remove"))
   liv.classList.add("to_remove");

    let upg=document.querySelector(".upg");
    if(upg.classList.contains("to_remove"))
    upg.classList.remove("to_remove");
   
   
   fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming', options)
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => {
       console.log(data);

       


      /*to start at first*/

       let international=document.querySelector(".international");


       let commons=document.querySelectorAll(".common");

       for(let common of commons){
       if(common.classList.contains("dark_international")){
        common.classList.remove("dark_international");
       }
       
       international.classList.add("dark_international");
       }

       
       /**********/ 
       let upg_international=document.querySelector(".upg_international");

      upg_international.innerHTML="";

       if(upg_international.classList.contains("to_remove"))
       upg_international.classList.remove("to_remove");

       let upg_domestic=document.querySelector(".upg_domestic");
       if(!upg_domestic.classList.contains("to_remove"))
       upg_domestic.classList.add("to_remove");

       let upg_league=document.querySelector(".upg_league");
       if(!upg_league.classList.contains("to_remove"))
       upg_league.classList.add("to_remove");

       let upg_women=document.querySelector(".upg_women");
       if(!upg_women.classList.contains("to_remove"))
       upg_women.classList.add("to_remove");

       let upg_match_types=data.typeMatches[0].seriesMatches;
       
       /*series*/

       for(let upg_match_type of upg_match_types){
        

        if(upg_match_type.seriesAdWrapper){
        
        let match_heading=document.createElement("div");
        match_heading.classList.add("match_heading");

        match_heading.textContent=upg_match_type.seriesAdWrapper.matches[0].matchInfo.seriesName;

        
        upg_international.appendChild(match_heading);

        let to_color_black=document.createElement("div");
        to_color_black.classList.add("to_color_black");


        let p_series=document.createElement("div");
        p_series.classList.add("p_series");
      
        let seriesAds=upg_match_type.seriesAdWrapper.matches;

        for(let seriesAd of seriesAds){

        let p_series_match=document.createElement("div");
        p_series_match.classList.add("p_series_match");

        let xvsy=document.createElement("xvsy");
        xvsy.classList.add("xvsy");
        
        let inside_xvsy=document.createElement("div");
        inside_xvsy.classList.add("inside_xvsy");
        inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

        xvsy.appendChild(inside_xvsy);


        const timestamp = Number(seriesAd.matchInfo.startDate);
        const date = new Date(timestamp);
        
        const dateFormatOptions = { 
          month: 'long', 
          day: 'numeric'
        };
        
        const timeFormatOptions = {
          hour: 'numeric', 
          hour12: true
        };
        
      const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
      const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
        
       
      let date_time=document.createElement("div");
      date_time.classList.add("date_time");
      date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;

 

        let match_number=document.createElement("div");
        match_number.classList.add("match_number");
        match_number.textContent=seriesAd.matchInfo.matchDesc;
        xvsy.appendChild(match_number);

        let team=document.createElement("div");
        team.classList.add("team");
        let team1=document.createElement("div");
        team1.classList.add("team1");

        let team1_content=document.createElement("div");
        team1_content.classList.add("team1_content");
        team1_content.textContent=seriesAd.matchInfo.team1.teamName;

        team1.appendChild(team1_content);

        let team2=document.createElement("div");
        team1.classList.add("team2");

        let team2_content=document.createElement("div");
        team2_content.classList.add("team2_content");
        team2_content.textContent=seriesAd.matchInfo.team2.teamName;
        team2.appendChild(team2_content);
        

        let team1_img_box=document.createElement("div");
        team1_img_box.classList.add("team1_img_box");
        let team2_img_box=document.createElement("div");
        team2_img_box.classList.add("team2_img_box");
        
        
        async function img_fetch(){
        try {
          const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
          const imageBlob = await imageResponse.blob();
  
          let imgElement = document.createElement("img");
          imgElement.src = URL.createObjectURL(imageBlob);
          team1_img_box.append(imgElement);
        } catch (error) {
          console.log(error);
        }
      }

      img_fetch();

      async function im_fetch(){
        try {
          const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
          const imageBlob = await imageResponse.blob();
  
          let imgElement = document.createElement("img");
          imgElement.src = URL.createObjectURL(imageBlob);
          team2_img_box.append(imgElement);
        } catch (error) {
          console.log(error);
        }
      }

      im_fetch();

      let score1=document.createElement("div");
      score1.classList.add("score1");

      let score2=document.createElement("div");
      score2.classList.add("score2");

      score1.appendChild(team1_img_box);
      score2.appendChild(team2_img_box);
   
      team1.prepend(score1);
      team2.prepend(score2);

        

        team.appendChild(team1);
        team.appendChild(team2);

      
        p_series_match.appendChild(xvsy);
        p_series_match.appendChild(date_time);
        p_series_match.appendChild(team);

        p_series.appendChild(p_series_match);
          
        }
        
        to_color_black.appendChild(p_series);
        upg_international.appendChild(to_color_black);
       }

       
      }

    /*end of start*/






       /*international_recent*/

  
        international=document.querySelector(".international");

       international.addEventListener("click",()=>{

       let commons=document.querySelectorAll(".common");

       for(let common of commons){
       if(common.classList.contains("dark_international")){
        common.classList.remove("dark_international");
       }
       
       international.classList.add("dark_international");
       }

       
       /**********/ 
       let upg_international=document.querySelector(".upg_international");

      upg_international.innerHTML="";

       if(upg_international.classList.contains("to_remove"))
       upg_international.classList.remove("to_remove");

       let upg_domestic=document.querySelector(".upg_domestic");
       if(!upg_domestic.classList.contains("to_remove"))
       upg_domestic.classList.add("to_remove");

       let upg_league=document.querySelector(".upg_league");
       if(!upg_league.classList.contains("to_remove"))
       upg_league.classList.add("to_remove");

       let upg_women=document.querySelector(".upg_women");
       if(!upg_women.classList.contains("to_remove"))
       upg_women.classList.add("to_remove");

       let upg_match_types=data.typeMatches[0].seriesMatches;
       
       /*series*/

       for(let upg_match_type of upg_match_types){
        

        if(upg_match_type.seriesAdWrapper){
        
        let match_heading=document.createElement("div");
        match_heading.classList.add("match_heading");

        match_heading.textContent=upg_match_type.seriesAdWrapper.matches[0].matchInfo.seriesName;

        
        upg_international.appendChild(match_heading);

        let to_color_black=document.createElement("div");
        to_color_black.classList.add("to_color_black");


        let p_series=document.createElement("div");
        p_series.classList.add("p_series");
      
        let seriesAds=upg_match_type.seriesAdWrapper.matches;

        for(let seriesAd of seriesAds){

        let p_series_match=document.createElement("div");
        p_series_match.classList.add("p_series_match");

        let xvsy=document.createElement("xvsy");
        xvsy.classList.add("xvsy");
        
        let inside_xvsy=document.createElement("div");
        inside_xvsy.classList.add("inside_xvsy");
        inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

        xvsy.appendChild(inside_xvsy);


        const timestamp = Number(seriesAd.matchInfo.startDate);
        const date = new Date(timestamp);
        
        const dateFormatOptions = { 
          month: 'long', 
          day: 'numeric'
        };
        
        const timeFormatOptions = {
          hour: 'numeric', 
          hour12: true
        };
        
      const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
      const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
        
       
      let date_time=document.createElement("div");
      date_time.classList.add("date_time");
      date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;

 

        let match_number=document.createElement("div");
        match_number.classList.add("match_number");
        match_number.textContent=seriesAd.matchInfo.matchDesc;
        xvsy.appendChild(match_number);

        let team=document.createElement("div");
        team.classList.add("team");
        let team1=document.createElement("div");
        team1.classList.add("team1");

        let team1_content=document.createElement("div");
        team1_content.classList.add("team1_content");
        team1_content.textContent=seriesAd.matchInfo.team1.teamName;

        team1.appendChild(team1_content);

        let team2=document.createElement("div");
        team1.classList.add("team2");

        let team2_content=document.createElement("div");
        team2_content.classList.add("team2_content");
        team2_content.textContent=seriesAd.matchInfo.team2.teamName;
        team2.appendChild(team2_content);
        

        let team1_img_box=document.createElement("div");
        team1_img_box.classList.add("team1_img_box");
        let team2_img_box=document.createElement("div");
        team2_img_box.classList.add("team2_img_box");
        
        
        async function img_fetch(){
        try {
          const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
          const imageBlob = await imageResponse.blob();
  
          let imgElement = document.createElement("img");
          imgElement.src = URL.createObjectURL(imageBlob);
          team1_img_box.append(imgElement);
        } catch (error) {
          console.log(error);
        }
      }

      img_fetch();

      async function im_fetch(){
        try {
          const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
          const imageBlob = await imageResponse.blob();
  
          let imgElement = document.createElement("img");
          imgElement.src = URL.createObjectURL(imageBlob);
          team2_img_box.append(imgElement);
        } catch (error) {
          console.log(error);
        }
      }

      im_fetch();

      let score1=document.createElement("div");
      score1.classList.add("score1");

      let score2=document.createElement("div");
      score2.classList.add("score2");

     



      score1.appendChild(team1_img_box);
      score2.appendChild(team2_img_box);
   

      
      team1.prepend(score1);
      team2.prepend(score2);

        

        team.appendChild(team1);
        team.appendChild(team2);

      
        p_series_match.appendChild(xvsy);
        p_series_match.appendChild(date_time);
        p_series_match.appendChild(team);

        p_series.appendChild(p_series_match);
          
        }
        
        to_color_black.appendChild(p_series);
        upg_international.appendChild(to_color_black);
       }

       
      }

})


/*league start*/

let league=document.querySelector(".league");

league.addEventListener("click",()=>{

  let commons=document.querySelectorAll(".common");
 
  for(let common of commons){
      if(common.classList.contains("dark_international")){
       common.classList.remove("dark_international");
      }

   league.classList.add("dark_international");
  }

  let upg_league=document.querySelector(".upg_league");
  upg_league.innerHTML="";
  
  let upg_international=document.querySelector(".upg_international");
  if(!upg_international.classList.contains("to_remove"))
   upg_international.classList.add("to_remove");

   let upg_domestic=document.querySelector(".upg_domestic");
   if(!upg_domestic.classList.contains("to_remove"))
   upg_domestic.classList.add("to_remove");

   
   if(upg_league.classList.contains("to_remove"))
   upg_league.classList.remove("to_remove");

   let upg_women=document.querySelector(".upg_women");
   if(!upg_women.classList.contains("to_remove"))
   upg_women.classList.add("to_remove");

  recent_match_types=data.typeMatches[1].seriesMatches;
   
   /*series*/

   for(let recent_match_type of recent_match_types){
    

    if(recent_match_type.seriesAdWrapper){
    
    let match_heading=document.createElement("div");
    match_heading.classList.add("match_heading");

    match_heading.textContent=recent_match_type.seriesAdWrapper.matches[0].matchInfo.seriesName;

    
    upg_league.appendChild(match_heading);

    let to_color_black=document.createElement("div");
    to_color_black.classList.add("to_color_black");


    let p_series=document.createElement("div");
    p_series.classList.add("p_series");
  
    let seriesAds=recent_match_type.seriesAdWrapper.matches;

    for(let seriesAd of seriesAds){

    let p_series_match=document.createElement("div");
    p_series_match.classList.add("p_series_match");

    let xvsy=document.createElement("xvsy");
    xvsy.classList.add("xvsy");
    
    let inside_xvsy=document.createElement("div");
    inside_xvsy.classList.add("inside_xvsy");
    inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

    xvsy.appendChild(inside_xvsy);


    const timestamp = Number(seriesAd.matchInfo.startDate);
    const date = new Date(timestamp);
    
    const dateFormatOptions = { 
      month: 'long', 
      day: 'numeric'
    };
    
    const timeFormatOptions = {
      hour: 'numeric', 
      hour12: true
    };
    
  const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
  const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
    
   
  let date_time=document.createElement("div");
  date_time.classList.add("date_time");
  date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;



    let match_number=document.createElement("div");
    match_number.classList.add("match_number");
    match_number.textContent=seriesAd.matchInfo.matchDesc;
    xvsy.appendChild(match_number);

    let team=document.createElement("div");
    team.classList.add("team");
    let team1=document.createElement("div");
    team1.classList.add("team1");

    let team1_content=document.createElement("div");
    team1_content.classList.add("team1_content");
    team1_content.textContent=seriesAd.matchInfo.team1.teamName;

    team1.appendChild(team1_content);

    let team2=document.createElement("div");
    team1.classList.add("team2");

    let team2_content=document.createElement("div");
    team2_content.classList.add("team2_content");
    team2_content.textContent=seriesAd.matchInfo.team2.teamName;
    team2.appendChild(team2_content);
    

    let team1_img_box=document.createElement("div");
    team1_img_box.classList.add("team1_img_box");
    let team2_img_box=document.createElement("div");
    team2_img_box.classList.add("team2_img_box");
    
    
    async function img_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team1_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  img_fetch();

  async function im_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team2_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  im_fetch();

  let score1=document.createElement("div");
  score1.classList.add("score1");

  let score2=document.createElement("div");
  score2.classList.add("score2");

 


  score1.appendChild(team1_img_box);
  score2.appendChild(team2_img_box);


  
  team1.prepend(score1);
  team2.prepend(score2);

    

    team.appendChild(team1);
    team.appendChild(team2);

 


    p_series_match.appendChild(xvsy);
    p_series_match.appendChild(date_time);
    p_series_match.appendChild(team);

    p_series.appendChild(p_series_match);
      
    }
    
    to_color_black.appendChild(p_series);
    upg_league.appendChild(to_color_black);
   }

   
  }

})

/*league_ end*/











/*domestic start*/

let domestic=document.querySelector(".domestic");

domestic.addEventListener("click",()=>{

  let commons=document.querySelectorAll(".common");
 
  for(let common of commons){
      if(common.classList.contains("dark_international")){
       common.classList.remove("dark_international");
      }

   domestic.classList.add("dark_international");
  }

  let upg_domestic=document.querySelector(".upg_domestic");
  upg_domestic.innerHTML="";
  
  let upg_international=document.querySelector(".upg_international");
  if(!upg_international.classList.contains("to_remove"))
   upg_international.classList.add("to_remove");

   if(upg_domestic.classList.contains("to_remove"))
   upg_domestic.classList.remove("to_remove");

   let upg_league=document.querySelector(".upg_league");
   if(!upg_league.classList.contains("to_remove"))
   upg_league.classList.add("to_remove");

   let upg_women=document.querySelector(".rect_women");
   if(!upg_women.classList.contains("to_remove"))
   upg_women.classList.add("to_remove");

  let recent_match_types=data.typeMatches[2].seriesMatches;
   
   /*series*/

   for(let recent_match_type of recent_match_types){
    

    if(recent_match_type.seriesAdWrapper){
    
    let match_heading=document.createElement("div");
    match_heading.classList.add("match_heading");

    match_heading.textContent=recent_match_type.seriesAdWrapper.matches[0].matchInfo.seriesName;

    
    upg_domestic.appendChild(match_heading);

    let to_color_black=document.createElement("div");
    to_color_black.classList.add("to_color_black");


    let p_series=document.createElement("div");
    p_series.classList.add("p_series");
  
    let seriesAds=recent_match_type.seriesAdWrapper.matches;

    for(let seriesAd of seriesAds){

    let p_series_match=document.createElement("div");
    p_series_match.classList.add("p_series_match");

    let xvsy=document.createElement("xvsy");
    xvsy.classList.add("xvsy");
    
    let inside_xvsy=document.createElement("div");
    inside_xvsy.classList.add("inside_xvsy");
    inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

    xvsy.appendChild(inside_xvsy);


    const timestamp = Number(seriesAd.matchInfo.startDate);
    const date = new Date(timestamp);
    
    const dateFormatOptions = { 
      month: 'long', 
      day: 'numeric'
    };
    
    const timeFormatOptions = {
      hour: 'numeric', 
      hour12: true
    };
    
  const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
  const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
    
   
  let date_time=document.createElement("div");
  date_time.classList.add("date_time");
  date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;



    let match_number=document.createElement("div");
    match_number.classList.add("match_number");
    match_number.textContent=seriesAd.matchInfo.matchDesc;
    xvsy.appendChild(match_number);

    let team=document.createElement("div");
    team.classList.add("team");
    let team1=document.createElement("div");
    team1.classList.add("team1");

    let team1_content=document.createElement("div");
    team1_content.classList.add("team1_content");
    team1_content.textContent=seriesAd.matchInfo.team1.teamName;

    team1.appendChild(team1_content);

    let team2=document.createElement("div");
    team1.classList.add("team2");

    let team2_content=document.createElement("div");
    team2_content.classList.add("team2_content");
    team2_content.textContent=seriesAd.matchInfo.team2.teamName;
    team2.appendChild(team2_content);
    

    let team1_img_box=document.createElement("div");
    team1_img_box.classList.add("team1_img_box");
    let team2_img_box=document.createElement("div");
    team2_img_box.classList.add("team2_img_box");
    
    
    async function img_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team1_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  img_fetch();

  async function im_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team2_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  im_fetch();

  let score1=document.createElement("div");
  score1.classList.add("score1");

  let score2=document.createElement("div");
  score2.classList.add("score2");



  score1.appendChild(team1_img_box);
  score2.appendChild(team2_img_box);

  
  team1.prepend(score1);
  team2.prepend(score2);

    

    team.appendChild(team1);
    team.appendChild(team2);

  
    p_series_match.appendChild(xvsy);
    p_series_match.appendChild(date_time);
    p_series_match.appendChild(team);

    p_series.appendChild(p_series_match);
      
    }
    
    to_color_black.appendChild(p_series);
    upg_domestic.appendChild(to_color_black);
   }

   
  }

})

/*domestic end*/


/*women begin*/

let women=document.querySelector(".women");

women.addEventListener("click",()=>{

  let commons=document.querySelectorAll(".common");
 
  for(let common of commons){
      if(common.classList.contains("dark_international")){
       common.classList.remove("dark_international");
      }

   women.classList.add("dark_international");
  }

  let upg_women=document.querySelector(".upg_women");
  upg_women.innerHTML="";
  
  let upg_international=document.querySelector(".upg_international");
  if(!upg_international.classList.contains("to_remove"))
   upg_international.classList.add("to_remove");

   let upg_domestic=document.querySelector(".upg_domestic");
   if(!upg_domestic.classList.contains("to_remove"))
   upg_domestic.classList.add("to_remove");

   let upg_league=document.querySelector(".upg_league");
   if(!upg_league.classList.contains("to_remove"))
   upg_league.classList.add("to_remove");

   
   if(upg_women.classList.contains("to_remove"))
   upg_women.classList.remove("to_remove");

  let recent_match_types=data.typeMatches[3].seriesMatches;
   
   /*series*/

   for(let recent_match_type of recent_match_types){
    

    if(recent_match_type.seriesAdWrapper){
    
    let match_heading=document.createElement("div");
    match_heading.classList.add("match_heading");
    
    match_heading.textContent=recent_match_type.seriesAdWrapper.matches[0].matchInfo.seriesName;

    
    upg_women.appendChild(match_heading);

    let to_color_black=document.createElement("div");
    to_color_black.classList.add("to_color_black");


    let p_series=document.createElement("div");
    p_series.classList.add("p_series");
  
    let seriesAds=recent_match_type.seriesAdWrapper.matches;

    for(let seriesAd of seriesAds){

    let p_series_match=document.createElement("div");
    p_series_match.classList.add("p_series_match");

    let xvsy=document.createElement("xvsy");
    xvsy.classList.add("xvsy");
    
    let inside_xvsy=document.createElement("div");
    inside_xvsy.classList.add("inside_xvsy");
    inside_xvsy.textContent=`${seriesAd.matchInfo.team1.teamName} vs ${seriesAd.matchInfo.team2.teamName}, `;

    xvsy.appendChild(inside_xvsy);


    const timestamp = Number(seriesAd.matchInfo.startDate);
    const date = new Date(timestamp);
    
    const dateFormatOptions = { 
      month: 'long', 
      day: 'numeric'
    };
    
    const timeFormatOptions = {
      hour: 'numeric', 
      hour12: true
    };
    
  const formattedDate = date.toLocaleString(undefined, dateFormatOptions);
  const formattedTime = date.toLocaleString(undefined, timeFormatOptions);
    
   
  let date_time=document.createElement("div");
  date_time.classList.add("date_time");
  date_time.textContent=`${formattedDate}, ${formattedTime} at ${seriesAd.matchInfo.venueInfo.city}, ${seriesAd.matchInfo.venueInfo.ground}`;



    let match_number=document.createElement("div");
    match_number.classList.add("match_number");
    match_number.textContent=seriesAd.matchInfo.matchDesc;
    xvsy.appendChild(match_number);

    let team=document.createElement("div");
    team.classList.add("team");
    let team1=document.createElement("div");
    team1.classList.add("team1");

    let team1_content=document.createElement("div");
    team1_content.classList.add("team1_content");
    team1_content.textContent=seriesAd.matchInfo.team1.teamName;

    team1.appendChild(team1_content);

    let team2=document.createElement("div");
    team1.classList.add("team2");

    let team2_content=document.createElement("div");
    team2_content.classList.add("team2_content");
    team2_content.textContent=seriesAd.matchInfo.team2.teamName;
    team2.appendChild(team2_content);
    

    let team1_img_box=document.createElement("div");
    team1_img_box.classList.add("team1_img_box");
    let team2_img_box=document.createElement("div");
    team2_img_box.classList.add("team2_img_box");
    
    
    async function img_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team1.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team1_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  img_fetch();

  async function im_fetch(){
    try {
      const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${seriesAd.matchInfo.team2.imageId}/i.jpg?p=de&d=high`,options);
      const imageBlob = await imageResponse.blob();

      let imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imageBlob);
      team2_img_box.append(imgElement);
    } catch (error) {
      console.log(error);
    }
  }

  im_fetch();

  let score1=document.createElement("div");
  score1.classList.add("score1");

  let score2=document.createElement("div");
  score2.classList.add("score2");

  score1.appendChild(team1_img_box);
  score2.appendChild(team2_img_box);

  team1.prepend(score1);
  team2.prepend(score2);

    team.appendChild(team1);
    team.appendChild(team2);

    p_series_match.appendChild(xvsy);
    p_series_match.appendChild(date_time);
    p_series_match.appendChild(team);

    p_series.appendChild(p_series_match);
      
    }
    
    to_color_black.appendChild(p_series);
    upg_women.appendChild(to_color_black);
   }

   
  }

})


/*women end*/




})
.catch(error => {
  console.log('Fetch error:');
});
    
/*data fetch end*/


/*end of recent*/
})




/*upcoming end*/







