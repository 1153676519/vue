import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state:{
      car: car
    },
    mutations:{
       addToCar(state, goodsinfo){
         var flag = false
         state.car.some(item => {
             if(item.id == goodsinfo.id){
                 item.count += parseInt(goodsinfo.count)
                 flag = true
                 return true
             }
         })
         if(!flag){
             state.car.push(goodsinfo)
         }
         localStorage.setItem('car', JSON.stringify(state.car))
       },
       updateGoodsInfo(state, goodsinfo){
        state.car.some(item => {
            if(item.id == goodsinfo.id){
                item.count = parseInt(goodsinfo.count)
                return true
            }
        })
        localStorage.setItem('car', JSON.stringify(state.car))
      },
      removeForCar(state, id){
          state.car.some((item, i) => {
            if(item.id == id){
                state.car.splice(i, 1)
                return
            }
          })
          localStorage.setItem('car', JSON.stringify(state.car))
      },
      updateGoodsSelected(state, info){
          state.car.some(item => {
              if(item.id == info.id){
                  item.selected = info.selected
              }
          })
          localStorage.setItem('car', JSON.stringify(state.car))
      }
    },
    getters:{
      getAllCount(state){
          var c = 0;
          state.car.forEach(item => {
              c += item.count
          })
          return c
      },
      getGoodsCount(state){
          var o = {}
          state.car.forEach(item => {
              o[item.id] = item.count
          })
          return o
      },
      getGoodsSelected(state){
          var o = {}
          state.car.forEach(item => {
              o[item.id] = item.selected
          })
          return o
      },
      getGoodsCountAndAmount(state){
          var o = {
              count: 0,
              amount: 0,
          }
          state.car.forEach(item => {
              if(item.selected){
                  o.count += item.count
                  o.amount += item.price * item.count
              }
          })
          return o
      }
    }
})


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.use(MintUI)

import router from './router'

import VueResource from './../node_modules/vue-resource/dist/vue-resource.esm'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON = true;

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import moment from 'moment'
// import { stat } from 'fs';
Vue.filter('dataFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
 return  moment(dataStr).format(pattern)
})








var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store,
    // resource
})