let challengeElement=document.querySelector('.weekly_challenge');
loadChallenge();
function loadChallenge(){
    const hElement=document.createElement('h5');
    const pKnowElement=document.createElement('p');
    const adviceElement=document.createElement('span');
    const imgElement=document.createElement('img');
    hElement.innerText=advices[1].advice;
    pKnowElement.innerText="Did you know that "+advices[1].quote;
    imgElement.setAttribute('src',advices[1].img);
    imgElement.style.cssText="width:20vw; height:30vh"
    adviceElement.innerText="Advice: "+advices[1].usefulInfo;
    challengeElement.appendChild(imgElement);
    challengeElement.appendChild(hElement);
    challengeElement.appendChild(pKnowElement);
    challengeElement.appendChild(adviceElement);

}