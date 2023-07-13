function toggleElementClass(el, klass) {
	el.classList.remove(klass);
  setTimeout(() => {
    el.classList.add(klass);
  }, 1)
}

function resetListener() {
	// remove and re-add animation-classes on relevant elements
	document.querySelectorAll('.hold > div').forEach((e => toggleElementClass(e, 'fill')));
  
  const innerEl = document.getElementById('inner');
  toggleElementClass(innerEl, 'inner');

  const wrapperEl = document.getElementById('check-wrapper');
  toggleElementClass(wrapperEl, 'check-wrapper');
  
  const checkmarkEl = document.getElementById('checkmark');
  toggleElementClass(checkmarkEl, 'checkmark');
}

document.getElementById('btn-reset').addEventListener('click', resetListener);
