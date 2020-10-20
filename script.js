let langs = document.getElementsByClassName('lg')
console.log(langs);

var eng = true

for (var i = 0; i < langs.length; i++) {
  console.log(langs[i])

  langs[i].addEventListener('click', (e) => {
    for (var j = 0; j < langs.length; j++) {
      langs[j].style.borderBottom = "none";
      
    }
    console.log(e.target);
    e.currentTarget.style.borderBottom = "2px solid #8cc63f"

  })

}

const hungarian  = [
  'Napelemes rendszerek, klímák','Megbízható én konzisztens egyedi szoftverfejlesztés','Nagyvállalati és lakossági pénzügyi tanácsadás, versenyeztetés'
]

const english  = [
  'Solar panel systems, air conditioners ','Consistent and reliable custom software development','Corporate and residential financial advisement'
]

const toHun = () =>{
  if (!eng) return
  eng = false
  console.log('hungarian');
  let texts = document.getElementsByClassName('text')
  for (var i = 0; i < texts.length; i++) {
    texts[i].innerText = hungarian[i]
  }
  let buttons = document.getElementsByTagName('button')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerText = 'ellenőrizze az oldalunkat'
  }
}

const toEng = () =>{
  if (eng) return
  eng = true
  console.log('english');
  let texts = document.getElementsByClassName('text')
  for (var i = 0; i < texts.length; i++) {
    texts[i].innerText = english[i]
  }
  let buttons = document.getElementsByTagName('button')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerText = 'check our site'
  }
}

const engElement = document.getElementById('eng')
engElement.addEventListener('click', () => toEng())
const hunElement = document.getElementById('hun')
hunElement.addEventListener('click', () => toHun())
