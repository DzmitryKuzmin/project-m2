const addBtn = document.querySelector(".add");
const pls = document.querySelector(".plus");
let List = document.querySelector(".list");
let stringer = document.querySelector(".text");
let dltBtn = document.querySelector(".delete");
const srtBtn = document.querySelector(".sort");
const object = document.querySelector(".sort_object");
const img = document.querySelector(".sort_arrow");

srtBtn.addEventListener("click", () => {
    let arr = [];
    let inputs = document.querySelectorAll(".inner_text");
    for (let i = 0; i < inputs.length; i++) {
        arr.push(inputs[i].value);
    }
    if (
        !object.style.flexDirection ||
        object.style.flexDirection === "column"
    ) {
        object.style.flexDirection = "column-reverse";
        arr.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
        for (let j = 0; j < arr.length; j++) {
            inputs[j].value = arr[j];
        }
    } else {
        object.style.flexDirection = "column";
        arr.sort((a, b) => {
            if (a < b) {
                return 1;
            }
            if (a > b) {
                return -1;
            }
            return 0;
        });
        for (let j = 0; j < arr.length; j++) {
            inputs[j].value = arr[j];
        }
    }
});

function removeElements(del_text) {
    let stringerElements = document.querySelectorAll(".text");
    if (stringerElements.length > 1) {
        del_text.remove();
    }
}

dltBtn.addEventListener("click", () => {
    removeElements(stringer);
});

addBtn.addEventListener("click", () => {
    let newElement = document.createElement("div");
    newElement.innerHTML = stringer.innerHTML;
    newElement.classList.add("text");
    List.append(newElement);

    let dltBtn = newElement.querySelector(".delete");
    dltBtn.addEventListener("click", () => {
        removeElements(newElement);
    });
});

img.addEventListener("click", function () {
    img.classList.toggle("sort_arrow");
});

addBtn.addEventListener("mouseover", () => {
    addBtn.style.backgroundColor = "#9953F1";
    pls.style.backgroundColor = "#AA68FE";
});

addBtn.addEventListener("mouseout", () => {
    addBtn.style.backgroundColor = "#833AE0";
    pls.style.backgroundColor = "#9953F1";
});
