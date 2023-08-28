fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen?formatType=odi', options)
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
            
            player_img_box.appendChild(imgElement);
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





     fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen?formatType=t20', options)
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
            
            player_img_box.appendChild(imgElement);
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


     fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/bowlers?formatType=t20', options)
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
            
            player_img_box.appendChild(imgElement);
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
            
            player_img_box.appendChild(imgElement);
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
            
            player_img_box.appendChild(imgElement);
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