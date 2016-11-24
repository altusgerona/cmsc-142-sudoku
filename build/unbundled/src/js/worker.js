"use strict";function getRandomInt(r,n){return Math.floor(Math.random()*(n-r)+r)}function generateRange(r){for(var n,e=new Array(r),t=0;t<r;t++){do n=getRandomInt(1,r+1);while(e.indexOf(n)!=-1);e[t]=n}return e}var original_board=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],magic_board=[[1,0,0,0,2,0,0,0,4],[0,2,0,0,0,8,0,1,0],[0,0,3,0,4,0,2,0,0],[0,0,0,4,0,3,0,0,0],[0,1,0,0,5,0,0,4,0],[0,0,0,7,6,9,0,0,0],[0,0,6,0,7,0,8,0,0],[0,9,0,0,8,0,0,7,0],[8,0,7,0,9,0,0,0,6]],four=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],checkBox=function(r,n,e,t){for(var o=r.length,a=Math.sqrt(o),f=Math.floor(n/Math.sqrt(o))*a,i=Math.floor(e/Math.sqrt(o))*a,u=f;u<f+a;u++)for(var c=i;c<i+a;c++)if(t==r[u][c])return!1;return!0},checkRow=function(r,n,e){for(var t=r.length,o=0;o<t;o++)if(r[n][o]==e)return!1;return!0},checkCol=function(r,n,e){for(var t=r.length,o=0;o<t;o++)if(r[o][n]==e)return!1;return!0},checkY=function(r,n,e,t){var o=r.length,a=Math.floor((o-1)/2);if(r.length%2==0)return!0;if(n<a&&n!=e&&n!=o-1-e)return!0;if(n>=a&&e!=a)return!0;for(var f=a;f<o;f++)if(r[f][a]==t)return!1;if(e<=a)for(var f=0;f<a+1;f++)if(r[f][f]==t)return!1;if(e>=a)for(var f=0;f<a+1;f++)if(r[f][o-1-f]==t)return!1;return!0},checkX=function(r,n,e,t){var o=r.length,a=Math.floor((o-1)/2);if(n!=e&&e+n!=o-1)return!0;if(n<=a&&n==e)for(var f=0;f<o;f++)if(r[f][f]==t)return!1;if(n>=a&&n==o-1-e)for(var f=0;f<o;f++)if(r[f][o-1-f]==t)return!1;return!0},checker=function(r,n,e,t,o,a){var f=checkX(r,n,e,t),i=checkY(r,n,e,t),u=checkRow(r,n,t)&&checkCol(r,e,t)&&checkBox(r,n,e,t);return o&&(u=u&&f),a&&r.length%2==1&&(u=u&&i),u},viewBoard=function(r){for(var n=0;n<r.length;n++)console.log(r[n])},generateBoard=function(r,n,e){if(Math.sqrt(r)%1==0){var t=magic_board;if(4==r){var o=solver(four,n,!1);t=oneSolution(o)}else{var o=solver(magic_board,n,e);t=oneSolution(o)}return t}},solver=function(r,n,e){for(var t=r.length,o=r.map(function(r){return r.slice()}),a=0,f=!1,i=0,u=0,c=0,h=[];;){for(;i<t;){for(;u<t;){c=1;var l;if(f){if(f&&i<0)return h;if(0!=r[i][u]||r[i][u]==t){u--,u<0&&(i--,u=t-1);continue}c=o[i][u]+1}if(0==r[i][u]){for(l=c;l<t+1;l++)if(checker(o,i,u,l,n,e)){f=!1,o[i][u]=l;break}l!=t+1?u++:(f=!0,o[i][u]=0,u--,u<0&&(i--,u=t-1))}else u++}u=0,i++}var v=o.map(function(r){return r.slice()});h.push(v),f=!0,a++,i--,u=t-1}},oneSolution=function(r){return r[Math.floor(Math.random()*r.length)]},generatePuzzle=function(r,n){for(var e=0;e<r.length;e++)for(var t=0;t<r.length;t++)getRandomInt(0,100)<n&&(r[e][t]=0);return r};onmessage=function(r){var n=generateBoard(r.data[0],r.data[1],r.data[2]);postMessage(n)};