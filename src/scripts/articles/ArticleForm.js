import { saveArticle, getArticles } from "./ArticleProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".popup-container")

eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.classList.contains("btn-save-art")) {

    const articleTitle = document.querySelector(".art-title")
    const articleSynopsis = document.querySelector(".art-synopsis")
    const articleUrl = document.querySelector(".art-url")

    const newArticle = {
      userId: parseInt(sessionStorage.getItem("activeUser")),
      title: articleTitle.value,
      synopsis: articleSynopsis.value,
      url: articleUrl.value
    }

    saveArticle(newArticle)
      .then(ArticleForm)

    } else if (clickEvent.target.classList.contains("btn-create-article")) {
      ArticleForm()
    }
})

export const ArticleForm = () => {
  getArticles()
    .then(() => {
        renderArticleForm()
    })
}

const renderArticleForm = () => {
    contentTarget.classList.add("visible")

    contentTarget.innerHTML =  `
    <section class="form-create-art">
        <input type="text" class="art-title" id="articleTitle" placeholder="Article title"></input>
        <input type="text" class="art-synopsis" id="articleSynopsis" placeholder="Article Synopsis"></input>
        <input type="url" class="art-url" id="articleUrl" placeholder="Article URL"></input>
        <button class="btn btn-save-art" id="saveArticle">Save Article</button>
        <button class="btn btn-close-form" id="closeForm">Cancel</button>
    </section>
        `
}