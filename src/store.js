import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        blogData: [{
            img: "img1.jpg",
            title: "7 Css tools you should be using",
            description: "Lorem ipsum dolor situnt magni, sed beatae deleniti consequuntur deserunt delectus a animi dolore.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia, atque, quis sequi vitae dolores voluptas totam illum sint minima, nulla voluptatem incidunt deserunt aliquid temporibus harum. Autem explicabo est nisi provident? Deserunt, neque repudiandae saepe doloremque qui delectus libero veniam quisquam impedit perferendis possimus, harum modi eveniet cupiditate consequuntur? Illo placeat non laudantium odit vitae, consequuntur accusantium, cumque officia harum, inventore tempora dolore ducimus nisi aut numquam eligendi ipsa molestiae omnis iste doloribus beatae earum rerum deserunt facere. Molestiae nesciunt harum quibusdam dicta eligendi soluta ipsam non? Voluptates fugiat rem provident nisi error! Ut pariatur esse ea atque? Quisquam nulla consectetur autem. Quae beatae possimus quos? Nam enim ex doloremque accusantium quidem quis repellendus veniam! Delectus nam eius provident, voluptate commodi ducimus sequi placeat maxime tempora vel hic natus? Est dolorum, vel alias ipsa sit delectus optio quos dolor, laborum quo blanditiis esse id, quibusdam eius? Itaque error placeat eaque! Unde qui dignissimos autem sunt nostrum itaque, accusamus, magni illum assumenda recusandae necessitatibus adipisci aperiam molestiae doloribus fugiat reiciendis quod impedit! Totam aliquid voluptatum iusto. Quia error suscipit quasi ducimus aliquam, quos laboriosam magnam, iusto, blanditiis illum culpa repudiandae est dolore quaerat id et? Numquam, tempore pariatur animi, dolor voluptas atque delectus cum cumque quos deleniti commodi, ad id? Iusto, est recusandae repudiandae, tenetur ipsam sapiente at totam ab veritatis illum deserunt debitis tempora consequatur fugiat quas, libero hic voluptate molestiae quae. Numquam ut quo accusantium repellendus rerum illo sed dolores autem, esse corrupti ab? Saepe reiciendis, similique minus quo ut quidem optio rem. Neque beatae est officiis minima quas ab nobis saepe dignissimos accusamus excepturi ducimus tempora dicta maiores hic qui nam rerum exercitationem aliquid eum, alias blanditiis, animi odit facere. Laudantium repudiandae iure accusamus at sequi sunt magnam ipsam vitae autem aut atque cupiditate doloribus, nisi non?",
            user: {
                name: "Giga Chad",
                img: "user.jpg"
            },
            comments: ["Nice one mate!"]
        },
        {
            img: "img2.jpg",
            title: "Adventure in you",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa impedit dolorem accusamus.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia, atque, quis sequi vitae dolores voluptas totam illum sint minima, nulla voluptatem incidunt deserunt aliquid temporibus harum. Autem explicabo est nisi provident? Deserunt, neque repudiandae saepe doloremque qui delectus libero veniam quisquam impedit perferendis possimus, harum modi eveniet cupiditate consequuntur? Illo placeat non laudantium odit vitae, consequuntur accusantium, cumque officia harum, inventore tempora dolore ducimus nisi aut numquam eligendi ipsa molestiae omnis iste doloribus beatae earum rerum deserunt facere. Molestiae nesciunt harum quibusdam dicta eligendi soluta ipsam non? Voluptates fugiat rem provident nisi error! Ut pariatur esse ea atque? Quisquam nulla consectetur autem. Quae beatae possimus quos? Nam enim ex doloremque accusantium quidem quis repellendus veniam! Delectus nam eius provident, voluptate commodi ducimus sequi placeat maxime tempora vel hic natus? Est dolorum, vel alias ipsa sit delectus optio quos dolor, laborum quo blanditiis esse id, quibusdam eius? Itaque error placeat eaque! Unde qui dignissimos autem sunt nostrum itaque, accusamus, magni illum assumenda recusandae necessitatibus adipisci aperiam molestiae doloribus fugiat reiciendis quod impedit! Totam aliquid voluptatum iusto. Quia error suscipit quasi ducimus aliquam, quos laboriosam magnam, iusto, blanditiis illum culpa repudiandae est dolore quaerat id et? Numquam, tempore pariatur animi, dolor voluptas atque delectus cum cumque quos deleniti commodi, ad id? Iusto, est recusandae repudiandae, tenetur ipsam sapiente at totam ab veritatis illum deserunt debitis tempora consequatur fugiat quas, libero hic voluptate molestiae quae. Numquam ut quo accusantium repellendus rerum illo sed dolores autem, esse corrupti ab? Saepe reiciendis, similique minus quo ut quidem optio rem. Neque beatae est officiis minima quas ab nobis saepe dignissimos accusamus excepturi ducimus tempora dicta maiores hic qui nam rerum exercitationem aliquid eum, alias blanditiis, animi odit facere. Laudantium repudiandae iure accusamus at sequi sunt magnam ipsam vitae autem aut atque cupiditate doloribus, nisi non?",
            user: {
                name: "Sarah Drasner",
                img: "user2.jpg"
            },
            comments: ["Nice one mate!"]
        },
        {
            img: "img3.jpg",
            title: "Explore the universe",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa impedit dolorem accusamus.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia, atque, quis sequi vitae dolores voluptas totam illum sint minima, nulla voluptatem incidunt deserunt aliquid temporibus harum. Autem explicabo est nisi provident? Deserunt, neque repudiandae saepe doloremque qui delectus libero veniam quisquam impedit perferendis possimus, harum modi eveniet cupiditate consequuntur? Illo placeat non laudantium odit vitae, consequuntur accusantium, cumque officia harum, inventore tempora dolore ducimus nisi aut numquam eligendi ipsa molestiae omnis iste doloribus beatae earum rerum deserunt facere. Molestiae nesciunt harum quibusdam dicta eligendi soluta ipsam non? Voluptates fugiat rem provident nisi error! Ut pariatur esse ea atque? Quisquam nulla consectetur autem. Quae beatae possimus quos? Nam enim ex doloremque accusantium quidem quis repellendus veniam! Delectus nam eius provident, voluptate commodi ducimus sequi placeat maxime tempora vel hic natus? Est dolorum, vel alias ipsa sit delectus optio quos dolor, laborum quo blanditiis esse id, quibusdam eius? Itaque error placeat eaque! Unde qui dignissimos autem sunt nostrum itaque, accusamus, magni illum assumenda recusandae necessitatibus adipisci aperiam molestiae doloribus fugiat reiciendis quod impedit! Totam aliquid voluptatum iusto. Quia error suscipit quasi ducimus aliquam, quos laboriosam magnam, iusto, blanditiis illum culpa repudiandae est dolore quaerat id et? Numquam, tempore pariatur animi, dolor voluptas atque delectus cum cumque quos deleniti commodi, ad id? Iusto, est recusandae repudiandae, tenetur ipsam sapiente at totam ab veritatis illum deserunt debitis tempora consequatur fugiat quas, libero hic voluptate molestiae quae. Numquam ut quo accusantium repellendus rerum illo sed dolores autem, esse corrupti ab? Saepe reiciendis, similique minus quo ut quidem optio rem. Neque beatae est officiis minima quas ab nobis saepe dignissimos accusamus excepturi ducimus tempora dicta maiores hic qui nam rerum exercitationem aliquid eum, alias blanditiis, animi odit facere. Laudantium repudiandae iure accusamus at sequi sunt magnam ipsam vitae autem aut atque cupiditate doloribus, nisi non?",
            user: {
                name: "Kyle Simpson",
                img: "user3.jpg"
            },
            comments: ["Nice one mate!"]
        },
        {
            img: "img4.jpg",
            title: "How time started",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa impedit dolorem accusamus.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia, atque, quis sequi vitae dolores voluptas totam illum sint minima, nulla voluptatem incidunt deserunt aliquid temporibus harum. Autem explicabo est nisi provident? Deserunt, neque repudiandae saepe doloremque qui delectus libero veniam quisquam impedit perferendis possimus, harum modi eveniet cupiditate consequuntur? Illo placeat non laudantium odit vitae, consequuntur accusantium, cumque officia harum, inventore tempora dolore ducimus nisi aut numquam eligendi ipsa molestiae omnis iste doloribus beatae earum rerum deserunt facere. Molestiae nesciunt harum quibusdam dicta eligendi soluta ipsam non? Voluptates fugiat rem provident nisi error! Ut pariatur esse ea atque? Quisquam nulla consectetur autem. Quae beatae possimus quos? Nam enim ex doloremque accusantium quidem quis repellendus veniam! Delectus nam eius provident, voluptate commodi ducimus sequi placeat maxime tempora vel hic natus? Est dolorum, vel alias ipsa sit delectus optio quos dolor, laborum quo blanditiis esse id, quibusdam eius? Itaque error placeat eaque! Unde qui dignissimos autem sunt nostrum itaque, accusamus, magni illum assumenda recusandae necessitatibus adipisci aperiam molestiae doloribus fugiat reiciendis quod impedit! Totam aliquid voluptatum iusto. Quia error suscipit quasi ducimus aliquam, quos laboriosam magnam, iusto, blanditiis illum culpa repudiandae est dolore quaerat id et? Numquam, tempore pariatur animi, dolor voluptas atque delectus cum cumque quos deleniti commodi, ad id? Iusto, est recusandae repudiandae, tenetur ipsam sapiente at totam ab veritatis illum deserunt debitis tempora consequatur fugiat quas, libero hic voluptate molestiae quae. Numquam ut quo accusantium repellendus rerum illo sed dolores autem, esse corrupti ab? Saepe reiciendis, similique minus quo ut quidem optio rem. Neque beatae est officiis minima quas ab nobis saepe dignissimos accusamus excepturi ducimus tempora dicta maiores hic qui nam rerum exercitationem aliquid eum, alias blanditiis, animi odit facere. Laudantium repudiandae iure accusamus at sequi sunt magnam ipsam vitae autem aut atque cupiditate doloribus, nisi non?",
            user: {
                name: "Brad Pitt",
                img: "user4.jpg"
            },
            comments: ["Nice one mate!"]
        },
        {
            img: "img5.jpg",
            title: "The final border",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa impedit dolorem accusamus.",
            content: "Hello there this is content",
            user: {
                name: "Eva Green",
                img: "user5.jpg"
            },
            comments: ["Nice one mate!"]
        },
        {
            img: "img6.jpg",
            title: "Gold apocalypse",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa impedit dolorem accusamus.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia, atque, quis sequi vitae dolores voluptas totam illum sint minima, nulla voluptatem incidunt deserunt aliquid temporibus harum. Autem explicabo est nisi provident? Deserunt, neque repudiandae saepe doloremque qui delectus libero veniam quisquam impedit perferendis possimus, harum modi eveniet cupiditate consequuntur? Illo placeat non laudantium odit vitae, consequuntur accusantium, cumque officia harum, inventore tempora dolore ducimus nisi aut numquam eligendi ipsa molestiae omnis iste doloribus beatae earum rerum deserunt facere. Molestiae nesciunt harum quibusdam dicta eligendi soluta ipsam non? Voluptates fugiat rem provident nisi error! Ut pariatur esse ea atque? Quisquam nulla consectetur autem. Quae beatae possimus quos? Nam enim ex doloremque accusantium quidem quis repellendus veniam! Delectus nam eius provident, voluptate commodi ducimus sequi placeat maxime tempora vel hic natus? Est dolorum, vel alias ipsa sit delectus optio quos dolor, laborum quo blanditiis esse id, quibusdam eius? Itaque error placeat eaque! Unde qui dignissimos autem sunt nostrum itaque, accusamus, magni illum assumenda recusandae necessitatibus adipisci aperiam molestiae doloribus fugiat reiciendis quod impedit! Totam aliquid voluptatum iusto. Quia error suscipit quasi ducimus aliquam, quos laboriosam magnam, iusto, blanditiis illum culpa repudiandae est dolore quaerat id et? Numquam, tempore pariatur animi, dolor voluptas atque delectus cum cumque quos deleniti commodi, ad id? Iusto, est recusandae repudiandae, tenetur ipsam sapiente at totam ab veritatis illum deserunt debitis tempora consequatur fugiat quas, libero hic voluptate molestiae quae. Numquam ut quo accusantium repellendus rerum illo sed dolores autem, esse corrupti ab? Saepe reiciendis, similique minus quo ut quidem optio rem. Neque beatae est officiis minima quas ab nobis saepe dignissimos accusamus excepturi ducimus tempora dicta maiores hic qui nam rerum exercitationem aliquid eum, alias blanditiis, animi odit facere. Laudantium repudiandae iure accusamus at sequi sunt magnam ipsam vitae autem aut atque cupiditate doloribus, nisi non?",
            user: {
                name: "Casey Neistat",
                img: "user6.jpg"
            },
            comments: ["Nice one mate!"]
        },
        {
            img: "img7.jpg",
            title: "Gold apocalypse",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa impedit dolorem accusamus.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia, atque, quis sequi vitae dolores voluptas totam illum sint minima, nulla voluptatem incidunt deserunt aliquid temporibus harum. Autem explicabo est nisi provident? Deserunt, neque repudiandae saepe doloremque qui delectus libero veniam quisquam impedit perferendis possimus, harum modi eveniet cupiditate consequuntur? Illo placeat non laudantium odit vitae, consequuntur accusantium, cumque officia harum, inventore tempora dolore ducimus nisi aut numquam eligendi ipsa molestiae omnis iste doloribus beatae earum rerum deserunt facere. Molestiae nesciunt harum quibusdam dicta eligendi soluta ipsam non? Voluptates fugiat rem provident nisi error! Ut pariatur esse ea atque? Quisquam nulla consectetur autem. Quae beatae possimus quos? Nam enim ex doloremque accusantium quidem quis repellendus veniam! Delectus nam eius provident, voluptate commodi ducimus sequi placeat maxime tempora vel hic natus? Est dolorum, vel alias ipsa sit delectus optio quos dolor, laborum quo blanditiis esse id, quibusdam eius? Itaque error placeat eaque! Unde qui dignissimos autem sunt nostrum itaque, accusamus, magni illum assumenda recusandae necessitatibus adipisci aperiam molestiae doloribus fugiat reiciendis quod impedit! Totam aliquid voluptatum iusto. Quia error suscipit quasi ducimus aliquam, quos laboriosam magnam, iusto, blanditiis illum culpa repudiandae est dolore quaerat id et? Numquam, tempore pariatur animi, dolor voluptas atque delectus cum cumque quos deleniti commodi, ad id? Iusto, est recusandae repudiandae, tenetur ipsam sapiente at totam ab veritatis illum deserunt debitis tempora consequatur fugiat quas, libero hic voluptate molestiae quae. Numquam ut quo accusantium repellendus rerum illo sed dolores autem, esse corrupti ab? Saepe reiciendis, similique minus quo ut quidem optio rem. Neque beatae est officiis minima quas ab nobis saepe dignissimos accusamus excepturi ducimus tempora dicta maiores hic qui nam rerum exercitationem aliquid eum, alias blanditiis, animi odit facere. Laudantium repudiandae iure accusamus at sequi sunt magnam ipsam vitae autem aut atque cupiditate doloribus, nisi non?",
            user: {
                name: "Neil deGrasse Tyson",
                img: "user7.jpg"
            },
            comments: ["Nice one mate!"]
        },
    ],
    searchedBlog: '',
    selectedBlog: '',
    },
    getters: {
        
    },
    mutations: { 
        M(state, search){
            state.searchedBlog = search
        },
        CLICKED_BLOG(state, d){
            state.selectedBlog = d
        },
        ADD_COMMENT(state, comment){
            state.blogData.map(e =>{
                e.title == state.selectedBlog && e.comments.push(comment)
            })
        },
        EMPTY_SELECTED_BLOG(state){
            state.selectedBlog = ''
        }

    },
    actions: {
        s({commit}, search){
            commit('M', search)
        },
        clickedBlog({commit}, d){
            commit('CLICKED_BLOG', d)
        },
        addComment({commit}, comment){
            commit('ADD_COMMENT', comment)
        },
        emptySelectedBlog({commit}){
            commit('EMPTY_SELECTED_BLOG')
        }

    }
})
