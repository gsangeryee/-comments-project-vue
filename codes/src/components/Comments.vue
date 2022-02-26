<template>
    <div class="message-wrapper" v-for="comment in data" :key="comment.id"> 
        <div class>
            <span class="username">{{comment.username}}</span>&nbsp;&nbsp;&nbsp;
            <time class="btn-sm">Posted on: {{ moment(comment.createdTime).format("ddd MMM DD, YYYY [at] HH:mm a")}}</time>
        </div>
        <div class="media-body">
            <p class="content">
                {{ comment.comment}}
            </p>
            <hr>
            <div class = "reply-wrapper">
                <button @click="addComments(comment.id)" class="btn btn-link btn-sm">Reply</button>
            </div>
            <!--Reply TODO-->
            <div class="editor-contanier" ref="editorContainer"></div>
            
                <textarea 
                    class="form-control" 
                    rows="3"
                    style="display:none"
                    id = "comment.id"
                >
                </textarea>
           
                <button 
                    class="btn btn-primary btn-sm" 
                    @click="addReply()"
                    style="display:none"
                >Submit</button>
                <hr>
            
            <!--Reply End-->
            
            <template v-if="comment.children">
                <comments :data="comment.children"></comments>
            </template>
           
        </div>
    </div>
      
</template>

<script>
import moment from 'moment'
export default {
    name:"comments",
    props:{
        data:{
            type: Array,
            default(){
                return [];
            },
        },
    },
    data(){
        return {
            
        }
    },
    methods:{
        // TODO
        addComments(id){
            
            console.log(id);
        },
        //TODO
        addReply(){
            console.log(this.comment);
        }
    },
    created: function(){
        this.moment = moment;
    },
    computed:{
        currentUser(){
            return this.$store.state.auth.user;
        },
    },
    mounted(){
        if(!this.currentUser){
            this.$router.push('/login');
        }
    }
    
};
</script>

