var Body = {
  SetColor:function (color){
    document.querySelector('body').style.color = color;
  } ,
  SetBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }

}
  function NightDayHandler(self){
    var target = document.querySelector('body')
    if(self.value === 'night') {
      Body.SetBackgroundColor('black');
      Body.SetColor('white');
      self.value = 'day';
    }

    else {
      Body.SetBackgroundColor('white');
      Body.SetColor('black');
      self.value = 'night';
    }
  }
