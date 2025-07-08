const restaurants = [
    {
      info: {
        id: "562839",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Kompally 2",
        areaName: "Kompally",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
        totalRatingsString: "4.5K+",
        sla: {
          slaString: "20-25 mins",
        },
      },
    },
    {
      info: {
        id: "123456",
        name: "KFC",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        locality: "City Center",
        areaName: "Downtown",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fried Chicken"],
        avgRating: 4.2,
        totalRatingsString: "2K+",
        sla: {
          slaString: "30-35 mins",
        },
      },
    },
    {
      info: {
        id: "789101",
        name: "Domino's Pizza",
        cloudinaryImageId: "e0vvulfbahjxjz6k4uwi",
        locality: "Hitech City",
        areaName: "Madhapur",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas", "Italian"],
        avgRating: 4.0,
        totalRatingsString: "3K+",
        sla: {
          slaString: "25-30 mins",
        },
      },
    },
    {
      info: {
        id: "998877",
        name: "McDonald's",
        cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
        locality: "Begumpet",
        areaName: "Secunderabad",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "Fast Food"],
        avgRating: 4.3,
        totalRatingsString: "5K+",
        sla: {
          slaString: "15-20 mins",
        },
      },
    },
    {
      info: {
        id: "334455",
        name: "Mehfil",
        cloudinaryImageId: "v7btfi5brrsijry8j02n",
        locality: "Nampally",
        areaName: "Hyderabad Central",
        costForTwo: "₹250 for two",
        cuisines: ["Biryani", "Tandoor", "Chinese"],
        avgRating: 3.9,
        totalRatingsString: "10K+",
        sla: {
          slaString: "20-30 mins",
        },
      },
    },
    
    {
      info: {
        id: "889900",
        name: "Subway",
        cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
        locality: "Jubilee Hills",
        areaName: "Hyderabad",
        costForTwo: "₹250 for two",
        cuisines: ["Healthy Food", "Salads", "Sandwiches"],
        avgRating: 4.1,
        totalRatingsString: "4K+",
        sla: {
          slaString: "20-25 mins",
        },
      },
    },
    
    {
      info: {
        id: "1001",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Kompally 2",
        areaName: "Kompally",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
        totalRatingsString: "4.5K+",
        sla: { slaString: "20-25 mins" },
      },
    },
    {
      info: {
        id: "1002",
        name: "KFC",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        locality: "City Center",
        areaName: "Downtown",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fried Chicken"],
        avgRating: 4.2,
        totalRatingsString: "2K+",
        sla: { slaString: "30-35 mins" },
      },
    },
    {
      info: {
        id: "1003",
        name: "Domino's Pizza",
        cloudinaryImageId: "e0vvulfbahjxjz6k4uwi",
        locality: "Hitech City",
        areaName: "Madhapur",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas", "Italian"],
        avgRating: 4.0,
        totalRatingsString: "3K+",
        sla: { slaString: "25-30 mins" },
      },
    },
    {
      info: {
        id: "1004",
        name: "McDonald's",
        cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
        locality: "Begumpet",
        areaName: "Secunderabad",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "Fast Food"],
        avgRating: 4.3,
        totalRatingsString: "5K+",
        sla: { slaString: "15-20 mins" },
      },
    },

    {
      info: {
        id: "1006",
        name: "Mehfil",
        cloudinaryImageId: "v7btfi5brrsijry8j02n",
        locality: "Nampally",
        areaName: "Hyderabad Central",
        costForTwo: "₹250 for two",
        cuisines: ["Biryani", "Tandoor", "Chinese"],
        avgRating: 3.9,
        totalRatingsString: "10K+",
        sla: { slaString: "20-30 mins" },
      },
    },

    {
      info: {
        id: "1008",
        name: "Subway",
        cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
        locality: "Jubilee Hills",
        areaName: "Hyderabad",
        costForTwo: "₹250 for two",
        cuisines: ["Healthy Food", "Salads", "Sandwiches"],
        avgRating: 4.1,
        totalRatingsString: "4K+",
        sla: { slaString: "20-25 mins" },
      },
    },

    {
      info: {
        id: "1014",
        name: "Faasos - Wraps & Rolls",
        cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
        locality: "Banjara Hills",
        areaName: "Hyderabad",
        costForTwo: "₹300 for two",
        cuisines: ["Wraps", "Rolls", "Snacks"],
        avgRating: 4.0,
        totalRatingsString: "5K+",
        sla: { slaString: "20-25 mins" },
      },
    },

    {
      info: {
        id: "1019",
        name: "Natural Ice Cream",
        cloudinaryImageId: "on12tk5aqza0stxxsqhc",
        locality: "Ameerpet",
        areaName: "Hyderabad",
        costForTwo: "₹180 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.8,
        totalRatingsString: "11K+",
        sla: { slaString: "15 mins" },
      },
    },

    {
  info: {
    id: "1021",
    name: "Barbeque Nation",
    cloudinaryImageId: "n2s1e5w5on0x3vp1igic",
    locality: "Inorbit Mall",
    areaName: "Hitech City",
    costForTwo: "₹800 for two",
    cuisines: ["Barbecue", "Biryani", "Grill"],
    avgRating: 4.3,
    totalRatingsString: "10K+",
    sla: { slaString: "35-40 mins" },
  },

  info: {
    id: "1025",
    name: "Wow! Momo",
    cloudinaryImageId: "0984acc0ed7b914206dbbcb90297becc",
    locality: "Ameerpet",
    areaName: "Hyderabad",
    costForTwo: "₹250 for two",
    cuisines: ["Tibetan", "Momos", "Snacks"],
    avgRating: 4.0,
    totalRatingsString: "5.3K+",
    sla: { slaString: "20 mins" },
  },
  },


  ];


  









export default restaurants;










