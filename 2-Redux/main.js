console.log(window.Redux);
const { createStore } = window.Redux;
//state
// reducer
// store
const initState = [];
const hobbyReducer = (state = initState, action) => {

  return state;
}

const store = createStore(hobbyReducer);

//Render Redux hobby list
const renderHobbyList = (hobbyList) => {
  if (Array.isArray(hobbyList) || hobbyList.length === 0) return;
  const ulElement = document.querySelectorAll("#hobbyListId");
  if (!ulElement) return;
  // Reset previous content of ul
  ulElement.innerHTML = '';
  for (const hobby of hobyList) {
    const li = document.createElement('li');
    li.textContent = hobby;
    ulElement.appendChild(li);
  }
}

//Render initial hobby list