// nusitaikom

function init() {
    const str1 = '';
    const taikom = {};
  
    taikom.modeBtnEl = document.getElementById('mode');
    taikom.inputEl = document.getElementById('inp1');
  
    console.log('taikom ===', taikom);
  
    taikom.modeBtnEl.addEventListener('click', changeMode);
  
    function changeMode() {
      // pasiimti texta
      const btnText = taikom.modeBtnEl.textContent;
      console.log('dabartinis tesktas ===', btnText);
      console.log(btnText.trim().startsWith('Day'));
      if (btnText.trim().startsWith('Day')) {
        // pakeist day i night
        const pakeistasText = btnText.replace(/day/i, 'Night');
        // console.log('pakeistasText ===', pakeistasText);
        // irasyti pakeista atgal i btn
        taikom.modeBtnEl.textContent = pakeistasText;
      } else {
        const pakeistasText = btnText.replace(/night/i, 'Day');
        taikom.modeBtnEl.textContent = pakeistasText;
      }
    }
  }
  init();