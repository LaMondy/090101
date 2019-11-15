/*showElements()

function showElements(jsElement) {
    console.log('working')
    //2 clone template
    const template = document.querySelector("template").content;
    const myCopy = template.cloneNode(true);
    //3 change data

    //4 append
    const parentElement = document.querySelector("main");
    parentElement.appendChild(myCopy);

}*/

window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch("http://iesdesigner.eu/wordpress/wp-json/wp/v2/exhibition?_embed")
        .then(res=>res.json())
        .then(handleData)}

function handleData(myData){
    //Loop it
    myData.forEach(showPost)
}

function showPost(post) {
 console.log(post)
    //Clone it
    const template = document.querySelector(".myTemplate").content;
    const postCopy = template.cloneNode(true);

    const imgPath = post.poster.guid;
	const img = postCopy.querySelector("img");
	img.setAttribute("src", imgPath)
	img.setAttribute("alt", "Poster of the movie " + post.title.rendered)

    const h1 = postCopy.querySelector("h1");
    h1.textContent = post.title.rendered;

    const p = postCopy.querySelector("p");
    p.textContent = post.event_date;

    const p2 = postCopy.querySelector("h5");
    p2.innerHTML = post.content.rendered;
//    const p3 = postCopy.querySelector("p3");
//    p3.innerHTML = post.different_concerts
    //Append it
    document.querySelector("#exhibition").appendChild(postCopy)
}

