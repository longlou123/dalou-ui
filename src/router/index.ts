import {createRouter, createWebHashHistory} from "vue-router";

const hashRouter = createWebHashHistory()

const Home = ()=>import("@/views/home.vue")
const Doc = ()=>import("@/views/indexDoc.vue")
const Fast = ()=>import("@/views/fastDoc.vue")
const Use = ()=>import("@/views/useDoc.vue")
const Introduce = ()=>import("@/views/introduceDoc.vue")
const Button = ()=>import("@/views/buttonDoc.vue")
const Switch = ()=>import("@/views/switchDoc.vue")
const Modal = ()=>import("@/views/modalDoc.vue")
const Tab = ()=>import("@/views/tabDoc.vue")
const Accordion = ()=>import("@/views/accordionDoc.vue")
const Message = ()=>import("@/views/messageDoc.vue")
const Dialog = ()=>import("@/views/dialogDoc.vue")


const router = createRouter( {
  history: hashRouter,
  linkActiveClass:'link-active',
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: 'introduce', component: Introduce},
        {path: 'fast', component: Fast},
        {path: 'use', component: Use},
        {path: 'tab', component: Tab, meta: { name: 'tab组件' }},
        {path: 'switch', component: Switch, meta: { name: 'switch组件' }},
        {path: 'button', component: Button, meta: { name: 'button组件' }},
        {path: 'modal', component: Modal, meta: { name: 'modal组件' }},
        {path: 'accordion', component: Accordion, meta: { name: 'accordion组件' }},
        {path: 'message', component: Message, meta: { name: 'message组件' }},
        {path: 'dialog', component: Dialog, meta: { name: 'dialog组件' }}
      ]
    }
  ]
})

export {
  router
}
