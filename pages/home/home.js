Page({
  data:{
    lists:[],
    visible:true
  },
  confirm(event){
    let content = event.detail
    console.log(event.detail)
  },
  cancel(event){
    this.setData({visible:false})
  }
})