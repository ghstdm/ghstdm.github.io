const descriptionElement = document.getElementById('description');
const profileImage = document.getElementById('profile-image');
const lang = navigator.language;

const textRu = "Занимаюсь программированием, созданием видео, некоторого рода инженерным мастерством. Обучаюсь рисованию и писательству. Не бойтесь писать мне, я не кусаюсь :)";
const textEn = "I do programming, video creation, some kind of engineering. I'm learning drawing and writing. Don't be afraid to write to me, I don't bite :)";

if (lang.startsWith('ru')) {
    descriptionElement.textContent = textRu;
} else {
    descriptionElement.textContent = textEn;
}

let isClickable = true;

profileImage.addEventListener('click', function() {
    if (isClickable) {
        isClickable = false;
        profileImage.src = 'https://i.pinimg.com/originals/a7/d2/96/a7d29647c0862b8fe4c281661b3819cf.gif';
        setTimeout(function() {
            profileImage.src = 'https://cdn.discordapp.com/avatars/1032331877857644646/1f58880d2dac0c63d54c00540778fdee?size=1024';
            isClickable = true;
        }, 5000);
    }
});
