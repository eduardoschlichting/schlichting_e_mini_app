export default {
    name: "TheThumbnailComponent",

    props: ["piece"],

    template: `
    <div class="model-thumbs">
                <div class="model"  @click="showmydata">
                    <img :src='"./dist/" + piece.image' alt="piece.car">
                    <h3>Mini Cooper</h3>
                    <p>View Details</p>
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
    `,

    methods: {
        showmydata() {
            this.$emit("showdata", this.piece);
        }
    }
}