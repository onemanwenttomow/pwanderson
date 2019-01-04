import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            message: "test",
            leftLink: "/",
            rightLink: "/",
            myProjects: [
                {
                    title: "Authors In Town",
                    link: "/authorsintown",
                    stack: ["Javascript", "React", "Redux", "PostgreSQL", "Redis", "Node.js", "Express", "AWS"],
                    description: "Users sign up, link their goodreads account to find their favourite authors and then are shown author events near them."
                },
                {
                    title: "TartanBored",
                    link: "/tartanbored",
                    stack: ["Javascript", "Vue", "PostgreSQL", "Node.js", "Express", "AWS"],
                    description: "A website where users can upload tartans, comment and search by tag. Built in Vue.js"
                },
                {
                    title: "DizzyFrinks Social Network",
                    link: "/dizzyfrinks",
                    stack: ["Javascript", "React", "Redux", "PostgreSQL","AWS", "Socket.io"],
                    description: "A social network for the website DizzyFrinks.com built with React, Redux and Socket.io"
                },
                {
                    title: "PWAnderson",
                    link: "/pwanderson",
                    stack: ["Javascript", "Vue", "TailwindCSS", "Nuxt.js","AWS"],
                    description: "My personal portfolio App is built with serverless-side rendering, Vue.js, Nuxt.js and AWS Lambda"
                }
            ],
        },
        mutations: {
            UPDATE_LEFT_LINK: (state, link) => {
                console.log("left link update mutation!", link);
                state.leftLink = link;
            },
            UPDATE_RIGHT_LINK: (state, link) => {
                console.log("right link update mutation!", link);

                state.rightLink = link;
            }
        },
        actions: {
            getProject(state, payload) {
                console.log("payload: ", payload);
                for (let i = 0; i < state.state.myProjects.length; i++) {
                    // console.log(state.state.myProjects[i].link);
                    if (state.state.myProjects[i].link.indexOf(payload) > -1) {
                        console.log(state.state.myProjects[i].link);
                        if (i === 0) {
                            console.log("no left match!");
                            console.log("rightlink: ", state.state.myProjects[i +1].link);
                            state.commit('UPDATE_RIGHT_LINK', state.state.myProjects[i +1].link);
                            state.commit('UPDATE_LEFT_LINK', "/");

                            return;
                        }
                        if (i === state.state.myProjects.length -1) {
                            console.log("no right match!");
                            console.log("leftlink: ", state.state.myProjects[i -1].link);
                            state.commit('UPDATE_LEFT_LINK', state.state.myProjects[i -1].link);
                            state.commit('UPDATE_RIGHT_LINK', "/");

                            return;
                        }
                        console.log("leftlink: ", state.state.myProjects[i -1].link);
                        console.log("rightlink: ", state.state.myProjects[i +1].link);
                        state.commit('UPDATE_RIGHT_LINK', state.state.myProjects[i +1].link);
                        state.commit('UPDATE_LEFT_LINK', state.state.myProjects[i -1].link);

                    }
                }
            }
        },
        getters: {

        }
    });
};

export default createStore;
