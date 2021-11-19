export default {
    name: "TheLightboxComponent",
    props: ["piece"],

    template: `
    <section class="lightbox-wrapper">
    <i class="fas fa-grip-lines" id="close-btn" @click="closeMe"></i>
            <div class="lightbox-outter">
                <div class="car">
                    <img :src='"./dist/" + piece.image' alt="Mini Cooper">
                    <h3>{{piece.car_complete}}</h3>
                    <p>All Inclusive Price: $ {{piece.price}}</p>

                    <div class="book-btn">Book a test drive <i class="fas fa-chevron-right"></i>
                    </div>
                </div>


                <div class="leases">
                    <div class="lease">
                        <h3 class="title-leases">Lease</h3>

                        <div class="lease-box">
                            <h4>Rate starting from</h4>
                            <h3>{{piece.lease_rate}}%</h3>
                            <h5>48 months</h5>
                        </div>

                        <div class="lease-box">
                            <h4>Monthly payment starting from</h4>
                            <h3>{{piece.lease_monthly}}</h3>
                            <h5>48 months</h5>
                        </div>
                    </div>

                    <div class="lease">
                        <h3 class="title-leases">Finance</h3>

                        <div class="lease-box">
                            <h4>Rate starting from</h4>
                            <h3>{{piece.finance_rate}}%</h3>
                            <h5>48 months</h5>
                        </div>

                        <div class="lease-box">
                            <h4>Monthly payment starting from</h4>
                            <h3>{{piece.finance_monthly}}</h3>
                            <h5>48 months</h5>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>

    `,
    methods: {
        closeMe() {
            // we can still write plain old JS to control stuff

            // document.querySelector('.lightbox').classList.remove('visible');
            this.$emit("closelb");
        }
    }
    }
