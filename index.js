const letters = document.querySelectorAll("li");

setTimeout(() => {
        Array.from(letters).forEach((letter,index) => {
                setTimeout(() => {
                        letter.classList.toggle("show");
                }, index * 150);
        })
}, 1000);