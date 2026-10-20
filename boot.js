import {createStore} from './store.js';
const M=window.M=await createStore();
if(M){const script=document.createElement('script');script.src='./app.js';script.onload=()=>M.mount();document.body.append(script)}
