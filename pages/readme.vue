<template>
 <!-- <div> -->
   <div id="dle-content"><form method="post" id="sendmail" name="sendmail" action="">
        <h1>Оставить заявку</h1>
        <div class="baseform">
          <table class="tableform">
          
            <tbody><tr>
              <td class="label">
                Телефон для связи:<span class="impot">*</span>
              </td>
              <td><input type="text" maxlength="35" name="name" class="f_input" v-model="h1" /></td>
            </tr>
            <tr>
              <td class="label">
                Ваш E-Mail:<span class="impot">*</span>
              </td>
              <td><input type="text" maxlength="35" name="email" class="f_input" v-model="title" /></td>
            </tr>
          
            <tr>
              <td class="label">
                Тема:<span class="impot">*</span>
              </td>
              <td><input type="text" maxlength="45" name="subject" class="f_input" v-model="description" /></td>
            </tr>
            <tr>
              <td class="label" valign="top">
                Сообщение:
              </td>
              <td><textarea name="message" style="width: 380px; height: 160px" class="f_textarea"></textarea></td>
            </tr>
            <tr>
              <td class="label">
                Введите код:<span class="impot">*</span>
              </td>
              <td>
                <div><a href="#" title="Кликните на изображение чтобы обновить код, если он неразборчив"><span id="dle-captcha"><img src="../theme/img/antibot.jpg" alt="Кликните на изображение чтобы обновить код, если он неразборчив" width="160" height="80"></span></a></div>
                <div><br><br><input type="text" maxlength="45" name="sec_code" style="width:154px" class="f_input" v-model="url" /></div>
              </td>
            </tr>
            
              
          </tbody></table>
          <div class="fieldsubmit">
            <button name="send_btn" class="fbutton" type="submit" v-on:click="newBlog"><span>Отправить</span></button>
            
          </div>
        </div>
        <!-- <input name="send" type="hidden" value="send" v-model="content" /> -->
        <!-- <input name="send" type="text" value="send" v-model="content" /> -->
        </form>
       
        </div>
    <!-- </div> -->




</template>

<script>
  
import axios from "axios";


export default {
  head: {
    title: 'Написать нам',
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Написать нам"
      }
    ]
  },
  name: 'readme',               
  components: {              
                   
  },
data () {
    return {
    h1: "",
  title: "",
  description: "",
  url: "",
  content: "", 
}
    },

// data: () => ({
//   h1: "",
//   title: "",
//   description: "",
//   url: "",
//   content: "", 

// }),
methods: {
  // newBlog() {
  //   let formData = {
  //     h1: this.h1,
  //     title: this.title,
  //     description: this.description,
  //     url: this.url,
  //     content: this.content
  //   };
  //   axios.post('http://localhost:3000/api/catalog', formData)
  //   console.log("AK")
  // }
}
}



</script>


<style scoped>

 

</style>