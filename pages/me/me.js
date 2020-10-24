Page({
  data:{
    tab:"tomato",
    tomatoes:{
      "本周四":[{id:1,description:"xxxxx",created_at:"12.00"}]
    }
  },
  changeTab(event){
    let name = event.currentTarget.dataset.name
    this.setData({tab:name})
  }
})