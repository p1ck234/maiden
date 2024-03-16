const mainElement = document.querySelector(".main");
document.addEventListener("DOMContentLoaded", async () => {
  mainElement.innerHTML = "<p>Загрузка данных...</p>";
  await renderAuth();
});
const auth = () => {
  const inputElement = document.querySelector("#authField");
  const pass = "lovearina";
  if (inputElement.value === pass) {
    swal({
      title: "А ты молодец!",
      text: "Сама догадалась?",
      icon: "success",
      button: "Да, да я",
    }).then(() => {
      renderQust();
    });
  } else {
    swal({
      title: "PIN неправильный",
      text: "Попробуй еще раз",
      icon: "error",
    }).then(() => {
      inputElement.value = "";
    });
  }
};

const renderAuth = () => {
  const mainElement = document.querySelector(".main");
  const authElement = `<h1 class="main__title">Для начало тебе нужно зайти!</h1>
  <p class="main__text">Угадаешь пароль?</p>
  <input
    id="authField"
    type="password"
    class="main__input"
    placeholder="PIN"
  />
  <input
  class="autnEnter"
    style="display: none"
    type="button"
    id="authButton"
    value="Войти"
    onclick="auth()"
  />
  <a target="_blank" class="main__link" href="https://t.me/p1ck23"
    >Помощь</a
  >`;
  mainElement.innerHTML = authElement;

  const authField = document.querySelector("#authField");
  const authButton = document.querySelector("#authButton");
  authField.addEventListener("keypress", function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      authButton.click();
    }
  });
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
<div id="loadingText" style="font-size: 32px">Загружается...</div>
<img class="main__img" src="./src/img/wait__answr.gif" alt="main_img" onload="document.getElementById('loadingText').style.display='none';" />
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
    swal({
      title: "Вопрос",
      text: "Ты уверена? Пути обратно не будет!",
      icon: "warning",
      buttons: ["Нет", "Да"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal({
          title: "Еще один вопрос",
          text: "Ты точно, точно уверена?",
          icon: "warning",
          buttons: ["Нет", "Да"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            renderNo();
          } else {
            swal("Слава богу!");
          }
        });
      } else {
        swal("Попробуй снова");
      }
    });
  });

  buttonYesElement.addEventListener("click", () => {
    renderYes();
  });
};

const renderYes = () => {
  const authHtml = `
  <h1 class="main__title">Ура!</h1>
  <div id="loadingText" style="font-size: 32px">Загружается...</div>
  <img class="main__img" src="./src/img/btn__yes.gif" alt="img_yes" onload="document.getElementById('loadingText').style.display='none'";/> 
`;
  mainElement.innerHTML = authHtml;
};

const renderNo = () => {
  const authHtml = `
    <h1 class="main__title">Окак</h1>
    <div id="loadingText" style="font-size: 32px">Загружается...</div>
    <img class="main__img" src="./src/img/btn__no.gif" alt="img_no" onload="document.getElementById('loadingText').style.display='none'";/> 
  `;
  mainElement.innerHTML = authHtml;
};
