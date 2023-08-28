const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e1aa14092bmsh46a7b7297d0ff9fp1a1491jsn9956860de603',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };


  fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen?formatType=test', options)
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => {

      console.log(data);
       
      let player_image=document.querySelector(".palyer_image");

      let palyer_datas=data.rank;

      for(let palyer_data of palyer_datas){
        
        async function img_fetch(){
          try {
            const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${palyer_data.id}/i.jpg?p=de&d=high`,options);
            const imageBlob = await imageResponse.blob();
            
            let player_img_box=document.createElement("div");
            player_img_box.classList.add("player_img_box");

            let imgElement = document.createElement("img");
            imgElement.src = URL.createObjectURL(imageBlob);

            imgElement.addEventListener('error', () => {
              imgElement.parentNode.removeChild(imgElement);
            });


            let anchor=document.createElement("a");
            anchor.href="player_info.html";
            anchor.appendChild(imgElement);


            let requiredId=palyer_data.id;

            imgElement.addEventListener("click", () => {
            
            localStorage.setItem('globalId', requiredId);
            window.location.href = `player_info.html`; 
            });
            
            player_img_box.appendChild(anchor);
            player_image.appendChild(player_img_box);

          } catch (error) {
            console.log(error);
          }
        }
  
        img_fetch();

      }
       
     })
     .catch((error)=>{
          console.log("Error!!!!");
     })




     fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/bowlers?formatType=odi', options)
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => {
       
      let player_image=document.querySelector(".palyer_image");

      let palyer_datas=data.rank;

      for(let palyer_data of palyer_datas){
        
        async function img_fetch(){
          try {
            const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${palyer_data.id}/i.jpg?p=de&d=high`,options);
            const imageBlob = await imageResponse.blob();
            
            let player_img_box=document.createElement("div");
            player_img_box.classList.add("player_img_box");

            let imgElement = document.createElement("img");
            imgElement.src = URL.createObjectURL(imageBlob);


            imgElement.addEventListener('error', () => {
              imgElement.parentNode.removeChild(imgElement);
            });

            let anchor=document.createElement("a");
            anchor.href="player_info.html";
            anchor.appendChild(imgElement);
            
            let requiredId=palyer_data.id;

            imgElement.addEventListener("click", () => {
            
            localStorage.setItem('globalId', requiredId);
            window.location.href = `player_info.html`; 
            });
            
            player_img_box.appendChild(anchor);
            player_image.appendChild(player_img_box);

          } catch (error) {
            console.log(error);
          }
        }
  
        img_fetch();

      }
       
     })
     .catch((error)=>{
          console.log("Error!!!!");
     })




     fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/bowlers?formatType=test', options)
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => {
       
      let player_image=document.querySelector(".palyer_image");

      let palyer_datas=data.rank;

      for(let palyer_data of palyer_datas){
        
        async function img_fetch(){
          try {
            const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${palyer_data.id}/i.jpg?p=de&d=high`,options);
            const imageBlob = await imageResponse.blob();
            
            let player_img_box=document.createElement("div");
            player_img_box.classList.add("player_img_box");

            let imgElement = document.createElement("img");
            imgElement.src = URL.createObjectURL(imageBlob);


            imgElement.addEventListener('error', () => {
              imgElement.parentNode.removeChild(imgElement);
            });
            
            let anchor=document.createElement("a");
            anchor.href="player_info.html";
            anchor.appendChild(imgElement);
            
            let requiredId=palyer_data.id;

            imgElement.addEventListener("click", () => {
            
            localStorage.setItem('globalId', requiredId);
            window.location.href = `player_info.html`; 
            });
            
            player_img_box.appendChild(anchor);
            player_image.appendChild(player_img_box);

          } catch (error) {
            console.log(error);
          }
        }
  
        img_fetch();

      }
       
     })
     .catch((error)=>{
          console.log("Error!!!!");
     })







     const form=document.querySelector(".two");

     form.addEventListener('submit',(e)=>{

      e.preventDefault();

      let select=document.querySelector(".select");
      
      if(select){
      if(!select.classList.contains("NoFound")){
        select.classList.add("NoFound");
      }
    }

      let images=document.querySelectorAll(".player_img_box");


      for(let image of images){
        image.remove();
      }
      
      images=document.querySelector(".player_Box");
      if(images)
      images.remove();
      
      const item=form.elements.query.value;

      fetch(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search?plrN=${item}`, options)
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => {
       
           console.log(data);

          form.elements.query.value="";
          let player_image=document.querySelector(".palyer_image");

          let player_Box=document.createElement("div");
          player_Box.classList.add("player_Box");

          let playerss=data.player;

         

          for(let players of playerss){

          
            async function img_fetch(){
              try {
                const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${players.faceImageId}/i.jpg?p=de&d=high`,options);
                const imageBlob = await imageResponse.blob();

                const imageSize = imageBlob.size;
               
                let maxSizeInBytes=2983;

                if (imageSize === maxSizeInBytes) {
                  return;
                }
                  
                
                let player_img_Box=document.createElement("div");
                player_img_Box.classList.add("player_img_Box");
    
                let imgElement = document.createElement("img");
                imgElement.src = URL.createObjectURL(imageBlob);

    
                imgElement.addEventListener('error', () => {
                  imgElement.parentNode.removeChild(imgElement);
                });

                let anchor=document.createElement("a");
                anchor.href="player_info.html";
                anchor.appendChild(imgElement);


                let requiredId=players.id;

                imgElement.addEventListener("click", () => {
            
               localStorage.setItem('globalId', requiredId);
               window.location.href = `player_info.html`; 
               });
                
                let divi=document.createElement("div");

                let image_name=document.createElement("div");
                image_name.classList.add("image_name");
                image_name.textContent=players.name;
                
                
                player_img_Box.appendChild(anchor);
                divi.appendChild(player_img_Box);
                divi.appendChild(image_name);
                player_Box.appendChild(divi);
                player_image.appendChild(player_Box);

              
    
              } catch (error) {
                console.log(error);
              }
            }
          
      
            img_fetch();

 
          }




     })
     .catch((error)=>{
          
      let select=document.querySelector(".select");

      if(select.classList.contains("NoFound")){
        select.classList.remove("NoFound");
      }

     })

     })