Page({
  data:{
    account:"",
    passowrd:"",
    isBinding:true
  },
  watchAccount(event){
    console.log(event)
  },
  watchPassword(event){

  },
  goToSignUp(){
    this.setData({isBinding:false})
  },
  goToBadding(){
    this.setData({isBinding:true})
  }
})