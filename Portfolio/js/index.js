let scrollEl = document.getElementById('navMe');

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollEl.classList.add('navbar-scrolled');
        scrollEl.classList.remove('navbar-dark');
        scrollEl.classList.add('navbar-light');

    } else if (window.scrollY < 200) {
        scrollEl.classList.remove('navbar-scrolled');
        scrollEl.classList.add('navbar-dark');
        scrollEl.classList.remove('navbar-light');
    }
});



// function([string1, string2],target id,[color1,color2])    
consoleText([`I'm Vedang Surnis`, `A Full Stack Developer`], 'text', ['white', 'white', 'white']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
};

window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);





  AOS.init(
    {
        offset: 200,
        duration: 1000
    }
  );