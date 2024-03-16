const auth = () => {
  const inputElement = document.querySelector("#authField");
  const pass = "lovearina";
  if (inputElement.value === pass) {
    alert("А ты молодец!\nСама догадалась?");
    renderQust();
  } else {
    alert("PIN неправильный.\nПопробуй еще раз");
    inputElement.value = "";
  }
};

const renderQust = () => {
  const mainElement = document.querySelector(".main");
  const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
  };
  const authHtml = `<h1 class="main__title">
  Будешь моей <span style="color: transparent">женой</span>?
</h1>
<img class="main__img" src="./src/img/wait__answr.gif" alt="" />
<div class="main__box">
  <button id="btnYes" class="main__button">Да</button>
  <button id="btnNo" class="main__button">Нет</button>
</div>`;
  mainElement.innerHTML = authHtml;

  const buttonNoElement = document.querySelector("#btnNo");
  const buttonYesElement = document.querySelector("#btnYes");
  buttonNoElement.addEventListener("mouseenter", () => {
    buttonNoElement.style.left = `${random(0, 90)}%`;
    buttonNoElement.style.top = `${random(0, 90)}%`;
  });

  buttonNoElement.addEventListener("click", () => {
    renderNo();
  });

  buttonYesElement.addEventListener("click", () => {
    renderYes();
  });
};

const renderYes = () => {
  const authHtml = `
  <h1 class="main__title">Ура!</h1>
  <img class="main__img" src="./src/img/btn__yes.gif" alt="" /> 
`;
  mainElement.innerHTML = authHtml;
};

const renderNo = () => {
  const authHtml = `
    <h1 class="main__title">Окак</h1>
    <img class="main__img" src="./src/img/btn__no.gif" alt="" /> 
  `;
  mainElement.innerHTML = authHtml;
};
const mainElement = document.querySelector(".main");
const authField = document.querySelector("#authField");
const authButton = document.querySelector("#authButton");

authField.addEventListener("keypress", function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    authButton.click();
  }
});
