// removes and re-adds css classes to target element
function toggleElementClass(target, klass) {
	target.classList.remove(klass);
  setTimeout(() => {
    target.classList.add(klass);
  }, 1);
}

// handler for "finished loading" button
function completeListener() {
	// remove spinner
  const spinnerEl = document.getElementById('spinner');
  spinnerEl.classList.remove('spinner');

	// toggle animation-classes to trigger animation start
	document.querySelectorAll('.hold > div').forEach((e) => toggleElementClass(e, 'fill'));
  
  const fillCircleEl = document.getElementById('fill-circle');
  toggleElementClass(fillCircleEl, 'fill-circle');

  const wrapperEl = document.getElementById('check-wrapper');
  toggleElementClass(wrapperEl, 'check-wrapper');
  
  const checkmarkEl = document.getElementById('checkmark');
  toggleElementClass(checkmarkEl, 'checkmark');
}

// handler for "start loading" button
function loadingListener() {
	// remove and re-add spinner class to start loading animation,
  // and to hide other elements
	const spinnerEl = document.getElementById('spinner');
  toggleElementClass(spinnerEl, 'spinner');
}

// button click event listeners
document.getElementById('btn-complete').addEventListener('click', completeListener);
document.getElementById('btn-loading').addEventListener('click', loadingListener);
