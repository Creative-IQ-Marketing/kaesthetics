import React from "react";
import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const instagramPosts = [
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop",
    likes: "245",
    comments: "12",
    link: "https://www.instagram.com/p/C-example1/",
  },
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600&auto=format&fit=crop",
    likes: "189",
    comments: "8",
    link: "https://www.instagram.com/p/C-example2/",
  },
  {
    src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop",
    likes: "312",
    comments: "24",
    link: "https://www.instagram.com/p/C-example3/",
  },
  {
    src: "https://images.unsplash.com/photo-1601616548918-8e466c96cf73?q=80&w=600&auto=format&fit=crop",
    likes: "156",
    comments: "5",
    link: "https://www.instagram.com/p/C-example4/",
  },
];

const HomeInstagram = () => {
  return (
    <section className="py-24 md:py-32 bg-[#fff] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ka-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-ka-accent uppercase tracking-[0.2em] text-sm font-bold flex items-center gap-2 mb-3">
              <Instagram className="w-4 h-4" />
              Follow Our Journey
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-ka-primary leading-tight">
              @k_aestheticskin
            </h2>
            <p className="text-gray-500 mt-4 max-w-md">
              Join our community of glowing skin enthusiasts. Follow us for
              daily skincare tips, treatment behind-the-scenes, and exclusive
              offers.
            </p>
          </motion.div>

          <motion.a
            href="https://www.instagram.com/k_aestheticskin/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 px-6 py-3 bg-ka-primary text-white rounded-full hover:bg-ka-accent transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-medium">Follow on Instagram</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/k_aestheticskin/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden group rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={post.src}
                alt={`K-Aesthetic Skin Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ka-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 text-white backdrop-blur-[2px]">
                <Instagram className="w-8 h-8" />
                <div className="flex gap-5 text-sm font-medium">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 fill-white" /> {post.likes}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 fill-white" />{" "}
                    {post.comments}
                  </div>
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold mt-2 border-b border-white pb-0.5">
                  View Post
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeInstagram;
