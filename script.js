const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - 120);
        const y = Math.random() * (window.innerHeight - 60);

        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    });
}

if (yesBtn) {
    yesBtn.addEventListener("click", () => {
        window.location.href = "balloons.html";
    });
}

let opened = 0;

function showMessage(num) {

    const box = document.getElementById("messageBox");

    if (!box) return;

    if(num==1){
box.innerHTML=`
🌸 Hasi teri kabhi kam na ho,<br><br>

Tu jahan rahe wahan khushiyan hi khushiyan ho!<br><br>

Party toh tujhe aaj deni hi padegi,<br><br>

Baki meri dua hai ki teri life mein kabhi koi tension na ho!<br><br>

🎈 <b>Janamdin Mubarak Ho, Dramebaaz! 🎂</b>
`;
}

    if (num == 2) {
        box.innerHTML = "🎂 Happy Birthday My Dear Friend. You deserve all the happiness in the world. Stay blessed forever. ❤️sayad mai tumhara life mai hames na rahu par jab tak huu ✨tum mere liye samesa special hoo one again happy birthday with lots of love 💕";
    }

    if (num == 3) {
        box.innerHTML = "✨ You are kind, caring, beautiful and one of the sweetest friends anyone could ever have .✨frind tho bhut sare hai female mai par tum wo jisse mai kabhi kucch bhi bata sakta aisa koi nhi banaya tum ban paye pata nhi kase thanks you so much .✨ Never stop smiling. ❤️";
    }

if(num==4){
box.innerHTML=`
<img src="nisha.jpg.png"
style="
width:260px;
height:320px;
object-fit:cover;
border-radius:20px;
border:5px solid white;
box-shadow:0 0 25px hotpink;
">

<br><br>

<h2 style="color:#ff1493;">
💖 Happy Birthday My Cutie Pie with soo much lots of love  💖
</h2>
`;
}

    opened++;

    if (opened >= 4) {
        document.getElementById("nextBtn").style.display = "inline-block";
    }
}

function playVideo() {
    const video = document.getElementById("birthdayVideo");

    video.style.display = "block";
    video.play();
}