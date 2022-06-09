
const fetchData = async (config)=>{
    try{
        const res = await axios(config);
        return res.data;
    }catch(error){
        throw Error("data not fetched");
    }
}

const postsElements = document.querySelector(".posts");

const loadData = async()=>{
    const posts = await fetchData("http://fakeapi.jsonparseronline.com/posts");

    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML= `<h4 class="title">${post.title}</h4>
        <p class="details">${post.content}</p>`

        postsElements.appendChild(postElement);
    })
}

loadData();