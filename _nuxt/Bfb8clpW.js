import{_ as g,c as p,o as n,a as r,cs as o,d as _,r as V,E as y,av as h,q as t,l,v as s,s as d,I as z,b as a}from"./BSGE5GTI.js";import{_ as w}from"./WAjyPY6E.js";import{s as x}from"./x_rD_Ya3.js";import{V as $,a as m}from"./BA1Q-Lks.js";import"./LzEi4rQ3.js";import"./D77b0ex7.js";import"./CNo6l2ZD.js";import"./DF6IzxTq.js";import"./CnJXHhAe.js";/* empty css        */const I={},B={class:"demo-space-x"};function D(u,i){return n(),p("div",B,[r(o,{"model-value":"50",color:"primary"}),r(o,{"model-value":"50",color:"secondary"}),r(o,{"model-value":"50",color:"success"}),r(o,{"model-value":"50",color:"info"}),r(o,{"model-value":"50",color:"warning"}),r(o,{"model-value":"50",color:"error"})])}const j=g(I,[["render",D]]),R={},U={class:"demo-space-x"};function b(u,i){return n(),p("div",U,[r(o,{indeterminate:"",color:"primary"}),r(o,{indeterminate:"",color:"secondary"}),r(o,{indeterminate:"",color:"success"}),r(o,{indeterminate:"",color:"info"}),r(o,{indeterminate:"",color:"warning"}),r(o,{indeterminate:"",color:"error"})])}const k=g(R,[["render",b]]),M={class:"demo-space-x"},N=_({__name:"DemoProgressCircularRotate",setup(u){const i=V(),e=V(0);return y(()=>{i.value=x(()=>{if(e.value===100)return e.value=0;e.value+=10},1e3)}),h(()=>{clearInterval(i.value)}),(v,c)=>(n(),p("div",M,[r(o,{rotate:360,size:70,width:6,"model-value":t(e),color:"primary"},{default:l(()=>[s(d(t(e)),1)]),_:1},8,["model-value"]),r(o,{rotate:90,size:70,width:6,"model-value":t(e),color:"primary"},{default:l(()=>[s(d(t(e)),1)]),_:1},8,["model-value"]),r(o,{rotate:170,size:70,width:6,"model-value":t(e),color:"primary"},{default:l(()=>[s(d(t(e)),1)]),_:1},8,["model-value"]),r(o,{rotate:-90,size:70,width:6,"model-value":t(e),color:"primary"},{default:l(()=>[s(d(t(e)),1)]),_:1},8,["model-value"])]))}}),S={},T={class:"demo-space-x"};function A(u,i){return n(),p("div",T,[r(o,{size:30,width:"3",color:"primary",indeterminate:""}),r(o,{size:40,color:"primary",indeterminate:""}),r(o,{size:50,color:"primary",indeterminate:""}),r(o,{size:60,color:"primary",indeterminate:""})])}const E=g(S,[["render",A]]),q={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`},F={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`},G={ts:`<script setup lang="ts">
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`,js:`<script setup>
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`},H={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`},er=_({__name:"progress-circular",setup(u){return(i,e)=>{const v=j,c=w,C=k,P=N,f=E;return n(),z($,{class:"match-height"},{default:l(()=>[r(m,{cols:"12",md:"6"},{default:l(()=>[r(c,{title:"color",code:q},{default:l(()=>[e[0]||(e[0]=a("p",null,[s("Alternate colors can be applied to "),a("code",null,"v-progress-circular"),s(" using the "),a("code",null,"color"),s(" prop.")],-1)),r(v)]),_:1},8,["code"])]),_:1}),r(m,{cols:"12",md:"6"},{default:l(()=>[r(c,{title:"Indeterminate",code:F},{default:l(()=>[e[1]||(e[1]=a("p",null,[s("Using the "),a("code",null,"indeterminate"),s(" prop, a "),a("code",null,"v-progress-circular"),s(" continues to animate indefinitely.")],-1)),r(C)]),_:1},8,["code"])]),_:1}),r(m,{cols:"12",md:"6"},{default:l(()=>[r(c,{title:"Rotate",code:G},{default:l(()=>[e[2]||(e[2]=a("p",null,[s("The "),a("code",null,"rotate"),s(" prop gives you the ability to customize the "),a("code",null,"v-progress-circular"),s("'s origin.")],-1)),r(P)]),_:1},8,["code"])]),_:1}),r(m,{cols:"12",md:"6"},{default:l(()=>[r(c,{title:"Size",code:H},{default:l(()=>[e[3]||(e[3]=a("p",null,[s("The "),a("code",null,"size"),s(" and "),a("code",null,"width"),s(" props allow you to easily alter the size and width of the "),a("code",null,"v-progress-circular"),s(" component.")],-1)),r(f)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{er as default};
