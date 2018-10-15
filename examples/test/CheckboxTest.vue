<template>
  <div>
    <div class="first-title">基础用法</div>
    <div class="module-main">
      <div class="module-content">
        <label class="we-checkbox" :class="{'is-checked':normalCheckbox}">
          <span class="we-checkbox-input">
            <span class="we-checkbox-input-inner"></span>
            <input value="rdo1-1" checked="true" type="checkbox" v-model="normalCheckbox" class="we-checkbox-input-original" />
          </span>
          <span class="we-checkbox-label">选项1-1</span>
        </label>
      </div>
    </div>

    <div class="first-title">禁用状态</div>
    <div class="module-main">
      <div class="module-content">
        <label class="we-checkbox is-disabled" :class="[disableCheckbox === `rdo2-1` ? 'is-checked' :'']">
          <span class="we-checkbox-input">
            <span class="we-checkbox-input-inner"></span>
            <input value="rdo2-1" disabled type="checkbox" v-model="disableCheckbox" class="we-checkbox-input-original" />
          </span>
          <span class="we-checkbox-label">选项2-1</span>
        </label>
        <label class="we-checkbox is-disabled" :class="[disableCheckbox === `rdo2-2` ? 'is-checked' :'']">
          <span class="we-checkbox-input">
            <span class="we-checkbox-input-inner"></span>
            <input value="rdo2-2" disabled type="checkbox" v-model="disableCheckbox" class="we-checkbox-input-original" />
          </span>
          <span class="we-checkbox-label">选项2-2</span>
        </label>
      </div>
    </div>

    <div class="first-title">按钮样式</div>
    <div class="module-main">
      <div class="module-content">
        <div>
          <div class="we-checkbox-group">
            <label class="we-checkbox-button we-checkbox-button-large" :class="{'is-checked':normalCheckbox11}">
              <input value="rdo3-1" v-model="normalCheckbox11" type="checkbox" class="we-checkbox-button-original" />
              <span class="we-checkbox-button-inner">选项3-1</span>
            </label>
            <label class="we-checkbox-button we-checkbox-button-large" :class="{'is-checked':normalCheckbox12}">
              <input value="rdo3-2" v-model="normalCheckbox12" type="checkbox" class="we-checkbox-button-original" />
              <span class="we-checkbox-button-inner">选项3-2</span>
            </label>
            <label class="we-checkbox-button we-checkbox-button-large" :class="{'is-checked':normalCheckbox13}">
              <input value="rdo3-3" v-model="normalCheckbox13" type="checkbox" class="we-checkbox-button-original" />
              <span class="we-checkbox-button-inner">选项3-3</span>
            </label>
          </div>
        </div>
        <div class="module-spacing">
          <div class="we-checkbox-group">
            <label class="we-checkbox-button" :class="{'is-checked':normalCheckbox11}">
              <input value="rdo4-1" v-model="normalCheckbox11" type="checkbox" class="we-checkbox-button-original" />
              <span class="we-checkbox-button-inner">选项4-1</span>
            </label>
            <label class="we-checkbox-button" :class="{'is-checked':normalCheckbox12}">
              <input value="rdo4-2" v-model="normalCheckbox12" type="checkbox" class="we-checkbox-button-original" />
              <span class="we-checkbox-button-inner">选项4-2</span>
            </label>
            <label class="we-checkbox-button" :class="{'is-checked':normalCheckbox13}">
              <input value="rdo4-3" v-model="normalCheckbox13" type="checkbox" class="we-checkbox-button-original" />
              <span class="we-checkbox-button-inner">选项4-3</span>
            </label>
          </div>
        </div>
        <div class="module-spacing">
          <div class="we-checkbox-group">
            <label class="we-checkbox-button we-checkbox-button-small" :class="{'is-checked':normalCheckbox11}">
              <input value="rdo5-1" v-model="normalCheckbox11" type="checkbox" class="we-checkbox-button-original" />
              <span class="we-checkbox-button-inner">选项5-1</span>
            </label>
            <label class="we-checkbox-button we-checkbox-button-small" :class="{'is-checked':normalCheckbox12}">
              <input value="rdo5-2" v-model="normalCheckbox12" type="checkbox" class="we-checkbox-button-original" />
              <span class="we-checkbox-button-inner">选项5-2</span>
            </label>
            <label class="we-checkbox-button we-checkbox-button-small" :class="{'is-checked':normalCheckbox13}">
              <input value="rdo5-3" v-model="normalCheckbox13" type="checkbox" class="we-checkbox-button-original" />
              <span class="we-checkbox-button-inner">选项5-3</span>
            </label>
          </div>
        </div>
        <div class="module-spacing">
          <div class="we-checkbox-group">
            <label class="we-checkbox-button we-checkbox-button-mini is-disabled" :class="[buttonRadio4 === `rdo6-1` ? 'is-checked' :'']">
              <input value="rdo6-1" type="checkbox" class="we-checkbox-button-original" />
              <span class="we-checkbox-button-inner">选项6-1</span>
            </label>
            <label class="we-checkbox-button we-checkbox-button-mini is-disabled" :class="[buttonRadio4 === `rdo6-2` ? 'is-checked' :'']">
              <input value="rdo6-2" type="checkbox" class="we-checkbox-button-original" />
              <span class="we-checkbox-button-inner">选项6-2</span>
            </label>
            <label class="we-checkbox-button we-checkbox-button-mini is-disabled" :class="[buttonRadio4 === `rdo6-3` ? 'is-checked' :'']">
              <input value="rdo6-3" type="checkbox" class="we-checkbox-button-original" />
              <span class="we-checkbox-button-inner">选项6-3</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="first-title">带边框样式</div>
    <div class="module-main">
      <div class="module-content">
        <div class="we-checkbox-group">
          <label class="we-checkbox is-bordered" :class="{'is-checked':normalCheckbox11}">
              <span class="we-checkbox-input">
                <span class="we-checkbox-input-inner"></span>
                <input value="rdo7-1" type="checkbox" v-model="normalCheckbox11" class="we-checkbox-input-original" />
              </span>
            <span class="we-checkbox-label">选项2-1</span>
          </label>
          <label class="we-checkbox is-bordered" :class="{'is-checked':normalCheckbox12}">
              <span class="we-checkbox-input">
                <span class="we-checkbox-input-inner"></span>
                <input value="rdo7-2" type="checkbox" v-model="normalCheckbox12" class="we-checkbox-input-original" />
              </span>
            <span class="we-checkbox-label">选项2-2</span>
          </label>
        </div>
      </div>
    </div>

    <div class="first-title">禁用带边框样式</div>
    <div class="module-main">
      <div class="module-content">
        <div class="we-checkbox-group">
          <label class="we-checkbox is-bordered is-disabled" :class="[buttonRadio6 === `rdo8-1` ? 'is-checked' :'']">
              <span class="we-checkbox-input">
                <span class="we-checkbox-input-inner"></span>
                <input value="rdo8-1" disabled type="checkbox" v-model="buttonRadio6" class="we-checkbox-input-original" />
              </span>
            <span class="we-checkbox-label">选项2-1</span>
          </label>
          <label class="we-checkbox is-bordered is-disabled" :class="[buttonRadio6 === `rdo8-2` ? 'is-checked' :'']">
              <span class="we-checkbox-input">
                <span class="we-checkbox-input-inner"></span>
                <input value="rdo8-2" disabled type="checkbox" v-model="buttonRadio6" class="we-checkbox-input-original" />
              </span>
            <span class="we-checkbox-label">选项2-2</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    export default {
      name: 'checkbox-test',

      data(){
        return{
          isChecked: false,
          normalCheckbox: 'rdo1-1',
          disableCheckbox: 'rdo2-1',
          buttonRadio1: 'rdo3-1',
          buttonRadio2: 'rdo4-1',
          buttonRadio3: 'rdo5-1',
          buttonRadio4: 'rdo6-1',
          buttonRadio5: 'rdo7-1',
          buttonRadio6: 'rdo8-1',
          normalCheckbox11: false,
          normalCheckbox12: false,
          normalCheckbox13: false
        }
      },

      methods:{

      },

      mounted(){

      }
    }
</script>

<style scoped>
  .first-title{
    font-size:22px;
    font-weight:normal;
    margin:30px 0px 15px 0px;
    color:#333333;
  }
  .module-spacing{
    margin-top: 15px;
  }
  .module-main{
    border:1px solid #EEEEEE;
  }
  .module-main:hover{
    box-shadow:0 0 5px rgba(0,0,0,0.1);
  }
  .module-content{
    padding:15px;
  }
  .module-code{
    padding:12px;
    background-color: #f9f9f9;
    border-top:1px solid #EEEEEE;
  }
  .module-fold{
    padding:12px;
    text-align:center;
    cursor:pointer;
    background-color:#FFFFFF;
    border-top:1px solid #EEEEEE;
    color:#999999;
  }
  .module-fold:hover{
    background-color:#fcfcfc;
  }
</style>
