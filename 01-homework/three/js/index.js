var width=document.getElementById('rectangle-width');
var height=document.getElementById('rectangle-height');
var calc=document.getElementById('rectangle-calc');
var p=document.getElementById('rectangle-perimeter');
var a=document.getElementById('rectangle-area');








calc.onclick=function(){
  var p=document.getElementById('rectangle-perimeter');
  var a=document.getElementById('rectangle-area');
  
  var x=width.value.replace('.','').length-parseFloat(width.value).toFixed(0).length;
  var y=height.value.replace('.','').length-parseFloat(height.value).toFixed(0).length;
  var max=Math.max(x,y);  
  var wz=parseFloat(width.value);
  var hz=parseFloat(height.value);
  var m=10**max;
  p.value=(wz*m+hz*m)*2/m;
  a.value=wz*m*hz*m/(m*m);
  if(!checkw(width.value)||!checkh(height.value)){
    p.value='';
    a.value='';
  }

}

width.onblur=function(){checkw(width);}
height.onblur=function(){checky(height);}

function checkw(){
  var w=document.getElementById('w');
  if(width.value==''){
       w.innerHTML='请输入宽度';
       return false;
      }
  else if(width.value<0){
      w.innerHTML='请输入大于零的数值';
return false;

  }
  else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(width.value)){
    w.innerHTML='请输入数值';
return false;

  } 
  else{
    w.innerHTML='*';
return true;

  }
}

function checky(){
  var h=document.getElementById('h');
  if(height.value=='')
       {
     h.innerHTML='请输入高度';
return false;

    }
 else if(height.value<0){
      h.innerHTML='请输入大于零的数值';
  return false;
}
else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(height.value)){
    h.innerHTML='请输入数值';
  return false;
} 
  else{
    h.innerHTML='*';
return true;

  }
}


