// import React from 'react';

// const Contact = () => {
//     return (
//     <div className="py-12 space-y-8 flex flex-col mb-40">
//       <div className="space-y-4 text-center flex-1">
//         <h1 className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent lg:invisible">
//           Contact
//         </h1>
//         <form action="">
//           <input type="text" name="" id="" className='rounded-md  caret-primary px-2 min-h-12 border border-primary/20' />
//         </form>
//       </div>
//     </div>
//     );
// };

// export default Contact;


import { motion } from "framer-motion";
import { useState } from "react";
import { usePageLoad } from "../context/PageLoadContext";

const Contact = () => {
  const { isPageLoaded } = usePageLoad();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simulation d’envoi :
    setSubmitted(true);

  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="min-h-screen pb-30 flex flex-col items-center justify-center p-8 text-center space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate={isPageLoaded ? "visible" : "hidden"}
      id="contact"
    >
      <motion.h1
        className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent text-3xl font-semibold"
        variants={itemVariants}
      >
        Contactez-moi
      </motion.h1>

      {!submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants} className="text-left">
            <label className="block text-sm text-muted-foreground mb-2">
              Nom
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-border bg-card p-3 text-foreground focus:ring-2 focus:ring-primary outline-none transition"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="text-left">
            <label className="block text-sm text-muted-foreground mb-2">
              Adresse email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-border bg-card p-3 text-foreground focus:ring-2 focus:ring-primary outline-none transition"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="text-left">
            <label className="block text-sm text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full rounded-md border border-border bg-card p-3 text-foreground focus:ring-2 focus:ring-primary outline-none transition resize-none"
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-11 rounded-md px-8 text-primary-foreground bg-primary cursor-pointer hover:bg-primary/90 shadow-[0_0_20px_rgba(0,188,255,0.3)] hover:shadow-[0_0_30px_rgba(0,188,255,0.5)] transition-all"
          >
            Envoyer le message
          </motion.button>
        </motion.form>
      ) : (
        <motion.div
          className="text-primary font-medium mt-8"
          variants={itemVariants}
        >
          ✅ Merci pour votre message !  
          <br />Je vous répondrai très bientôt.
        </motion.div>
      )}
    </motion.section>
  );
};

export default Contact;