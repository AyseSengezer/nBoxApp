import Vuex from "vuex"
import axios from "axios"

const createStore = ()=> {
    return new Vuex.Store({

        state : {
            fetchedPosts : []
        },
        mutations : {
            setPosts(state, posts){
                state.fetchedPosts = posts
            },
            addPost(state, post){
                state.fetchedPosts.push(post)
            },
            updatePost(state,post){}
        },
        actions : {
            nuxtServerInit(vuexContext, context){
                return axios.get("https://haber-17593.firebaseio.com/haberposts.json")
                    .then(response => {
                        let data = response.data
                        let postArray =  []
                        for(let key in data){
                            postArray.push({ id : key, ...data[key]})
                        }
                        vuexContext.commit("setPosts", postArray)
                    })
                    
            }

        },
        getters : {
            getPosts(state){
                return state.fetchedPosts
            }
        }

    })

}
export default createStore