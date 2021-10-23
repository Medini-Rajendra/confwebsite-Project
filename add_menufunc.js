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
  a1.setAttribute('href', '#Home');
  a1.setAttribute('onclick', 'section.remove()');
  a2.setAttribute('href', 'about.html');
  a2.setAttribute('onclick', 'section.remove()');
  a3.setAttribute('href', '#feat_speakers');
  a3.setAttribute('onclick', 'section.remove()');

  i0.textContent = 'close';
  i0.setAttribute('onclick', 'section.remove()');

  a1.textContent = 'Home';
  a2.textContent = 'About';
  a3.textContent = 'Featured Speakers';

  a1.style.color = 'White';
  a1.style.fontSize = 'xx-large';
  a2.style.color = 'White';
  a2.style.fontSize = 'xx-large';
  a3.style.color = 'White';
  a3.style.fontSize = 'xx-large';
}

function createDiv(text) {
  const getsecsetclass1 = document.createElement('div');
  getsecsetclass1.setAttribute('class', text);
  return getsecsetclass1;
}

function createDiv1(text) {
  const getsecsetclass2 = document.createElement('div');
  getsecsetclass2.setAttribute('class', text);
  return getsecsetclass2;
}

function createDivimage(text, text1, text2) {
  const getsecimgclass1 = document.createElement('img');
  getsecimgclass1.setAttribute('class', text1);
  getsecimgclass1.setAttribute('src', text);
  getsecimgclass1.setAttribute('id', text2);
  getsecimgclass1.setAttribute('width', '200');
  getsecimgclass1.setAttribute('alt', 'scientist image');
  return getsecimgclass1;
}

function createDivheads(text, text1) {
  const createh2head = document.createElement('h2');
  createh2head.setAttribute('class', text);
  createh2head.textContent = text1;
  return createh2head;
}

function createDivheads1(text, text1) {
  const createh6head = document.createElement('h6');
  createh6head.setAttribute('class', text);
  createh6head.textContent = text1;
  return createh6head;
}

function createDivheads2(text1, text2, text3) {
  const createphead = document.createElement('p');
  createphead.setAttribute('class', text1);
  createphead.setAttribute('id', text2);
  createphead.textContent = text3;
  return createphead;
}

function maximizefunc() {
  const mainprogget = document.getElementById('mainprogtitl');
  mainprogget.classList.add('h2');
  const findthefirstspeak = document.getElementById('firstset_speakiden');
  if (findthefirstspeak.childNodes.length > 2) {
    findthefirstspeak.removeChild(findthefirstspeak.childNodes[3]);
    findthefirstspeak.removeChild(findthefirstspeak.childNodes[2]);
  }
  const findifulexists = document.querySelector('addullisttop');
  if (findifulexists == null) {
    const uldivcreate = document.createElement('div');
    uldivcreate.setAttribute('class', 'bg-dark');
    uldivcreate.setAttribute('id', 'addullisttop');
    const ullistcreate = document.createElement('ul');
    ullistcreate.setAttribute('class', 'list-group list-group-horizontal');
    ullistcreate.setAttribute('id', 'identiullist');
    const lifirstcreate = document.createElement('li');
    lifirstcreate.setAttribute('class', 'mx-3');
    const lifirstimage = document.createElement('img');
    lifirstimage.setAttribute('src', './images/fbicon.png');
    lifirstimage.setAttribute('width', '20');
    lifirstimage.setAttribute('height', '20');
    lifirstimage.setAttribute('alt', 'fb icon');
    const lisecondcreate = document.createElement('li');
    lisecondcreate.setAttribute('class', 'mx-3');
    const lisecondimage = document.createElement('img');
    lisecondimage.setAttribute('src', './images/twitter.png');
    lisecondimage.setAttribute('width', '20');
    lisecondimage.setAttribute('height', '20');
    lisecondimage.setAttribute('alt', 'fb icon');
    const lithirdcreate = document.createElement('li');
    lithirdcreate.setAttribute('class', 'mx-3 text-white');
    lithirdcreate.textContent = 'English';
    const lifourthcreate = document.createElement('li');
    lifourthcreate.setAttribute('class', 'mx-3 text-white');
    lifourthcreate.textContent = 'MyPage';
    const lififcreate = document.createElement('li');
    lififcreate.setAttribute('class', 'mx-3 text-white');
    lififcreate.textContent = 'Logout';
    uldivcreate.append(ullistcreate);
    lifirstcreate.append(lifirstimage);
    lisecondcreate.append(lisecondimage);
    ullistcreate.append(lifirstcreate, lisecondcreate, lithirdcreate, lifourthcreate, lififcreate);
    const { body } = document;
    body.insertBefore(uldivcreate, body.firstChild);
  }

  const divele = document.querySelector('nav');
  divele.classList.remove('bg-image');
  const chkdiv = document.getElementById('main_heading');
  chkdiv.classList.remove('mx-2');
  const chkdiv1 = document.getElementById('main_para');
  chkdiv1.classList.remove('m-1');
  chkdiv1.classList.add('border-2');
  const chkdiv2 = document.querySelector('#cont_row');
  const chkdiv22 = document.querySelector('#cont_row1');
  const chkdiv32 = document.querySelector('#cont_row11');
  const chkdiv42 = document.querySelector('#cont_row12');
  const chkdiv52 = document.querySelector('#cont_row13');

  chkdiv2.classList.remove('row');
  chkdiv22.classList.remove('row');
  chkdiv22.classList.add('mx-2');
  chkdiv32.classList.remove('row');
  chkdiv42.classList.remove('row');
  chkdiv42.classList.add('mx-2');
  chkdiv52.classList.remove('row');
  const chkdiv3 = document.querySelector('#cont_col');
  const chkdiv33 = document.querySelector('#cont_col1');
  const chkdiv4 = document.querySelector('#cont_col3');
  const chkdiv44 = document.querySelector('#cont_col33');
  const chkdiv444 = document.querySelector('#cont_col43');
  chkdiv3.classList.remove('col');
  chkdiv33.classList.remove('col');
  chkdiv4.classList.remove('col');
  chkdiv4.classList.remove('p-4');
  chkdiv4.classList.add('p-3');
  chkdiv44.classList.remove('col');
  chkdiv44.classList.remove('p-4');
  chkdiv44.classList.add('p-3');
  chkdiv444.classList.remove('col');
  chkdiv444.classList.remove('p-4');
  chkdiv444.classList.add('p-3');
  // }

  const chkdiv5 = document.querySelector('#see_program_button');
  chkdiv5.classList.remove('bg-danger');
  chkdiv5.classList.remove('mb-5');
  chkdiv5.classList.add('mb-3');
  chkdiv5.classList.add('bg-dark');
  chkdiv5.classList.add('border-0');
  chkdiv5.innerHTML = 'SEE THE WHOLE PROGRAM';
  chkdiv5.classList.add('text-decoration-underline');

  const chkdiv6 = document.querySelectorAll('#speakers_images');
  for (let aj = 0; aj < chkdiv6.length; aj += 1) {
    chkdiv6[aj].classList.remove('mx-3');
    chkdiv6[aj].classList.add('mx-4');
  }
  const chkdiv7 = document.querySelectorAll('#speakers_images1');
  for (let aj = 0; aj < chkdiv7.length; aj += 1) {
    chkdiv7[aj].classList.remove('mx-3');
    chkdiv7[aj].classList.add('mx-4');
  }
  const chkdiv8 = document.querySelectorAll('#speakers_content');
  for (let aj = 0; aj < chkdiv8.length; aj += 1) {
    chkdiv8[aj].classList.remove('w-auto');
    chkdiv8[aj].classList.add('w-75');
  }

  const remmorebutton = document.getElementById('more_button');
  if (remmorebutton !== null) {
    remmorebutton.style.visibility = 'hidden';
  }
  const sectionname = document.getElementById('speakers_contain');

  const newsection = document.createElement('section');
  newsection.setAttribute('class', 'bg-dark partner_section mt-5');
  newsection.setAttribute('id', 'newaddpartners');
  const h2section = document.createElement('h2');
  h2section.setAttribute('class', 'pt-5 text-secondary partneridentifi text-center');
  h2section.textContent = 'Partner';
  const divappenimg = document.createElement('div');
  divappenimg.setAttribute('class', 'text-center');
  const imgsection = document.createElement('img');
  imgsection.setAttribute('class', 'firstimag ml-0 mt-4 mx-4');
  imgsection.setAttribute('src', './images/fp1.png');
  imgsection.setAttribute('alt', 'image');
  imgsection.setAttribute('width', '140');
  imgsection.setAttribute('height', '90');

  const imgsection1 = document.createElement('img');
  imgsection1.setAttribute('class', 'mt-4 mx-4');
  imgsection1.setAttribute('src', './images/fp2.jpg');
  imgsection1.setAttribute('alt', 'image');
  imgsection1.setAttribute('width', '140');
  imgsection1.setAttribute('height', '90');

  const imgsection2 = document.createElement('img');
  imgsection2.setAttribute('class', 'mt-4 mx-4');
  imgsection2.setAttribute('src', './images/fp3.png');
  imgsection2.setAttribute('alt', 'image');
  imgsection2.setAttribute('width', '120');
  imgsection2.setAttribute('height', '150');

  const imgsection3 = document.createElement('img');
  imgsection3.setAttribute('class', 'fourthimag mt-4 me-2 mx-4');
  imgsection3.setAttribute('src', './images/fp4.jpg');
  imgsection3.setAttribute('alt', 'image');
  imgsection3.setAttribute('width', '140');
  imgsection3.setAttribute('height', '90');

  const imgsection4 = document.createElement('img');
  imgsection4.setAttribute('class', 'mt-4 mx-5');
  imgsection4.setAttribute('src', './images/fp5.png');
  imgsection4.setAttribute('alt', 'image');
  imgsection4.setAttribute('width', '140');
  imgsection4.setAttribute('height', '90');

  sectionname.append(newsection);
  newsection.append(h2section, divappenimg);
  divappenimg.append(imgsection, imgsection1, imgsection2, imgsection3, imgsection4);

  const footerIdentify = document.querySelector('identify_footer');
  if (footerIdentify == null) {
    const newsection1 = document.createElement('section');
    newsection1.setAttribute('class', 'foot_notes container-fluid');
    newsection1.setAttribute('id', 'identify_footer');
    const newdiv1 = document.createElement('div');
    newdiv1.setAttribute('class', 'footnotes_flex text-center');
    const newimg1 = document.createElement('img');
    newimg1.setAttribute('class', 'mt-5');
    newimg1.setAttribute('src', 'images/harvard-university-logo.png');
    newimg1.setAttribute('alt', 'image');
    newimg1.setAttribute('width', '150');
    newimg1.setAttribute('height', '50');
    const newpara1 = document.createElement('p');
    newpara1.setAttribute('class', 'mx-5 mt-5 mb-5 fw-bold');
    newpara1.textContent = 'Copyright © 2021 The President and Fellows of Harvard College | Accessibility | Report Copyright Infringement';
    sectionname.append(newsection1);
    newsection1.append(newdiv1);
    newdiv1.append(newimg1, newpara1);
  }

  const getsecsetdiv1 = document.getElementById('secondset_speakide');
  const getthirdsetfirst = document.getElementById('thirdspeak_remove');
  if (getthirdsetfirst == null) {
    const identthird = document.createElement('div');
    identthird.setAttribute('class', 'mt-5 speaker_flex');
    identthird.setAttribute('id', 'thirdspeak_remove');
    const identthird1 = document.createElement('div');
    identthird1.setAttribute('class', 'feat_speakers');
    const identimage = document.createElement('img');
    identimage.setAttribute('class', 'mx-4 mt-3');
    identimage.setAttribute('id', 'speakers_images');
    identimage.setAttribute('src', './images/scientist2.jpg');
    identimage.setAttribute('alt', 'Scientist image');
    identimage.setAttribute('width', '200');
    const identthird2 = document.createElement('div');
    identthird2.setAttribute('class', 'mx-2 titles_flex me-0');
    const identheading2 = document.createElement('h2');
    identheading2.setAttribute('class', 'mb-1 mx-5 me-0');
    identheading2.textContent = 'Frederick Alt';
    const identheading6 = document.createElement('h6');
    identheading6.setAttribute('class', 'mb-1 mx-5 me-0');
    identheading6.textContent = 'Professor of Genetics';
    const identpara = document.createElement('p');
    identpara.setAttribute('class', 'w-auto text-justify mx-5 me-0');
    identpara.textContent = 'Dr. Alt’s lab is interested in understanding the interplay between these phenomena—in understanding both how healthy genomic rearrangements occur.';
    const findfirstset = document.getElementById('firstset_speakiden');
    findfirstset.append(identthird);
    identthird.append(identthird1, identthird2);
    identthird1.append(identimage);
    identthird2.append(identheading2, identheading6, identpara);
  }
  if (getsecsetdiv1 == null) {
    const getsecsetdiv = document.createElement('section');
    getsecsetdiv.setAttribute('id', 'secondset_speakide');

    const divschk = [
      createDiv('feat_speakers1'),
      createDiv('feat_speakers1'),
      createDiv('feat_speakers1'),
    ];

    const divs1 = [
      createDiv1('mx-5 titles_flex1 me-0'),
      createDiv1('mx-5 titles_flex1 me-0'),
      createDiv1('mx-5 titles_flex1 me-0'),
    ];

    for (let x = 0; x < 3; x += 1) {
      const getsecsetclass = document.createElement('div');
      if (x === 0) {
        getsecsetclass.setAttribute('class', 'pt-5 speaker_flex');
      } else if (x === 1) {
        getsecsetclass.setAttribute('class', 'mt-5 speaker_flex');
      } else {
        getsecsetclass.setAttribute('class', 'mt-5 speaker_flex');
      }

      getsecsetclass.append(divschk[x]);
      getsecsetclass.append(divs1[x]);
      getsecsetdiv.append(getsecsetclass);
    }

    const getoriginsec = document.getElementById('div_speakers_align');
    getoriginsec.append(getsecsetdiv);

    const divimages = [
      createDivimage('./images/Anthony_Todd-150x150.jpg', 'mx-3 mt-3', 'speakers_images1'),
      createDivimage('./images/AndersenSue_150.jpg', 'mx-3 mt-3', 'speakers_images1'),
      createDivimage('./images/Mark_Andermann.jpg', 'mx-3 mt-3', 'speakers_images1'),
    ];

    const divheads = [
      createDivheads('mb-1 mx-4 pt-3 me-0', 'Todd Anthony'),
      createDivheads('mb-1 mx-4 pt-1 me-0', 'Susan L. Andersen'),
      createDivheads('mb-1 mx-4 me-0', 'Mark Andermann'),
    ];

    const divheads1 = [
      createDivheads1('mb-1 mx-4 pt-2 me-0', 'Assistant Professor of Psychiatry and Neurology'),
      createDivheads1('mb-1 mx-4 pt-2 me-0', 'Associate Professor of Psychiatry'),
      createDivheads1('mb-1 mx-4 pt-2 me-0', 'Professor of Medicine'),
    ];

    const divheads2 = [
      createDivheads2('w-50 mx-4 pt-1 me-0', 'speakers_content', 'Our goal is to define the neural circuits and genes that control reactions to stress, with a major interest in determining the mechanisms that dictate susceptibility.'),
      createDivheads2('w-50 mx-4 pt-1 me-0', 'speakers_content', 'Our goal is to determine the underlying mechanism(s) that are associated with disease progression across childhood, adolescence, and adulthood in rodent models that can be used to redirect an abnormal trajectory.'),
      createDivheads2('w-50 mx-4 pt-1 me-0', 'speakers_content', 'The Anderman lab studies how the needs of the body determine which sensory cues are attended to, learned, and remembered.'),
    ];

    const findelems = document.getElementsByClassName('feat_speakers1');
    const findelems1 = document.getElementsByClassName('titles_flex1');
    for (let y = 0; y < findelems.length; y += 1) {
      findelems[y].append(divimages[y]);
      findelems1[y].append(divheads[y]);
      findelems1[y].append(divheads1[y]);
      findelems1[y].append(divheads2[y]);
    }
  }
  const removenavbar = document.getElementById('remove_navbar');
  if (removenavbar == null) {
    const addaid = document.createElement('a');
    addaid.setAttribute('class', 'navbar-brand');
    addaid.setAttribute('id', 'remove_navbar');
    addaid.setAttribute('href', '#');
    const addimage = document.createElement('img');
    addimage.setAttribute('src', './images/hotchkiss_desk_download.jpg');
    addimage.setAttribute('width', '200');
    addimage.setAttribute('height', '50');
    addimage.setAttribute('alt', 'logo');
    addaid.append(addimage);
    const gettogglenav = document.getElementById('togglenavba');
    gettogglenav.parentNode.insertBefore(addaid, gettogglenav);
  }

  const getcssclasssect = document.querySelectorAll('.feat_speakers');
  const getcssclasssect1 = document.querySelectorAll('#secondset_speakide');
  const getcssclasssect2 = document.querySelectorAll('#speakers_content');
  for (let kn = 0; kn < getcssclasssect2.length; kn += 1) {
    getcssclasssect2[kn].style.fontSize = '18px';
  }

  for (let kk = 0; kk < getcssclasssect1[0].childNodes.length; kk += 1) {
    getcssclasssect1[0].childNodes[kk].style.paddingLeft = 'unset';
  }
  getcssclasssect1[0].childNodes[1].style.paddingTop = '3%';
  getcssclasssect1[0].childNodes[2].style.paddingTop = '2%';

  for (let ik = 0; ik < getcssclasssect.length; ik += 1) {
    getcssclasssect[ik].style.marginLeft = '5%';
  }
  for (let ik = 1; ik < getcssclasssect.length; ik += 1) {
    getcssclasssect[ik].style.marginTop = '2%';
  }
  getcssclasssect[1].style.marginTop = '3%';
  getcssclasssect[2].style.marginTop = '3%';
  const getcssclassheading = document.querySelectorAll('.titles_flex');
  const getcssclassheading1 = document.querySelectorAll('.titles_flex1');

  for (let jk = 0; jk < getcssclassheading.length; jk += 1) {
    getcssclassheading[jk].childNodes[0].style.fontSize = '38px';
    getcssclassheading[jk].childNodes[2].style.fontSize = '18px';
    getcssclassheading[jk].childNodes[1].style.fontSize = '`20px';
    getcssclassheading1[jk].childNodes[1].style.fontStyle = 'italic';
    getcssclassheading1[jk].childNodes[1].style.color = 'red';
    getcssclassheading1[jk].childNodes[0].style.fontSize = '38px';
    getcssclassheading[jk].childNodes[1].style.fontStyle = 'italic';
    getcssclassheading[jk].childNodes[1].style.color = 'red';
    getcssclassheading[jk].style.marginTop = '2%';
    getcssclassheading[jk].style.paddingLeft = '13%';
    getcssclassheading1[jk].style.paddingLeft = '5%';
    getcssclassheading[jk].style.width = '400px';
    getcssclassheading1[jk].style.width = '800px';
    getcssclassheading1[jk].style.paddingLeft = 'unset';
  }
  for (let jk = 1; jk < getcssclassheading.length; jk += 1) {
    getcssclassheading[jk].style.marginTop = '4%';
  }
}

function minimizefunc() {
  const speakimgscrt = document.querySelectorAll('#speakers_images');
  const speaktitscrt = document.querySelectorAll('.titles_flex');
  const speakfeatscrt = document.querySelectorAll('.feat_speakers');
  const fixrowelem = document.querySelector('#cont_row');
  fixrowelem.classList.add('row');
  const fixrowelem1 = document.querySelector('#cont_row1');
  fixrowelem1.classList.remove('mx-2');
  fixrowelem1.classList.add('row');
  const fixrowelem2 = document.querySelector('#cont_row11');
  fixrowelem2.classList.add('row');
  const fixrowelem3 = document.querySelector('#cont_row12');
  fixrowelem3.classList.add('row');
  fixrowelem3.classList.remove('mx-2');
  const fixrowelem4 = document.querySelector('#cont_row13');
  fixrowelem4.classList.add('row');
  for (let ii = 0; ii < speakimgscrt.length; ii += 1) {
    speakimgscrt[ii].removeAttribute('width');
    speakimgscrt[ii].removeAttribute('style');
    speaktitscrt[ii].removeAttribute('style');
    speakfeatscrt[ii].removeAttribute('style');
    for (let ji = 0; ji < speaktitscrt[ii].childNodes.length; ji += 1) {
      speaktitscrt[ii].childNodes[ji].removeAttribute('style');
    }
  }
  const ullistident = document.querySelector('#addullisttop');
  if (ullistident !== null) {
    ullistident.remove();
  }
  const divele = document.querySelector('nav');
  divele.classList.add('bg-image');
  const remmorebutton = document.getElementById('more_button');
  if (remmorebutton !== null) {
    remmorebutton.style.visibility = 'visible';
  }
  const chkdiv5 = document.querySelector('#see_program_button');
  chkdiv5.classList.add('bg-danger');
  chkdiv5.classList.remove('bg-dark');
  chkdiv5.classList.remove('border-0');
  chkdiv5.innerHTML = 'Join HBI Brain Summit 2019';
  chkdiv5.classList.remove('text-decoration-underline');
  const getnewaddpartner = document.getElementById('newaddpartners');
  if (getnewaddpartner !== null) {
    getnewaddpartner.remove();
  }
  const getsecsetdivchk = document.getElementById('secondset_speakide');
  if (getsecsetdivchk !== null) {
    getsecsetdivchk.remove();
  }
  const thirdsetdiv = document.getElementById('thirdspeak_remove');
  if (thirdsetdiv !== null) {
    thirdsetdiv.remove();
  }
  const removenavbar = document.getElementById('remove_navbar');
  if (removenavbar !== null) {
    removenavbar.remove();
  }
  const footerIdentify = document.getElementById('identify_footer');
  if (footerIdentify !== null) {
    footerIdentify.remove();
  }
  const getidmorebut = document.getElementById('more_button');
  if (getidmorebut == null) {
    const createbuttonsect = document.createElement('button');
    createbuttonsect.setAttribute('type', 'button');
    createbuttonsect.setAttribute('id', 'more_button');
    createbuttonsect.setAttribute('class', 'bg-white p-3 mt-5 mb-5 fw-bold');
    createbuttonsect.setAttribute('onclick', 'addmorespeakers()');
    createbuttonsect.textContent = 'MORE';

    const createiiconsectdup = document.createElement('i');
    createiiconsectdup.setAttribute('class', 'icon-large fa fa-angle-down');
    createbuttonsect.append(createiiconsectdup);
    const toattachsection = document.getElementById('speakers_contain');
    toattachsection.append(createbuttonsect);
  }
}

function appendspeakers(tt, sut, sp, sid, ss, sa, t1, h2t, h2c, h6t, h6c, prt, prc, ium, g1c) {
  const newdivcreate = document.createElement('div');

  newdivcreate.setAttribute('class', tt);
  if (ium === 2) {
    newdivcreate.setAttribute('id', 'thirdspeak_remove');
  }
  const newdiv1create = document.createElement('div');
  newdiv1create.setAttribute('class', sut);
  const newimgcreate = document.createElement('img');
  newimgcreate.setAttribute('class', sp);
  newimgcreate.setAttribute('id', sid);
  newimgcreate.setAttribute('src', ss);
  newimgcreate.setAttribute('alt', sa);
  newimgcreate.setAttribute('width', '200');
  const newdiv2create = document.createElement('div');
  newdiv2create.setAttribute('class', t1);
  const newh2create = document.createElement('h2');
  newh2create.setAttribute('class', h2t);
  newh2create.textContent = h2c;
  const newh6create = document.createElement('h6');
  newh6create.setAttribute('class', h6t);
  newh6create.textContent = h6c;
  const newparacreate = document.createElement('p');
  newparacreate.setAttribute('class', prt);
  newparacreate.textContent = prc;

  newdivcreate.append(newdiv1create, newdiv2create);
  newdiv1create.append(newimgcreate);
  newdiv2create.append(newh2create, newh6create, newparacreate);

  g1c.append(newdivcreate);
}

function addspeakers(speakers, argument2) {
  const maindivtitles = [];
  const subdivtitles = [];
  const imgclasstitles = [];
  const imgidtitles = [];
  const imgsrctitles = [];
  const imgalttitles = [];
  const main2divtitles = [];
  const h2divtitles = [];
  const h2divconttitles = [];
  const h6divtitles = [];
  const h6divconttitles = [];
  const mainparatitles = [];
  const mainparaconttitles = [];

  for (let i = 0; i < speakers.length; i += 1) {
    maindivtitles.push(speakers[i].divmainclass);
    subdivtitles.push(speakers[i].divsubclass);
    imgclasstitles.push(speakers[i].speakerimageclass);
    imgidtitles.push(speakers[i].speakerimageid);
    imgsrctitles.push(speakers[i].speakerimagesrc);
    imgalttitles.push(speakers[i].speakerimagealt);
    main2divtitles.push(speakers[i].divmain2class);
    h2divtitles.push(speakers[i].divh2class);
    h2divconttitles.push(speakers[i].divh2content);
    h6divtitles.push(speakers[i].divh6class);
    h6divconttitles.push(speakers[i].divh6content);
    mainparatitles.push(speakers[i].divmainparaclass);
    mainparaconttitles.push(speakers[i].divmainparacontent);
  }

  for (let j = 0; j < speakers.length; j += 1) {
    appendspeakers(
      maindivtitles[j],
      subdivtitles[j],
      imgclasstitles[j],
      imgidtitles[j],
      imgsrctitles[j],
      imgalttitles[j],
      main2divtitles[j],
      h2divtitles[j],
      h2divconttitles[j],
      h6divtitles[j],
      h6divconttitles[j],
      mainparatitles[j],
      mainparaconttitles[j],
      j,
      argument2,
    );
  }
}

function addmorespeakers() {
  const getidmorebut = document.getElementById('more_button');
  getidmorebut.remove();
  const speakers = [
    {
      divmainclass: 'pt-5 speaker_flex',
      divsubclass: 'feat_speakers',
      speakerimageclass: 'mx-3 mt-3',
      speakerimageid: 'speakers_images',
      speakerimgsrc1: './images/Anthony_Todd-150x150.jpg',
      speakerimagesrc: './images/Mark_Andermann.jpg',
      speakerimagealt: 'scientist image',
      divmain2class: 'mx-5 titles_flex me-0',
      divh2class: 'mb-1 mx-5 me-0',
      divh2content: 'Todd Anthony',
      divh6class: 'mb-1 mx-5 me-0',
      divh6content: 'Professor of Medicine',
      divmainparaclass: 'w-auto mx-5 me-0',
      divmainparacontent: 'The Anderman lab studies how the needs of the body determine which sensory cues are attended to, learned, and remembered.',
    },

    {
      divmainclass: 'mt-4 pt-4 speaker_flex',
      divsubclass: 'feat_speakers',
      speakerimageclass: 'mx-3 mt-3',
      speakerimageid: 'speakers_images',
      speakerimgsrc1: './images/AndersenSue_150.jpg',
      speakerimagesrc: './images/Anthony_Todd-150x150.jpg',
      speakerimagealt: 'scientist image',
      divmain2class: 'mx-5 titles_flex me-0',
      divh2class: 'mb-1 mx-5 me-0',
      divh2content: 'Mark Andermann',
      divh6class: 'mb-1 mx-5 me-0',
      divh6content: 'Assistant Professor of Psychiatry and Neurology',
      divmainparaclass: 'w-auto text-justify mx-5 me-0',
      divmainparacontent: 'Our goal is to define the neural circuits and genes that control reactions to stress, with a major interest in determining the mechanisms that dictate susceptibility.',
    },
  ];
  const getsub1classsect = document.getElementById('firstset_speakiden');
  addspeakers(speakers, getsub1classsect);
  const remwidthaddspeak = document.querySelectorAll('#speakers_images');
  for (let ki = 0; ki < remwidthaddspeak.length; ki += 1) {
    remwidthaddspeak[ki].removeAttribute('width');
  }
}

function loadspeakers() {
  const speakers = [
    {
      divmainclass: 'pt-5 speaker_flex',
      divsubclass: 'feat_speakers',
      speakerimageclass: 'mx-3 mt-3',
      speakerimageid: 'speakers_images',
      speakerimgsrc1: './images/Anthony_Todd-150x150.jpg',
      speakerimagesrc: './images/Albers_Mark.jpg',
      speakerimagealt: 'scientist image',
      divmain2class: 'mx-5 titles_flex me-0',
      divh2class: 'mb-1 mx-5 me-0',
      divh2content: 'Mark Albers',
      divh6class: 'mb-1 mx-5 me-0',
      divh6content: 'Assistant Professor of Neurology',
      divmainparaclass: 'w-auto mx-5 me-0',
      divmainparacontent: 'We investigate the olfactory system of mice and humans since it is vulnerable early pathologic events of neurodegeneration.',
    },

    {
      divmainclass: 'mt-4 pt-4 speaker_flex',
      divsubclass: 'feat_speakers',
      speakerimageclass: 'mx-3 mt-4',
      speakerimageid: 'speakers_images',
      speakerimgsrc1: './images/AndersenSue_150.jpg',
      speakerimagesrc: './images/Anderson_Matthew-150x150.jpg',
      speakerimagealt: 'scientist image',
      divmain2class: 'mx-5 titles_flex me-0',
      divh2class: 'mb-1 mx-5 me-0',
      divh2content: 'Frederick Alt',
      divh6class: 'mb-1 mx-5 me-0',
      divh6content: 'Professor of Genetics',
      divmainparaclass: 'w-auto text-justify mx-5 me-0',
      divmainparacontent: 'Dr. Alt’s lab is interested in understanding the interplay between these phenomena—in understanding both how healthy genomic rearrangements occur.',
    },

    {
      divmainclass: 'mt-5 pt-2 speaker_flex',
      divsubclass: 'feat_speakers',
      speakerimageclass: 'mx-3 mt-3',
      speakerimageid: 'speakers_images',
      speakerimgsrc1: './images/Mark_Andermann.jpg',
      speakerimagesrc: './images/scientist2.jpg',
      speakerimagealt: 'scientist image',
      divmain2class: 'mx-5 titles_flex me-0',
      divh2class: 'mb-1 mx-5 me-0',
      divh2content: 'Frederick Alt',
      divh6class: 'mb-1 mx-5 me-0',
      divh6content: 'Professor of Genetics',
      divmainparaclass: 'w-auto text-justify mx-5 me-0',
      divmainparacontent: 'Dr. Alt’s lab is interested in understanding the interplay between these phenomena—in understanding both how healthy genomic rearrangements occur.',
    },
  ];

  const getmainclasssect = document.createElement('section');
  getmainclasssect.setAttribute('class', 'speakers_contain container-fluid');
  getmainclasssect.setAttribute('id', 'speakers_contain');
  const geth3classsect = document.createElement('h3');
  geth3classsect.setAttribute('class', 'mt-4 mb-4 fw-bold text-secondary text-center');
  geth3classsect.setAttribute('id', 'feat_speakers');
  geth3classsect.textContent = 'Featured Speakers';
  const getsubclasssect = document.createElement('div');
  getsubclasssect.setAttribute('class', 'div_speakers_align');
  getsubclasssect.setAttribute('id', 'div_speakers_align');
  const getsub1classsect = document.createElement('div');
  getsub1classsect.setAttribute('id', 'firstset_speakiden');
  const sub2chk = document.createElement('div');
  sub2chk.setAttribute('id', 'secondset_speakide');
  getmainclasssect.append(geth3classsect, getsubclasssect);
  getsubclasssect.append(getsub1classsect, sub2chk);
  const createbuttonsect = document.createElement('button');
  createbuttonsect.setAttribute('type', 'button');
  createbuttonsect.setAttribute('id', 'more_button');
  createbuttonsect.setAttribute('class', 'bg-white p-3 mt-5 mb-5 fw-bold');
  createbuttonsect.setAttribute('onclick', 'addmorespeakers()');
  createbuttonsect.textContent = 'MORE';
  const createiiconsect = document.createElement('i');
  createiiconsect.setAttribute('class', 'icon-large fa fa-angle-down');
  createbuttonsect.append(createiiconsect);
  getmainclasssect.append(createbuttonsect);

  const { body } = document;
  body.append(getmainclasssect);
  addspeakers(speakers, getsub1classsect, sub2chk, speakers);
}

function loadspeakers1() {
  const speakers = [
    {
      divmainclass: 'pt-5 speaker_flex',
      divsubclass: 'feat_speakers',
      speakerimageclass: 'mt-3',
      speakerimageid: 'speakers_images',
      speakerimgsrc1: './images/Anthony_Todd-150x150.jpg',
      speakerimagesrc: './images/Albers_Mark.jpg',
      speakerimagealt: 'scientist image',
      divmain2class: 'mx-2 titles_flex me-0',
      divh2class: 'mb-1 mx-5 me-0',
      divh2content: 'Mark Albers',
      divh6class: 'mb-1 mx-5 me-0',
      divh6content: 'Assistant Professor of Neurology',
      divmainparaclass: 'w-auto mx-5 me-0',
      divmainparacontent: 'We investigate the olfactory system of mice and humans since it is vulnerable early pathologic events of neurodegeneration.',
    },

    {
      divmainclass: 'mt-4 pt-4 speaker_flex',
      divsubclass: 'feat_speakers',
      speakerimageclass: 'mx-3 mt-3',
      speakerimageid: 'speakers_images',
      speakerimgsrc1: './images/AndersenSue_150.jpg',
      speakerimagesrc: './images/Anderson_Matthew-150x150.jpg',
      speakerimagealt: 'scientist image',
      divmain2class: 'mx-2 titles_flex me-0',
      divh2class: 'mb-1 mx-5 me-0',
      divh2content: 'Mark Walter',
      divh6class: 'mb-1 mx-5 me-0',
      divh6content: 'Professor of Genetics',
      divmainparaclass: 'w-auto text-justify mx-5 me-0',
      divmainparacontent: 'Dr. Alt’s lab is interested in understanding the interplay between these phenomena—in understanding both how healthy genomic rearrangements occur.',
    },
  ];

  const getmainclasssect = document.createElement('section');
  getmainclasssect.setAttribute('class', 'speakers_contain container-fluid');
  getmainclasssect.setAttribute('id', 'speakers_contain');
  const geth3classsect = document.createElement('h3');
  geth3classsect.setAttribute('class', 'mt-4 mb-4 fw-bold text-secondary text-center');
  geth3classsect.setAttribute('id', 'feat_speakers');
  geth3classsect.textContent = 'Featured Speakers';
  const getsubclasssect = document.createElement('div');
  getsubclasssect.setAttribute('class', 'div_speakers_align');
  getsubclasssect.setAttribute('id', 'div_speakers_align');
  const getsub1classsect = document.createElement('div');
  getsub1classsect.setAttribute('id', 'firstset_speakiden');
  const sub2chk = document.createElement('div');
  getmainclasssect.append(geth3classsect, getsubclasssect);
  getsubclasssect.append(getsub1classsect, sub2chk);
  const createbuttonsect = document.createElement('button');
  createbuttonsect.setAttribute('type', 'button');
  createbuttonsect.setAttribute('id', 'more_button');
  createbuttonsect.setAttribute('class', 'bg-white p-3 mt-5 mb-5 fw-bold');
  createbuttonsect.textContent = 'MORE';
  const createiiconsect = document.createElement('i');
  createiiconsect.setAttribute('class', 'icon-large fa fa-angle-down');
  createbuttonsect.append(createiiconsect);
  getmainclasssect.append(createbuttonsect);

  const { body } = document;
  body.append(getmainclasssect);
  addspeakers(speakers, getsub1classsect, sub2chk, speakers);
}

function mychkfuncti() {
  if (window.innerWidth > 700) {
    loadspeakers1();
    maximizefunc();
  } else {
    loadspeakers();
    minimizefunc();
  }
}

window.onload = mychkfuncti();

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    const getimagewidth = document.querySelectorAll('#speakers_images');
    for (let jk = 0; jk < getimagewidth.length; jk += 1) {
      getimagewidth[jk].setAttribute('width', '200');
    }
    maximizefunc();
  } else {
    minimizefunc();
  }
});

module.exports = {
  MobileMenu,
  addmorespeakers,
};
