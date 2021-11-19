import { getData } from "./components/TheDataMiner.js";
import TheThumbnail from "./components/TheThumbnail.js";
import TheLightbox from "./components/TheLightbox.js";



(() => {
    const myVue = new Vue({
        created: function() {
            // go fetch the portfolio data here
            getData(null, (data) => this.carsData = data )
        },

        data: {
            // this is storing the database info from our fetch call
            carsData: [],
            isVisible: false,
            currentCarItem: {}
            
        },

        methods: {

            
            popLightbox(item) {
               
                // let portHeader = document.querySelector('.port_title');
                // portHeader.textContent = item.name;
                this.currentCarItem = item;

                // turn the lightbox on
                this.isVisible = true;
            },

            closeLightBox() {
                this.isVisible = false;
            }
        },

        components: {
            thumb: TheThumbnail,
            lightbox: TheLightbox
        }
    }).$mount("#app");

    
    //
})()