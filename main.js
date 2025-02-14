const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description:
        'They go on your feet to keep them warm - often exchanged in large numbers at Christmas.',
      image: './assets/images/socks_green.jpg',
      url: 'https://en.wikipedia.org/wiki/Sock',
      inventory: 6,
      onSale: true,
      cart: 0,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'Green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'Blue', image: './assets/images/socks_blue.jpg' },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    decrementFromCart() {
      this.cart ? (this.cart -= 1) : null;
    },
    emptyCart() {
      this.cart = 0;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
