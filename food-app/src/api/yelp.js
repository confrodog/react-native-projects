import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer fyDXZTAYRKM22gUCS89y3WAy4n7sC0r7dKFiIX7lsyE30xCSl4hTpjKywS-qz6XhdNZYZkf8_7d5-7Xf2_r9RCCxgA0iU-dnkui5-4MPCEhdYvIF89P54cAD224yXnYx"
  }
});
