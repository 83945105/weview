// Thanks to: https://github.com/airyland/vux/blob/v2/src/directives/transfer-dom/index.js
// Thanks to: https://github.com/calebroseland/vue-dom-portal

import {isBoolean, isObject} from "../utils/util.js";

/**
 * Get target DOM Node
 * @param {(Node|string|Boolean)} [node=document.body] DOM Node, CSS selector, or Boolean
 * @return {Node} The target that the el will be appended to
 */
function getTarget(node) {
  if (node === void 0) {
    return document.body
  }
  if (node === 'body' || node === true) {
    return document.body
  }
  return node instanceof window.Node ? node : document.querySelector(node)
}

function create(el, target) {
  if (el.__transferDomData) return;

  el.className = el.className ? el.className + ' v-transfer-restore-dom' : 'v-transfer-restore-dom';
  const parentNode = el.parentNode;
  const home = document.createComment('');
  let hasMovedOut = false;

  if (target !== false) {
    parentNode.replaceChild(home, el); // moving out, el is no longer in the document
    getTarget(target).appendChild(el); // moving into new place
    hasMovedOut = true
  }

  el.__transferDomData = {
    parentNode: parentNode,
    home: home,
    target: getTarget(target),
    hasMovedOut: hasMovedOut
  }
}

function restore(el) {
  el.className = el.className.replace('v-transfer-restore-dom', '');
  if (el.__transferDomData && el.__transferDomData.hasMovedOut === true) {
    el.__transferDomData.parentNode && el.__transferDomData.parentNode.appendChild(el);
  }
  el.__transferDomData = null;
}

const directive = {

  inserted(el, {value}, vnode) {
    let transfer = true;
    let appendToBody = true;
    let target = document.body;

    if (isBoolean(value)) {
      transfer = value;
    } else if (isObject(value)) {
      transfer = value.value === void 0 ? true : value.value !== false;
      appendToBody = value.appendToBody === void 0 ? false : value.appendToBody === true;
      target = appendToBody ? document.body : value.target;
    }
    if (!transfer) return;
    create(el, target);
  },
  componentUpdated(el, {value}) {
    let transfer = true;
    let appendToBody = true;
    let target = document.body;

    if (isBoolean(value)) {
      transfer = value;
    } else if (isObject(value)) {
      transfer = value.value === void 0 ? true : value.value !== false;
      appendToBody = value.appendToBody === void 0 ? false : value.appendToBody === true;
      target = appendToBody ? document.body : value.target;
    }

    if (transfer) {
      create(el, target);
      return;
    }
    if (!el.__transferDomData) return;
    restore(el);
  },
  unbind: function unbind(el, binding) {
    restore(el);
  }
};

export default directive;
