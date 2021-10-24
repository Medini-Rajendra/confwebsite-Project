const { body } = document;
const section = document.createElement('section');
const i0 = document.createElement('i');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const a1 = document.createElement('a');
const a2 = document.createElement('a');
const a3 = document.createElement('a');

function MobileMenu() {
  body.append(section);
  section.append(i0);
  section.append(ul);
  ul.append(li1, li2, li3);
  li1.append(a1);
  li2.append(a2);
  li3.append(a3);

  section.setAttribute('class', 'Menubutton');
  i0.setAttribute('class', 'material-icons');
  ul.setAttribute('class', 'menu_ul');
  a1.setAttribute('href', 'index.html');
  a1.setAttribute('onclick', 'section.remove()');
  a2.setAttribute('href', '#addpastevents');
  a2.setAttribute('onclick', 'section.remove()');

  i0.textContent = 'close';
  i0.setAttribute('onclick', 'section.remove()');

  a1.textContent = 'Home';
  a2.textContent = 'Past Events';

  a1.style.color = 'White';
  a1.style.fontSize = 'xx-large';
  a2.style.color = 'White';
  a2.style.fontSize = 'xx-large';
}

function maximizewin() {
  const identnavbar = document.getElementById('navbarideni');
  identnavbar.classList.remove('bg-image_about');
  const getheading1 = document.querySelector('#Homeabt');
  const adddivhead = document.createElement('div');
  adddivhead.setAttribute('class', 'text-center');
  getheading1.append(adddivhead);
  const locathead = document.querySelector('#locathead');
  locathead.style.visibility = 'hidden';
  const locathead1 = document.querySelector('#locathead1');
  locathead1.classList.remove('mx-2');
  const locathead2 = document.querySelector('#locathead2');
  locathead2.innerHTML = 'The 2020 Harvard Brain Initiative Investigators Meeting will virtually convene BRAIN Initiative awardees, staff, and leadership from the contributing federal agencies, plus representatives and investigators from participating non-federal organizations, and members of the media, public, and Congress. Brain stimulation is a promising treatment; however, results can be inconsistent. A key uncertainty is how to tailor stimulation to effectively modulate neural dynamics. Our collective presentations, based on work done in non-human primates and human subjects, will present recent discoveries on how brain stimulation can interact with internal neural dynamics and thereby modulate behavior. Together, we aim to review state-of-the-art neuromodulation methods and discuss a translational roadmap.';
  locathead2.classList.remove('text-justify');
  locathead2.classList.remove('mt-4');
  locathead2.classList.remove('m-1');
  const locathead3 = document.querySelector('#locathead3');
  adddivhead.append(locathead1, locathead2, locathead3);
  const getParaPrimary = document.querySelector('#about_primary_para');
  getParaPrimary.innerHTML = 'Research Highlight Talks are ~15 minute scientific presentations sharing the latest findings from BRAIN Initiative projects covering the spectrum of research into: cell types, circuit diagrams, monitoring neural activity, interventional tools, theory and data analysis tools, human neuroscience, integrated approaches, and neuroethics. Talks are paired with a scientific poster – check them out in the Poster Hall!';
  getParaPrimary.classList.remove('mb-0');
  getParaPrimary.classList.remove('p-4');
  getParaPrimary.classList.remove('pt-3');
  getParaPrimary.classList.add('pt-4');
  const getImagePrimary = document.querySelector('#about_primary_image');
  getImagePrimary.classList.remove('m-2');
  const newdivimagedeco = document.createElement('div');
  newdivimagedeco.setAttribute('class', 'flex_arrange_deco');
  const newdeco1 = document.getElementById('images_deco');
  const newdeco2 = document.getElementById('images_deco1');
  const addpasteve = document.getElementById('addpastevents');
  newdivimagedeco.append(newdeco1, newdeco2);
  addpasteve.append(newdivimagedeco);
  const partnerfind = document.getElementById('partnersect_find');
  if (partnerfind !== null) {
    partnerfind.remove();
  }
  const footernotesiden = document.getElementById('footnotes_identify');
  footernotesiden.classList.add('bg-dark');
  footernotesiden.classList.add('mt-5');
  footernotesiden.classList.add('text-white');
  const footernotespara = document.getElementById('footnotes_para');
  footernotespara.classList.remove('mt-5');
  const footernotesimage = document.getElementById('footnotes_image');
  footernotesimage.style.height = '150';
  footernotesimage.classList.remove('mt-3');
  footernotesimage.classList.add('mt-5');

  const insertatag = document.createElement('a');
  insertatag.setAttribute('class', 'navbar-brand');
  insertatag.setAttribute('id', 'remove_navbar');
  insertatag.setAttribute('href', 'index.html');
  const insertimgtag = document.createElement('img');
  insertimgtag.setAttribute('src', './images/hotchkiss_desk_download.jpg');
  insertimgtag.setAttribute('width', '200');
  insertimgtag.setAttribute('height', '50');
  insertimgtag.setAttribute('alt', 'logo');
  insertatag.append(insertimgtag);
  const findifatag = document.querySelector('#remove_navbar');
  if (findifatag == null) {
    const gettogglenav = document.getElementById('togglenavba');
    gettogglenav.parentNode.insertBefore(insertatag, gettogglenav);
  }
}

function minimizefunc() {
  const identnavbar1 = document.getElementById('navbarideni');
  identnavbar1.classList.add('bg-image_about');
  const locathead2 = document.querySelector('#locathead2');
  locathead2.innerHTML = 'The 2020 Harvard Brain Initiative Investigators Meeting will virtually convene BRAIN Initiative awardees, staff, and leadership from the contributing federal agencies, plus representatives and investigators from participating non-federal organizations, and members of the media, public, and Congress.';
  const getParaPrimary = document.querySelector('#about_primary_para');
  getParaPrimary.innerHTML = 'Research Highlight Talks are ~15 minute scientific presentations sharing the latest findings from BRAIN Initiative projects covering the spectrum of research into: cell types, circuit diagrams, monitoring neural activity, interventional tools, theory and data analysis tools, human neuroscience, integrated approaches, and neuroethics. Talks are paired with a scientific poster – check them out in the Poster Hall!';
  const findpartsect = document.getElementById('partnersect_find');
  if (findpartsect == null) {
    const createpartsect = document.createElement('section');
    createpartsect.setAttribute('class', 'bg-dark partner_section');
    createpartsect.setAttribute('id', 'partnersect_find');
    const crh2sect = document.createElement('h2');
    crh2sect.setAttribute('class', 'mt-5 text-white text-center');
    crh2sect.setAttribute('id', 'partnerh2sec_find');
    crh2sect.textContent = 'Partner';
    const crimgsect = document.createElement('img');
    crimgsect.setAttribute('class', 'firstimag ml-2 mt-2');
    crimgsect.setAttribute('src', './images/fp1.png');
    crimgsect.setAttribute('alt', 'image');
    crimgsect.setAttribute('width', '70');
    crimgsect.setAttribute('height', '50');
    const crimg1sect = document.createElement('img');
    crimg1sect.setAttribute('class', 'mt-2 mx-2');
    crimg1sect.setAttribute('src', './images/fp2.jpg');
    crimg1sect.setAttribute('alt', 'image');
    crimg1sect.setAttribute('width', '70');
    crimg1sect.setAttribute('height', '50');
    const crimg2sect = document.createElement('img');
    crimg2sect.setAttribute('class', 'mx-1');
    crimg2sect.setAttribute('src', './images/fp3.png');
    crimg2sect.setAttribute('alt', 'image');
    crimg2sect.setAttribute('width', '70');
    crimg2sect.setAttribute('height', '70');
    const crimg3sect = document.createElement('img');
    crimg3sect.setAttribute('class', 'fourthimag mt-2 me-3');
    crimg3sect.setAttribute('src', './images/fp4.jpg');
    crimg3sect.setAttribute('alt', 'image');
    crimg3sect.setAttribute('width', '70');
    crimg3sect.setAttribute('height', '50');
    const crimg4sect = document.createElement('img');
    crimg4sect.setAttribute('class', 'mt-2');
    crimg4sect.setAttribute('src', './images/fp5.png');
    crimg4sect.setAttribute('alt', 'image');
    crimg4sect.setAttribute('width', '70');
    crimg4sect.setAttribute('height', '50');
    createpartsect.append(crh2sect, crimgsect, crimg1sect, crimg2sect, crimg3sect, crimg4sect);
    body.insertBefore(createpartsect, body.childNodes[8]);
  }
  const footernotespara = document.getElementById('footnotes_para');
  footernotespara.classList.add('mt-5');
  const removenavb = document.getElementById('remove_navbar');
  if (removenavb !== null) {
    removenavb.remove();
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    maximizewin();
  } else {
    minimizefunc();
  }
});

if (window.innerWidth > 700) {
  maximizewin();
}

module.exports = {
  MobileMenu,
};