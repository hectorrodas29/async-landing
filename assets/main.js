const API =
  "https://youtube138.p.rapidapi.com/channel/videos/?id=UC9TO_oo4c_LrOiKNaY6aysA&hl=en&gl=US";

const content = document.getElementById('content');

  const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1a5af434camsh9631c303ab9f170p17ab84jsna0fbc18ffd0c",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.contents.map(
      (video) => `
        <div class="group relative">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.video.thumbnails[0].url}" alt="" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.video.title}
            </h3>
        </div>
        </div>
    
        `
    ).slice(25,40).join('')} 
     `;
     content.innerHTML = view;
  } catch (error){ console.log(error);}
})();
