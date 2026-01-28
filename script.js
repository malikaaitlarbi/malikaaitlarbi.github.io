function openCV(){
  const frame=document.getElementById("cvFrame");
  frame.src="cv.pdf";
  frame.style.display="block";
}

function openLinkedIn(){
  window.open("https://www.linkedin.com","_blank");
}

function showContent(type){
  const box=document.getElementById("resume-content");
  if(type==="experience")
    box.innerHTML="Stage, projets BMS, véhicules électriques...";
  if(type==="education")
    box.innerHTML="Cycle ingénieur Génie Électrique...";
  if(type==="skills")
    box.innerHTML="MATLAB, Simulink, Python, IA, VE...";
  if(type==="about")
    box.innerHTML="Nom: AIT-LARBI Malika<br>Genre: Féminin<br>Tél: +212...";
}
