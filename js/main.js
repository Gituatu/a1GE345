const texts= document.querySelector('.texts');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();
recognition.interimResults= true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    let transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');

    p.innerText = transcript;
    texts.appendChild(p);

    if(e.results[0].isFinal){
        if(transcript.includes('hello')){
            p=document.createElement('p');
            p.classList.add("replay");
            p.innerHTML="Hello! How can I help you?";
            texts.appendChild(p);
        }
        if(transcript.includes('what is your name' || 'your name')){
            p=document.createElement('p');
            p.classList.add("replay");
            p.innerHTML="i am a AI Teller V0.2";
            texts.appendChild(p);
            window.open('google.com')
        }
        p= document.createElement('p');
    }
    
    console.log(e);
})

recognition.addEventListener('end', ()=>{
   recognition.start();
});

recognition.start();