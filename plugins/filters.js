// import Vue from 'vue'

// Vue.filter('capitalize', function(value) {
//     if (!value) return ''
//     value = value.toString()
//     return value.charAt(0).toUpperCase() + value.slice(1)
// })
// Vue.filter('formatNumber', function(value) {
//     if (!value) return ''
//     value = parseFloat(value)
//     // return `${value >= 0 ? (value === 0 ? '' : '+') : '-'}${Intl.NumberFormat('en-US').format(value.toFixed(2))}`
//     return `${Intl.NumberFormat('en-US').format(value.toFixed(2))}`
// })
// Vue.filter('floorCurrency',function(amount, predict=2){
//   var fix = Number.parseFloat(amount).toFixed(predict);
//   if(fix > Number.parseFloat(amount)){
//     fix -= Number("1e-" + predict);
//   }
//   return Intl.NumberFormat("en-US",{style:'decimal',minimumFractionDigits:predict}).format(fix)
// })
// Vue.filter('maxCurency',function(amount, predict=2){
//   var fix = Number.parseFloat(amount).toFixed(predict);
//   if(fix < Number.parseFloat(amount)){
//     fix += Number("1e-" + predict);
//   }
//   return Intl.NumberFormat("en-US",{style:'decimal',minimumFractionDigits:predict}).format(fix)
// })
// Vue.filter('hiddenEmail',function(email){
//   const parts = email.split('@');
//   var r =parts[0].charAt(0) + parts[0].charAt(1) + '***';
//   const length = parts[0].length;
//   if(length > 4){
//     r+= parts[0].charAt(length-2) + parts[0].charAt(length-1);
//   }
//   const dot = parts[1].split('.');
//   return r + '@***.' + dot[dot.length-1];
// })
