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
                    title: "Petition site",
                    link: "/petition",
                    stack: ["Javascript", "Node.js", "Handlebars", "PostgreSQL"],
                    description: "A petition site built with NodeJS and Handlebars"
                },
                {
                    title: "Connect 4",
                    link: "/connect4",
                    stack: ["Javascript", "jQuery"],
                    description: "Connect 4 built with jQuery"
                },
                {
                    title: "Table Picking React App",
                    link: "/tablepicking",
                    stack: ["Javascript", "React"],
                    description: "A simple React App that allows users to pick where they want to go for lunch. The app hits the foursquare API and gets 3 options for where to go and then users can vote on which one they want."
                },
                {
                    title: "PWAnderson",
                    link: "/pwanderson",
                    stack: ["Javascript", "Vue", "TailwindCSS", "Nuxt.js", "AWS", "Vuex"],
                    description: "My personal portfolio App is built with serverless-side rendering, Vue.js, Nuxt.js and AWS Lambda"
                }
            ],
            myStack: [
                "Javascript",
                "React",
                "Vue",
                "Node.js",
                "Express",
                "PostgreSQL",
                "MongoDB",
                "Redux",
                "Vuex",
                "Handlebars",
                "jQuery",
                "Socket.io",
                "Redis",
                "Nuxt.js",
                "TailwindCSS",
                "AWS",
                "Bootstrap"
            ]
        },
        mutations: {
            UPDATE_LEFT_LINK: (state, link) => {
                state.leftLink = link;
            },
            UPDATE_RIGHT_LINK: (state, link) => {
                state.rightLink = link;
            }
        },
        actions: {
            getProject(state, payload) {
                for (let i = 0; i < state.state.myProjects.length; i++) {
                    if (state.state.myProjects[i].link.indexOf(payload) > -1) {
                        if (i === 0) {
                            state.commit('UPDATE_RIGHT_LINK', state.state.myProjects[i +1].link);
                            state.commit('UPDATE_LEFT_LINK', "/");
                            return;
                        }
                        if (i === state.state.myProjects.length -1) {
                            state.commit('UPDATE_LEFT_LINK', state.state.myProjects[i -1].link);
                            state.commit('UPDATE_RIGHT_LINK', "/");

                            return;
                        }
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
