const btn = document.querySelector("#btn")
const popupLayer = document.querySelector("#popupLayer")
const popupLayerClose = document.querySelector("#popupLayerClose")

popupLayer.show = function () {
    this.style.display = "block"
}

// 不能使用 popupLayer.hidden 因为它是浏览器提供的 属性
// 赋值将失败
// hidden 属性表示页面是否显示，为HTML5 Page Visibility API
popupLayer.disappear = function () {
    this.style.display = "none"
}

const popup = () => {
    popupLayer.show()
}

const close = () => {
    popupLayer.disappear()
}

btn.addEventListener("click", popup, true)

popupLayerClose.addEventListener("click", close, true)