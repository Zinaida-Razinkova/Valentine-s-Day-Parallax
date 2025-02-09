window.addEventListener('load', windowLoad);

function windowLoad() {
    document.documentElement.classList.add('loaded');
    createPosition();

    window.addEventListener('scroll', createPosition);

    function createPosition() {
        const contentElement = document.querySelector('.content__container');
        const windowHeight = window.innerHeight;
        const finalPos = scrollY / (contentElement.offsetTop - windowHeight) * 60;
        finalPos < 100 ? loveAnimation(finalPos) : loveAnimation(100);
  }
  
    function loveAnimation(finalPos) {
        const envelope = document.querySelector('.main-screen__envelope');
        const clouds = document.querySelectorAll(".main-screen__clouds");
        const hearts = document.querySelectorAll(".main-screen__hearts");

        const envelopeTranslate = 170 / 100 * finalPos;
        const envelopeScale = 1 + 2 / 100 * finalPos;

        envelope.style.cssText = `
        transform:
        translate3d(0, ${envelopeTranslate}%,0)
        scale(${envelopeScale});
        `;

        clouds.forEach((cloud, index) => {
          const cloudTranslate =
            ((20 * (clouds.length - index)) / 100) * finalPos;
          const cloudScale = 1 + (1.5 / 100) * finalPos;

          cloud.style.cssText = `
        transform:
        translate3d(0,${cloudTranslate}%,0)
        scale(${cloudScale});
        `;
        });

        const heartsTranslate = 190 / 100 * finalPos;
        const heartsScale = 1 + 2 / 100 * finalPos;

        
         hearts[0].style.cssText = `
        transform:
        translate3d(-${heartsTranslate}%,0,0)
        scale(${heartsScale});
        `;
         hearts[1].style.cssText = `
        transform:
        translate3d(${heartsTranslate}%,0,0)
        scale(${heartsScale});
        `;
 }

}