export default {
    name: "TheThumbnailComponent",

    props: ["piece"],

    data: function() {
        return {
            showingLightbox: false
        }
    },

    template: `
    <div class="model-thumbs">
                <div class="model"  @click="showmydata">
                    <img :src='"./dist/" + piece.image' alt="piece.car">
                    <h3>{{piece.car}}</h3>
                    <p>View Details</p>
                    <i class="fas fa-chevron-down arrow-model"  ref="arrowdown"></i>
                </div>
            </div>
    `,

    methods: {
        showmydata() {
            document.querySelectorAll('.arrow-model').forEach(arrow => arrow.classList.remove('arrow-model-open'));
            // this.showingLightbox = true;
            
            if(!this.showingLightbox) {
                this.$emit("showdata", this.piece);
                this.showingLightbox = true;
                
                this.$refs.arrowdown.classList.add('arrow-model-open');

            } else {
                
                this.$emit("hidedata");
                this.showingLightbox = false;
                document.querySelectorAll('.arrow-model').forEach(arrow => arrow.classList.remove('arrow-model-open'));
                // this.$refs.arrowdown.classList.remove('arrow-model-open');
            }
            
            // document.querySelectorAll('.arrow-model').forEach(arrow => arrow.classList.remove('arrow-model-open'));
            
        }
    }
}