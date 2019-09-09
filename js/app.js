document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const killingListItem = createKillingListItem(event.target);
  const killingList = document.querySelector('#killing-list');
  killingList.appendChild(killingListItem);

  event.target.reset();
}

const createKillingListItem = function (form) {
  const killingListItem = document.createElement('li');
  killingListItem.classList.add('killing-list-item');

  const victim = document.createElement('h2');
  victim.textContent = form.victim.value;
  killingListItem.appendChild(victim);

  const reason = document.createElement('h3');
  reason.textContent = form.reason.value;
  killingListItem.appendChild(reason);

  const weapon = document.createElement('p');
  weapon.textContent = form.weapon.value;
  killingListItem.appendChild(weapon);

  return killingListItem;
}

const handleDeleteAllClick = function (event) {
  const killingList = document.querySelector('#killing-list');
  killingList.innerHTML = '';
}
