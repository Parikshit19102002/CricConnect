const id = localStorage.getItem('globalId');

console.log(id);

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e1aa14092bmsh46a7b7297d0ff9fp1a1491jsn9956860de603',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };


  fetch(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}`, options)
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => {

      console.log(data);

        let main_body=document.querySelector(".main_body");
        let image_and_name=document.querySelector(".image_and_name");

        async function img_fetch(){
          try {
            const imageResponse = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${data.faceImageId}/i.jpg?p=de&d=high`,options);
            const imageBlob = await imageResponse.blob();
            
            

            let imgElement = document.createElement("img");
            imgElement.src = URL.createObjectURL(imageBlob);

            imgElement.addEventListener('error', () => {
              imgElement.parentNode.removeChild(imgElement);
            });
            
  
            let body_img=document.querySelector(".body_img");
            body_img.appendChild(imgElement);
            image_and_name.prepend(body_img);
            main_body.prepend(image_and_name);


          } catch (error) {
            console.log(error);
          }
        }
  
        img_fetch();
        
        let namee=document.querySelector(".name");
        namee.textContent=data.name;

        let about=document.querySelector(".about");

        let country=document.createElement("div");
        country.classList.add("country");
        country.innerHTML=`<ul><li>${data.intlTeam} Cricketer</li></ul>`;
        about.appendChild(country);

      /*ICC batting Ranking*/

        if(data.rankings.bat){
        
        let batting_ranking=document.createElement("div");
        batting_ranking.classList.add("batting_ranking");
        
        let batting_ranking_name=document.createElement("div");
        batting_ranking_name.classList.add("batting_ranking_name");
        batting_ranking_name.textContent="Batting";

        let batting_ranking_rank=document.createElement("div");
        batting_ranking_rank.classList.add("batting_ranking_rank");
        
        if(data.rankings.bat[0].testBestRank!=='0'){
          let test_rank=document.createElement("div");
          test_rank.classList.add("test_rank");

          test_rank.innerHTML=`<ul><li>ICC Test Best Ranking : ${data.rankings.bat[0].testBestRank}</li></ul>`;
          batting_ranking_rank.appendChild(test_rank);
        }

        if(data.rankings.bat[0].odiBestRank!=='0'){
          let odi_rank=document.createElement("div");
          odi_rank.classList.add("odi_rank");

          odi_rank.innerHTML=`<ul><li>ICC Odi Best Ranking : ${data.rankings.bat[0].odiBestRank}</li></ul>`;
          batting_ranking_rank.appendChild(odi_rank);
        }


        if(data.rankings.bat[0].t20BestRank!=='0'){
          let t20_rank=document.createElement("div");
          t20_rank.classList.add("t20_rank");

          t20_rank.innerHTML=`<ul><li>ICC t20 Best Ranking : ${data.rankings.bat[0].t20BestRank}</li></ul>`;
          batting_ranking_rank.appendChild(t20_rank);
        }

        batting_ranking.appendChild(batting_ranking_name);
        batting_ranking.appendChild(batting_ranking_rank);

        about.appendChild(batting_ranking);
        }


        if(data.rankings.bowl){
        
          let bowl_ranking=document.createElement("div");
          bowl_ranking.classList.add("bowl_ranking");
          
          let bowl_ranking_name=document.createElement("div");
          bowl_ranking_name.classList.add("bowl_ranking_name");
          bowl_ranking_name.textContent="Bowling"
  
          let bowl_ranking_rank=document.createElement("div");
          bowl_ranking_rank.classList.add("bowl_ranking_rank");
          
          if(data.rankings.bowl[0].testBestRank!=='0'){
            let test_rank=document.createElement("div");
            test_rank.classList.add("test_rank");
  
            test_rank.innerHTML=`<ul><li>ICC Test Best Ranking : ${data.rankings.bowl[0].testBestRank}</li></ul>`;
            bowl_ranking_rank.appendChild(test_rank);
          }
  
          if(data.rankings.bowl[0].odiBestRank!=='0'){
            let odi_rank=document.createElement("div");
            odi_rank.classList.add("odi_rank");
  
            odi_rank.innerHTML=`<ul><li>ICC Odi Best Ranking : ${data.rankings.bowl[0].odiBestRank}</li></ul>`;
            bowl_ranking_rank.appendChild(odi_rank);
          }
  
  
          if(data.rankings.bowl[0].t20BestRank!=='0'){
            let t20_rank=document.createElement("div");
            t20_rank.classList.add("t20_rank");
  
            t20_rank.innerHTML=`<ul><li>ICC t20 Best Ranking : ${data.rankings.bowl[0].t20BestRank}</li></ul>`;
            bowl_ranking_rank.appendChild(t20_rank);
          }
  
          bowl_ranking.appendChild(bowl_ranking_name);
          bowl_ranking.appendChild(bowl_ranking_rank);
  
          about.appendChild(bowl_ranking);
          }


       
        let bio=document.createElement("div");
        bio.classList.add("bio");
        bio.textContent="Bio";
        about.appendChild(bio);
         
        let bio_details=document.createElement("div");
        bio_details.classList.add("bio_details");
        bio_details.innerHTML=data.bio;
        about.appendChild(bio_details);


        let inside_more_about=document.querySelector(".inside_more_about");

        let abbou=document.createElement("div");
        abbou.classList.add("abbou");
        abbou.textContent="About";
        inside_more_about.appendChild(abbou);
        
        if(data.DoB){
        let born=document.createElement("div");
        born.classList.add("born");
        born.innerHTML=`<ul><li>Born : ${data.DoB}</li></ul>`;
        inside_more_about.appendChild(born);
        }
        
        if(data.birthPlace){
        let birth_place=document.createElement("div");
        birth_place.classList.add("birth_place");
        birth_place.innerHTML=`<ul><li>Birth Place : ${data.birthPlace}</li></ul>`;
        inside_more_about.appendChild(birth_place);
        }
        
        if(data.bat){
        let bat=document.createElement("div");
        bat.classList.add("bat");
        bat.innerHTML=`<ul><li>Batting Style : ${data.bat}</li></ul>`;
        inside_more_about.appendChild(bat);
        }
        
        if(data.bowl){
        let bowl=document.createElement("div");
        bowl.classList.add("bowl");
        bowl.innerHTML=`<ul><li>Bowling Style : ${data.bowl}</li></ul>`;
        inside_more_about.appendChild(bowl);
        }
        
        if(data.height){
        let height=document.createElement("div");
        height.classList.add("height");
        height.innerHTML=`<ul><li>Height : ${data.height}</li></ul>`;
        inside_more_about.appendChild(height);
        }
        
        if(data.nickName){
        let nickName=document.createElement("div");
        nickName.classList.add("nickName");
        nickName.innerHTML=`<ul><li>Nick Name : ${data.nickName}</li></ul>`;
        inside_more_about.appendChild(nickName);
        }

     })
     .catch(()=>{
        console.log("Error!!!!");
     })