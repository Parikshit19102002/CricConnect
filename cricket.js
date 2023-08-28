
const url = 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7c731bacc5mshe904bf260a4d25dp15b5dcjsn3f77a8d55314',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    let lists = result.storyList;

    for (let list of lists) {

      if (list.story) {
        
      let ids = list.story.coverImage.id;
      let news = document.querySelector(".news");
      
      const imageUrl = `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${ids}/i.jpg?p=de&d=high`;
      const imageOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '6714d07175msh71382736f31ed69p1b3eb2jsn2999f991b44a',
          'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
      };

      try {
        const imageResponse = await fetch(imageUrl, imageOptions);
        const imageBlob = await imageResponse.blob();
        

        let divi=document.createElement("div");
        divi.classList.add("divi");
        let divii=document.createElement("div");
        divii.classList.add("divii");
        let diviii=document.createElement("div");
        diviii.classList.add("diviii");

        let diviiii=document.createElement("div");
        diviiii.classList.add("diviiii");

        diviiii.textContent=list.story.intro;

        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imageBlob);

        let cap=document.createElement("h1");
        cap.textContent=list.story.coverImage.caption;

        divii.appendChild(cap);
        divii.appendChild(diviiii);
        divi.appendChild(imgElement);
        diviii.appendChild(divi);
        diviii.appendChild(divii);

        news.appendChild(diviii);



      } catch (error) {
        console.log(error);
      }
    }
  }

  } catch (error) {
    console.log(error);
  }
}

fetchData();
