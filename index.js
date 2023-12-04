const colorBtn = document.querySelectorAll(".colorBtn");
const contentItem = document.querySelectorAll(".contentItem");

colorBtn.forEach(function (elemenet) {
  elemenet.addEventListener("click", open);
});

function open(event) {
  const target = event.currentTarget;
  const dataBtn = target.dataset.button;
  const contententActive = document.querySelectorAll(`.${dataBtn}`)

  colorBtn.forEach(function (item) {
    item.classList.remove("activeBtn");
  });

  target.classList.add("activeBtn");

  contentItem.forEach(function(item){
    item.classList.remove('contentActive');
  })

  contententActive.forEach(function(item){
    item.classList.add('contentActive')
  })
}
