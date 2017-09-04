function load() {
  const dnd = new DnD();

  const lists = document.querySelectorAll('.list.items');
  lists.forEach((list) => {
    list.addEventListener('drop', dnd.drop, false);
    list.addEventListener('dragover', dnd.dragover, false);
  });

  const items = document.querySelectorAll('[draggable].item');

  items.forEach((item) => {
    item.addEventListener('drop', dnd.drop, false);
    item.addEventListener('dragstart', dnd.dragstart, false);
    item.addEventListener('dragenter', dnd.dragenter, false);
    item.addEventListener('dragover', dnd.dragover, false);
    item.addEventListener('dragleave', dnd.dragleave, false);

  });
}

class DnD {
  constructor() {
    this.originalParent = null;
    this.targetParent = null;

    this.drop = this.drop.bind(this);
    this.dragstart = this.dragstart.bind(this);
    this.dragenter = this.dragenter.bind(this);
    this.dragover = this.dragover.bind(this);
    this.dragleave = this.dragleave.bind(this);

    const cacheDragIcon = () => {
      const dragIcon = document.createElement('img');
      dragIcon.src = 'http://jsfiddle.net/favicon.png';
      dragIcon.width = 100;
      dragIcon.addEventListener('load', () => this.dragIcon = dragIcon, false);
    }

    cacheDragIcon(); 
  }

  isOriginalTarget(e) {
    return this.originalParent == e.target.parentElement;
  }

  itemFromEvent(e) {
    return e.target.parentElement.children.indexOf(this.target);
  }

  isTargetType(e, type) {
    return e.currentTarget.tagName === {'item':'LI', 'list':'UL'}[type];
  }

  dragstart(e) {
    e.target.style.opacity = '0.4'
  
    this.dragging = e.target;
    this.originalParent = e.target.parentElement;

    if (this.dragIcon) {
      e.dataTransfer.setDragImage(this.dragIcon, -10, -10);
    }
    
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('application/json', JSON.stringify({"message": "helloworld"}));
  }

  dragenter(e) {
    e.stopPropagation();
  }
  
  drop(e) {
    e.stopPropagation();
    
    if (this.targetParent) {
      if (this.isTargetType(e, 'list')) {
        this.originalParent.removeChild(this.dragging);
        this.targetParent.appendChild(this.dragging);
      } else if (this.isTargetType(e, 'item')) {
        this.targetParent.insertBefore(this.dragging, e.currentTarget);
      }
    } else if (this.isTargetType(e, 'item')) {
      this.originalParent.insertBefore(this.dragging, e.currentTarget);
    }
    
    console.log(JSON.parse(e.dataTransfer.getData('application/json')));
    this.originalParent = null;
    this.targetParent = null;

    e.dataTransfer.clearData();
  }

  dragover(e) {
    e.preventDefault();

    if (this.isTargetType(e, 'item')) {
      if (e.currentTarget.parentElement != this.originalParent) {
        this.targetParent = e.currentTarget.parentElement;
      }
    } else if (this.isTargetType(e, 'list')) {
      if (e.currentTarget != this.originalParent) {
        this.targetParent = e.currentTarget;
      }
    }
    
  }
  
  dragleave(e) {
    this.targetParent = null;
  }
}

window.addEventListener('load', load, false);