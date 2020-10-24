Page({
  data:{
    lists:[
      {id:1,text:"我今天干了什么,明天干什么,后天干什么",finished:true},
      {id:2,text:"明天吃泡面",finished:true},
      {id:3,text:"吃火锅",finished:false},
      {id:4,text:"买衣服",finished:false},
      {id:5,text:"我今天干了什么,明天干什么,后天干什么",finished:false},
    ],
    visibleConfirm:false
  },
  confirmCreate(event){
    const content = event.detail
    const todo = [{id:this.data.lists.length +1,text:content,finished:false}]
    const newLists = todo.concat(this.data.lists)
    this.setData({lists:newLists})
    this.hideConfirm()
  },
  destoryTodo(event){
    const index = event.currentTarget.dataset.index
    this.data.lists[index].finished = true
    this.setData({lists:this.data.lists})
  },
  hideConfirm(event){
    this.setData({visibleConfirm:false})
  },
  showConfirm(){
    this.setData({visibleConfirm:true})
  }
})