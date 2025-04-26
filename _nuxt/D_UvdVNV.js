import{_,c as g,o as c,a as e,a0 as s,d as y,r as f,E as k,av as x,w as $,q as v,y as V,I as L,l as t,b as o,s as P,v as l}from"./BSGE5GTI.js";import{_ as M}from"./WAjyPY6E.js";import{s as I}from"./x_rD_Ya3.js";import{V as D,a as p}from"./BA1Q-Lks.js";import"./LzEi4rQ3.js";import"./D77b0ex7.js";import"./CNo6l2ZD.js";import"./DF6IzxTq.js";import"./CnJXHhAe.js";/* empty css        */const U={},T={class:"demo-space-y"};function j(m,a){return c(),g("div",T,[e(s,{"model-value":"15",color:"primary"}),e(s,{"model-value":"30",color:"secondary"}),e(s,{"model-value":"45",color:"success"})])}const C=_(U,[["render",j]]),R={class:"demo-space-y"},S=y({__name:"DemoProgressLinearBuffering",setup(m){const a=f(10),r=f(20),i=f(),d=()=>{clearInterval(i.value),i.value=I(()=>{a.value+=Math.random()*10+5,r.value+=Math.random()*10+6},2e3)};return k(d),x(()=>{clearInterval(i.value)}),$(a,()=>{if(a.value<100)return!1;a.value=0,r.value=10,d()}),(u,n)=>(c(),g("div",R,[e(s,{modelValue:v(a),"onUpdate:modelValue":n[0]||(n[0]=h=>V(a)?a.value=h:null),color:"primary","buffer-value":v(r)},null,8,["modelValue","buffer-value"])]))}}),N={};function E(m,a){return c(),L(s,{indeterminate:"",color:"primary"})}const Y=_(N,[["render",E]]),q={};function A(m,a){return c(),L(s,{color:"primary",indeterminate:"",reverse:""})}const z=_(q,[["render",A]]),F={},G={class:"demo-space-y"};function H(m,a){return c(),g("div",G,[e(s,{"model-value":"78",height:"8",color:"primary",rounded:!1}),e(s,{"model-value":"20",color:"primary",height:"20",rounded:!1}),e(s,{"model-value":"33",height:"20",color:"primary",rounded:!1})])}const J=_(F,[["render",H]]),K={class:"demo-space-y"},O=y({__name:"DemoProgressLinearSlots",setup(m){const a=f(20),r=f(33),i=f(78);return(d,u)=>(c(),g("div",K,[e(s,{modelValue:v(i),"onUpdate:modelValue":u[0]||(u[0]=n=>V(i)?i.value=n:null),color:"primary",height:"8"},null,8,["modelValue"]),e(s,{modelValue:v(a),"onUpdate:modelValue":u[1]||(u[1]=n=>V(a)?a.value=n:null),color:"primary",height:"20"},{default:t(({value:n})=>[o("span",null,P(Math.ceil(n))+"%",1)]),_:1},8,["modelValue"]),e(s,{modelValue:v(r),"onUpdate:modelValue":u[2]||(u[2]=n=>V(r)?r.value=n:null),height:"20",color:"primary"},{default:t(()=>[o("span",null,P(Math.ceil(v(r)))+"%",1)]),_:1},8,["modelValue"])]))}}),Q={},W={class:"demo-space-y"};function X(m,a){return c(),g("div",W,[e(s,{color:"rgb(var(--v-theme-primary))","model-value":"75",striped:""}),e(s,{color:"rgb(var(--v-theme-success))","model-value":"55",striped:""}),e(s,{color:"rgb(var(--v-theme-warning))","model-value":"35",striped:""})])}const Z=_(Q,[["render",X]]),ee={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},re={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      color="success"
    />
  </div>
</template>
`},oe={ts:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`},le={ts:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`},ae={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`},te={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`},se={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`},ge=y({__name:"progress-linear",setup(m){return(a,r)=>{const i=C,d=M,u=S,n=Y,h=z,b=J,w=O,B=Z;return c(),L(D,{class:"match-height"},{default:t(()=>[e(p,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Color",code:re},{default:t(()=>[r[0]||(r[0]=o("p",null,[l("Use the props "),o("code",null,"color"),l(" and "),o("code",null,"background-color"),l(" to set colors.")],-1)),e(i)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Buffering",code:ee},{default:t(()=>[r[1]||(r[1]=o("p",null,[l("The primary value is controlled by "),o("code",null,"v-model"),l(", whereas the buffer is controlled by the "),o("code",null,"buffer-value"),l(" prop.")],-1)),e(u)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Indeterminate",code:oe},{default:t(()=>[r[2]||(r[2]=o("p",null,[l("for continuously animating progress bar,use prop "),o("code",null,"indeterminate"),l(". This indicates continuous process. ")],-1)),e(n)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Reversed",code:le},{default:t(()=>[r[3]||(r[3]=o("p",null,[l("Use prop "),o("code",null,"reverse"),l(" to animate continuously in reverse direction. The component also has RTL support.")],-1)),e(h)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Rounded",code:ae},{default:t(()=>[r[4]||(r[4]=o("p",null,[l(" The "),o("code",null," rounded "),l("prop is used to apply a border radius to the v-progress-linear component. By default we have set "),o("code",null,"rounded"),l(" prop true. You can disable it by using "),o("code",null,":rounded='false'"),l(". ")],-1)),e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Slots",code:te},{default:t(()=>[r[5]||(r[5]=o("p",null,[l("The v-progress-linear component will be responsive to user input when using "),o("code",null,"v-model"),l(". You can use the default slot or bind a local model to display inside of the progress.")],-1)),e(w)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(d,{title:"Striped",code:se},{default:t(()=>[r[6]||(r[6]=o("p",null,[l(" The "),o("code",null,"striped"),l(" prop is used to apply striped background.")],-1)),e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ge as default};
