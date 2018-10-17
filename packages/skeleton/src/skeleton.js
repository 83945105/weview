import Vue from 'vue';
import WeSkeleton from './Skeleton.vue';
import {isObject, isString} from "../../src/utils/util.js";

const SkeletonConstructor = Vue.extend(WeSkeleton);

const Skeleton = (options = {}) => {

  console.log(options)

  let instance = new SkeletonConstructor({
    el: document.createElement('div')
  });

  console.log(instance)
  console.log(instance.$el)

};

export default Skeleton;
