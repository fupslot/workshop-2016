function load() {
  const panels = document.querySelectorAll('.panels');
  const lists = document.querySelectorAll('.list.items');
  
  const sortables = [];

  panels.forEach((panel) => {
    sortables.push(Sortable.create(panel, { group: "panel", draggable: '.panel', animation: 150 }));
  });
  
  lists.forEach((list) => {
    sortables.push(Sortable.create(list, {
      group: "list",
      ghostClass: 'item-placeholder',
      draggable: '.item',
      animation: 150,
      fallbackTolerance: 10
    }));
  });
}

window.addEventListener('load', load, false);