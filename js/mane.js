const refs = {
    navigation: document.querySelector("#tabs__content-1 [data-navigation]"),
    content: document.querySelector("#tabs__content-1 [data-navigation]"),
};

refs.navigation.addEventListener("click", onChacgeNavagation);
console.log(refs.content);
function onChacgeNavagation(event) {
    const { target } = event;

    if (target.nodeName !== "ARTICLE") return;

    const currentButton = target;

    const currentTab = currentButton.dataset.tab;

    const currentContent = refs.content.querySelector(
        `[data-content=${currentTab}]`
    );
    if (currentButton.classList.contains("tabs__content-btn-special")) {
        currentContent.classList.remove("active");
        return currentButton.classList.remove("tabs__content-btn-special");
    }
    currentButton.classList.add("tabs__content-btn-special");
    currentContent.classList.add("active");
}
