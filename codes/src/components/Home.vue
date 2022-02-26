<template>
  <div class="container">
    <!--Comments-->
    <section id="comments">
          <h2>Comments System</h2>
          <div>
            <comments :data="comments"></comments>
          </div>
          <form>
            <div class="form-group">
              <label for="comment-body">New Comment:</label>
              <textarea 
                name="comment" 
                id="commennt" 
                class="form-control" 
                cols="30" 
                rows="5" 
                placeholder="Write your comment here. Maximum 200 characters."
                v-model="comment"
                @input="commentInput"
                >
                </textarea>
                <span>{{remnant}}/200</span>
            </div>
            <button @click="addComments" type="submit" class="btn btn-primary">Submit</button>
          </form>
    
        </section>
    <!--   
    <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p>
      <strong>UserId:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
    </ul>--> 
  </div>
 
</template>

<script>
import CommentService from '../services/comment.service.js';
import comments from '../components/Comments.vue';
import axios from 'axios';
export default {
  name: 'Home',
  components: {
    comments
  },
  data() {
    return {
      comments: CommentService.getComments()
        .then(response => {
          this.comments = response.data
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        }),
      remnant:200,
    }
  },
  methods: {
    addComments(){
      var data = {
        username: this.$store.state.auth.user.username,
        comment: this.comment,
        parentId: 0
      };
      axios.post('http://localhost:8080/api/comments/new', data)
        .then(response => {
          console.log(response);
        }).catch(e => {
          console.log(e);
        });
    },
    commentInput(){
        this.remnant = 200 - this.comment.length;
    }   
      /*
      CommentService.addComments(data)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });*/
    
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>