import{V as u}from"./TnX_cM-C.js";import{d as v,r as p,I as _,q as d,y as m,o as g,_ as C,c as V,a as n,l as s,b as o,v as a}from"./BSGE5GTI.js";import{_ as z}from"./WAjyPY6E.js";import{V as S,a as P}from"./BA1Q-Lks.js";import"./LzEi4rQ3.js";import"./D77b0ex7.js";import"./CNo6l2ZD.js";import"./DF6IzxTq.js";import"./CnJXHhAe.js";/* empty css        */const j=v({__name:"DemoPaginationBasic",setup(f){const e=p(1);return(t,l)=>(g(),_(u,{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:5},null,8,["modelValue"]))}}),w=v({__name:"DemoPaginationOutline",setup(f){const e=p(1);return(t,l)=>(g(),_(u,{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),variant:"outlined",length:5},null,8,["modelValue"]))}}),I=v({__name:"DemoPaginationCircle",setup(f){const e=p(1);return(t,l)=>(g(),_(u,{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:5,rounded:"circle"},null,8,["modelValue"]))}}),T=v({__name:"DemoPaginationOutlineCircle",setup(f){const e=p(1);return(t,l)=>(g(),_(u,{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),variant:"outlined",length:5,rounded:"circle"},null,8,["modelValue"]))}}),B={};function E(f,e){return g(),_(u,{length:5,disabled:""})}const O=C(B,[["render",E]]),A=v({__name:"DemoPaginationIcons",setup(f){const e=p(1);return(t,l)=>(g(),_(u,{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:5,"prev-icon":"tabler-caret-left","next-icon":"tabler-caret-right"},null,8,["modelValue"]))}}),k=v({__name:"DemoPaginationLength",setup(f){const e=p(1);return(t,l)=>(g(),_(u,{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:15},null,8,["modelValue"]))}}),L=v({__name:"DemoPaginationTotalVisible",setup(f){const e=p(1);return(t,l)=>(g(),_(u,{modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:15,"total-visible":t.$vuetify.display.mdAndUp?7:3},null,8,["modelValue","total-visible"]))}}),N={class:"d-flex flex-column gap-6"},R=v({__name:"DemoPaginationColor",setup(f){const e=p(1),t=p(2),l=p(3);return(i,r)=>(g(),V("div",N,[n(u,{modelValue:d(e),"onUpdate:modelValue":r[0]||(r[0]=c=>m(e)?e.value=c:null),length:7,"active-color":"success"},null,8,["modelValue"]),n(u,{modelValue:d(t),"onUpdate:modelValue":r[1]||(r[1]=c=>m(t)?t.value=c:null),length:7,"active-color":"error"},null,8,["modelValue"]),n(u,{modelValue:d(l),"onUpdate:modelValue":r[2]||(r[2]=c=>m(l)?l.value=c:null),length:7,"active-color":"info"},null,8,["modelValue"])]))}}),q={class:"d-flex flex-column gap-6 px-4"},Y=v({__name:"DemoPaginationSize",setup(f){const e=p(1),t=p(2),l=p(3);return(i,r)=>(g(),V("div",q,[n(u,{modelValue:d(e),"onUpdate:modelValue":r[0]||(r[0]=c=>m(e)?e.value=c:null),length:7,size:"small"},null,8,["modelValue"]),n(u,{modelValue:d(t),"onUpdate:modelValue":r[1]||(r[1]=c=>m(t)?t.value=c:null),length:7},null,8,["modelValue"]),n(u,{modelValue:d(l),"onUpdate:modelValue":r[2]||(r[2]=c=>m(l)?l.value=c:null),length:7,"total-visible":i.$vuetify.display.xs?1:7,size:"large"},null,8,["modelValue","total-visible"])]))}}),F={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`},G={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`},H={ts:`<script setup lang="ts">
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`,js:`<script setup>
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`},J={ts:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`,js:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`},K={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="tabler-caret-left"
    next-icon="tabler-caret-right"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="tabler-caret-left"
    next-icon="tabler-caret-right"
  />
</template>
`},M={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`},Q={ts:`<script setup lang="ts">
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
  />
</template>
`},W={ts:`<script setup lang="ts">
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
    rounded="circle"
  />
</template>
`},X={ts:`<script setup lang="ts">
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6 px-4">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      :total-visible="$vuetify.display.xs ? 1 : 7"
      size="large"
    />
  </div>
</template>
`,js:`<script setup>
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6 px-4">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      :total-visible="$vuetify.display.xs ? 1 : 7"
      size="large"
    />
  </div>
</template>
`},Z={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="$vuetify.display.mdAndUp ? 7 : 3"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="$vuetify.display.mdAndUp ? 7 : 3"
  />
</template>
`},ce=v({__name:"pagination",setup(f){return(e,t)=>{const l=j,i=z,r=w,c=I,x=T,h=O,b=A,D=k,U=L,y=R,$=Y;return g(),_(S,{class:"match-height"},{default:s(()=>[n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Basic",code:F},{default:s(()=>[t[0]||(t[0]=o("p",null,[a("The "),o("code",null,"v-pagination"),a(" component is used to separate long sets of data.")],-1)),n(l)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Outline",code:Q},{default:s(()=>[t[1]||(t[1]=o("p",null,[a("The "),o("code",null,"variant='outline'"),a(" prop is used to give outline to pagination item.")],-1)),n(r)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Circle",code:G},{default:s(()=>[t[2]||(t[2]=o("p",null,[a("The "),o("code",null,"rounded"),a(" prop allows you to render pagination buttons with alternative styles.")],-1)),n(c)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Outline Circle",code:W},{default:s(()=>[t[3]||(t[3]=o("p",null,[a("The "),o("code",null,"variant='outline'"),a(" and "),o("code",null,"rounded"),a(" prop is used to give rounded outline to pagination item.")],-1)),n(x)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Disabled",code:J},{default:s(()=>[t[4]||(t[4]=o("p",null,[a("Pagination items can be manually deactivated using the "),o("code",null,"disabled"),a(" prop.")],-1)),n(h)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Icons",code:K},{default:s(()=>[t[5]||(t[5]=o("p",null,[a("Previous and next page icons can be customized with the "),o("code",null,"prev-icon"),a(" and "),o("code",null,"next-icon"),a(" props.")],-1)),n(b)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Length",code:M},{default:s(()=>[t[6]||(t[6]=o("p",null,[a("Using the "),o("code",null,"length"),a(" prop you can set the length of "),o("code",null,"v-pagination"),a(", if the number of page buttons exceeds the parent container, it will truncate the list.")],-1)),n(D)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Total visible",code:Z},{default:s(()=>[t[7]||(t[7]=o("p",null,[a("You can also manually set the maximum number of visible page buttons with the "),o("code",null,"total-visible"),a(" prop.")],-1)),n(U)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Color",code:H},{default:s(()=>[t[8]||(t[8]=o("p",null,[a("Use "),o("code",null,"active-color"),a(" prop for create different color pagination.")],-1)),n(y)]),_:1},8,["code"])]),_:1}),n(P,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Size",code:X},{default:s(()=>[t[9]||(t[9]=o("p",null,[a("Use "),o("code",null,"size"),a(" prop to sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: "),o("strong",null,"x-small"),a(", "),o("strong",null,"small"),a(", "),o("strong",null,"default"),a(", "),o("strong",null,"large"),a(", and "),o("strong",null,"x-large"),a(".")],-1)),n($)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ce as default};
